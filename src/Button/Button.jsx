import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Styles from './Button.module.scss';
import classNames from 'classnames';

const Type = {
  WHITE: Styles.white,
  WHITE_BLUE_OUTLINE: Styles.whiteBlueOutline,
  BLUE_OUTLINE: Styles.blueOutline,
  RED_OUTLINE: Styles.redOutline,
  LIGHT_GRAY: Styles.lightGray,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  GRAY: Styles.gray
};

const lightTypes = [
  Type.WHITE,
  Type.WHITE_BLUE_OUTLINE,
  Type.BLUE_OUTLINE,
  Type.RED_OUTLINE,
  Type.LIGHT_GRAY
];

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
  const isLight = lightTypes.filter((l) => l === type);
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
          color={isLight?.length ? Loader.Color.BLUE : Loader.Color.WHITE}
          size={Loader.Size.SMALL}
        />
      )}
      {content || children}
    </button>
  );
};

Button.Type = Type;

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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default Button;
