import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Card.module.scss';
import classNames from 'classnames';

const CardHeader = ({ className, children, right, ...props }) => {
  return (
    <div
      className={classNames(Styles.footer, right && Styles.right, className)}
      {...props}
    >
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardHeader;
