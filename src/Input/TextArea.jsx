import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Input.module.scss';
import classNames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea';

const TextArea = React.forwardRef(
  ({ disabled, name, placeholder, label, required, error, ...props }, ref) => {
    return (
      <div
        className={classNames(
          Styles.container,
          props.className,
          disabled && Styles.disabled
        )}
      >
        <TextareaAutosize
          ref={ref}
          className={classNames(Styles.base, Styles.textArea)}
          id={name}
          name={name}
          placeholder={placeholder || label}
          required={required}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={name}
          className={classNames(Styles.label, error && Styles.error)}
        >
          {error || label}
        </label>
      </div>
    );
  }
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  predicted: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextArea;
