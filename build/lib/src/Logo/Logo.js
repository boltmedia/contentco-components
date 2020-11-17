import _extends_1 from '../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import react from '../../node_modules/react/index.js';
import classnames from '../../node_modules/classnames/index.js';
import propTypes from '../../node_modules/prop-types/index.js';
import Styles from './Logo.module.scss.js';
import HireDigital from './svg/hd.inline.svg.js';
import ContentCo from './svg/cc.inline.svg.js';

var Logo = function Logo(_ref) {
  var className = _ref.className,
      type = _ref.type,
      _ref$site = _ref.site,
      site = _ref$site === void 0 ? process.env.NEXT_PUBLIC_SITE_ID || '1' : _ref$site,
      props = objectWithoutProperties(_ref, ["className", "type", "site"]);

  var Component = site === '2' ? HireDigital : ContentCo;
  var logoSize = site === '2' ? Styles.hdLogo : Styles.logo;
  return /*#__PURE__*/react.createElement(Component, _extends_1({
    className: classnames(logoSize, className, type)
  }, props));
};

Logo.propTypes = {
  className: propTypes.string,
  type: propTypes.string
};
Logo.Type = {
  WHITE: Styles.white,
  BLACK: Styles.black,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  DARKGRAY: Styles.darkgray
};

export default Logo;
//# sourceMappingURL=Logo.js.map
