// Generated with util/create-component.js
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Styles from './SegmentedControl.module.scss'
import { SegmentedControl } from 'evergreen-ui';

const Segment = ({ className, ...props }) => (
  <SegmentedControl
    {...props}
    className={classNames(Styles.segment, className)}
  />
);

export default Segment;

