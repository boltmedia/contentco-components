'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var classNames = require('classnames');
require('prop-types');
var Styles_module = require('./Styles.module-5239bc23.js');
require('./style-inject.es-dcee06b6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var InputContainer = function InputContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties__default['default'](_ref, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classNames__default['default'](Styles_module.Styles.inputContainer, className)
  }, props), children);
};

module.exports = InputContainer;
