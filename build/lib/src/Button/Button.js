import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import Loader from '../Loader/Loader.js';
import Styles from './Button.module.scss.js';

var Type = {
  WHITE: Styles.white,
  WHITE_BLUE_OUTLINE: Styles.whiteBlueOutline,
  BLUE_OUTLINE: Styles.blueOutline,
  RED_OUTLINE: Styles.redOutline,
  LIGHT_GRAY: Styles.lightGray,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  GRAY: Styles.gray
};
var lightTypes = [Type.WHITE, Type.WHITE_BLUE_OUTLINE, Type.BLUE_OUTLINE, Type.RED_OUTLINE, Type.LIGHT_GRAY];

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      content = _ref.content,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      Elem = _ref.element,
      props = objectWithoutProperties(_ref, ["type", "size", "className", "children", "content", "disabled", "isLoading", "element"]);

  var isLight = lightTypes.filter(function (l) {
    return l === type;
  });
  return /*#__PURE__*/react.createElement(Elem, _extends_1({
    type: "button",
    className: classnames(Styles.btn, className, type, size),
    disabled: disabled
  }, props), isLoading && /*#__PURE__*/react.createElement(Loader, {
    style: {
      marginRight: '10px'
    },
    color: (isLight === null || isLight === void 0 ? void 0 : isLight.length) ? Loader.Color.BLUE : Loader.Color.WHITE,
    size: Loader.Size.SMALL
  }), content || children);
};

Button.Type = Type;
Button.Size = {
  FULLWIDTH: Styles.fullwidth,
  FULLWIDTH_LARGE: Styles.fullwidthLarge,
  LARGE: Styles.large
};
Button.Styles = Styles;
Button.defaultProps = {
  element: 'button'
};
Button.propTypes = {
  type: propTypes.string,
  size: propTypes.string,
  children: propTypes.node,
  content: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  isLoading: propTypes.bool,
  asLink: propTypes.bool
};

export default Button;
//# sourceMappingURL=Button.js.map
