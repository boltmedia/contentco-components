import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import reactInputMask from '../../node_modules/react-input-mask/index.js';
import Styles from './Input.module.scss.js';

var TextInput = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      name = _ref.name,
      required = _ref.required,
      id = _ref.id,
      placeholder = _ref.placeholder,
      mask = _ref.mask,
      label = _ref.label,
      error = _ref.error,
      props = objectWithoutProperties(_ref, ["className", "disabled", "name", "required", "id", "placeholder", "mask", "label", "error"]);

  var Elem = mask ? reactInputMask : 'input';
  return /*#__PURE__*/react.createElement("div", {
    className: classnames(Styles.container, disabled && Styles.disabled, error && Styles.containerError, className)
  }, /*#__PURE__*/react.createElement(Elem, _extends_1({
    ref: ref,
    className: classnames(Styles.base, Styles.input),
    id: id,
    name: name,
    placeholder: placeholder || label,
    required: required,
    disabled: disabled,
    mask: mask
  }, props)), /*#__PURE__*/react.createElement("label", {
    htmlFor: name,
    className: classnames(Styles.label, error && Styles.error)
  }, error || label));
});
TextInput.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  name: propTypes.string.isRequired,
  disabled: propTypes.bool,
  error: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  required: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  type: propTypes.string,
  label: propTypes.string,
  onChange: propTypes.func,
  onKeyPress: propTypes.func,
  onBlur: propTypes.func,
  onFocus: propTypes.func,
  placeholder: propTypes.string
};
TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
//# sourceMappingURL=TextInput.js.map
