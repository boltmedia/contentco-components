import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Styles from './Styles.module.scss';
const InputContainer = ({ className, children, ...props }) => {
  return (
    <div className={classNames(Styles.inputContainer, className)} {...props}>
      {children}
    </div>
  );
};

export default InputContainer;
