import _extends$Z from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import TextareaAutosize from 'react-autosize-textarea';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncPaginate from 'react-select-async-paginate';
import CreatableSelect from 'react-select/creatable';
import { Switch, SegmentedControl, defaultTheme } from 'evergreen-ui';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* prettier-ignore */\n/* beautify ignore:start */\n.Logo-module_white__1JjCX {\n  color: #fff; }\n\n.Logo-module_black__3Yv5k {\n  color: #212529; }\n\n.Logo-module_blue__1CBpI {\n  color: #1269db; }\n\n.Logo-module_darkblue__H2TFN {\n  color: #193278; }\n\n.Logo-module_darkgray__35Ap8 {\n  color: #626e7a; }\n\n.Logo-module_logo__2-Ewj {\n  width: 180px; }\n\n.Logo-module_hdLogo__2nNTV {\n  width: 155px; }\n";
var Styles = {"white":"Logo-module_white__1JjCX","black":"Logo-module_black__3Yv5k","blue":"Logo-module_blue__1CBpI","darkblue":"Logo-module_darkblue__H2TFN","darkgray":"Logo-module_darkgray__35Ap8","logo":"Logo-module_logo__2-Ewj","hdLogo":"Logo-module_hdLogo__2nNTV"};
styleInject(css_248z);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var HireDigital = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 400 80"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.565 61.913V35.821H42.61v26.092h9.565V0h-9.565v26.976H9.565V0H0v61.913zm61.392-49.391v-9.74h-9.74v9.74zm-.696 48.695V19.478h-9.044v41.74zM96.93 18.783c1.806 0 3.457.3 4.95.899l.382.161-.112.079a19.797 19.797 0 00-2.926 2.562 20.922 20.922 0 00-3.315 4.62l.087.033c-.796-.31-1.68-.464-2.65-.464-2.032 0-3.66.629-4.884 1.885-1.156 1.187-1.767 2.752-1.831 4.695l-.006.347v27.617h-9.408V19.66h9.408v6.05l.121-.311c1.769-4.41 5.163-6.615 10.183-6.615zm21.896 0c5.438 0 9.892 1.658 13.363 4.976 3.47 3.318 5.206 7.742 5.206 13.271 0 1.294-.114 2.702-.343 4.225l-.09.577h-29.069l.005.412c.08 3.814 1.294 6.732 3.64 8.755 2.545 2.038 5.437 3.056 8.677 3.056 5.959 0 9.635-2.801 11.028-8.404l.078-.327 7.81 3.056-.142.413c-3.062 8.747-9.35 13.12-18.861 13.12-6.363 0-11.511-1.979-15.445-5.937-3.934-3.958-5.9-9.255-5.9-15.89 0-6.054 1.865-11.117 5.596-15.192 3.731-4.074 8.547-6.111 14.447-6.111zm-.086 7.857c-2.835 0-5.25.815-7.246 2.445-1.909 1.559-3.09 3.65-3.543 6.274l-.058.361h20.391l.087-.785-.005-.331c-.075-2.405-.97-4.318-2.685-5.737-1.793-1.485-4.107-2.227-6.941-2.227zM189.642 0l.56.003c9.495.11 16.895 2.997 22.203 8.665 5.411 5.778 8.117 13.355 8.117 22.73 0 8.963-2.75 16.29-8.25 21.98-5.39 5.576-12.742 8.42-22.058 8.532l-.572.003H166.26V0h23.38zm0 8.845h-13.676v44.223h13.675c6.588 0 11.764-2.078 15.529-6.235 3.764-4.157 5.646-9.302 5.646-15.434 0-6.722-1.852-12.162-5.558-16.319-3.615-4.055-8.658-6.133-15.129-6.232l-.488-.003zm44.793 3.677v-9.74h-9.74v9.74zm0 48.695V19.478h-9.044v41.74zM258.5 18.783c5.814 0 10.166 2.081 13.057 6.245l.204.301v-5.662h9.282v38.394l-.004.547c-.095 6.352-1.862 11.477-5.3 15.376-3.536 4.01-8.546 6.016-15.029 6.016-10.216 0-16.801-4.233-19.757-12.699l-.134-.394 8.398-3.538.093.382c.678 2.643 1.973 4.668 3.886 6.076 2.003 1.474 4.508 2.211 7.514 2.211 7.257 0 10.94-4.378 11.048-13.134l.003-.4V54.08l-.173.35c-1.128 2.192-2.868 3.918-5.22 5.179-2.475 1.327-5.393 1.99-8.752 1.99-5.422 0-9.946-1.916-13.57-5.75-3.625-3.833-5.437-8.846-5.437-15.039 0-6.428 1.915-11.707 5.746-15.835 3.831-4.128 8.546-6.192 14.145-6.192zm1.503 7.961c-3.536 0-6.439 1.283-8.708 3.849-2.27 2.565-3.404 5.971-3.404 10.217 0 3.893 1.135 7.004 3.404 9.333 2.269 2.33 5.172 3.495 8.708 3.495 3.477 0 6.365-1.239 8.664-3.716 2.298-2.595 3.448-5.81 3.448-9.642 0-3.893-1.15-7.122-3.448-9.687-2.299-2.566-5.187-3.849-8.664-3.849zm39.127-14.222v-9.74h-9.739v9.74zm-.695 48.695V19.478h-9.044v41.74zm26.901.696c4.007 0 7.263-1.154 9.767-3.462 2.504-2.308 3.963-5.536 4.375-9.684l-8.839-1.753c-.353 4.674-2.268 7.011-5.745 7.011-1.532 0-2.799-.496-3.8-1.49-1.002-.993-1.503-2.395-1.503-4.206V27.382h17.301v-7.887h-17.301V6.26h-9.281v13.234h-8.397v7.887h8.397V47.89c0 4.382 1.282 7.815 3.845 10.298s6.29 3.725 11.181 3.725zM360 18.783c5.91 0 10.461 1.44 13.65 4.321 3.093 2.794 4.687 6.696 4.78 11.707l.005.473V61.04h-8.779v-6.985l-.138.338c-.959 2.23-2.58 4.023-4.865 5.381-2.4 1.426-5.385 2.14-8.954 2.14-3.629 0-6.818-1.165-9.569-3.493-2.75-2.328-4.126-5.384-4.126-9.168 0-4.365 1.449-7.668 4.345-9.91 2.897-2.24 6.745-3.36 11.544-3.36 2.414 0 4.68.244 6.8.733l.574.14 4.39 1.047v-3.056l-.005-.331c-.072-2.52-.962-4.52-2.673-5.998-1.785-1.543-4.111-2.314-6.979-2.314-2.692 0-4.93.727-6.715 2.183-1.696 1.382-2.798 3.263-3.305 5.644l-.075.38-8.34-2.183.105-.44c.98-3.925 3.008-7.053 6.084-9.382 3.19-2.415 7.271-3.623 12.246-3.623zm-.615 24.097c-5.15 0-7.725 1.833-7.725 5.5 0 1.688.659 3.056 1.976 4.104 1.316 1.047 3.233 1.571 5.75 1.571 3.101 0 5.588-.771 7.461-2.313 1.795-1.479 2.73-3.505 2.804-6.079l.005-.339v-.436l-3.336-.873-.5-.13c-2.637-.67-4.782-1.005-6.435-1.005zm35.745 19.033V0h-9.043v61.913z"
}))));

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var ContentCo = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$1({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 400 60"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33.066 43.785c-2.216 1.684-5.762 3.103-9.751 3.103-6.471 0-11.081-5.142-11.081-11.259s4.61-11.17 11.08-11.17c4.079 0 7.448 1.419 9.752 3.014V14.708c-2.482-1.241-6.826-2.04-9.751-2.04C9.308 12.67 0 22.599 0 35.63c0 12.943 9.308 23.05 23.315 23.05 3.014 0 7.27-.799 9.751-2.128V43.785zm28.451-31.116c12.943 0 22.96 10.017 22.96 22.96 0 12.943-10.017 23.05-22.96 23.05s-22.96-10.107-22.96-23.05c0-12.943 10.017-22.96 22.96-22.96zm0 11.79c-6.117 0-10.726 5.053-10.726 11.17s4.61 11.259 10.726 11.259c6.206 0 10.638-5.142 10.638-11.259s-4.432-11.17-10.638-11.17zm43.078-10.903H92.539v44.147h12.056v-25.62c.266-4.698 3.103-7.624 7.535-7.624 4.61 0 7.536 3.28 7.536 8.156v25.088h12.145V29.246c0-9.485-6.117-16.577-15.603-16.577-5.496 0-9.22 2.66-11.613 6.471v-5.585zm52.031 44.147V23.839h7.447V13.556h-7.447V1.322l-11.347 2.57v9.664h-7.446v10.283h6.737v33.864zm32.706-45.034c12.766 0 20.656 9.574 20.656 21.01 0 1.862-.355 4.344-.71 5.762h-29.963c1.064 5.053 5.496 8.333 11.702 8.333 5.496 0 10.992-1.595 14.982-4.166V55.22c-3.901 2.039-9.575 3.457-15.957 3.457-13.12 0-22.783-9.308-22.783-23.049 0-12.943 9.308-22.96 22.073-22.96zm-.088 10.017c-5.32 0-9.309 3.458-9.929 7.624h19.06c-.178-4.52-3.99-7.624-9.131-7.624zm40.498-9.13h-12.056v44.147h12.056v-25.62c.266-4.698 3.103-7.624 7.535-7.624 4.61 0 7.536 3.28 7.536 8.156v25.088h12.145V29.246c0-9.485-6.117-16.577-15.603-16.577-5.496 0-9.22 2.66-11.613 6.471v-5.585zm52.032 44.147V23.839h7.446V13.556h-7.447V1.322l-11.347 2.57v9.664h-7.446v10.283h6.737v33.864zm10.809-7.27c0 4.7 3.457 8.157 8.156 8.157 4.787 0 8.333-3.458 8.333-8.156 0-4.787-3.546-8.333-8.333-8.333-4.699 0-8.156 3.546-8.156 8.333zm55.666-6.648c-2.216 1.684-5.762 3.103-9.751 3.103-6.472 0-11.082-5.142-11.082-11.259s4.61-11.17 11.082-11.17c4.078 0 7.446 1.419 9.751 3.014V14.708c-2.482-1.241-6.826-2.04-9.751-2.04-14.007 0-23.315 9.93-23.315 22.961 0 12.943 9.308 23.05 23.315 23.05 3.014 0 7.269-.799 9.751-2.128V43.785zm28.45-31.116c12.944 0 22.961 10.017 22.961 22.96 0 12.943-10.017 23.05-22.96 23.05s-22.96-10.107-22.96-23.05c0-12.943 10.017-22.96 22.96-22.96zm0 11.79c-6.116 0-10.726 5.053-10.726 11.17s4.61 11.259 10.727 11.259c6.205 0 10.638-5.142 10.638-11.259s-4.433-11.17-10.638-11.17z",
  fill: "currentColor",
  fillRule: "evenodd"
})));

var Logo = function Logo(_ref) {
  var className = _ref.className,
      type = _ref.type,
      _ref$site = _ref.site,
      site = _ref$site === void 0 ? process.env.NEXT_PUBLIC_SITE_ID || '1' : _ref$site,
      props = _objectWithoutProperties(_ref, ["className", "type", "site"]);

  var Component = site === '2' ? HireDigital : ContentCo;
  var logoSize = site === '2' ? Styles.hdLogo : Styles.logo;
  return /*#__PURE__*/React.createElement(Component, _extends$Z({
    className: classNames(logoSize, className, type)
  }, props));
};

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};
Logo.Type = {
  WHITE: Styles.white,
  BLACK: Styles.black,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  DARKGRAY: Styles.darkgray
};

var css_248z$1 = "/* prettier-ignore */\n/* beautify ignore:start */\n@keyframes Loader-module_spin__LpOfZ {\n  to {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes Loader-module_spin__LpOfZ {\n  to {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes Loader-module_checkmark__3Wc2t {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1; }\n  20% {\n    height: 0;\n    width: 25px;\n    opacity: 1; }\n  40% {\n    height: 50px;\n    width: 25px;\n    opacity: 1; }\n  100% {\n    height: 50px;\n    width: 25px;\n    opacity: 1; } }\n\n@keyframes Loader-module_checkmark__3Wc2t {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1; }\n  20% {\n    height: 0;\n    width: 25px;\n    opacity: 1; }\n  40% {\n    height: 50px;\n    width: 25px;\n    opacity: 1; }\n  100% {\n    height: 50px;\n    width: 25px;\n    opacity: 1; } }\n\n.Loader-module_loader__1Wyo3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n  position: relative;\n  overflow: hidden;\n  width: 70.72px;\n  height: 70.72px; }\n  .Loader-module_loader__1Wyo3.Loader-module_large__2Kqju {\n    width: 70.72px;\n    height: 70.72px; }\n  .Loader-module_loader__1Wyo3.Loader-module_small__1ziqy {\n    width: 21.22px;\n    height: 21.22px; }\n  .Loader-module_loader__1Wyo3 .Loader-module_checkmark__3Wc2t {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: Loader-module_checkmark__3Wc2t;\n            animation-name: Loader-module_checkmark__3Wc2t;\n    transform: scaleX(-1) rotate(135deg);\n    height: 50px;\n    width: 25px;\n    transform-origin: left top;\n    border-right: 3px solid #5cb85c;\n    border-top: 3px solid #5cb85c;\n    left: 7px;\n    top: 35px;\n    position: absolute; }\n  .Loader-module_loader__1Wyo3 .Loader-module_error__3xEKa {\n    width: 50px;\n    height: 50px; }\n    .Loader-module_loader__1Wyo3 .Loader-module_error__3xEKa:before, .Loader-module_loader__1Wyo3 .Loader-module_error__3xEKa:after {\n      position: absolute;\n      content: ' ';\n      height: 50px;\n      width: 2px;\n      left: 34.35px;\n      background-color: #f00; }\n    .Loader-module_loader__1Wyo3 .Loader-module_error__3xEKa:before {\n      transform: rotate(45deg); }\n    .Loader-module_loader__1Wyo3 .Loader-module_error__3xEKa:after {\n      transform: rotate(-45deg); }\n  .Loader-module_loader__1Wyo3 .Loader-module_spinner__1RNuN {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 3px solid #8cc0f0;\n    border-radius: 50%;\n    border-top-color: #1269db;\n    animation: Loader-module_spin__LpOfZ 1s ease-in-out infinite;\n    -webkit-animation: Loader-module_spin__LpOfZ 1s ease-in-out infinite; }\n  .Loader-module_loader__1Wyo3.Loader-module_large__2Kqju .Loader-module_spinner__1RNuN {\n    width: 50px;\n    height: 50px; }\n  .Loader-module_loader__1Wyo3.Loader-module_small__1ziqy .Loader-module_spinner__1RNuN {\n    width: 15px;\n    height: 15px; }\n  .Loader-module_loader__1Wyo3.Loader-module_white__3ZIZK .Loader-module_spinner__1RNuN {\n    border: 3px solid #fff;\n    border-top-color: #8cc0f0; }\n  .Loader-module_loader__1Wyo3.Loader-module_blue__14W3S .Loader-module_spinner__1RNuN {\n    border: 3px solid #8cc0f0;\n    border-top-color: #1269db; }\n\n.Loader-module_full__1yGGp {\n  margin: auto;\n  width: 100%; }\n\n.Loader-module_container__1GovT {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  pointer-events: none;\n  top: 0; }\n";
var Styles$1 = {"loader":"Loader-module_loader__1Wyo3","large":"Loader-module_large__2Kqju","small":"Loader-module_small__1ziqy","checkmark":"Loader-module_checkmark__3Wc2t","error":"Loader-module_error__3xEKa","spinner":"Loader-module_spinner__1RNuN","spin":"Loader-module_spin__LpOfZ","white":"Loader-module_white__3ZIZK","blue":"Loader-module_blue__14W3S","full":"Loader-module_full__1yGGp","container":"Loader-module_container__1GovT"};
styleInject(css_248z$1);

var Loader = function Loader(_ref) {
  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      type = _ref.type,
      isError = _ref.isError,
      isCompleted = _ref.isCompleted,
      props = _objectWithoutProperties(_ref, ["className", "size", "color", "type", "isError", "isCompleted"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$1.loader, className, size, color, type)
  }, props), !isError && !isCompleted && /*#__PURE__*/React.createElement("div", {
    className: Styles$1.spinner
  }), isCompleted && /*#__PURE__*/React.createElement("div", {
    className: classNames(Styles$1.checkmark)
  }), isError && /*#__PURE__*/React.createElement("div", {
    className: classNames(Styles$1.error)
  }));
};

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  isCompleted: PropTypes.bool,
  isError: PropTypes.bool
};
Loader.defaultProps = {
  isCompleted: false,
  color: Styles$1.blue
};
Loader.Color = {
  WHITE: Styles$1.white,
  BLUE: Styles$1.blue
};
Loader.Size = {
  LARGE: Styles$1.large,
  SMALL: Styles$1.small
};
Loader.Type = {
  INLINE: Styles$1.inline,
  FULL: Styles$1.full
};
Loader.Styles = Styles$1;

var css_248z$2 = "/* prettier-ignore */\n/* beautify ignore:start */\n.Button-module_btn__173LG {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 0 18px;\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-width: 75px;\n  min-height: 42px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n  overflow: hidden;\n  line-height: 38px;\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease-in-out;\n  will-change: background;\n  word-wrap: break-word;\n  outline: none;\n  background-color: transparent; }\n  .Button-module_btn__173LG ~ .Button-module_btn__173LG {\n    margin-left: 10px; }\n  .Button-module_btn__173LG[disabled] {\n    cursor: default;\n    opacity: 0.5; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .Button-module_btn__173LG {\n      height: 42px; } }\n  .Button-module_btn__173LG:focus {\n    transition: none;\n    outline: none;\n    box-shadow: 0 0 0 3px #c4e0fb; }\n\n.Button-module_blue__3scNy {\n  background-color: #1269db;\n  color: #fff; }\n  .Button-module_blue__3scNy:hover {\n    background-color: #0e52ac; }\n  .Button-module_blue__3scNy:active {\n    background-color: #0a3c7d; }\n\n.Button-module_darkblue__spEK8 {\n  background-color: #193278;\n  color: #fff; }\n  .Button-module_darkblue__spEK8:hover {\n    background-color: #10204e; }\n  .Button-module_darkblue__spEK8:active {\n    background-color: #070f24; }\n\n.Button-module_lightGray__2B-hB {\n  background-color: #edf0f3;\n  color: #3f474f; }\n  .Button-module_lightGray__2B-hB:hover {\n    background-color: #ced7df; }\n  .Button-module_lightGray__2B-hB:active {\n    background-color: #b0bdca; }\n\n.Button-module_gray__10NAk {\n  background-color: #3f474f;\n  color: #fff; }\n  .Button-module_gray__10NAk:hover {\n    background-color: #282e33; }\n  .Button-module_gray__10NAk:active {\n    background-color: #121416; }\n\n.Button-module_white__1LXIC {\n  background-color: #fff;\n  color: #193278; }\n  .Button-module_white__1LXIC:hover {\n    background-color: #eff7ff;\n    color: #193278; }\n  .Button-module_white__1LXIC:active {\n    background-color: #c4e0fb;\n    color: #193278; }\n\n.Button-module_blueOutline__3sFRD {\n  color: #1269db;\n  border-color: #1269db;\n  background: transparent; }\n  .Button-module_blueOutline__3sFRD:hover {\n    border-color: #0e52ac;\n    color: #0e52ac; }\n  .Button-module_blueOutline__3sFRD:active {\n    border-color: #0a3c7d;\n    color: #0a3c7d; }\n\n.Button-module_redOutline__3uZzc {\n  color: #c66;\n  border-color: #c66;\n  background: transparent; }\n  .Button-module_redOutline__3uZzc:hover {\n    border-color: #bf4040;\n    color: #bf4040; }\n  .Button-module_redOutline__3uZzc:active {\n    border-color: #993333;\n    color: #993333; }\n\n.Button-module_whiteBlueOutline__2TZcV {\n  color: #0751b3;\n  border-color: #fff;\n  background-color: #fff;\n  border-color: #0751b3;\n  word-break: break-word;\n  white-space: normal; }\n  .Button-module_whiteBlueOutline__2TZcV:hover {\n    background-color: #eff7ff;\n    border-color: #053b82;\n    color: #053b82; }\n  .Button-module_whiteBlueOutline__2TZcV:active {\n    background-color: #eff7ff;\n    border-color: #032551;\n    color: #032551; }\n\n.Button-module_fullwidth__GxWlw {\n  width: 100%;\n  margin: 6px 0px; }\n\n.Button-module_large__1nbMn {\n  height: 56px; }\n\n.Button-module_fullwidthLarge__rLxyj {\n  width: 100%;\n  margin: 6px 0px;\n  height: 56px; }\n";
var Styles$2 = {"btn":"Button-module_btn__173LG","blue":"Button-module_blue__3scNy","darkblue":"Button-module_darkblue__spEK8","lightGray":"Button-module_lightGray__2B-hB","gray":"Button-module_gray__10NAk","white":"Button-module_white__1LXIC","blueOutline":"Button-module_blueOutline__3sFRD","redOutline":"Button-module_redOutline__3uZzc","whiteBlueOutline":"Button-module_whiteBlueOutline__2TZcV","fullwidth":"Button-module_fullwidth__GxWlw","large":"Button-module_large__1nbMn","fullwidthLarge":"Button-module_fullwidthLarge__rLxyj"};
styleInject(css_248z$2);

var Type = {
  WHITE: Styles$2.white,
  WHITE_BLUE_OUTLINE: Styles$2.whiteBlueOutline,
  BLUE_OUTLINE: Styles$2.blueOutline,
  RED_OUTLINE: Styles$2.redOutline,
  LIGHT_GRAY: Styles$2.lightGray,
  BLUE: Styles$2.blue,
  DARKBLUE: Styles$2.darkblue,
  GRAY: Styles$2.gray
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
      props = _objectWithoutProperties(_ref, ["type", "size", "className", "children", "content", "disabled", "isLoading", "element"]);

  var isLight = lightTypes.filter(function (l) {
    return l === type;
  });
  return /*#__PURE__*/React.createElement(Elem, _extends$Z({
    type: "button",
    className: classNames(Styles$2.btn, className, type, size),
    disabled: disabled
  }, props), isLoading && /*#__PURE__*/React.createElement(Loader, {
    style: {
      marginRight: '10px'
    },
    color: (isLight === null || isLight === void 0 ? void 0 : isLight.length) ? Loader.Color.BLUE : Loader.Color.WHITE,
    size: Loader.Size.SMALL
  }), content || children);
};

Button.Type = Type;
Button.Size = {
  FULLWIDTH: Styles$2.fullwidth,
  FULLWIDTH_LARGE: Styles$2.fullwidthLarge,
  LARGE: Styles$2.large
};
Button.Styles = Styles$2;
Button.defaultProps = {
  element: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  asLink: PropTypes.bool
};

var css_248z$3 = ".Styles-module_inputGroup__2c-wT {\n  display: flex;\n  width: 100%; }\n  .Styles-module_inputGroup__2c-wT .Styles-module_inputGroup__2c-wT {\n    flex-basis: 50%;\n    margin-left: 10px; }\n  .Styles-module_inputGroup__2c-wT .Styles-module_inputContainer__1T-BE {\n    flex: 50%; }\n  .Styles-module_inputGroup__2c-wT .Styles-module_inputContainer__1T-BE ~ .Styles-module_inputContainer__1T-BE {\n    margin-left: 10px; }\n\n.Styles-module_inputContainer__1T-BE {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 15px; }\n";
var Styles$3 = {"inputGroup":"Styles-module_inputGroup__2c-wT","inputContainer":"Styles-module_inputContainer__1T-BE"};
styleInject(css_248z$3);

var InputContainer = function InputContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$3.inputContainer, className)
  }, props), children);
};

var InputGroup = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$3.inputGroup, className)
  }, props), children);
};

var css_248z$4 = "/* prettier-ignore */\n/* beautify ignore:start */\n.Input-module_container__7_hNh {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 50px;\n  border-radius: 4px;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #c3ced9; }\n  .Input-module_container__7_hNh.Input-module_containerError__1VTCs {\n    border: 1px solid #ec392f; }\n\n.Input-module_label__29rQT {\n  position: absolute;\n  top: 13px;\n  left: 12px;\n  font-size: 16px;\n  line-height: 24px;\n  pointer-events: none;\n  color: #084b8a;\n  transition: 0.1s all ease-in-out;\n  margin-bottom: 0;\n  cursor: text; }\n  .Input-module_label__29rQT.Input-module_error__1F01K {\n    color: #ec392f; }\n\n.Input-module_base__2s2cs {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: none;\n  position: relative;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: normal;\n  background-color: transparent;\n  border-radius: 4px;\n  outline: none;\n  color: #212529;\n  vertical-align: top;\n  -webkit-appearance: none;\n  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out; }\n  .Input-module_base__2s2cs:-ms-input-placeholder {\n    color: transparent; }\n  .Input-module_base__2s2cs::-moz-placeholder {\n    color: transparent; }\n  .Input-module_base__2s2cs::placeholder {\n    color: transparent; }\n  .Input-module_base__2s2cs:not(:-moz-placeholder-shown) {\n    padding-top: 20px;\n    padding-bottom: 4px; }\n  .Input-module_base__2s2cs:not(:-ms-input-placeholder) {\n    padding-top: 20px;\n    padding-bottom: 4px; }\n  .Input-module_base__2s2cs:not(:placeholder-shown),\n  .Input-module_error__1F01K .Input-module_base__2s2cs {\n    padding-top: 20px;\n    padding-bottom: 4px; }\n  .Input-module_base__2s2cs:not(:-moz-placeholder-shown) ~ .Input-module_label__29rQT {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px; }\n  .Input-module_base__2s2cs:not(:-ms-input-placeholder) ~ .Input-module_label__29rQT {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px; }\n  .Input-module_base__2s2cs:not(:placeholder-shown) ~ .Input-module_label__29rQT {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px; }\n  .Input-module_base__2s2cs:not(:-moz-placeholder-shown) ~ .Input-module_label__29rQT.Input-module_error__1F01K {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px;\n    color: #ec392f; }\n  .Input-module_base__2s2cs:not(:-ms-input-placeholder) ~ .Input-module_label__29rQT.Input-module_error__1F01K {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px;\n    color: #ec392f; }\n  .Input-module_error__1F01K .Input-module_base__2s2cs ~ .Input-module_label__29rQT,\n  .Input-module_base__2s2cs:not(:placeholder-shown) ~ .Input-module_label__29rQT.Input-module_error__1F01K {\n    left: 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    top: 4px;\n    color: #ec392f; }\n  .Input-module_base__2s2cs:disabled {\n    background: #f8f9fa; }\n  .Input-module_base__2s2cs:focus {\n    transition: none;\n    outline: none;\n    box-shadow: 0 0 0 3px #c4e0fb; }\n\n.Input-module_quill__3oqSZ {\n  min-height: 108px;\n  padding: 12px 12px 12px 12px; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .Input-module_quill__3oqSZ {\n      padding: 0; } }\n\n.Input-module_textArea__37YXB {\n  min-height: 108px;\n  padding: 12px 12px 12px 12px;\n  resize: vertical;\n  position: relative;\n  overflow: auto; }\n\n.Input-module_input__1IPSm {\n  padding: 12px 12px 12px 12px;\n  min-height: 48px; }\n\n.Input-module_inputActive__18Dfx {\n  padding: 20px 12px 4px 12px; }\n\n.Input-module_select__21Aar {\n  padding: 0 !important; }\n  .Input-module_select__21Aar + .Input-module_label__29rQT {\n    opacity: 0; }\n    .Input-module_select__21Aar + .Input-module_label__29rQT.Input-module_hasValue__yjvbk {\n      opacity: 1;\n      left: 12px;\n      font-weight: 600;\n      font-size: 12px;\n      line-height: 18px;\n      top: 4px; }\n    .Input-module_select__21Aar + .Input-module_label__29rQT.Input-module_error__1F01K {\n      opacity: 1;\n      color: #ec392f; }\n  .Input-module_select__21Aar .s-contact__loading-indicator > span {\n    width: 5px;\n    height: 5px;\n    border-radius: 10px; }\n    .Input-module_select__21Aar .s-contact__loading-indicator > span ~ span {\n      margin-left: 5px; }\n  .Input-module_select__21Aar .s-contact__indicator {\n    color: #c3ced9;\n    cursor: pointer;\n    border-left: 1px solid #d8dfe6;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .Input-module_select__21Aar .s-contact__indicator:hover {\n      background-color: #f2f6fa; }\n  .Input-module_select__21Aar .s-contact__control {\n    border: 0;\n    min-height: 48px;\n    transition: 0.3s box-shadow ease-in-out; }\n    .Input-module_select__21Aar .s-contact__control.s-contact__control--is-focused {\n      transition: none;\n      outline: none;\n      box-shadow: 0 0 0 3px #c4e0fb; }\n  .Input-module_select__21Aar .s-contact__placeholder {\n    color: #084b8a;\n    transition: 0.1s all ease-in-out; }\n    .Input-module_containerError__1VTCs .Input-module_select__21Aar .s-contact__placeholder {\n      display: none; }\n  .Input-module_select__21Aar .s-contact__indicator-separator {\n    display: none !important; }\n  .Input-module_select__21Aar .s-contact__menu {\n    z-index: 4;\n    margin-top: 3px; }\n  .Input-module_select__21Aar .s-contact__option {\n    font-size: 14px; }\n  .Input-module_select__21Aar .s-contact__value-container {\n    padding: 0;\n    line-height: 24px;\n    min-height: 48px;\n    padding: 12px; }\n    .Input-module_select__21Aar .s-contact__value-container.s-contact__value-container--is-multi {\n      padding: 12px; }\n    .Input-module_select__21Aar .s-contact__value-container.s-contact__value-container--has-value {\n      padding: 20px 12px 4px 12px; }\n      .Input-module_select__21Aar .s-contact__value-container.s-contact__value-container--has-value.s-contact__value-container--is-multi {\n        padding: 20px 10px 4px 10px; }\n  .Input-module_select__21Aar .s-contact__single-value {\n    top: initial;\n    transform: initial; }\n  .Input-module_select__21Aar .s-contact__multi-value-orderable {\n    padding: 4px; }\n    .Input-module_select__21Aar .s-contact__multi-value-orderable ~ div > .s-contact__input {\n      margin-left: 0; }\n  .Input-module_select__21Aar .s-contact__multi-value {\n    background: #edf0f3;\n    white-space: nowrap; }\n    .Input-module_select__21Aar .s-contact__multi-value ~ div > .s-contact__input {\n      margin-left: 0; }\n  .Input-module_select__21Aar .s-contact__multi-value__label {\n    padding: 0 4px 0 5px; }\n  .Input-module_select__21Aar .s-contact__multi-value__remove {\n    cursor: pointer; }\n\n.Input-module_multiContainer__2Mq0y {\n  height: auto !important;\n  min-height: 50px; }\n\n.Input-module_containerMultiLink__3-CKd .Input-module_addButton__xe-Dz {\n  position: absolute;\n  right: 16px;\n  top: 10px;\n  margin: 0;\n  padding: 0 16px;\n  min-width: 0;\n  height: 38px;\n  min-height: 38px;\n  line-height: 38px; }\n  .Input-module_containerMultiLink__3-CKd .Input-module_addButton__xe-Dz:disabled {\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none; }\n\n.Input-module_linkList__3mr1q {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  padding-top: 0; }\n\n.Input-module_link__3k_SN {\n  padding: 5px 8px;\n  font-size: 14px;\n  border-radius: 4px;\n  display: flex;\n  overflow: hidden; }\n  .Input-module_link__3k_SN .Input-module_remove__oKrKC {\n    margin-left: auto;\n    padding: 0 4px;\n    display: none;\n    flex-shrink: 0; }\n  .Input-module_link__3k_SN a {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n  .Input-module_link__3k_SN a:link,\n  .Input-module_link__3k_SN a:visited {\n    color: #1269db; }\n  .Input-module_link__3k_SN:hover {\n    background-color: #f2f6fa; }\n    .Input-module_link__3k_SN:hover .Input-module_remove__oKrKC {\n      display: block;\n      cursor: pointer; }\n      .Input-module_link__3k_SN:hover .Input-module_remove__oKrKC:hover {\n        color: #1269db;\n        text-decoration: underline; }\n    .Input-module_link__3k_SN:hover a {\n      color: #193278; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualInput__1pVfj {\n  border: 0;\n  flex-basis: 50%;\n  flex-grow: 1; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualInputTextInput__39H-P {\n  padding: 20px 12px 4px 12px;\n  width: 100%; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualInputTextInput__39H-P:-ms-input-placeholder {\n    color: #d8dfe6; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualInputTextInput__39H-P::-moz-placeholder {\n    color: #d8dfe6; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualInputTextInput__39H-P::placeholder {\n    color: #d8dfe6; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__single-value {\n  position: initial; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__indicators {\n  height: 100% !important;\n  align-items: flex-end; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__indicator-separator {\n  display: none !important; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__indicator {\n  border-left: 0;\n  padding: 14px 6px; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container {\n  padding: 12px 0 !important;\n  height: 100% !important;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container div {\n    line-height: normal !important;\n    margin: 0 !important;\n    width: 100%; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container .s-contact__single-value {\n    height: 20px;\n    text-align: right; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container > div:last-child {\n    position: absolute;\n    top: 0; }\n  .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container .s-contact__input {\n    width: 100%;\n    display: flex !important;\n    align-items: flex-end !important;\n    justify-content: flex-end !important;\n    padding: 0 !important; }\n    .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container .s-contact__input > div {\n      display: none !important; }\n    .Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__value-container .s-contact__input > input {\n      width: 100% !important;\n      height: 20px !important;\n      margin: 0 0 12px 0 !important;\n      position: static;\n      text-align: right; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualSelect__38iVx .s-contact__menu {\n  min-width: 150px !important;\n  right: 0; }\n\n.Input-module_dualContainer__Vn-6k .Input-module_dualInput__1pVfj + .Input-module_label__29rQT.Input-module_error__1F01K {\n  color: #ec392f; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_active__17Kv1 .Input-module_label__29rQT {\n  top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #084b8a; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_shrink__2j5O6 .Input-module_dualInput__1pVfj {\n  flex-basis: 60% !important; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_shrink__2j5O6 .Input-module_dualSelect__38iVx {\n  flex-basis: 40% !important; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_shrink__2j5O6 .Input-module_base__2s2cs {\n  padding-right: 0; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_shrink__2j5O6 .s-contact__indicators {\n  display: none !important; }\n\n.Input-module_dualContainer__Vn-6k.Input-module_shrink__2j5O6 .s-contact__value-container {\n  padding-right: 10px !important; }\n";
var Styles$4 = {"container":"Input-module_container__7_hNh","containerError":"Input-module_containerError__1VTCs","label":"Input-module_label__29rQT","error":"Input-module_error__1F01K","base":"Input-module_base__2s2cs","quill":"Input-module_quill__3oqSZ","textArea":"Input-module_textArea__37YXB","input":"Input-module_input__1IPSm","inputActive":"Input-module_inputActive__18Dfx","select":"Input-module_select__21Aar","hasValue":"Input-module_hasValue__yjvbk","multiContainer":"Input-module_multiContainer__2Mq0y","containerMultiLink":"Input-module_containerMultiLink__3-CKd","addButton":"Input-module_addButton__xe-Dz","linkList":"Input-module_linkList__3mr1q","link":"Input-module_link__3k_SN","remove":"Input-module_remove__oKrKC","dualContainer":"Input-module_dualContainer__Vn-6k","dualInput":"Input-module_dualInput__1pVfj","dualInputTextInput":"Input-module_dualInputTextInput__39H-P","dualSelect":"Input-module_dualSelect__38iVx","active":"Input-module_active__17Kv1","shrink":"Input-module_shrink__2j5O6"};
styleInject(css_248z$4);

var TextInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      name = _ref.name,
      required = _ref.required,
      id = _ref.id,
      placeholder = _ref.placeholder,
      mask = _ref.mask,
      label = _ref.label,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["className", "disabled", "name", "required", "id", "placeholder", "mask", "label", "error"]);

  var Elem = mask ? InputMask : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(Styles$4.container, disabled && Styles$4.disabled, error && Styles$4.containerError, className)
  }, /*#__PURE__*/React.createElement(Elem, _extends$Z({
    ref: ref,
    className: classNames(Styles$4.base, Styles$4.input),
    id: id,
    name: name,
    placeholder: placeholder || label,
    required: required,
    disabled: disabled,
    mask: mask
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    className: classNames(Styles$4.label, error && Styles$4.error)
  }, error || label));
});
TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string
};
TextInput.defaultProps = {
  type: 'text'
};

var TextArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      placeholder = _ref.placeholder,
      label = _ref.label,
      required = _ref.required,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["disabled", "name", "placeholder", "label", "required", "error"]);

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(Styles$4.container, props.className, disabled && Styles$4.disabled)
  }, /*#__PURE__*/React.createElement(TextareaAutosize, _extends$Z({
    ref: ref,
    className: classNames(Styles$4.base, Styles$4.textArea),
    id: name,
    name: name,
    placeholder: placeholder || label,
    required: required,
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    className: classNames(Styles$4.label, error && Styles$4.error)
  }, error || label));
});
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  predicted: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var customStyles = {
  option: function option(provided, state) {
    return _objectSpread({}, provided);
  },
  input: function input(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      margin: 0,
      padding: 0
    });
  },
  menu: function menu(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      margin: '2px 0'
    });
  },
  placeholder: function placeholder(styles) {
    return _objectSpread({}, styles);
  },
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      boxShadow: 'none',
      ':hover': {
        borderColor: '#a1aab3'
      }
    });
  },
  valueContainer: function valueContainer(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      padding: '2px 15px',
      fontSize: '16px'
    });
  },
  singleValue: function singleValue(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      marginLeft: '0',
      fontSize: '16px'
    });
  }
};

var SelectInput = function SelectInput(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      className = _ref.className,
      label = _ref.label,
      onChange = _ref.onChange,
      classNamePrefix = _ref.classNamePrefix,
      props = _objectWithoutProperties(_ref, ["disabled", "name", "className", "label", "onChange", "classNamePrefix"]);

  var _useState = useState(props.value || props.defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var containerClass = classNames(Styles$4.container, className, props.isMulti && (value === null || value === void 0 ? void 0 : value.length) && Styles$4.active, !props.isMulti && Object.keys(value || {}).length && Styles$4.active, disabled && Styles$4.locked, props.error && Styles$4.containerError, props.isMulti && Styles$4.multiContainer);
  useEffect(function () {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);
  var fieldClass = classNames(Styles$4.select, props.isMulti && Styles$4.multi, props.error && Styles$4.error);
  var labelClass = classNames(Styles$4.label, props.error && Styles$4.error, props.isMulti && (value === null || value === void 0 ? void 0 : value.length) && Styles$4.hasValue, !props.isMulti && Object.keys(value || {}).length && Styles$4.hasValue);

  var handleChange = function handleChange(event, _ref2) {
    var action = _ref2.action,
        name = _ref2.name;
    setValue(event); // Pass any other change events from parent

    try {
      onChange(_objectSpread(_objectSpread({}, event), {}, {
        target: {
          name: name,
          value: event
        },
        action: action
      }));
    } catch (err) {}
  };

  var CustomSelect = props.isPaginated ? AsyncPaginate : props.isAsync ? AsyncSelect : Select;
  var SelectComponent = props.isCreatable ? CreatableSelect : Select;
  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: containerClass
  }, {
    'data-test-id': props['data-test-id']
  }), /*#__PURE__*/React.createElement(CustomSelect, _extends$Z({
    className: fieldClass,
    styles: customStyles,
    name: name,
    placeholder: label,
    selectValue: value,
    defaultValue: value,
    onChange: handleChange,
    additional: {
      page: 1
    },
    SelectComponent: SelectComponent,
    createOptionPosition: "first",
    isDisabled: disabled,
    classNamePrefix: classNamePrefix,
    closeMenuOnSelect: !props.isMulti
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    className: labelClass
  }, props.error || label));
};

SelectInput.propTypes = {
  classNamePrefix: PropTypes.string,
  'data-test-id': PropTypes.string
};
SelectInput.defaultProps = {
  menuPlacement: 'auto',
  classNamePrefix: 's-contact',
  isAsync: false,
  isPaginated: false
};

var css_248z$5 = "/* prettier-ignore */\n/* beautify ignore:start */\n.Card-module_container__19jRJ {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background: #fff;\n  border: 1px solid #d8dfe6;\n  border-radius: 3px;\n  margin-bottom: 20px; }\n\n.Card-module_header__2UPBX {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  font-size: 20px;\n  font-weight: 600;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  min-height: 65px;\n  box-sizing: border-box; }\n\n.Card-module_note__22XAs {\n  padding: 20px;\n  background-color: #d2e5f8;\n  font-size: 14px;\n  border-top: 1px solid #d8dfe6; }\n\n.Card-module_item__1VJRt {\n  margin: 0;\n  padding: 20px;\n  border-top: 1px solid #edf0f3; }\n  .Card-module_item__1VJRt.Card-module_noPaddingLeft__3HajD {\n    padding-left: 0; }\n  .Card-module_item__1VJRt.Card-module_noPadding__2j_hA {\n    padding: 0; }\n  .Card-module_item__1VJRt.Card-module_noBorder__PVp40 {\n    border: 0; }\n\n.Card-module_footer__2zfeT {\n  border-top: 1px solid #d8dfe6;\n  display: flex;\n  padding: 15px 20px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .Card-module_footer__2zfeT.Card-module_right__3RLNc {\n    justify-content: flex-end; }\n\n.Card-module_flex__2VnYC {\n  display: flex; }\n";
var Styles$5 = {"container":"Card-module_container__19jRJ","header":"Card-module_header__2UPBX","note":"Card-module_note__22XAs","item":"Card-module_item__1VJRt","noPaddingLeft":"Card-module_noPaddingLeft__3HajD","noPadding":"Card-module_noPadding__2j_hA","noBorder":"Card-module_noBorder__PVp40","footer":"Card-module_footer__2zfeT","right":"Card-module_right__3RLNc","flex":"Card-module_flex__2VnYC"};
styleInject(css_248z$5);

var CardHeader = function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["className", "children", "title"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$5.header, className)
  }, props), children || title && /*#__PURE__*/React.createElement("span", null, title));
};

CardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

var Note = function Note(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$5.note, className)
  }, props), children);
};

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var CardHeader$1 = function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      right = _ref.right,
      props = _objectWithoutProperties(_ref, ["className", "children", "right"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$5.footer, right && Styles$5.right, className)
  }, props), children);
};

CardHeader$1.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

var CardItem = function CardItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      noPadding = _ref.noPadding,
      noBorder = _ref.noBorder,
      noPaddingLeft = _ref.noPaddingLeft,
      flex = _ref.flex,
      props = _objectWithoutProperties(_ref, ["className", "children", "noPadding", "noBorder", "noPaddingLeft", "flex"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$5.item, _defineProperty({}, Styles$5.flex, flex), _defineProperty({}, Styles$5.noPadding, noPadding), _defineProperty({}, Styles$5.noPaddingLeft, noPaddingLeft), _defineProperty({}, Styles$5.noBorder, noBorder), className)
  }, props), children);
};

CardItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends$Z({
    className: classNames(Styles$5.container, className)
  }, props), children);
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Card.Header = CardHeader;
Card.Note = Note;
Card.Footer = CardHeader$1;
Card.Item = CardItem;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var Drag = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$2({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 10a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM9 10a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z",
  fill: "currentColor"
})));

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var Preview = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$3({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 16c4.97 0 9-6 9-6s-4.03-6-9-6-9 6-9 6 4.03 6 9 6z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "3"
}))));

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var Xero = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$4({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11.639 9.991l6.805-6.822a1.219 1.219 0 00-.869-2.076 1.21 1.21 0 00-.866.363l-6.8 6.795L3.08 1.446a1.219 1.219 0 00-.86-.353A1.22 1.22 0 001 2.31c0 .328.131.636.366.868L8.17 9.982l-6.8 6.813a1.22 1.22 0 101.71 1.735l6.819-6.809 6.793 6.785a1.216 1.216 0 002.102-.838 1.21 1.21 0 00-.354-.86l-6.802-6.817zm40.455-.002c0 1.222.994 2.216 2.217 2.216 1.22 0 2.214-.994 2.214-2.216a2.218 2.218 0 00-2.214-2.216 2.218 2.218 0 00-2.217 2.216"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47.892 9.99a6.424 6.424 0 016.417-6.417 6.424 6.424 0 016.415 6.417 6.423 6.423 0 01-6.415 6.415 6.423 6.423 0 01-6.417-6.415m-2.524 0c0 4.93 4.01 8.94 8.94 8.94s8.944-4.01 8.944-8.94-4.014-8.941-8.943-8.941c-4.93 0-8.941 4.011-8.941 8.941m-.635-8.788l-.375-.001a5.072 5.072 0 00-3.12 1.054 1.222 1.222 0 00-1.19-.959c-.67 0-1.208.537-1.21 1.21l.005 15.058a1.22 1.22 0 001.219 1.215c.67 0 1.217-.545 1.22-1.217V8.303c0-3.086.282-4.332 2.925-4.663.245-.03.51-.025.512-.025.723-.025 1.237-.522 1.237-1.194 0-.672-.549-1.22-1.223-1.22M21.321 8.519c0-.033.003-.068.004-.102a6.459 6.459 0 0112.544.102H21.322zm15.046-.23c-.526-2.488-1.888-4.53-3.962-5.843-3.031-1.925-7.034-1.818-9.963.264-2.388 1.7-3.767 4.479-3.767 7.342 0 .718.087 1.443.267 2.156.902 3.548 3.952 6.234 7.588 6.679 1.08.13 2.13.068 3.217-.214a8.801 8.801 0 002.672-1.14c.865-.556 1.588-1.29 2.287-2.167.015-.016.029-.03.043-.047.486-.602.396-1.46-.138-1.868-.45-.345-1.206-.485-1.8.277a8.244 8.244 0 01-.428.556 6.998 6.998 0 01-1.762 1.422 6.418 6.418 0 01-2.997.757c-3.547-.04-5.445-2.515-6.12-4.282a6.417 6.417 0 01-.272-1.025 2.305 2.305 0 01-.017-.188l12.727-.002c1.745-.037 2.684-1.269 2.425-2.677"
}))));

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var Refresh = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$5({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.481 12.84a7.988 7.988 0 01-1.353 2.302 8 8 0 01-14.034-3.919m.394-3.981a7.986 7.986 0 011.384-2.384 8 8 0 0114.047 4.006",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.895 4.324l-.418 3.979a1 1 0 01-1.099.89L14.4 8.775a1 1 0 01.21-1.99l1.988.21a1 1 0 001.1-.89l.208-1.99a1 1 0 011.99.21zM.105 15.675l.418-3.978a1 1 0 011.099-.89l3.978.418a1 1 0 01-.21 1.99l-1.988-.21a1 1 0 00-1.1.89l-.208 1.99a1 1 0 01-1.99-.21z",
  fill: "currentColor"
}))));

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var Filter = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$6({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.453 2c.277 0 .527.112.708.293a1 1 0 01.03 1.383h0l-5.192 5.662.001 7.445c-.179.645-.405.914-.685 1.066a1.119 1.119 0 01-.844.094h0l-1.832-.703a.999.999 0 01-.44-.334 1 1 0 01-.193-.483h0L8 9.338l-5.19-5.662a.997.997 0 01-.262-.72.997.997 0 01.324-.693A1 1 0 013.546 2h0z",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none"
})));

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var Split = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$7({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("rect", {
  stroke: "currentColor",
  strokeWidth: "2",
  x: "1",
  y: "2",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M4 5h5v10H4zm7 0h5v10h-5z"
}))));

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var Invoice = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$8({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 14v2a2.99 2.99 0 01-.879 2.121A2.99 2.99 0 0116 19h0H5c.426-.321.808-.566 1.121-.879A2.99 2.99 0 007 16h0v-2h12z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 1.203V14H7v2c0 .801-.314 1.53-.826 2.067a2.99 2.99 0 01-2 .928c-.904-.004-1.697-.33-2.266-.87A2.913 2.913 0 011 16h0V1.204l2.429 2.125 2.29-2.004L8.034 3.33l2.255-1.997L12.57 3.33 15 1.203z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M4 10h6v2H4zm0-4h8v2H4z"
}))));

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var Play = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$9({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.068 1.699v16.588a1 1 0 001 1 1 1 0 00.491-.129l14.817-8.361a1 1 0 00.38-1.363 1 1 0 00-.386-.382L3.553.825a1 1 0 00-1.36.389 1 1 0 00-.125.485z",
  fill: "currentColor",
  fillRule: "evenodd"
})));

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var Stop = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$a({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("rect", {
  x: "1",
  y: "1",
  width: "18",
  height: "18",
  rx: "2",
  fill: "currentColor",
  fillRule: "evenodd"
})));

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
var Google = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$b({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.202 8.568h9.44c.104.581.156 1.137.156 1.666 0 1.884-.395 3.566-1.185 5.046a8.554 8.554 0 01-3.379 3.47c-1.462.833-3.14 1.25-5.032 1.25a9.83 9.83 0 01-3.893-.788 9.999 9.999 0 01-3.19-2.129 10.001 10.001 0 01-2.13-3.19C.466 12.661.203 11.363.203 10S.464 7.34.99 6.107a10 10 0 012.129-3.19 10 10 0 013.19-2.13A9.834 9.834 0 0110.202 0c2.604 0 4.84.872 6.706 2.617l-2.722 2.617c-1.067-1.033-2.396-1.55-3.984-1.55-1.12 0-2.155.283-3.106.847A6.236 6.236 0 004.837 6.83c-.555.968-.833 2.025-.833 3.171s.278 2.203.833 3.17a6.235 6.235 0 002.26 2.299c.95.564 1.985.846 3.105.846a6.64 6.64 0 002.083-.312c.634-.209 1.155-.47 1.563-.782a5.653 5.653 0 001.067-1.067c.304-.4.528-.777.671-1.133.143-.356.241-.695.293-1.016h-5.677V8.568z",
  fill: "currentColor"
})));

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
var Facebook = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$c({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.494 6.557H5.41V9.96h2.085v9.989H11.5V9.915h2.796l.295-3.358H11.5V4.642c0-.79.159-1.108.926-1.108h2.17V.051h-2.772C8.84.051 7.5 1.364 7.5 3.875c-.006 2.193-.006 2.682-.006 2.682z",
  fill: "currentColor"
})));

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }
var Twitter = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$d({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.975 3.811a7.993 7.993 0 01-2.352.642 4.106 4.106 0 001.798-2.264 8.125 8.125 0 01-2.597.993 4.106 4.106 0 00-2.988-1.295c-2.641 0-4.585 2.465-3.987 5.025a11.618 11.618 0 01-8.44-4.277 4.107 4.107 0 001.264 5.466 4.107 4.107 0 01-1.855-.51c-.044 1.9 1.314 3.673 3.283 4.063a4.054 4.054 0 01-1.85.07 4.092 4.092 0 003.825 2.842 8.27 8.27 0 01-6.063 1.698 11.566 11.566 0 006.276 1.837c7.598 0 11.893-6.422 11.636-12.176a7.991 7.991 0 002.05-2.114z",
  fill: "currentColor"
})));

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }
var Linkedin = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$e({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.851 2.447c0 1.347-1.085 2.447-2.425 2.447A2.434 2.434 0 010 2.447C0 1.099 1.085 0 2.425 0c1.341 0 2.426 1.1 2.426 2.447zm-.354 4.177h-4.1v13.248h4.1zm6.553 0H7.12v13.248h3.93v-6.95c0-1.865.858-2.972 2.496-2.972 1.51 0 2.234 1.064 2.234 2.972v6.95h4.078v-8.39c0-3.546-2.007-5.262-4.823-5.262-2.808 0-3.993 2.191-3.993 2.191V6.624h.008z",
  fill: "currentColor"
})));

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }
var Instagram = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$f({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 1.804c2.67 0 2.983.012 4.04.056.971.045 1.502.207 1.854.347.47.179.799.396 1.15.748.353.352.565.682.75 1.151.139.352.301.883.346 1.855.05 1.056.056 1.369.056 4.039s-.012 2.983-.056 4.04c-.045.971-.207 1.502-.347 1.854-.178.47-.396.799-.748 1.15a3.112 3.112 0 01-1.151.75c-.352.139-.883.301-1.855.346-1.056.05-1.369.056-4.039.056s-2.983-.012-4.04-.056c-.971-.045-1.502-.207-1.854-.347a3.045 3.045 0 01-1.15-.748 3.112 3.112 0 01-.75-1.151c-.139-.352-.301-.883-.346-1.855-.05-1.056-.056-1.369-.056-4.039s.012-2.983.056-4.04c.045-.971.207-1.502.347-1.854.178-.47.396-.799.748-1.15a3.112 3.112 0 011.151-.75c.352-.139.883-.301 1.855-.346C7.017 1.816 7.33 1.804 10 1.804m0-1.798c-2.715 0-3.056.01-4.123.061-1.061.05-1.793.218-2.425.464a4.96 4.96 0 00-1.77 1.15A4.839 4.839 0 00.53 3.454C.285 4.089.117 4.816.067 5.877.017 6.944.006 7.285.006 10c0 2.715.01 3.056.061 4.123.05 1.061.218 1.793.464 2.425a4.96 4.96 0 001.15 1.77c.554.553 1.112.9 1.772 1.151.636.246 1.363.414 2.424.464 1.067.05 1.408.061 4.123.061 2.715 0 3.056-.01 4.123-.061 1.061-.05 1.793-.218 2.425-.464a4.96 4.96 0 001.77-1.15c.553-.554.9-1.112 1.151-1.772.246-.636.414-1.363.464-2.424.05-1.067.061-1.408.061-4.123 0-2.715-.01-3.056-.061-4.123-.05-1.061-.218-1.793-.464-2.425a4.96 4.96 0 00-1.15-1.77A4.839 4.839 0 0016.546.53c-.636-.246-1.363-.414-2.424-.464C13.056.017 12.715.006 10 .006z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 4.866a5.134 5.134 0 100 10.269 5.134 5.134 0 000-10.269zm0 8.464a3.33 3.33 0 010-6.66 3.33 3.33 0 010 6.66z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.335",
  cy: "4.665",
  r: "1.201"
}))));

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }
var Youtube = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$g({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.55 5.186a2.505 2.505 0 00-1.763-1.774c-1.554-.42-7.787-.42-7.787-.42s-6.233 0-7.787.42c-.858.23-1.533.91-1.763 1.774C.034 6.75.034 10.014.034 10.014s0 3.264.416 4.829c.23.863.905 1.514 1.763 1.745 1.554.42 7.787.42 7.787.42s6.233 0 7.787-.42a2.467 2.467 0 001.763-1.745c.416-1.565.416-4.829.416-4.829s0-3.264-.416-4.828zM7.96 12.977V7.05l5.21 2.963-5.21 2.964z",
  fill: "currentColor"
})));

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }
var Word = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$h({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4.427 9v1.115h.73L6.863 17h1.657l1.333-5.052c.049-.139.083-.299.104-.48.014-.11.021-.194.021-.25h.042l.031.25c.007.022.019.091.036.21.018.117.037.207.058.27L11.479 17h1.656l1.709-6.885h.729V9h-3.125v1.115h.937l-1.03 4.562a2.913 2.913 0 00-.074.48l-.02.218h-.042a.48.48 0 00-.005-.068 1.119 1.119 0 00-.016-.083.353.353 0 01-.01-.068 23.706 23.706 0 01-.042-.219 8.466 8.466 0 00-.052-.26L10.594 9H9.406l-1.5 5.677a4.656 4.656 0 00-.047.255 51.211 51.211 0 01-.036.224l-.042.219H7.74l-.021-.219a2.892 2.892 0 00-.073-.479l-1.031-4.562h.937V9H4.427z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z"
}))));

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }
var Audio = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$i({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.705 9.883c.15.055.224.158.224.31v5.62c0 .15-.075.254-.224.309a.66.66 0 01-.134.02.42.42 0 01-.256-.092l-1.853-1.725H5a.363.363 0 01-.257-.093.31.31 0 01-.1-.238v-1.983c0-.097.033-.176.1-.238A.363.363 0 015 11.68h1.462l1.853-1.725a.36.36 0 01.39-.072zM13.36 17c.231 0 .417-.083.558-.248.96-1.095 1.44-2.345 1.44-3.75 0-1.405-.48-2.655-1.44-3.75a.686.686 0 00-.48-.247.7.7 0 00-.524.144.622.622 0 00-.262.45.623.623 0 00.162.49c.743.847 1.115 1.818 1.115 2.913 0 1.095-.372 2.066-1.116 2.913a.623.623 0 00-.161.491.59.59 0 00.262.439.713.713 0 00.446.155zm-2.355-1.529a.747.747 0 00.525-.206c.647-.64.971-1.395.971-2.263 0-.867-.324-1.622-.971-2.262a.727.727 0 00-.502-.207.712.712 0 00-.514.176.623.623 0 00-.022.94c.387.393.58.844.58 1.353 0 .51-.193.961-.58 1.353a.624.624 0 00.022.94.777.777 0 00.491.176z"
}))));

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }
var Excel = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$j({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.469 15.896V17h2.927v-1.104h-.781l1.072-1.677a1.493 1.493 0 00.105-.172 2.461 2.461 0 01.078-.14c.017-.029.03-.042.036-.042h.021a.362.362 0 00.052.104.582.582 0 00.047.078l.062.083c.025.031.048.061.068.089l1.115 1.677h-.792V17h3.031v-1.104h-.708l-2-2.844 2.031-2.937h.698V9h-2.906v1.115h.77l-1.072 1.656a4.645 4.645 0 01-.104.172 2.381 2.381 0 01-.094.14l-.02.032h-.022a.362.362 0 00-.052-.105 1.245 1.245 0 00-.177-.24L8.75 10.116h.792V9H6.52v1.115h.708l1.969 2.833-2.02 2.948h-.71z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z"
}))));

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }
var File = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$k({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z",
  fill: "currentColor"
})));

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }
var Pdf = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$l({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11.474 11.55c.258.204.586.423.985.657.46-.055.918-.082 1.37-.082 1.15 0 1.84.191 2.075.574.125.172.133.375.023.61 0 .007-.004.015-.011.023l-.024.024v.011c-.047.297-.324.445-.832.445-.375 0-.824-.078-1.347-.234a8.544 8.544 0 01-1.524-.62c-1.726.186-3.258.51-4.594.972C6.4 15.977 5.455 17 4.76 17a.681.681 0 01-.328-.082l-.28-.14a1.254 1.254 0 00-.071-.06c-.078-.077-.102-.218-.07-.421.07-.313.288-.67.656-1.072.367-.403.882-.78 1.547-1.131.109-.07.199-.047.27.07.015.016.023.031.023.047a28.66 28.66 0 001.253-2.309 17.89 17.89 0 001.22-3.07 9.466 9.466 0 01-.358-1.87c-.051-.605-.026-1.103.076-1.493.086-.313.25-.469.492-.469h.258c.18 0 .316.059.41.176.14.164.176.43.106.797a.255.255 0 01-.047.093.302.302 0 01.011.094v.352c-.015.96-.07 1.71-.164 2.25.43 1.281 1 2.21 1.711 2.789zm-6.75 4.817c.406-.187.942-.805 1.606-1.851-.399.312-.74.64-1.026.984-.285.344-.478.633-.58.867zM9.388 5.586c-.117.328-.125.844-.023 1.547.008-.055.035-.227.082-.516 0-.023.027-.191.082-.504a.264.264 0 01.047-.093c-.008-.008-.012-.016-.012-.024a.09.09 0 01-.012-.035.675.675 0 00-.152-.422c0 .008-.004.016-.012.024v.023zm-1.453 7.746a17.19 17.19 0 013.328-.95 1.792 1.792 0 01-.152-.11 2.1 2.1 0 01-.188-.159c-.593-.523-1.09-1.21-1.488-2.062-.21.672-.535 1.441-.972 2.308-.235.438-.41.762-.528.973zm7.57-.188c-.187-.187-.734-.28-1.64-.28.594.218 1.078.327 1.453.327.11 0 .18-.004.211-.011 0-.008-.008-.02-.024-.035z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z"
}))));

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }
var Attachment = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$m({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  strokeWidth: "1.5",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12.684 8.457l-5.467 6.314c-.371.443-1.164.389-1.772-.12-.607-.51-.798-1.282-.427-1.725L8.38 8.92"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.594 8.664l4.842-5.77c1.023-1.219 2.88-1.344 4.15-.279 1.27 1.065 1.469 2.917.446 4.136l-4.841 5.77"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.878 10.51L9.089 17.41c-1.498 1.785-4.256 1.938-6.16.34a4.773 4.773 0 01-.91-1.016 4.483 4.483 0 01-.74-2.949 4.011 4.011 0 01.916-2.16L8.088 4.6"
}))));

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }
var Search = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$n({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0a7.5 7.5 0 016.257 11.636l5.182 5.182a1.5 1.5 0 01-2.121 2.121l-5.182-5.182A7.5 7.5 0 117.5 0zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z",
  fill: "currentColor"
})));

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }
var Close = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$o({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.034 4.034l11.932 11.932M3.99 16.01L16.01 3.99",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }
var Org = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$p({
  className: styles["i-org"] || "i-org",
  width: "30",
  height: "30",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.333 7h5.334C14.403 7 15 7.554 15 8.236v14.528c0 .682-.597 1.236-1.333 1.236H8.333C7.597 24 7 23.446 7 22.764V8.236C7 7.554 7.597 7 8.333 7zm8 6h5.334c.736 0 1.333.563 1.333 1.257v8.486c0 .694-.597 1.257-1.333 1.257H15v-9.743c0-.694.597-1.257 1.333-1.257z",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd"
})));

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }
var Timesheet = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$q({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  fill: "none"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "10.5",
  width: "6",
  height: "1",
  rx: ".5"
}), /*#__PURE__*/React.createElement("rect", {
  transform: "rotate(-120 8.25 8.835)",
  x: "5.25",
  y: "8.335",
  width: "6",
  height: "1",
  rx: ".5"
}), /*#__PURE__*/React.createElement("circle", {
  strokeWidth: "2",
  cx: "10",
  cy: "10",
  r: "9"
}))));

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }
var Brief = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$r({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 4V2H7v2h6zm5 7.5H1.999L2 16c0 .776.224 1 1 1h14c.776 0 1-.224 1-1v-4.5zM17 6H3c-.776 0-1 .224-1 1l-.001 3H18V7c0-.776-.224-1-1-1zM5 2a2 2 0 012-2h6a2 2 0 012 2v2h2c1.88 0 3 1.12 3 3v9c0 1.88-1.12 3-3 3H3c-1.88 0-3-1.12-3-3V7c0-1.88 1.12-3 3-3h2V2z",
  fill: "currentColor"
})));

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }
var Skill = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$s({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 20H5v-3.073s.108-2.157-.693-4.421c-.8-2.264-2.299-4.421-2.299-4.421L8.498.697A2 2 0 0111.32.514a2 2 0 01.183.183l6.489 7.388s-1.536 2.263-2.299 4.42C14.93 14.664 15 16.928 15 16.928V20zM4.496 8.256c.218.374.447.789.677 1.236a18.88 18.88 0 011.014 2.316c.355 1.002.581 2.036.706 3.07h6.225c.11-.923.295-1.838.576-2.716a11.98 11.98 0 01.119-.354c.04-.114.082-.228.126-.343.252-.66.566-1.34.929-2.037.207-.399.423-.788.642-1.164l-4.87-5.839V6.91c.564.253.958.83.958 1.501 0 .905-.715 1.638-1.598 1.638S8.402 9.316 8.402 8.41c0-.671.394-1.248.959-1.5V2.424L4.496 8.256z",
  fill: "currentColor"
})));

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }
var Chat = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$t({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16.857 2c.603 0 1.155.263 1.553.706.36.402.59.954.59 1.569h0v8.45a2.35 2.35 0 01-.59 1.569c-.398.443-.95.706-1.553.706h0H14c-.405 0-.772.233-1.008.592h0L10 19.698l-2.992-4.106C6.772 15.233 6.405 15 6 15h0-2.857a2.076 2.076 0 01-1.553-.706A2.348 2.348 0 011 12.725h0v-8.45c0-.615.23-1.167.59-1.569C1.988 2.263 2.54 2 3.143 2h0z",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 9a1 1 0 11-2 0 1 1 0 012 0zm-5 0a1 1 0 11-2 0 1 1 0 012 0zM6 9a1 1 0 11-2 0 1 1 0 012 0z",
  fill: "currentColor"
}))));

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }
var Expand = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$u({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 1a1 1 0 011 1v7a1 1 0 11-2 0l-.001-4.586L4.414 16.999 9 17a1 1 0 110 2H2a1 1 0 01-1-1v-7a1 1 0 112 0v4.585L15.585 3H11a1 1 0 110-2h7z",
  fill: "currentColor",
  fillRule: "evenodd"
})));

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }
var Minimize = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$v({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 10h7a1 1 0 011 1v7a1 1 0 11-2 0v-5a1 1 0 00-1-1H2a1 1 0 110-2zm16 0h-7a1 1 0 01-1-1V2a1 1 0 112 0v5a1 1 0 001 1h5a1 1 0 110 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.707 16.879L7.586 11A1 1 0 019 12.414l-5.879 5.879a1 1 0 01-1.414-1.414zM11 7.586l5.879-5.879a1 1 0 011.414 1.414L12.414 9A1 1 0 0111 7.586z"
}))));

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }
var Project = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$w({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7.586 2l3 3H18a.997.997 0 011 1h0v11a.997.997 0 01-.293.707A.997.997 0 0118 18h0H2a.997.997 0 01-.707-.293A.997.997 0 011 17h0V3c0-.276.112-.526.293-.707A.997.997 0 012 2h5.586z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M0 7h20v2H0z"
}))));

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }
var Assessment = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$x({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16.5 1A1.496 1.496 0 0118 2.5h0v15c0 .414-.168.79-.44 1.06a1.495 1.495 0 01-1.06.44h0-13a1.495 1.495 0 01-1.06-.44A1.495 1.495 0 012 17.5h0v-15c0-.414.168-.79.44-1.06A1.495 1.495 0 013.5 1h0z"
}), /*#__PURE__*/React.createElement("path", {
  strokeLinecap: "round",
  d: "M7 6h6m-6 4h6m-6 4h6"
}))));

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }
var Talent = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$y({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4.75 6c.118 0 .234.007.349.02A4.852 4.852 0 005 7c0 1.657.724 3.076 2 4-1.857 1.075-3 2.994-3 5h0-3v-1.25h0c0-1.254.714-2.453 1.875-3.125-.797-.577-1.25-1.465-1.25-2.5C1.625 7.417 3.025 6 4.75 6zm10.5 0a3.137 3.137 0 013.125 3.125c0 1.035-.453 1.923-1.25 2.5C18.286 12.297 19 13.496 19 14.75V16h0-3c0-2.006-1.143-3.925-3-5 1.276-.924 2-2.344 2-4 0-.335-.034-.663-.098-.981A3.269 3.269 0 0115.25 6z",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 18v-2c0-2.006 1.143-3.925 3-5-1.276-.924-2-2.344-2-4 0-2.732 2.239-5 5-5s5 2.268 5 5c0 1.657-.724 3.076-2 4 1.857 1.075 3 2.994 3 5v2H4z",
  strokeWidth: "2"
}))));

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }
var Profile = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$z({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  fill: "none"
}, /*#__PURE__*/React.createElement("rect", {
  x: "6.5",
  y: "14.5",
  width: "7",
  height: "1",
  rx: ".5"
}), /*#__PURE__*/React.createElement("rect", {
  strokeWidth: "2",
  x: "2",
  y: "1",
  width: "16",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("circle", {
  strokeWidth: "2",
  cx: "10",
  cy: "8",
  r: "3"
}))));

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }
var ChatUsers = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$A({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 5.548c-1.503 0-2.785 1.245-2.937 2.815l-.009.117.015.15c.101.82.421 1.475 1.072 2.129l.17.163 1.203 1.115-1.542.56c-1.5.543-2.421 1.89-2.495 3.576l-.005.222-.001.2A7.963 7.963 0 0010 18a7.962 7.962 0 004.529-1.405v-.2c0-1.716-.86-3.11-2.308-3.723l-.193-.076-1.542-.56 1.204-1.114c.765-.709 1.132-1.404 1.24-2.293l.015-.149-.008-.117c-.146-1.512-1.34-2.722-2.771-2.81L10 5.549zM10 2a8 8 0 00-6.354 12.861c.336-1.434 1.147-2.658 2.33-3.472l.056-.037-.027-.037a5.316 5.316 0 01-.924-2.465l-.027-.276-.002-.119C5.166 5.755 7.345 3.55 10 3.55c2.583 0 4.716 2.088 4.934 4.688l.014.218-.002.119c-.08 1.026-.382 1.922-.951 2.741l-.028.037.056.037c1.184.814 1.995 2.038 2.331 3.472A8 8 0 0010 2z",
  fill: "currentColor"
})));

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }
var Down = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$B({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 7l8 8 8-8",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }
var Company = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$C({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 2v17h0H1V2a1 1 0 011-1h10a1 1 0 011 1z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M4 5h2v2H4zm4 0h2v2H8zM4 9h2v2H4zm4 0h2v2H8zm-4 4h2v2H4zm11-4h2v2h-2zm-7 4h2v2H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.4 5H13v14h6V6.6A1.6 1.6 0 0017.4 5z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M15 13h2v2h-2z"
}))));

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }
var Dashboard = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$D({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 2h6v6H2zm10 0h6v6h-6zm0 10h6v6h-6zM2 12h6v6H2z",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd"
})));

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }
var Guide = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$E({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "currentColor",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18.5.733v16.386l-5 2.125V2.858l5-2.125zm-12 0v16.386l-5 2.125V2.858l5-2.125zm1 0v16.386l5 2.125V2.858L7.5.733z"
}), /*#__PURE__*/React.createElement("path", {
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M13 19l-6-2.55L1 19V3.527l6-2.55 6 2.55 6-2.55V16.45z"
}))));

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }
var Reference = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$F({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17 0H6a1 1 0 00-1 1v19l7.5-7 7.5 7V3a3 3 0 00-3-3z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 1a1.994 1.994 0 00-1.414.586A1.994 1.994 0 001 3h0v4h5V1z",
  stroke: "currentColor",
  strokeWidth: "2"
}))));

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }
var Caret = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$G({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.633 6.64l-7.865 9.438a1 1 0 01-1.408.128 1 1 0 01-.128-.128L1.367 6.64A1 1 0 012.135 5h15.73a1 1 0 011 1 1 1 0 01-.232.64z",
  fill: "currentColor"
})));

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }
var Link = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$H({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.192 6.364l4.455-4.455c1.055-1.054 2.86-.96 4.03.212 1.172 1.172 1.267 2.976.213 4.03l-4.455 4.456h0M6.364 9.192l-4.455 4.455c-1.054 1.055-.96 2.86.212 4.03 1.172 1.172 2.976 1.267 4.03.213l4.456-4.455h0",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12.728 5.657l1.414 1.414-7.071 7.071-1.414-1.414z"
}))));

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }
var Pencil = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$I({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.034 17.502l-3.65.793a.531.531 0 01-.271-.014c-.286-.09-.468-.388-.408-.666l.794-3.65L13.11 3.354l3.536 3.536L6.034 17.502h0zm7.08-14.151l3.535 3.536 1.483-1.483a2.5 2.5 0 00-3.536-3.536l-1.483 1.483h0z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M3.636 12.121l4.243 4.243-1.414 1.414-4.243-4.242z"
}))));

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }
var Picture = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$J({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 13.6l2.5-2.4 1.25 1.2 2.5-2.4L15 13.6V15a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "6",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z"
}))));

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }
var StarEmpty = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$K({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M10 14.632l.614.323 4.288 2.254-.936-5.458.497-.485 3.468-3.381-5.48-.797L10 2.122 7.55 7.088l-.687.1-4.794.697 3.965 3.865-.117.684-.819 4.775L10 14.632zm-6.597 2.702l.859-5.008L.624 8.78c-1.091-1.064-.706-2.25.802-2.469l5.028-.73 2.248-4.556c.675-1.367 1.922-1.367 2.596 0l2.248 4.556 5.028.73c1.508.22 1.893 1.405.802 2.47l-3.638 3.545.86 5.008c.257 1.502-.752 2.235-2.101 1.526L10 16.495 5.503 18.86c-1.348.71-2.357-.023-2.1-1.525z"
})));

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }
var StarFull = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$L({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M3.403 17.334l.859-5.008L.624 8.78c-1.091-1.064-.706-2.25.802-2.469l5.028-.73 2.248-4.556c.675-1.367 1.922-1.367 2.596 0l2.248 4.556 5.028.73c1.508.22 1.893 1.405.802 2.47l-3.638 3.545.86 5.008c.257 1.502-.752 2.235-2.101 1.526L10 16.495 5.503 18.86c-1.348.71-2.357-.023-2.1-1.525z"
})));

function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }
var External = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$M({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 0h6a1 1 0 011 1v6a1 1 0 11-2 0V3a1 1 0 00-1-1h-4a1 1 0 110-2z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.707 10.879L17.586 1A1 1 0 0119 2.414l-9.879 9.879a1 1 0 01-1.414-1.414z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.143V17a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h5.857",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}))));

function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }
var Activity = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$N({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.678 14.874l-1.881-4.76-1.51 3.792a.99.99 0 01-.808.617.983.983 0 01-.925-.42l-1.707-2.467-1.536 1.851a.99.99 0 11-1.523-1.264l2.37-2.855a.973.973 0 01.805-.357.989.989 0 01.77.426L7.13 11.46l1.75-4.394a.99.99 0 011.84.002l1.756 4.447L14.403 5.2a.99.99 0 01.867-.698c.4-.033.789.186.968.551l2.101 4.282a.99.99 0 01-1.777.872l-.997-2.033-2.02 6.624a.99.99 0 01-.907.7c-.445.001-.81-.246-.96-.625z",
  fill: "currentColor"
})));

function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }
var Notification = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$O({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  stroke: "currentColor",
  strokeWidth: "2",
  d: "M12.614 4.458l-.093-.408C12.25 2.85 11.206 2 10 2s-2.252.85-2.52 2.05l-.094.408-.344.209C5.26 5.733 4.162 7.683 4.16 9.792v2.8l-.614.229a1.647 1.647 0 00-1.021 1.817A1.62 1.62 0 004.084 16h11.831a1.62 1.62 0 001.561-1.362 1.647 1.647 0 00-1.021-1.817l-.623-.228V9.792a5.97 5.97 0 00-2.874-5.125l-.344-.209z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "nonzero",
  d: "M12 18a2 2 0 11-4 0h4z"
}))));

function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }
var Ok = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$P({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 12l5.172 4.31a1 1 0 001.454-.187L18 3h0",
  stroke: "currentColor",
  strokeWidth: "2.5",
  fill: "none",
  strokeLinecap: "round"
})));

function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }
var Phone = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$Q({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.88 6.614a3.03 3.03 0 00.166-1.753L7.01.755A1 1 0 005.897.01L.857.737A1 1 0 00.002 1.79a19.525 19.525 0 005.62 12.574c3.398 3.432 7.973 5.392 12.788 5.636a1 1 0 001.045-.897l.54-5.273a1 1 0 00-.767-1.075l-3.768-.882a3.052 3.052 0 00-1.926.223l-1.362.587c-1.086-.718-1.82-1.305-2.626-2.118-.835-.844-1.423-1.593-2.124-2.688l.458-1.262zm9.684 11.315C13.59 17.518 9.86 15.8 7.043 12.956A17.51 17.51 0 012.078 2.582l3.213-.463.805 3.182c.03.161.008.382-.077.582l-.644 1.77a1 1 0 00.09.867c.894 1.445 1.609 2.389 2.66 3.45 1.027 1.039 1.958 1.755 3.411 2.685a1 1 0 00.935.076l1.885-.813c.232-.109.459-.136.677-.092l2.883.675-.351 3.428z",
  fill: "currentColor"
})));

function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }
var Email = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$R({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 6.382V5H2v1.382l8 4 8-4zm0 2.236l-8 4-8-4V16h16V8.618zM2 3h16a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2z",
  fill: "currentColor"
})));

function _extends$S() { _extends$S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }
var Add = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$S({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 10h15M10 17.5v-15",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

function _extends$T() { _extends$T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }
var More = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$T({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 10"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "3.5",
  cy: "5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "5",
  r: "1.5"
}))));

function _extends$U() { _extends$U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }
var MoreVertical = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$U({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("circle", {
  transform: "rotate(90 5 10)",
  cx: "5",
  cy: "10",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  transform: "rotate(90 5 3.5)",
  cx: "5",
  cy: "3.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  transform: "rotate(90 5 16.5)",
  cx: "5",
  cy: "16.5",
  r: "1.5"
}))));

function _extends$V() { _extends$V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }
var Settings = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$V({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.444 1.685a1.98 1.98 0 011.212 2.029l-.024.234a1.275 1.275 0 01-.06.278c.36.284.69.6.987.942l.216.26c.13-.034.222-.054.277-.06l.234-.024a1.98 1.98 0 011.451 3.503l-.182.15a1.275 1.275 0 01-.24.153c.053.447.065.902.033 1.359l-.032.342c.116.067.196.118.239.153l.182.149a1.98 1.98 0 01-1.45 3.503l-.235-.024a1.275 1.275 0 01-.278-.06 7.284 7.284 0 01-.942.987l-.261.215c.035.13.056.223.061.278l.024.234a1.98 1.98 0 01-3.503 1.451l-.15-.182a1.275 1.275 0 01-.153-.24 7.308 7.308 0 01-1.702.001c-.049.095-.1.175-.152.239l-.149.182a1.98 1.98 0 01-3.503-1.45l.024-.235a1.275 1.275 0 01.06-.278 7.284 7.284 0 01-.987-.942l-.216-.262c-.13.036-.222.056-.277.062l-.234.024a1.98 1.98 0 01-1.451-3.503l.182-.15a1.275 1.275 0 01.24-.153 7.308 7.308 0 01-.033-1.359l.032-.343a1.958 1.958 0 01-.239-.152l-.182-.149a1.98 1.98 0 011.45-3.503l.235.024c.097.01.19.03.278.06a7.284 7.284 0 01.942-.987l.261-.216a2.003 2.003 0 01-.061-.277l-.024-.234a1.98 1.98 0 013.503-1.451l.15.183c.06.075.112.155.153.238a7.308 7.308 0 011.702 0c.049-.095.1-.175.152-.239l.149-.182a1.98 1.98 0 012.291-.578zm-2.296 5.543a3 3 0 10-2.296 5.544 3 3 0 002.296-5.543z",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none"
})));

function _extends$W() { _extends$W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }
var Question = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$W({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm-.243 13.558c-.797 0-1.377.529-1.377 1.282 0 .726.58 1.264 1.376 1.264.83 0 1.403-.538 1.403-1.264 0-.753-.571-1.282-1.402-1.282zm.251-9.694c-1.808 0-3.799.882-3.758 3.454h1.801c0-1.065.623-1.887 1.852-1.887.936 0 1.792.467 1.792 1.592 0 .866-.511 1.264-1.316 1.87-.918.666-1.645 1.445-1.593 2.71l.01.63h1.783v-.483c0-.98.373-1.265 1.378-2.027.83-.631 1.696-1.332 1.696-2.805 0-2.059-1.74-3.054-3.645-3.054z",
  fill: "currentColor"
})));

function _extends$X() { _extends$X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }
var Text = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$X({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "currentColor",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 6h4v2H5zm0 4h10v2H5zm0 4h10v2H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.583 0L19 5.714V18a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2h10.583zM3 2v16h14V8h-6V2H3zm13.516 4L13 2.292V6h3.516z",
  fillRule: "nonzero"
}))));

function _extends$Y() { _extends$Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Y.apply(this, arguments); }
var Logout = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$Y({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, props), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M11 15v3H1V2h10v3"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M14.707 4.293l4.95 4.95a1 1 0 010 1.414l-4.95 4.95a1 1 0 01-1.414-1.415L16.484 11H7a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 111.414-1.414z"
}))));

var Icon = function Icon(props) {
  return /*#__PURE__*/React.createElement("div", null);
};

Icon.Google = Google;
Icon.Facebook = Facebook;
Icon.Twitter = Twitter;
Icon.Linkedin = Linkedin;
Icon.Instagram = Instagram;
Icon.Youtube = Youtube;
Icon.Word = Word;
Icon.Audio = Audio;
Icon.Excel = Excel;
Icon.File = File;
Icon.Pdf = Pdf;
Icon.Attachment = Attachment;
Icon.Search = Search;
Icon.Close = Close;
Icon.Org = Org;
Icon.Timesheet = Timesheet;
Icon.Brief = Brief;
Icon.Skill = Skill;
Icon.Chat = Chat;
Icon.Expand = Expand;
Icon.Minimize = Minimize;
Icon.Project = Project;
Icon.Assessment = Assessment;
Icon.Talent = Talent;
Icon.Profile = Profile;
Icon.ChatUsers = ChatUsers;
Icon.Down = Down;
Icon.Company = Company;
Icon.Dashboard = Dashboard;
Icon.Guide = Guide;
Icon.Reference = Reference;
Icon.Caret = Caret;
Icon.Link = Link;
Icon.Pencil = Pencil;
Icon.Edit = Pencil;
Icon.Picture = Picture;
Icon.StarEmpty = StarEmpty;
Icon.StarFull = StarFull;
Icon.External = External;
Icon.Activity = Activity;
Icon.Notification = Notification;
Icon.Ok = Ok;
Icon.Phone = Phone;
Icon.Email = Email;
Icon.Add = Add;
Icon.More = More;
Icon.MoreVertical = MoreVertical;
Icon.Settings = Settings;
Icon.Question = Question;
Icon.Intercom = Question; // Fallback

Icon.Text = Text;
Icon.Logout = Logout;
Icon.Drag = Drag;
Icon.Preview = Preview;
Icon.Xero = Xero;
Icon.Refresh = Refresh;
Icon.Filter = Filter;
Icon.Split = Split;
Icon.Invoice = Invoice;
Icon.Play = Play;
Icon.Stop = Stop;

var Toggle = function Toggle(_ref) {
  var defaultChecked = _ref.defaultChecked,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["defaultChecked", "onChange"]);

  var _useState = useState(defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange(e) {
    setChecked(e.target.checked);
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };

  return /*#__PURE__*/React.createElement(Switch, _extends$Z({
    height: 24,
    checked: checked,
    onChange: handleChange
  }, props));
};

var css_248z$6 = "/* prettier-ignore */\n/* beautify ignore:start */\n.Text-module_base__22RYQ {\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.Text-module_display__2aO-E {\n  font-weight: 300;\n  line-height: 1.2;\n  margin: 0;\n  color: #193278;\n  letter-spacing: -1px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_display__2aO-E {\n      font-weight: 300;\n      letter-spacing: -0.5px;\n      font-size: 30px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_display__2aO-E {\n      font-weight: 300;\n      letter-spacing: -0.5px;\n      font-size: 40px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_display__2aO-E {\n      font-size: 50px; } }\n\n.Text-module_headline__1KVeJ {\n  font-weight: 300;\n  line-height: 1.2;\n  margin: 0;\n  color: #193278;\n  letter-spacing: -0.5px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 24px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 35px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_headline__1KVeJ {\n      font-size: 40px; } }\n\n.Text-module_subheadline__1Qp-K {\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  letter-spacing: -0.3px;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 20px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 23.994px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_subheadline__1Qp-K {\n      font-size: 27px; } }\n\n.Text-module_intro__3k_8- {\n  font-weight: 500;\n  line-height: 1.25;\n  margin: 0;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_intro__3k_8- {\n      font-size: 18px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_intro__3k_8- {\n      font-size: 20px; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_intro__3k_8- {\n      font-size: 24px; } }\n\n.Text-module_headingTwo__3gSxQ {\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  margin-bottom: 5px;\n  letter-spacing: -0.3px;\n  color: #193278; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 16px; } }\n  @media only screen and (min-width: 600px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 18; } }\n  @media only screen and (min-width: 1200px) {\n    .Text-module_headingTwo__3gSxQ {\n      font-size: 22px; } }\n\n.Text-module_sectionBody__3tTbD {\n  font-size: 18px;\n  padding: 0 50px;\n  margin: 0; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_sectionBody__3tTbD {\n      font-size: 16px;\n      padding: 0; } }\n\n.Text-module_body__15dAJ {\n  margin: 0;\n  color: #3f474f;\n  font-size: 18px; }\n  @media only screen and (max-width: 599px) {\n    .Text-module_body__15dAJ {\n      font-size: 16px; } }\n\n.Text-module_base__22RYQ.Text-module_white__3fq_m {\n  color: #fff; }\n\n.Text-module_paragraph__2elFm {\n  margin-bottom: 20px; }\n\n.Text-module_center__30Rnt {\n  text-align: center; }\n\n.Text-module_whiteCenter__HI2jT {\n  color: #fff;\n  text-align: center; }\n\n.Text-module_darkblueCenter__3LIw6 {\n  color: #193278;\n  text-align: center; }\n\n.Text-module_primary__Supmz {\n  font-size: 18px;\n  line-height: 1.475; }\n\n.Text-module_secondary__2nf89 {\n  font-size: 14px;\n  color: #3f474f;\n  -webkit-hyphens: manual;\n      -ms-hyphens: manual;\n          hyphens: manual;\n  font-weight: 400;\n  line-height: 1.475; }\n";
var Styles$6 = {"base":"Text-module_base__22RYQ","display":"Text-module_display__2aO-E","headline":"Text-module_headline__1KVeJ","subheadline":"Text-module_subheadline__1Qp-K","intro":"Text-module_intro__3k_8-","headingTwo":"Text-module_headingTwo__3gSxQ","sectionBody":"Text-module_sectionBody__3tTbD","body":"Text-module_body__15dAJ","white":"Text-module_white__3fq_m","paragraph":"Text-module_paragraph__2elFm","center":"Text-module_center__30Rnt","whiteCenter":"Text-module_whiteCenter__HI2jT","darkblueCenter":"Text-module_darkblueCenter__3LIw6","primary":"Text-module_primary__Supmz","secondary":"Text-module_secondary__2nf89"};
styleInject(css_248z$6);

var Text$1 = function Text(_ref) {
  var Elem = _ref.element,
      children = _ref.children,
      size = _ref.size,
      color = _ref.color,
      type = _ref.type,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["element", "children", "size", "color", "type", "className"]);

  return /*#__PURE__*/React.createElement(Elem, _extends$Z({
    className: classNames(Styles$6.base, size, type, color, className)
  }, restProps), children);
};

Text$1.Styles = Styles$6;
Text$1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string,
  element: PropTypes.node
};
Text$1.defaultProps = {
  element: 'p',
  size: Styles$6.body,
  type: Styles$6.standard,
  color: Styles$6.black
};
Text$1.Type = {
  PRIMARY: Styles$6.primary,
  SECONDARY: Styles$6.secondary,
  NORMAL: Styles$6.standard,
  WHITE: Styles$6.white,
  PARAGRAPH: Styles$6.paragraph,
  CENTER: Styles$6.center,
  WHITE_CENTER: Styles$6.whiteCenter,
  DARKBLUE_CENTER: Styles$6.darkblueCenter
};
Text$1.Color = {
  BLACK: Styles$6.black,
  BLUE: Styles$6.blue,
  DARK_BLUE: Styles$6.darkBlue,
  WHITE: Styles$6.white
};
Text$1.Size = {
  HEADLINE: Styles$6.headline,
  SUBHEADLINE: Styles$6.subheadline,
  INTRO: Styles$6.intro,
  HEADING_TWO: Styles$6.headingTwo,
  BODY: Styles$6.body,
  SECTION_BODY: Styles$6.sectionBody,
  DISPLAY: Styles$6.display
};

var css_248z$7 = "/* prettier-ignore */\n/* beautify ignore:start */\n";
var Styles$7 = {};
styleInject(css_248z$7);

var Segment = function Segment(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(SegmentedControl, _extends$Z({}, props, {
    className: classNames(Styles$7.segment, className)
  }));
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var theme = _objectSpread$1(_objectSpread$1({}, defaultTheme), {}, {
  typography: _objectSpread$1(_objectSpread$1({}, defaultTheme.typography), {}, {
    fontFamilies: {
      display: '"Cerebri Sans", "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace"',
      ui: '"Cerebri Sans", "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  })
});

export { Button, Card, Icon, InputContainer, InputGroup, Loader, Logo, Segment as SegmentedControl, SelectInput as Select, Text$1 as Text, TextArea, TextInput, Toggle, theme as evergreenTheme };
//# sourceMappingURL=index.esm.js.map
