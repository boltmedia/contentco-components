import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 32px;\n    background-color: hotpink;\n    font-size: 24px;\n    border-radius: 4px;\n    color: black;\n    font-weight: bold;\n    &:hover {\n        color: white;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from "react";
import styled from "@emotion/styled";
var Container = styled.div(_templateObject());

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Container, null, "Example Component: ", text);
};

export default ExampleComponent;