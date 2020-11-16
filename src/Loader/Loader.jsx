import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Loader.module.scss';
import classNames from 'classnames';

const Loader = ({
  className,
  size,
  color,
  type,
  isError,
  isCompleted,
  ...props
}) => {
  return (
    <div
      className={classNames(Styles.loader, className, size, color, type)}
      {...props}
    >
      {!isError && !isCompleted && <div className={Styles.spinner} />}
      {isCompleted && <div className={classNames(Styles.checkmark)} />}
      {isError && <div className={classNames(Styles.error)} />}
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  isCompleted: PropTypes.bool,
  isError: PropTypes.bool
};

Loader.defaultProps = {
  isCompleted: false,
  color: Styles.blue
};

Loader.Color = {
  WHITE: Styles.white,
  BLUE: Styles.blue
};

Loader.Size = {
  LARGE: Styles.large,
  SMALL: Styles.small
};

Loader.Type = {
  INLINE: Styles.inline,
  FULL: Styles.full
};

Loader.Styles = Styles;

export default Loader;
