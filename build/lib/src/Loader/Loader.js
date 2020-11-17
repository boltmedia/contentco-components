import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import Styles from './Loader.module.scss.js';

var Loader = function Loader(_ref) {
  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      type = _ref.type,
      isError = _ref.isError,
      isCompleted = _ref.isCompleted,
      props = objectWithoutProperties(_ref, ["className", "size", "color", "type", "isError", "isCompleted"]);

  return /*#__PURE__*/react.createElement("div", _extends_1({
    className: classnames(Styles.loader, className, size, color, type)
  }, props), !isError && !isCompleted && /*#__PURE__*/react.createElement("div", {
    className: Styles.spinner
  }), isCompleted && /*#__PURE__*/react.createElement("div", {
    className: classnames(Styles.checkmark)
  }), isError && /*#__PURE__*/react.createElement("div", {
    className: classnames(Styles.error)
  }));
};

Loader.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  size: propTypes.string,
  color: propTypes.string,
  type: propTypes.string,
  isCompleted: propTypes.bool,
  isError: propTypes.bool
};
Loader.defaultProps = {
  isCompleted: false,
  color: Styles.blue
};
Loader.Color = {
  WHITE: Styles.white,
  BLUE: Styles.blue
};
Loader.Size = {
  LARGE: Styles.large,
  SMALL: Styles.small
};
Loader.Type = {
  INLINE: Styles.inline,
  FULL: Styles.full
};
Loader.Styles = Styles;

export default Loader;
//# sourceMappingURL=Loader.js.map
