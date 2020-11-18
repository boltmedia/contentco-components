import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Card.module.scss';
import classNames from 'classnames';

const Note = ({ children, className, ...props }) => {
  return (
    <div className={classNames(Styles.note, className)} {...props}>
      {children}
    </div>
  );
};

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Note;
