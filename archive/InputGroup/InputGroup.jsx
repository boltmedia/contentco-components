import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import Styles from './Styles.module.scss';

const InputGroup = ({ className, children, ...props }) => {
  return (
    <div className={classNames(Styles.inputGroup, className)} {...props}>
      {children}
    </div>
  );
};

export default InputGroup;
