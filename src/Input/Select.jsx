import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Input.module.scss';
import classNames from 'classnames';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncPaginate from 'react-select-async-paginate';
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  option: (provided, state) => ({
    ...provided
  }),
  input: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  }),
  menu: (styles) => ({
    ...styles,
    margin: '2px 0'
  }),
  placeholder: (styles) => ({
    ...styles
  }),
  control: (styles) => ({
    ...styles,
    boxShadow: 'none',
    ':hover': {
      borderColor: '#a1aab3'
    }
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '2px 15px',
    fontSize: '16px'
  }),
  singleValue: (styles) => ({
    ...styles,
    marginLeft: '0',
    fontSize: '16px'
  })
};

const SelectInput = ({
  disabled,
  name,
  className,
  label,
  onChange,
  classNamePrefix,
  ...props
}) => {
  const [value, setValue] = useState(props.value || props.defaultValue);
  const containerClass = classNames(
    Styles.container,
    className,
    props.isMulti && value?.length && Styles.active,
    !props.isMulti && Object.keys(value || {}).length && Styles.active,
    disabled && Styles.locked,
    props.error && Styles.containerError,
    props.isMulti && Styles.multiContainer
  );

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const fieldClass = classNames(
    Styles.select,
    props.isMulti && Styles.multi,
    props.error && Styles.error
  );

  const labelClass = classNames(
    Styles.label,
    props.error && Styles.error,
    props.isMulti && value?.length && Styles.hasValue,
    !props.isMulti && Object.keys(value || {}).length && Styles.hasValue
  );

  const handleChange = (event, { action, name }) => {
    setValue(event);
    // Pass any other change events from parent
    try {
      onChange({ ...event, target: { name, value: event }, action });
    } catch (err) {}
  };

  const CustomSelect = props.isPaginated
    ? AsyncPaginate
    : props.isAsync
    ? AsyncSelect
    : Select;
  const SelectComponent = props.isCreatable ? CreatableSelect : Select;
  return (
    <div className={containerClass}>
      <CustomSelect
        className={fieldClass}
        styles={customStyles}
        name={name}
        placeholder={label}
        selectValue={value}
        defaultValue={value}
        onChange={handleChange}
        additional={{ page: 1 }}
        SelectComponent={SelectComponent}
        createOptionPosition='first'
        isDisabled={disabled}
        classNamePrefix={classNamePrefix}
        closeMenuOnSelect={!props.isMulti}
        {...props}
      />

      <label htmlFor={name} className={labelClass}>
        {props.error || label}
      </label>
    </div>
  );
};

SelectInput.propTypes = {
  classNamePrefix: PropTypes.string
};

SelectInput.defaultProps = {
  menuPlacement: 'auto',
  classNamePrefix: 's-contact',
  isAsync: false,
  isPaginated: false
};

export default SelectInput;
