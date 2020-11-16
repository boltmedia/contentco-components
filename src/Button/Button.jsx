import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
  type,
  size,
  className,
  children,
  content,
  disabled,
  isLoading,
  ...props
}) => {
  return (
    <button
      type='button'
      className={classNames(Styles.btn, className, type, size)}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <Loader
          style={{ marginRight: '10px' }}
          color={Loader.Color.WHITE}
          size={Loader.Size.SMALL}
        />
      )}
      {content || children}
    </button>
  );
};

Button.Type = {
  BLUE: Styles.blue,
  WHITE: Styles.white,
  DARKBLUE: Styles.darkblue,
  GRAY: Styles.gray,
  LIGHT_GRAY: Styles.lightGray,
  WHITE_BLUE_OUTLINE: Styles.whiteBlueOutline,
  BLUE_OUTLINE: Styles.blueOutline,
  RED_OUTLINE: Styles.redOutline
};

Button.Size = {
  FULLWIDTH: Styles.fullwidth,
  FULLWIDTH_LARGE: Styles.fullwidthLarge,
  LARGE: Styles.large
};

Button.Styles = Styles;

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
