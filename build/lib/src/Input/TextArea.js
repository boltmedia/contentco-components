import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import Styles from './Input.module.scss.js';
import TextareaAutosize from '../../node_modules/react-autosize-textarea/lib/index.js';

var TextArea = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      placeholder = _ref.placeholder,
      label = _ref.label,
      required = _ref.required,
      error = _ref.error,
      props = objectWithoutProperties(_ref, ["disabled", "name", "placeholder", "label", "required", "error"]);

  return /*#__PURE__*/react.createElement("div", {
    className: classnames(Styles.container, props.className, disabled && Styles.disabled)
  }, /*#__PURE__*/react.createElement(TextareaAutosize, _extends_1({
    ref: ref,
    className: classnames(Styles.base, Styles.textArea),
    id: name,
    name: name,
    placeholder: placeholder || label,
    required: required,
    disabled: disabled
  }, props)), /*#__PURE__*/react.createElement("label", {
    htmlFor: name,
    className: classnames(Styles.label, error && Styles.error)
  }, error || label));
});
TextArea.propTypes = {
  name: propTypes.string.isRequired,
  disabled: propTypes.bool,
  active: propTypes.bool,
  error: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  predicted: propTypes.bool,
  label: propTypes.string,
  placeholder: propTypes.string
};

export default TextArea;
//# sourceMappingURL=TextArea.js.map
