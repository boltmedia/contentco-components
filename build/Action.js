'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var css_248z = ".Action-module_action__r8mQc {\n  display: flex;\n  margin-left: auto; }\n";
var Styles = {"action":"Action-module_action__r8mQc"};
styleInject_es.styleInject(css_248z);

var Action = function Action(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties__default['default'](_ref, ["children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles.action, className)
  }, props), children);
};

module.exports = Action;
