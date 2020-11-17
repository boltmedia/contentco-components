import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const ButtonType = {
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  GRAY: Styles.gray,
  LIGHT_GRAY: Styles.lightGray,
  WHITE: Styles.white,
  WHITE_BLUE_OUTLINE: Styles.whiteBlueOutline,
  BLUE_OUTLINE: Styles.blueOutline,
  RED_OUTLINE: Styles.redOutline,
};

export const ButtonSize = {
  FULLWIDTH: Styles.fullwidth,
  FULLWIDTH_LARGE: Styles.large,
  LARGE: Styles.fullwidthLarge,
};
export const buttonStyles = Styles;

const ButtonLink = (props) => {
  const { type, size, to: url, className, title, children, content, target, ...restProps } = props;

  const parentClass = classNames(Styles.btn, className, type, size);
  const linkTitle = title ? title : '';
  return /^https?:\/\//.test(url) ? (
    <a
      className={parentClass}
      href={url}
      target={target}
      rel='noopener noreferrer'
      title={linkTitle}
      {...restProps}>
      {content || children}
    </a>
  ) : (
    <Link className={parentClass} to={url} title={linkTitle} target={target} {...restProps}>
      {content || children}
    </Link>
  );
};

ButtonLink.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.string,
  target: PropTypes.string,
};
ButtonLink.defaultProps = {
  target: '_blank',
};

export default ButtonLink;
