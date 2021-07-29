'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var PropTypes = require('prop-types');
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var classNames = require('classnames');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var css_248z = "/* prettier-ignore */\n/* beautify ignore:start */\n.Card-module_container__19jRJ {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background: #fff;\n  border: 1px solid #d8dfe6;\n  border-radius: 3px;\n  margin-bottom: 20px; }\n\n.Card-module_header__2UPBX {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  font-size: 20px;\n  font-weight: 600;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  min-height: 65px;\n  box-sizing: border-box; }\n\n.Card-module_note__22XAs {\n  padding: 10px 20px;\n  background-color: #d2e5f8;\n  font-size: 14px;\n  border-top: 1px solid #d8dfe6; }\n\n.Card-module_item__1VJRt {\n  margin: 0;\n  padding: 10px 20px;\n  border-top: 1px solid #edf0f3; }\n  .Card-module_item__1VJRt.Card-module_noPaddingLeft__3HajD {\n    padding-left: 0; }\n  .Card-module_item__1VJRt.Card-module_noPadding__2j_hA {\n    padding: 0; }\n  .Card-module_item__1VJRt.Card-module_noBorder__PVp40 {\n    border: 0; }\n\n.Card-module_footer__2zfeT {\n  border-top: 1px solid #d8dfe6;\n  display: flex;\n  padding: 10px 20px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .Card-module_footer__2zfeT.Card-module_right__3RLNc {\n    justify-content: flex-end; }\n\n.Card-module_flex__2VnYC {\n  display: flex; }\n";
var Styles = {"container":"Card-module_container__19jRJ","header":"Card-module_header__2UPBX","note":"Card-module_note__22XAs","item":"Card-module_item__1VJRt","noPaddingLeft":"Card-module_noPaddingLeft__3HajD","noPadding":"Card-module_noPadding__2j_hA","noBorder":"Card-module_noBorder__PVp40","footer":"Card-module_footer__2zfeT","right":"Card-module_right__3RLNc","flex":"Card-module_flex__2VnYC"};
styleInject_es.styleInject(css_248z);

var CardHeader = function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      props = _objectWithoutProperties__default['default'](_ref, ["className", "children", "title"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.header, className)
  }, props), children || title && /*#__PURE__*/React__default['default'].createElement("span", null, title));
};

CardHeader.propTypes = {
  title: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};

var Note = function Note(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties__default['default'](_ref, ["children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.note, className)
  }, props), children);
};

Note.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};

var CardHeader$1 = function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      right = _ref.right,
      props = _objectWithoutProperties__default['default'](_ref, ["className", "children", "right"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.footer, right && Styles.right, className)
  }, props), children);
};

CardHeader$1.propTypes = {
  title: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};

var CardItem = function CardItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      noPadding = _ref.noPadding,
      noBorder = _ref.noBorder,
      noPaddingLeft = _ref.noPaddingLeft,
      flex = _ref.flex,
      props = _objectWithoutProperties__default['default'](_ref, ["className", "children", "noPadding", "noBorder", "noPaddingLeft", "flex"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.item, _defineProperty__default['default']({}, Styles.flex, flex), _defineProperty__default['default']({}, Styles.noPadding, noPadding), _defineProperty__default['default']({}, Styles.noPaddingLeft, noPaddingLeft), _defineProperty__default['default']({}, Styles.noBorder, noBorder), className)
  }, props), children);
};

CardItem.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};

var Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties__default['default'](_ref, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.container, className)
  }, props), children);
};

Card.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};
Card.Header = CardHeader;
Card.Note = Note;
Card.Footer = CardHeader$1;
Card.Item = CardItem;

module.exports = Card;
