import _extends$2 from '@babel/runtime/helpers/extends';
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
  return /*#__PURE__*/React.createElement(Component, _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  return /*#__PURE__*/React.createElement(Elem, _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
    className: classNames(Styles$3.inputContainer, className)
  }, props), children);
};

var InputGroup = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  }, /*#__PURE__*/React.createElement(Elem, _extends$2({
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
  }, /*#__PURE__*/React.createElement(TextareaAutosize, _extends$2({
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
  return /*#__PURE__*/React.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/React.createElement(CustomSelect, _extends$2({
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
  classNamePrefix: PropTypes.string
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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

export { Button, Card, InputContainer, InputGroup, Loader, Logo, SelectInput as Select, TextArea, TextInput };
//# sourceMappingURL=index.esm.js.map
