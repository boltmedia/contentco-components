import React from 'react';
import classNames from 'classnames';
import Styles from './Action.module.scss';
const Action = ({ children, className, ...props }) => {
  return (
    <div className={classNames(Styles.action, className)} {...props}>
      {children}
    </div>
  );
};

export default Action;
