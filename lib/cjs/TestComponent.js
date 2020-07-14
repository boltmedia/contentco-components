"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n    padding: 32px;\n    background-color: hotpink;\n    font-size: 24px;\n    border-radius: 4px;\n    color: black;\n    font-weight: bold;\n    &:hover {\n        color: white;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styled.default.div(_templateObject());

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(Container, null, "Example Component: ", text);
};

var _default = ExampleComponent;
exports.default = _default;
module.exports = exports["default"];