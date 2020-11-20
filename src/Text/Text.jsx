import React from 'react';
import Styles from './Text.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Text = ({
  element: Elem,
  children,
  size,
  color,
  type,
  className,
  ...restProps
}) => {
  return (
    <Elem
      className={classNames(Styles.base, size, type, color, className)}
      {...restProps}
    >
      {children}
    </Elem>
  );
};

Text.Styles = Styles;

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string,
  element: PropTypes.node
};

Text.defaultProps = {
  element: 'p',
  size: Styles.body,
  type: Styles.standard,
  color: Styles.black
};

Text.Type = {
  PRIMARY: Styles.primary,
  SECONDARY: Styles.secondary,
  NORMAL: Styles.standard,
  WHITE: Styles.white,
  PARAGRAPH: Styles.paragraph,
  CENTER: Styles.center,
  WHITE_CENTER: Styles.whiteCenter,
  DARKBLUE_CENTER: Styles.darkblueCenter
};

Text.Color = {
  BLACK: Styles.black,
  BLUE: Styles.blue,
  DARK_BLUE: Styles.darkBlue,
  WHITE: Styles.white
};

Text.Size = {
  HEADLINE: Styles.headline,
  SUBHEADLINE: Styles.subheadline,
  INTRO: Styles.intro,
  HEADING_TWO: Styles.headingTwo,
  BODY: Styles.body,
  SECTION_BODY: Styles.sectionBody,
  DISPLAY: Styles.display
};

export default Text;
