import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Input.module.scss';
import classNames from 'classnames';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css'; // for ES6 modules
import MaskedInput from 'react-text-mask';

const DateSelector = ({
  onChange,
  placeholder,
  label,
  showTime,
  onInvalidDate,
  isValidDate,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState(moment(props.value));
  const [error, setError] = useState(props.error);
  const [active, setActive] = useState(props.active);

  const handleChange = (momentDate) => {
    if (!momentDate) {
      setValue(null);
      try {
        onChange(null);
      } catch (err) {
        return;
      }
    } else if (
      momentDate instanceof moment === false ||
      (onInvalidDate && isValidDate && !isValidDate(momentDate))
    ) {
      console.log('not valid');
      try {
        onInvalidDate(momentDate);
      } catch (err) {
        return;
      }
      return;
    }
    // Set value, deserialize and send back
    const value = momentDate;
    setValue(value);
    try {
      onChange(value);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const fieldClassName = classNames(
    Styles.container,
    placeholder && Styles.active,
    ((disabled ? active : active || value) || error || disabled) &&
      Styles.active,
    disabled && !active && Styles.locked
  );

  const renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <React.Fragment>
        <MaskedInput
          mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          keepCharPositions
          {...props}
        />
        <label
          htmlFor={name}
          className={classNames(Styles.label, props.error && Styles.error)}
        >
          {props.error || label}
        </label>
      </React.Fragment>
    );
  };

  return (
    <div className={fieldClassName}>
      <Datetime
        dateFormat='DD/MM/YYYY'
        inputProps={{
          className: classNames(Styles.base, Styles.inputActive),
          placeholder: placeholder || label,
          label: label,
          error: props.error
        }}
        closeOnSelect={true}
        strictParsing
        value={value}
        onChange={handleChange}
        timeFormat={showTime}
        isValidDate={isValidDate}
        renderInput={renderInput}
      />
    </div>
  );
};

DateSelector.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func
  ]),
  required: PropTypes.bool,
  showTime: PropTypes.bool,
  value: PropTypes.string,
  step: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onInvalidDate: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  min: PropTypes.number,
  isValidDate: PropTypes.func,
  viewMode: PropTypes.string,
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isMasked: PropTypes.bool
};

DateSelector.defaultProps = {
  type: 'text',
  step: null,
  max: null,
  showTime: false,
  viewMode: 'days',
  dateFormat: 'DD/MM/YYYY',
  isMasked: true
};

export default DateSelector;
