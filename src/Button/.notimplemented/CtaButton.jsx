import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export default function CtaButton(props) {
  const { to: url, type, title, content, ...restProps } = props;
  const linkTitle = title ? title : '';

  return /^https?:\/\//.test(url) ? (
    <a
      className={classnames(
        type === 'darkblue' ? styles.ctaDarkblue : styles.ctaWhite,
        styles.btn
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={linkTitle}
      {...restProps}>
      {content || children}
    </a>
  ) : (
    <Link
      className={classnames(
        type === 'darkblue' ? styles.ctaDarkblue : styles.ctaWhite,
        styles.btn
      )}
      to={url}
      title={linkTitle}
      {...restProps}>
      {content || children}
    </Link>
  );
}

CtaButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.string
};
