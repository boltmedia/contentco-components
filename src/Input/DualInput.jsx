import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { debounce } from 'lodash';

import InputMask from 'react-input-mask';

import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncPaginate from 'react-select-async-paginate';
import CreatableSelect from 'react-select/creatable';
import { useGlobalEvent } from 'beautiful-react-hooks';
import Styles from './Input.module.scss';

const SHRINK_THRESHOLD = 245;

const customStyles = {
  option: (provided, state) => ({
    ...provided
  }),
  input: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  }),
  menu: (styles) => ({
    ...styles,
    margin: '2px 0'
  }),
  placeholder: (styles) => ({
    ...styles
  }),
  control: (styles) => ({
    ...styles,
    boxShadow: 'none',
    ':hover': {
      borderColor: '#a1aab3'
    }
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '2px 15px',
    fontSize: '16px'
  }),
  singleValue: (styles) => ({
    ...styles,
    marginLeft: '0',
    fontSize: '16px'
  })
};

const isSmall = (container) => {
  return container.offsetWidth <= SHRINK_THRESHOLD;
};

const DummyElem = () => <div />;

const DualInput = ({ input, select, className }) => {
  const inputProps = input(DummyElem).props;

  const {
    onChange: onSelectChange,
    disabled: selectDisabled,
    ...selectProps
  } = select(DummyElem).props;

  const elementRef = useRef(null);

  const [shouldShrink, setShouldShrink] = useState(false);
  const onWindowResize = useGlobalEvent('resize');

  const [selectValue, setSelectValue] = useState(
    selectProps.value || selectProps.defaultValue
  );
  const containerClass = classNames(
    className,
    Styles.container,
    Styles.dualContainer,
    shouldShrink && Styles.shrink
  );

  const selectClass = classNames(Styles.select);
  const labelClass = classNames(Styles.label, inputProps.error && Styles.error);

  const handleChange = (event, { action, name }) => {
    // Pass any other change events from parent
    try {
      onSelectChange({
        ...event,
        target: { name, value: event },
        action
      });
    } catch (err) {}
  };

  onWindowResize((event) => {
    setShouldShrink(isSmall(elementRef.current));
  });

  const Elem = inputProps.mask ? InputMask : 'input';

  return (
    <div
      className={containerClass}
      style={{ display: 'flex', width: '100%' }}
      ref={elementRef}>
      <div className={Styles.dualInput}>
        <Elem
          className={classNames(Styles.base, Styles.input)}
          placeholder={inputProps.placeholder || inputProps.label}
          {...inputProps}
        />
        <label htmlFor={inputProps.name} className={labelClass}>
          {inputProps.error || inputProps.label}
        </label>
      </div>
      <div className={Styles.dualSelect} style={selectProps.style}>
        <Select
          className={selectClass}
          styles={customStyles}
          placeholder={selectProps.label}
          onChange={handleChange}
          additional={{ page: 1 }}
          createOptionPosition={'first'}
          classNamePrefix="s-contact"
          isDisabled={selectDisabled}
          {...selectProps}
        />
      </div>
    </div>
  );
};

export default DualInput;
