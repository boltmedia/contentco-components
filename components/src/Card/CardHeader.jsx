import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Card.module.scss';
import classNames from 'classnames';

const CardHeader = ({ className, children, title, ...props }) => {
  return (
    <div className={classNames(Styles.header, className)} {...props}>
      {children || (title && <span>{title}</span>)}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardHeader;
