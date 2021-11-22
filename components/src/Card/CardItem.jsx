import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Card.module.scss';
import classNames from 'classnames';

const CardItem = ({
  className,
  children,
  noPadding,
  noBorder,
  noPaddingLeft,
  flex,
  ...props
}) => {
  return (
    <div
      className={classNames(
        Styles.item,
        { [Styles.flex]: flex },
        { [Styles.noPadding]: noPadding },
        { [Styles.noPaddingLeft]: noPaddingLeft },
        { [Styles.noBorder]: noBorder },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardItem;
