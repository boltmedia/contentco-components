"use strict";var e=require("./style-inject.es-619a93d8.js"),t=require("./Input.module-0cce1c26.js"),n=require("react"),o=require("prop-types"),r=require("classnames");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./object-define-property-dbfabbe3.js");var i=a(n),l=a(o),s=a(r),u=e.createCommonjsModule((function(t,n){e.commonjsGlobal,function(e,t){var n,o,r="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o.splice(t,1))}}),a=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){a=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var t=null,n=null,o=null,i=function(){e.clientWidth!==n&&f()},l=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",f,!1),e.removeEventListener("keyup",f,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",f,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",f,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",f,!1),e.addEventListener("autosize:update",f,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:l,update:f}),s()}function s(){var n=window.getComputedStyle(e,null);"vertical"===n.resize?e.style.resize="none":"both"===n.resize&&(e.style.resize="horizontal"),t="content-box"===n.boxSizing?-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),isNaN(t)&&(t=0),f()}function u(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function d(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function c(){if(0!==e.scrollHeight){var o=d(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,o.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function f(){c();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(u("scroll"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(u("hidden"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==r){o=r;var i=a("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}function l(e){var t=r.get(e);t&&t.destroy()}function s(e){var t=r.get(e);t&&t.update()}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((u=function(e){return e}).destroy=function(e){return e},u.update=function(e){return e}):((u=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return i(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e},u.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e}),t.default=u,e.exports=t.default}(t,n)})),d=function(e,t,n){return((n=window.getComputedStyle)?n(e):e.currentStyle)[t.replace(/-(\w)/gi,(function(e,t){return t.toUpperCase()}))]};var c,f=function(e){var t=d(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var o=e.style.lineHeight;e.style.lineHeight=t+"em",t=d(e,"line-height"),n=parseFloat(t,10),o?e.style.lineHeight=o:delete e.style.lineHeight}if(-1!==t.indexOf("pt")?(n*=4,n/=3):-1!==t.indexOf("mm")?(n*=96,n/=25.4):-1!==t.indexOf("cm")?(n*=96,n/=2.54):-1!==t.indexOf("in")?n*=96:-1!==t.indexOf("pc")&&(n*=16),n=Math.round(n),"normal"===t){var r=e.nodeName,a=document.createElement(r);a.innerHTML="&nbsp;","TEXTAREA"===r.toUpperCase()&&a.setAttribute("rows","1");var i=d(e,"font-size");a.style.fontSize=i,a.style.padding="0px",a.style.border="0px";var l=document.body;l.appendChild(a),n=a.offsetHeight,l.removeChild(a)}return n},p=e.commonjsGlobal&&e.commonjsGlobal.__extends||(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=e.commonjsGlobal&&e.commonjsGlobal.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},y=e.commonjsGlobal&&e.commonjsGlobal.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},m=f,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lineHeight:null},t.textarea=null,t.onResize=function(e){t.props.onResize&&t.props.onResize(e)},t.updateLineHeight=function(){t.textarea&&t.setState({lineHeight:m(t.textarea)})},t.onChange=function(e){var n=t.props.onChange;t.currentValue=e.currentTarget.value,n&&n(e)},t}return p(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.maxRows,o=t.async;"number"==typeof n&&this.updateLineHeight(),"number"==typeof n||o?setTimeout((function(){return e.textarea&&u(e.textarea)})):this.textarea&&u(this.textarea),this.textarea&&this.textarea.addEventListener("autosize:resized",this.onResize)},t.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener("autosize:resized",this.onResize),u.destroy(this.textarea))},t.prototype.render=function(){var e=this,t=this.props;t.onResize;var n=t.maxRows;t.onChange;var o=t.style;t.innerRef;var r=t.children,a=y(t,["onResize","maxRows","onChange","style","innerRef","children"]),l=this.state.lineHeight,s=n&&l?l*n:null;return i.default.createElement("textarea",h({},a,{onChange:this.onChange,style:s?h({},o,{maxHeight:s}):o,ref:function(t){e.textarea=t,"function"==typeof e.props.innerRef?e.props.innerRef(t):e.props.innerRef&&(e.props.innerRef.current=t)}}),r)},t.prototype.componentDidUpdate=function(){this.textarea&&u.update(this.textarea)},t.defaultProps={rows:1,async:!1},t.propTypes={rows:l.default.number,maxRows:l.default.number,onResize:l.default.func,innerRef:l.default.any,async:l.default.bool},t}(i.default.Component),g=i.default.forwardRef((function(e,t){return i.default.createElement(v,h({},e,{innerRef:t}))})),b=Object.defineProperty({TextareaAutosize:g},"__esModule",{value:!0}),w=e.createCommonjsModule((function(e,t){t.__esModule=!0,t.default=b.TextareaAutosize})),x=e.getDefaultExportFromCjs(w),E=["disabled","name","placeholder","label","required","error"],z=i.default.forwardRef((function(n,o){var r=n.disabled,a=n.name,l=n.placeholder,u=n.label,d=n.required,c=n.error,f=e._objectWithoutProperties(n,E);return i.default.createElement("div",{className:s.default(t.Styles.container,f.className,r&&t.Styles.disabled)},i.default.createElement(x,e._extends({ref:o,className:s.default(t.Styles.base,t.Styles.textArea),id:a,name:a,placeholder:l||u,required:d,disabled:r},f)),i.default.createElement("label",{htmlFor:a,className:s.default(t.Styles.label,c&&t.Styles.error)},c||u))}));z.propTypes={name:l.default.string.isRequired,disabled:l.default.bool,active:l.default.bool,error:l.default.oneOfType([l.default.string,l.default.bool]),predicted:l.default.bool,label:l.default.string,placeholder:l.default.string},module.exports=z;
//# sourceMappingURL=TextArea.js.map
