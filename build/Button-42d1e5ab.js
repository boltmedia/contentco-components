'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var Loader = require('./Loader-1aeed820.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(Loader.requireObjectCoercible(argument));
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return Loader.classofRaw(arg) == 'Array';
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !Loader.fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = Loader.shared('wks');
var Symbol$1 = Loader.global.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || Loader.uid;

var wellKnownSymbol = function (name) {
  if (!Loader.has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && Loader.has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (Loader.isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = Loader.indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = Loader.toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

var engineUserAgent = Loader.getBuiltIn('navigator', 'userAgent') || '';

var process = Loader.global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !Loader.fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (Loader.has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = Loader.has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = Loader.has(options, 0) ? options[0] : thrower;
  var argument1 = Loader.has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !Loader.fails(function () {
    if (ACCESSORS && !Loader.descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $filter = arrayIteration.filter;



var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
Loader._export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var css_248z = "/* prettier-ignore */\n/* beautify ignore:start */\n.Button-module_btn__173LG {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 0 18px;\n  font-family: \"Cerebri Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-width: 75px;\n  min-height: 42px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n  overflow: hidden;\n  line-height: 38px;\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease-in-out;\n  will-change: background;\n  word-wrap: break-word;\n  outline: none;\n  background-color: transparent; }\n  .Button-module_btn__173LG ~ .Button-module_btn__173LG {\n    margin-left: 10px; }\n  .Button-module_btn__173LG[disabled] {\n    cursor: default;\n    opacity: 0.5; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .Button-module_btn__173LG {\n      height: 42px; } }\n  .Button-module_btn__173LG:focus {\n    transition: none;\n    outline: none;\n    box-shadow: 0 0 0 3px #c4e0fb; }\n\n.Button-module_blue__3scNy {\n  background-color: #1269db;\n  color: #fff; }\n  .Button-module_blue__3scNy:hover {\n    background-color: #0e52ac; }\n  .Button-module_blue__3scNy:active {\n    background-color: #0a3c7d; }\n\n.Button-module_darkblue__spEK8 {\n  background-color: #193278;\n  color: #fff; }\n  .Button-module_darkblue__spEK8:hover {\n    background-color: #10204e; }\n  .Button-module_darkblue__spEK8:active {\n    background-color: #070f24; }\n\n.Button-module_lightGray__2B-hB {\n  background-color: #edf0f3;\n  color: #3f474f; }\n  .Button-module_lightGray__2B-hB:hover {\n    background-color: #ced7df; }\n  .Button-module_lightGray__2B-hB:active {\n    background-color: #b0bdca; }\n\n.Button-module_gray__10NAk {\n  background-color: #3f474f;\n  color: #fff; }\n  .Button-module_gray__10NAk:hover {\n    background-color: #282e33; }\n  .Button-module_gray__10NAk:active {\n    background-color: #121416; }\n\n.Button-module_white__1LXIC {\n  background-color: #fff;\n  color: #193278; }\n  .Button-module_white__1LXIC:hover {\n    background-color: #eff7ff;\n    color: #193278; }\n  .Button-module_white__1LXIC:active {\n    background-color: #c4e0fb;\n    color: #193278; }\n\n.Button-module_blueOutline__3sFRD {\n  color: #1269db;\n  border-color: #1269db;\n  background: transparent; }\n  .Button-module_blueOutline__3sFRD:hover {\n    border-color: #0e52ac;\n    color: #0e52ac; }\n  .Button-module_blueOutline__3sFRD:active {\n    border-color: #0a3c7d;\n    color: #0a3c7d; }\n\n.Button-module_redOutline__3uZzc {\n  color: #c66;\n  border-color: #c66;\n  background: transparent; }\n  .Button-module_redOutline__3uZzc:hover {\n    border-color: #bf4040;\n    color: #bf4040; }\n  .Button-module_redOutline__3uZzc:active {\n    border-color: #993333;\n    color: #993333; }\n\n.Button-module_whiteBlueOutline__2TZcV {\n  color: #0751b3;\n  border-color: #fff;\n  background-color: #fff;\n  border-color: #0751b3;\n  word-break: break-word;\n  white-space: normal; }\n  .Button-module_whiteBlueOutline__2TZcV:hover {\n    background-color: #eff7ff;\n    border-color: #053b82;\n    color: #053b82; }\n  .Button-module_whiteBlueOutline__2TZcV:active {\n    background-color: #eff7ff;\n    border-color: #032551;\n    color: #032551; }\n\n.Button-module_fullwidth__GxWlw {\n  width: 100%;\n  margin: 6px 0px; }\n\n.Button-module_large__1nbMn {\n  height: 56px; }\n\n.Button-module_fullwidthLarge__rLxyj {\n  width: 100%;\n  margin: 6px 0px;\n  height: 56px; }\n";
var Styles = {"btn":"Button-module_btn__173LG","blue":"Button-module_blue__3scNy","darkblue":"Button-module_darkblue__spEK8","lightGray":"Button-module_lightGray__2B-hB","gray":"Button-module_gray__10NAk","white":"Button-module_white__1LXIC","blueOutline":"Button-module_blueOutline__3sFRD","redOutline":"Button-module_redOutline__3uZzc","whiteBlueOutline":"Button-module_whiteBlueOutline__2TZcV","fullwidth":"Button-module_fullwidth__GxWlw","large":"Button-module_large__1nbMn","fullwidthLarge":"Button-module_fullwidthLarge__rLxyj"};
styleInject_es.styleInject(css_248z);

var Type = {
  WHITE: Styles.white,
  WHITE_BLUE_OUTLINE: Styles.whiteBlueOutline,
  BLUE_OUTLINE: Styles.blueOutline,
  RED_OUTLINE: Styles.redOutline,
  LIGHT_GRAY: Styles.lightGray,
  BLUE: Styles.blue,
  DARKBLUE: Styles.darkblue,
  GRAY: Styles.gray
};
var lightTypes = [Type.WHITE, Type.WHITE_BLUE_OUTLINE, Type.BLUE_OUTLINE, Type.RED_OUTLINE, Type.LIGHT_GRAY];
var Button = /*#__PURE__*/React__default['default'].memo(function (_ref) {
  var type = _ref.type,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      content = _ref.content,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      Elem = _ref.element,
      props = _objectWithoutProperties__default['default'](_ref, ["type", "size", "className", "children", "content", "disabled", "isLoading", "element"]);

  var isLight = lightTypes.filter(function (l) {
    return l === type;
  });
  return /*#__PURE__*/React__default['default'].createElement(Elem, _extends__default['default']({
    type: "button",
    className: classNames__default['default'](Styles.btn, className, type, size),
    disabled: disabled
  }, props), isLoading && /*#__PURE__*/React__default['default'].createElement(Loader.Loader, {
    style: {
      marginRight: '10px'
    },
    color: (isLight === null || isLight === void 0 ? void 0 : isLight.length) ? Loader.Loader.Color.BLUE : Loader.Loader.Color.WHITE,
    size: Loader.Loader.Size.SMALL
  }), content || children);
});
Button.Type = Type;
Button.Size = {
  FULLWIDTH: Styles.fullwidth,
  FULLWIDTH_LARGE: Styles.fullwidthLarge,
  LARGE: Styles.large
};
Button.Styles = Styles;
Button.defaultProps = {
  element: 'button'
};
Button.propTypes = {
  type: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  isLoading: PropTypes__default['default'].bool,
  asLink: PropTypes__default['default'].bool
};

exports.Button = Button;
exports.aFunction = aFunction;
exports.arrayIteration = arrayIteration;
exports.arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport;
exports.arrayMethodUsesToLength = arrayMethodUsesToLength;
exports.arraySpeciesCreate = arraySpeciesCreate;
exports.engineUserAgent = engineUserAgent;
exports.engineV8Version = engineV8Version;
exports.functionBindContext = functionBindContext;
exports.isArray = isArray;
exports.nativeSymbol = nativeSymbol;
exports.toObject = toObject;
exports.useSymbolAsUid = useSymbolAsUid;
exports.wellKnownSymbol = wellKnownSymbol;
