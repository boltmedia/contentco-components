import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import Styles from './Input.module.scss';
import classNames from 'classnames';

const TextInput = React.forwardRef(
  ({ className, disabled, name, required, id, placeholder, mask, label, error, ...props }, ref) => {
    const Elem = mask ? InputMask : 'input';
    return (
      <div
        className={classNames(
          Styles.container,
          disabled && Styles.disabled,
          error && Styles.containerError,
          className
        )}>
        <Elem
          ref={ref}
          className={classNames(Styles.base, Styles.input)}
          id={id}
          name={name}
          placeholder={placeholder || label}
          required={required}
          disabled={disabled}
          mask={mask}
          {...props}
        />
        <label htmlFor={name} className={classNames(Styles.label, error && Styles.error)}>
          {error || label}
        </label>
      </div>
    );
  }
);

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
