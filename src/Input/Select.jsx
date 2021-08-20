import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Styles from './Input.module.scss';
import classNames from 'classnames';
import InitialSelect from 'react-select';
import InitialAsyncSelect from 'react-select/async';
import InitialAsyncPaginate from 'react-select-async-paginate';
import InitialCreatableSelect from 'react-select/creatable';

const Select = memo(InitialSelect);
const AsyncSelect = memo(InitialAsyncSelect);
const AsyncPaginate = memo(InitialAsyncPaginate);
const CreatableSelect = memo(InitialCreatableSelect);

const RightArrow = () => <span className={Styles.rightArrow} />;
const DownArrow = () => <span className={Styles.downArrow} />;

const Option = (props) => {
  const {
    data,
    getStyles,
    innerRef,
    innerProps,
    indentBy = 0,
    selectOption,
    selectProps
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const newInnerProps = { ...innerProps, onClick: () => selectOption(data) };
  const children =
    (data && selectProps?.getOptionChildren?.(data)) || data?.children || [];
  return (
    <React.Fragment>
      <div className={Styles.multiLevelOption}>
        <div className={Styles.actions}>
          {props.data?.children?.length > 0 && (
            <button
              className={Styles.action}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <RightArrow /> : <DownArrow />}
            </button>
          )}
        </div>
        <div
          {...newInnerProps}
          style={{ marginLeft: `${20 * indentBy}px` }}
          className={Styles.optionItem}
        >
          {selectProps?.getOptionLabel?.(data)}
        </div>
      </div>
      {isExpanded && children?.length > 0
        ? children?.map((v, idx) => (
            <Option key={idx} {...props} data={v} indentBy={indentBy + 1} />
          ))
        : null}
    </React.Fragment>
  );
};

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

const SelectInput = ({
  disabled,
  name,
  className,
  label,
  placeholder,
  onChange,
  classNamePrefix,
  ...props
}) => {
  const [value, setValue] = useState(props.value || props.defaultValue);
  const containerClass = classNames(
    Styles.container,
    className,
    props.isMulti && value?.length && Styles.active,
    !props.isMulti && Object.keys(value || {}).length && Styles.active,
    disabled && Styles.locked,
    props.error && Styles.containerError,
    props.isMulti && Styles.multiContainer
  );

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const fieldClass = classNames(
    Styles.select,
    props.isMulti && Styles.multi,
    props.error && Styles.error
  );

  const labelClass = classNames(
    Styles.label,
    props.error && Styles.error,
    props.isMulti && value?.length && Styles.hasValue,
    !props.isMulti && Object.keys(value || {}).length && Styles.hasValue
  );

  const handleChange = (event, { action, name }) => {
    setValue(event);
    // Pass any other change events from parent
    try {
      onChange({ ...event, target: { name, value: event }, action });
    } catch (err) {}
  };

  const CustomSelect = props.isPaginated
    ? AsyncPaginate
    : props.isAsync
    ? AsyncSelect
    : Select;
  const SelectComponent = props.isCreatable ? CreatableSelect : Select;
  return (
    <div
      className={containerClass}
      {...{ 'data-test-id': props['data-test-id'] || name }}
    >
      <CustomSelect
        className={fieldClass}
        styles={customStyles}
        name={name}
        placeholder={placeholder || label}
        selectValue={value}
        defaultValue={value}
        onChange={handleChange}
        additional={{ page: 1 }}
        SelectComponent={SelectComponent}
        createOptionPosition='first'
        isDisabled={disabled}
        classNamePrefix={classNamePrefix}
        closeMenuOnSelect={!props.isMulti}
        {...props}
        {...(props.isMultiLevel && {
          components: { ...props.components, Option }
        })}
      />

      <label htmlFor={name} className={labelClass}>
        {props.error || label}
      </label>
    </div>
  );
};

SelectInput.propTypes = {
  classNamePrefix: PropTypes.string,
  'data-test-id': PropTypes.string,
  isMultiLevel: PropTypes.bool,
  getOptionChildren: PropTypes.func
};

SelectInput.defaultProps = {
  menuPlacement: 'auto',
  classNamePrefix: 's-contact',
  isAsync: false,
  isPaginated: false
};

export default SelectInput;
