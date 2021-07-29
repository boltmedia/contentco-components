'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var PropTypes = require('prop-types');
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var css_248z = "/* prettier-ignore */\n/* beautify ignore:start */\n.Text-module_base__22RYQ {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.Text-module_display__2aO-E {\n  font-weight: 300;\n  line-height: 1.2;\n  margin: 0;\n  color: #193278;\n  letter-spacing: -1px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_display__2aO-E {\n      font-weight: 300;\n      letter-spacing: -0.5px;\n      font-size: 30px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_display__2aO-E {\n      font-weight: 300;\n      letter-spacing: -0.5px;\n      font-size: 40px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_display__2aO-E {\n      font-size: 50px; } }\n\n.Text-module_headline__1KVeJ {\n  font-weight: 300;\n  line-height: 1.2;\n  margin: 0;\n  color: #193278;\n  letter-spacing: -0.5px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 24px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 35px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 40px; } }\n\n.Text-module_subheadline__1Qp-K {\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  letter-spacing: -0.3px;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 20px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 23.994px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 27px; } }\n\n.Text-module_intro__3k_8- {\n  font-weight: 500;\n  line-height: 1.25;\n  margin: 0;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_intro__3k_8- {\n      font-size: 18px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_intro__3k_8- {\n      font-size: 20px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_intro__3k_8- {\n      font-size: 24px; } }\n\n.Text-module_headingTwo__3gSxQ {\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  margin-bottom: 5px;\n  letter-spacing: -0.3px;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 16px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 18; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 22px; } }\n\n.Text-module_sectionBody__3tTbD {\n  font-size: 18px;\n  padding: 0 50px;\n  margin: 0; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_sectionBody__3tTbD {\n      font-size: 16px;\n      padding: 0; } }\n\n.Text-module_body__15dAJ {\n  margin: 0;\n  color: #3f474f;\n  font-size: 18px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_body__15dAJ {\n      font-size: 16px; } }\n\n.Text-module_base__22RYQ.Text-module_white__3fq_m {\n  color: #fff; }\n\n.Text-module_paragraph__2elFm {\n  margin-bottom: 20px; }\n\n.Text-module_center__30Rnt {\n  text-align: center; }\n\n.Text-module_whiteCenter__HI2jT {\n  color: #fff;\n  text-align: center; }\n\n.Text-module_darkblueCenter__3LIw6 {\n  color: #193278;\n  text-align: center; }\n\n.Text-module_primary__Supmz {\n  font-size: 18px;\n  line-height: 1.475; }\n\n.Text-module_secondary__2nf89 {\n  font-size: 14px;\n  color: #3f474f;\n  -webkit-hyphens: manual;\n      -ms-hyphens: manual;\n          hyphens: manual;\n  font-weight: 400;\n  line-height: 1.475; }\n";
var Styles = {"base":"Text-module_base__22RYQ","display":"Text-module_display__2aO-E","headline":"Text-module_headline__1KVeJ","subheadline":"Text-module_subheadline__1Qp-K","intro":"Text-module_intro__3k_8-","headingTwo":"Text-module_headingTwo__3gSxQ","sectionBody":"Text-module_sectionBody__3tTbD","body":"Text-module_body__15dAJ","white":"Text-module_white__3fq_m","paragraph":"Text-module_paragraph__2elFm","center":"Text-module_center__30Rnt","whiteCenter":"Text-module_whiteCenter__HI2jT","darkblueCenter":"Text-module_darkblueCenter__3LIw6","primary":"Text-module_primary__Supmz","secondary":"Text-module_secondary__2nf89"};
styleInject_es.styleInject(css_248z);

var Text = function Text(_ref) {
  var Elem = _ref.element,
      children = _ref.children,
      size = _ref.size,
      color = _ref.color,
      type = _ref.type,
      className = _ref.className,
      restProps = _objectWithoutProperties__default['default'](_ref, ["element", "children", "size", "color", "type", "className"]);

  return /*#__PURE__*/React__default['default'].createElement(Elem, _extends__default['default']({
    className: classNames__default['default'](Styles.base, size, type, color, className)
  }, restProps), children);
};

Text.Styles = Styles;
Text.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  size: PropTypes__default['default'].string,
  type: PropTypes__default['default'].string,
  element: PropTypes__default['default'].node
};
Text.defaultProps = {
  element: 'p',
  size: Styles.body,
  type: Styles.standard,
  color: Styles.black
};
Text.Type = {
  PRIMARY: Styles.primary,
  SECONDARY: Styles.secondary,
  NORMAL: Styles.standard,
  WHITE: Styles.white,
  PARAGRAPH: Styles.paragraph,
  CENTER: Styles.center,
  WHITE_CENTER: Styles.whiteCenter,
  DARKBLUE_CENTER: Styles.darkblueCenter
};
Text.Color = {
  BLACK: Styles.black,
  BLUE: Styles.blue,
  DARK_BLUE: Styles.darkBlue,
  WHITE: Styles.white
};
Text.Size = {
  HEADLINE: Styles.headline,
  SUBHEADLINE: Styles.subheadline,
  INTRO: Styles.intro,
  HEADING_TWO: Styles.headingTwo,
  BODY: Styles.body,
  SECTION_BODY: Styles.sectionBody,
  DISPLAY: Styles.display
};

module.exports = Text;
