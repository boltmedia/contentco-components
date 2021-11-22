import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './CardHeader';
import Note from './CardNote';
import Footer from './CardFooter';
import CardItem from './CardItem';

import Styles from './Card.module.scss';

const Card = ({ className, children, ...props }) => {
  return (
    <div className={classNames(Styles.container, className)} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Card.Header = Header;
Card.Note = Note;

Card.Footer = Footer;
Card.Item = CardItem;

export default Card;
