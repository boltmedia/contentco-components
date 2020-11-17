import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import Styles from './Input.module.scss.js';
import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import defineProperty from '../../node_modules/@babel/runtime/helpers/defineProperty.js';
import index from '../../node_modules/react-select/dist/react-select.browser.esm.js';
import Async from '../../node_modules/react-select/async/dist/react-select.browser.esm.js';
import { AsyncPaginate } from '../../node_modules/react-select-async-paginate/es/index.js';
import Creatable from '../../node_modules/react-select/creatable/dist/react-select.browser.esm.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var customStyles = {
  option: function option(provided, state) {
    return _objectSpread({}, provided);
  },
  input: function input(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      margin: 0,
      padding: 0
    });
  },
  menu: function menu(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      margin: '2px 0'
    });
  },
  placeholder: function placeholder(styles) {
    return _objectSpread({}, styles);
  },
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      boxShadow: 'none',
      ':hover': {
        borderColor: '#a1aab3'
      }
    });
  },
  valueContainer: function valueContainer(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      padding: '2px 15px',
      fontSize: '16px'
    });
  },
  singleValue: function singleValue(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      marginLeft: '0',
      fontSize: '16px'
    });
  }
};

var SelectInput = function SelectInput(_ref) {
  var _props$getOptionValue;

  var disabled = _ref.disabled,
      name = _ref.name,
      className = _ref.className,
      label = _ref.label,
      onChange = _ref.onChange,
      classNamePrefix = _ref.classNamePrefix,
      props = objectWithoutProperties(_ref, ["disabled", "name", "className", "label", "onChange", "classNamePrefix"]);

  var _useState = react.useState(props.value || props.defaultValue),
      _useState2 = slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var optionValue = props === null || props === void 0 ? void 0 : (_props$getOptionValue = props.getOptionValue) === null || _props$getOptionValue === void 0 ? void 0 : _props$getOptionValue.call(props, props.value || props.defaultValue || {});
  var containerClass = classnames(Styles.container, className, props.isMulti && value && value.length && Styles.active, !props.isMulti && value && Styles.active, disabled && Styles.locked, props.error && Styles.containerError, props.isMulti && Styles.multiContainer);
  var fieldClass = classnames(Styles.select, props.isMulti && Styles.multi, props.error && Styles.error);
  var labelClass = classnames(Styles.label, props.error && Styles.error, props.isMulti && value && value.length && Styles.hasValue, !props.isMulti && value && Styles.hasValue);

  var handleChange = function handleChange(event, _ref2) {
    var action = _ref2.action,
        name = _ref2.name;
    setValue(event); // Pass any other change events from parent

    try {
      onChange(_objectSpread(_objectSpread({}, event), {}, {
        target: {
          name: name,
          value: event
        },
        action: action
      }));
    } catch (err) {}
  };

  var CustomSelect = props.isPaginated ? AsyncPaginate : props.isAsync ? Async : index;
  var SelectComponent = props.isCreatable ? Creatable : index;
  return /*#__PURE__*/react.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/react.createElement(CustomSelect, _extends_1({
    className: fieldClass,
    styles: customStyles,
    name: name,
    placeholder: label,
    selectValue: value,
    defaultValue: value,
    onChange: handleChange,
    additional: {
      page: 1
    },
    SelectComponent: SelectComponent,
    createOptionPosition: 'first',
    isDisabled: disabled,
    classNamePrefix: classNamePrefix,
    closeMenuOnSelect: !props.isMulti
  }, props)), /*#__PURE__*/react.createElement("label", {
    htmlFor: name,
    className: labelClass
  }, props.error || label));
};

SelectInput.propTypes = {
  classNamePrefix: propTypes.string
};
SelectInput.defaultProps = {
  menuPlacement: 'auto',
  classNamePrefix: 's-contact',
  isAsync: false,
  isPaginated: false
};

export default SelectInput;
//# sourceMappingURL=Select.js.map
