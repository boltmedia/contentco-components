"use strict";var e=require("./style-inject.es-16eb3807.js"),n=require("react"),t=require("react-dom");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(n),r=o(t);var s,i=(s=a.default)&&"object"==typeof s&&"default"in s?s.default:s;function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),o=0;o<t.length;o++){var a=t[o],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e.prototype.constructor=e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e,n,t,o,a,r,s,i){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,o,a,r,s,i],c=0;(l=new Error(n.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function f(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",t-n),o.select()}}var h={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function d(e,n,t){var o="",a="",r=null,s=[];if(void 0===n&&(n="_"),null==t&&(t=h),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!t[e]?(s.push(o.length),o.length===s.length-1&&(a+=e)):r=o.length+1,o+=e,!1)})),{maskChar:n,formatChars:t,prefix:a,mask:o,lastEditablePosition:r,permanents:s}}function v(e,n){return-1!==e.permanents.indexOf(n)}function m(e,n,t){var o=e.mask,a=e.formatChars;if(!t)return!1;if(v(e,n))return o[n]===t;var r=a[o[n]];return new RegExp(r).test(t)}function g(e,n){return n.split("").every((function(n,t){return v(e,t)||!m(e,t,n)}))}function k(e,n){var t=e.maskChar,o=e.prefix;if(!t){for(;n.length>o.length&&v(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=o.length,r=n.length;r>=o.length;r--){var s=n[r];if(!v(e,r)&&m(e,r,s)){a=r+1;break}}return a}function w(e,n){return k(e,n)===e.mask.length}function C(e,n){var t=e.maskChar,o=e.mask,a=e.prefix;if(!t){for((n=S(e,"",n,0)).length<a.length&&(n=a);n.length<o.length&&v(e,n.length);)n+=o[n.length];return n}if(n)return S(e,C(e,""),n,0);for(var r=0;r<o.length;r++)v(e,r)?n+=o[r]:n+=t;return n}function S(e,n,t,o){var a=e.mask,r=e.maskChar,s=e.prefix,i=t.split(""),l=w(e,n);return!r&&o>n.length&&(n+=a.slice(n.length,o)),i.every((function(t){for(;c=t,v(e,u=o)&&c!==a[u];){if(o>=n.length&&(n+=a[o]),i=t,r&&v(e,o)&&i===r)return!0;if(++o>=a.length)return!1}var i,u,c;return!m(e,o,t)&&t!==r||(o<n.length?n=r||l||o<s.length?n.slice(0,o)+t+n.slice(o+1):(n=n.slice(0,o)+t+n.slice(o),C(e,n)):r||(n+=t),++o<a.length)})),n}function O(e,n){for(var t=e.mask,o=n;o<t.length;++o)if(!v(e,o))return o;return null}function M(e){return e||0===e?e+"":""}function D(e,n,t,o,a){var r=e.mask,s=e.prefix,i=e.lastEditablePosition,l=n,u="",c=0,p=0,f=Math.min(a.start,t.start);return t.end>a.start?p=(c=function(e,n,t,o){var a=e.mask,r=e.maskChar,s=t.split(""),i=o;return s.every((function(n){for(;s=n,v(e,t=o)&&s!==a[t];)if(++o>=a.length)return!1;var t,s;return(m(e,o,n)||n===r)&&o++,o<a.length})),o-i}(e,0,u=l.slice(a.start,t.end),f))?a.length:0:l.length<o.length&&(p=o.length-l.length),l=o,p&&(1!==p||a.length||(f=a.start===t.start?O(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!v(e,t))return t;return null}(e,t.start)),l=function(e,n,t,o){var a=t+o,r=e.maskChar,s=e.mask,i=e.prefix,l=n.split("");if(r)return l.map((function(n,o){return o<t||a<=o?n:v(e,o)?s[o]:r})).join("");for(var u=a;u<l.length;u++)v(e,u)&&(l[u]="");return t=Math.max(i.length,t),l.splice(t,a-t),n=l.join(""),C(e,n)}(e,l,f,p)),l=S(e,l,u,f),(f+=c)>=r.length?f=r.length:f<s.length&&!c?f=s.length:f>=s.length&&f<i&&c&&(f=O(e,f)),u||(u=null),{value:l=C(e,l),enteredString:u,selection:{start:f,end:f}}}function I(e){return"function"==typeof e}function b(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function E(e){return(b()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function y(e){(b()||clearTimeout)(e)}var V=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=E(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(y(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=r.default.findDOMNode(c(c(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=k(t.maskOptions,t.value),n=O(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,o){void 0===o&&(o={});var a=t.getInputDOMNode(),r=t.isFocused();a&&r&&(o.deferred||f(a,e,n),null!==t.selectionDeferId&&y(t.selectionDeferId),t.selectionDeferId=E((function(){t.selectionDeferId=null,f(a,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(n=-o.moveStart("character",-e.value.length),t=-o.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:n,maskChar:o,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:r}},t.isInputAutofilled=function(e,n,o,a){var r=t.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(e){}return!t.focused||a.end<o.length&&n.end===e.length},t.onChange=function(e){var n=c(c(t)).beforePasteState,o=c(c(t)).previousSelection,a=t.props.beforeMaskedValueChange,r=t.getInputValue(),s=t.value,i=t.getSelection();t.isInputAutofilled(r,i,s,o)&&(s=C(t.maskOptions,""),o={start:0,end:0,length:0}),n&&(o=n.selection,s=n.value,i={start:o.start+r.length,end:o.start+r.length,length:0},r=s.slice(0,o.start)+r+s.slice(o.end),t.beforePasteState=null);var l=D(t.maskOptions,r,i,s,o),u=l.enteredString,p=l.selection,f=l.value;if(I(a)){var h=a({value:f,selection:p},{value:s,selection:o},u,t.getBeforeMaskedValueChangeConfig());f=h.value,p=h.selection}t.setInputValue(f),I(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions,a=o.mask,r=o.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)k(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var s=C(t.maskOptions,r),i=C(t.maskOptions,s),l=k(t.maskOptions,i),u=O(t.maskOptions,l),c={start:u,end:u};if(I(n)){var p=n({value:i,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());i=p.value,c=p.selection}var f=i!==t.getInputValue();f&&t.setInputValue(i),f&&I(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}I(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,o&&!t.props.alwaysShowMask&&g(t.maskOptions,t.value)){var a="";I(n)&&(a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var r=a!==t.getInputValue();r&&t.setInputValue(a),r&&I(t.props.onChange)&&t.props.onChange(e)}I(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var o=Math.abs(n.clientX-t.mouseDownX),a=Math.abs(n.clientY-t.mouseDownY),r=Math.max(o,a),s=(new Date).getTime()-t.mouseDownTime;(r<=10&&s<=200||r<=5&&s<=300)&&t.setCursorToEnd()}}))}I(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){I(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&I(t.props.inputRef)&&t.props.inputRef(e)};var o=n.mask,a=n.maskChar,s=n.formatChars,i=n.alwaysShowMask,l=n.beforeMaskedValueChange,u=n.defaultValue,p=n.value;t.maskOptions=d(o,a,s),null==u&&(u=""),null==p&&(p=u);var h=M(p);if(t.maskOptions.mask&&(i||h)&&(h=C(t.maskOptions,h),I(l))){var v=n.value;null==n.value&&(v=u),h=l({value:h,selection:null},{value:v=M(v),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=h,t}u(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,o=n.alwaysShowMask,a=n.mask,r=n.maskChar,s=n.formatChars,i=this.maskOptions,l=o||this.isFocused(),u=null!=this.props.value,c=u?M(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=d(a,r,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=C(this.maskOptions,c)),f){var h=k(this.maskOptions,c);(null===p||h<p)&&(p=w(this.maskOptions,c)?h:O(this.maskOptions,h))}!this.maskOptions.mask||!g(this.maskOptions,c)||l||u&&this.props.value||(c="");var v={start:p,end:p};if(I(t)){var m=t({value:c,selection:v},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=m.value,v=m.selection}this.value=c;var S=this.getInputValue()!==this.value;S?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var D=!1;null!=v.start&&null!=v.end&&(D=!e||e.start!==v.start||e.end!==v.end),(D||S)&&this.setSelection(v.start,v.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&y(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),o=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],0<=n.indexOf(t)||(a[t]=e[t]);return a}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){I(t)||p(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=l({},o);a.forEach((function(e){return delete r[e]})),e=t(r),a.filter((function(n){return null!=e.props[n]&&e.props[n]!==o[n]})).length&&p(!1)}else e=i.createElement("input",l({ref:this.handleRef},o));var s={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(s.onChange=this.onChange,s.onPaste=this.onPaste,s.onMouseDown=this.onMouseDown),null!=o.value&&(s.value=this.value)),e=i.cloneElement(e,s)},n}(i.Component),P=function(e,n,t,o,a,r,s,i){if("production"!==process.env.NODE_ENV&&void 0===n)throw new Error("invariant requires an error message argument");if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,o,a,r,s,i],c=0;(l=new Error(n.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}},L=function(){};if("production"!==process.env.NODE_ENV){var x=function(e,n){var t=arguments.length;n=new Array(t>1?t-1:0);for(var o=1;o<t;o++)n[o-1]=arguments[o];var a=0,r="Warning: "+e.replace(/%s/g,(function(){return n[a++]}));"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}};L=function(e,n,t){var o=arguments.length;t=new Array(o>2?o-2:0);for(var a=2;a<o;a++)t[a-2]=arguments[a];if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||x.apply(null,[n].concat(t))}}var N=L;function F(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var R=F(a.default),B=F(P),A=F(N);function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function T(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,function(e,n){for(var t=Object.getOwnPropertyNames(n),o=0;o<t.length;o++){var a=t[o],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e,n)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",t-n),o.select()}}var _={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function z(e,n,t){var o="",a="",r=null,s=[];if(void 0===n&&(n="_"),null==t&&(t=_),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i||"\\"!==e?(i||!t[e]?(s.push(o.length),o.length===s.length-1&&(a+=e)):r=o.length+1,o+=e,i=!1):i=!0})),{maskChar:n,formatChars:t,prefix:a,mask:o,lastEditablePosition:r,permanents:s}}function X(e,n){return-1!==e.permanents.indexOf(n)}function Y(e,n,t){var o=e.mask,a=e.formatChars;if(!t)return!1;if(X(e,n))return o[n]===t;var r=a[o[n]];return new RegExp(r).test(t)}function W(e,n){return n.split("").every((function(n,t){return X(e,t)||!Y(e,t,n)}))}function Z(e,n){var t=e.maskChar,o=e.prefix;if(!t){for(;n.length>o.length&&X(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=o.length,r=n.length;r>=o.length;r--){var s=n[r];if(!X(e,r)&&Y(e,r,s)){a=r+1;break}}return a}function G(e,n){return Z(e,n)===e.mask.length}function H(e,n){var t=e.maskChar,o=e.mask,a=e.prefix;if(!t){for((n=J(e,"",n,0)).length<a.length&&(n=a);n.length<o.length&&X(e,n.length);)n+=o[n.length];return n}if(n)return J(e,H(e,""),n,0);for(var r=0;r<o.length;r++)X(e,r)?n+=o[r]:n+=t;return n}function J(e,n,t,o){var a=e.mask,r=e.maskChar,s=e.prefix,i=t.split(""),l=G(e,n),u=function(n,t){return!r||!X(e,t)||n!==r};return!r&&o>n.length&&(n+=a.slice(n.length,o)),i.every((function(t){for(;c=t,X(e,i=o)&&c!==a[i];){if(o>=n.length&&(n+=a[o]),!u(t,o))return!0;if(++o>=a.length)return!1}var i,c;return!Y(e,o,t)&&t!==r||(o<n.length?r||l||o<s.length?n=n.slice(0,o)+t+n.slice(o+1):(n=n.slice(0,o)+t+n.slice(o),n=H(e,n)):r||(n+=t),++o<a.length)})),n}function K(e,n){for(var t=e.mask,o=n;o<t.length;++o)if(!X(e,o))return o;return null}function Q(e){return e||0===e?e+"":""}function $(e,n,t,o,a){var r=e.mask,s=e.prefix,i=e.lastEditablePosition,l=n,u="",c=0,p=0,f=Math.min(a.start,t.start);if(t.end>a.start?p=(c=function(e,n,t,o){var a=e.mask,r=e.maskChar,s=t.split(""),i=o;return s.every((function(n){for(;s=n,X(e,t=o)&&s!==a[t];)if(++o>=a.length)return!1;var t,s;return(Y(e,o,n)||n===r)&&o++,o<a.length})),o-i}(e,0,u=l.slice(a.start,t.end),f))?a.length:0:l.length<o.length&&(p=o.length-l.length),l=o,p){if(1===p&&!a.length)f=a.start===t.start?K(e,t.start):function(e,n){for(var t=n;t>=0;--t)if(!X(e,t))return t;return null}(e,t.start);l=function(e,n,t,o){var a=t+o,r=e.maskChar,s=e.mask,i=e.prefix,l=n.split("");if(!r){for(var u=a;u<l.length;u++)X(e,u)&&(l[u]="");return t=Math.max(i.length,t),l.splice(t,a-t),n=l.join(""),H(e,n)}return l.map((function(n,o){return o<t||o>=a?n:X(e,o)?s[o]:r})).join("")}(e,l,f,p)}return l=J(e,l,u,f),(f+=c)>=r.length?f=r.length:f<s.length&&!c?f=s.length:f>=s.length&&f<i&&c&&(f=K(e,f)),u||(u=null),{value:l=H(e,l),enteredString:u,selection:{start:f,end:f}}}function ee(e){return"function"==typeof e}function ne(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function te(e){return(!!ne()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function oe(e){(ne()||clearTimeout)(e)}var ae=function(e){function n(n){var t;(t=e.call(this,n)||this).focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=te(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(oe(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=r.default.findDOMNode(q(q(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=Z(t.maskOptions,t.value),n=K(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,o){void 0===o&&(o={});var a=t.getInputDOMNode(),r=t.isFocused();a&&r&&(o.deferred||U(a,e,n),null!==t.selectionDeferId&&oe(t.selectionDeferId),t.selectionDeferId=te((function(){t.selectionDeferId=null,U(a,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(n=-o.moveStart("character",-e.value.length),t=-o.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:n,maskChar:o,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:r}},t.isInputAutofilled=function(e,n,o,a){var r=t.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(e){}return!t.focused||a.end<o.length&&n.end===e.length},t.onChange=function(e){var n=q(q(t)).beforePasteState,o=q(q(t)).previousSelection,a=t.props.beforeMaskedValueChange,r=t.getInputValue(),s=t.value,i=t.getSelection();t.isInputAutofilled(r,i,s,o)&&(s=H(t.maskOptions,""),o={start:0,end:0,length:0}),n&&(o=n.selection,s=n.value,i={start:o.start+r.length,end:o.start+r.length,length:0},r=s.slice(0,o.start)+r+s.slice(o.end),t.beforePasteState=null);var l=$(t.maskOptions,r,i,s,o),u=l.enteredString,c=l.selection,p=l.value;if(ee(a)){var f=a({value:p,selection:c},{value:s,selection:o},u,t.getBeforeMaskedValueChangeConfig());p=f.value,c=f.selection}t.setInputValue(p),ee(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(c.start,c.end,{deferred:!0}):t.setSelection(c.start,c.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions,a=o.mask,r=o.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)Z(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var s=H(t.maskOptions,r),i=H(t.maskOptions,s),l=Z(t.maskOptions,i),u=K(t.maskOptions,l),c={start:u,end:u};if(ee(n)){var p=n({value:i,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());i=p.value,c=p.selection}var f=i!==t.getInputValue();f&&t.setInputValue(i),f&&ee(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}ee(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,o&&!t.props.alwaysShowMask&&W(t.maskOptions,t.value)){var a="";if(ee(n))a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value;var r=a!==t.getInputValue();r&&t.setInputValue(a),r&&ee(t.props.onChange)&&t.props.onChange(e)}ee(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var o=Math.abs(n.clientX-t.mouseDownX),a=Math.abs(n.clientY-t.mouseDownY),r=Math.max(o,a),s=(new Date).getTime()-t.mouseDownTime;(r<=10&&s<=200||r<=5&&s<=300)&&t.setCursorToEnd()}}))}ee(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){ee(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&ee(t.props.inputRef)&&t.props.inputRef(e)};var o=n.mask,a=n.maskChar,s=n.formatChars,i=n.alwaysShowMask,l=n.beforeMaskedValueChange,u=n.defaultValue,c=n.value;t.maskOptions=z(o,a,s),null==u&&(u=""),null==c&&(c=u);var p=Q(c);if(t.maskOptions.mask&&(i||p)&&(p=H(t.maskOptions,p),ee(l))){var f=n.value;null==n.value&&(f=u),p=l({value:p,selection:null},{value:f=Q(f),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=p,t}T(n,e);var t=n.prototype;return t.componentDidMount=function(){var e,n,t;(this.mounted=!0,this.getInputDOMNode())&&(this.isWindowsPhoneBrowser=(e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent,e.test(t)&&n.test(t)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,o=n.alwaysShowMask,a=n.mask,r=n.maskChar,s=n.formatChars,i=this.maskOptions,l=o||this.isFocused(),u=null!=this.props.value,c=u?Q(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=z(a,r,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=H(this.maskOptions,c)),f){var h=Z(this.maskOptions,c);(null===p||h<p)&&(p=G(this.maskOptions,c)?h:K(this.maskOptions,h))}!this.maskOptions.mask||!W(this.maskOptions,c)||l||u&&this.props.value||(c="");var d={start:p,end:p};if(ee(t)){var v=t({value:c,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=v.value,d=v.selection}this.value=c;var m=this.getInputValue()!==this.value;m?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var g=!1;null!=d.start&&null!=d.end&&(g=!e||e.start!==d.start||e.end!==d.end),(g||m)&&this.setSelection(d.start,d.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&oe(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e=this.props,n=e.mask;e.alwaysShowMask;var t=e.maskChar,o=e.formatChars,a=e.inputRef;e.beforeMaskedValueChange;var r,s=e.children,i=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if("production"!==process.env.NODE_ENV&&A(!i.maxLength||!z(n,t,o).mask,"react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."),s){ee(s)||("production"!==process.env.NODE_ENV?B(!1,"react-input-mask: children must be a function"):B(!1));var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],u=j({},i);l.forEach((function(e){return delete u[e]})),r=s(u);var c=l.filter((function(e){return null!=r.props[e]&&r.props[e]!==i[e]}));c.length&&("production"!==process.env.NODE_ENV?B(!1,"react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: "+c.join(", ")):B(!1)),"production"!==process.env.NODE_ENV&&A(!a,"react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead")}else r=R.createElement("input",j({ref:this.handleRef},i));var p={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(i.disabled||i.readOnly||(p.onChange=this.onChange,p.onPaste=this.onPaste,p.onMouseDown=this.onMouseDown),null!=i.value&&(p.value=this.value)),r=R.cloneElement(r,p)},n}(R.Component),re=e.createCommonjsModule((function(e){"production"===process.env.NODE_ENV?e.exports=V:e.exports=ae}));exports.reactInputMask=re;
//# sourceMappingURL=index-a689fa6d.js.map
