import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Styles from './Logo.module.scss';

import HireDigital from './svg/hd.inline.svg';
import ContentCo from './svg/cc.inline.svg';

const Logo = ({
  className,
  type,
  site = process.env.NEXT_PUBLIC_SITE_ID || '1',
  ...props
}) => {
  const Component = site === '2' ? HireDigital : ContentCo;
  const logoSize = site === '2' ? Styles.hdLogo : Styles.logo;
  return (
    <Component className={classNames(logoSize, className, type)} {...props} />
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};

Logo.Type = {
  WHITE: Styles.white,
  BLACK: Styles.black,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  DARKGRAY: Styles.darkgray
};

export default Logo;