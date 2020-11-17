import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import '../../node_modules/prop-types/index.js';
import Styles from './Styles.module.scss.js';

var InputGroup = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/react.createElement("div", _extends_1({
    className: classnames(Styles.inputGroup, className)
  }, props), children);
};

export default InputGroup;
//# sourceMappingURL=InputGroup.js.map
