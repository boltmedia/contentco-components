"use strict";var e=require("./extends-0af1ba00.js"),t=require("./objectWithoutProperties-2dcf9e72.js");require("./es.function.name-b76c397b.js");var n=require("./index-9506e720.js"),o=require("./index-d159019d.js"),r=require("./Input.module-133c3895.js"),i=require("./style-inject.es-bb80f4a2.js");require("./object-define-property-c73fe527.js");
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
var a=n.createCommonjsModule((function(e,t){n.commonjsGlobal,function(e,t){var n,o,r="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o.splice(t,1))}}),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var t=null,n=null,o=null,a=function(){e.clientWidth!==n&&d()},s=function(t){window.removeEventListener("resize",a,!1),e.removeEventListener("input",d,!1),e.removeEventListener("keyup",d,!1),e.removeEventListener("autosize:destroy",s,!1),e.removeEventListener("autosize:update",d,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",s,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",d,!1),window.addEventListener("resize",a,!1),e.addEventListener("input",d,!1),e.addEventListener("autosize:update",d,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:s,update:d}),l()}function l(){var n=window.getComputedStyle(e,null);"vertical"===n.resize?e.style.resize="none":"both"===n.resize&&(e.style.resize="horizontal"),t="content-box"===n.boxSizing?-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),isNaN(t)&&(t=0),d()}function p(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function u(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function c(){if(0!==e.scrollHeight){var o=u(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,o.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function d(){c();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(p("scroll"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(p("hidden"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==r){o=r;var a=i("autosize:resized");try{e.dispatchEvent(a)}catch(e){}}}}function s(e){var t=r.get(e);t&&t.destroy()}function l(e){var t=r.get(e);t&&t.update()}var p=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((p=function(e){return e}).destroy=function(e){return e},p.update=function(e){return e}):((p=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e},p.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=p,e.exports=t.default}(e,t)})),s=function(e,t,n){return((n=window.getComputedStyle)?n(e):e.currentStyle)[t.replace(/-(\w)/gi,(function(e,t){return t.toUpperCase()}))]};var l,p=function(e){var t=s(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var o=e.style.lineHeight;e.style.lineHeight=t+"em",t=s(e,"line-height"),n=parseFloat(t,10),o?e.style.lineHeight=o:delete e.style.lineHeight}if(-1!==t.indexOf("pt")?(n*=4,n/=3):-1!==t.indexOf("mm")?(n*=96,n/=25.4):-1!==t.indexOf("cm")?(n*=96,n/=2.54):-1!==t.indexOf("in")?n*=96:-1!==t.indexOf("pc")&&(n*=16),n=Math.round(n),"normal"===t){var r=e.nodeName,i=document.createElement(r);i.innerHTML="&nbsp;","TEXTAREA"===r.toUpperCase()&&i.setAttribute("rows","1");var a=s(e,"font-size");i.style.fontSize=a,i.style.padding="0px",i.style.border="0px";var l=document.body;l.appendChild(i),n=i.offsetHeight,l.removeChild(i)}return n},u=n.commonjsGlobal&&n.commonjsGlobal.__extends||(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=n.commonjsGlobal&&n.commonjsGlobal.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d=n.commonjsGlobal&&n.commonjsGlobal.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},f=p,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lineHeight:null},t.textarea=null,t.onResize=function(e){t.props.onResize&&t.props.onResize(e)},t.updateLineHeight=function(){t.textarea&&t.setState({lineHeight:f(t.textarea)})},t.onChange=function(e){var n=t.props.onChange;t.currentValue=e.currentTarget.value,n&&n(e)},t}return u(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.maxRows,o=t.async;"number"==typeof n&&this.updateLineHeight(),"number"==typeof n||o?setTimeout((function(){return e.textarea&&a(e.textarea)})):this.textarea&&a(this.textarea),this.textarea&&this.textarea.addEventListener("autosize:resized",this.onResize)},t.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener("autosize:resized",this.onResize),a.destroy(this.textarea))},t.prototype.render=function(){var e=this,t=this.props;t.onResize;var o=t.maxRows;t.onChange;var r=t.style;t.innerRef;var i=t.children,a=d(t,["onResize","maxRows","onChange","style","innerRef","children"]),s=this.state.lineHeight,l=o&&s?s*o:null;return n.react.createElement("textarea",c({},a,{onChange:this.onChange,style:l?c({},r,{maxHeight:l}):r,ref:function(t){e.textarea=t,"function"==typeof e.props.innerRef?e.props.innerRef(t):e.props.innerRef&&(e.props.innerRef.current=t)}}),i)},t.prototype.componentDidUpdate=function(){this.textarea&&a.update(this.textarea)},t.defaultProps={rows:1,async:!1},t.propTypes={rows:o.propTypes.number,maxRows:o.propTypes.number,onResize:o.propTypes.func,innerRef:o.propTypes.any,async:o.propTypes.bool},t}(n.react.Component),y=n.react.forwardRef((function(e,t){return n.react.createElement(h,c({},e,{innerRef:t}))})),m=Object.defineProperty({TextareaAutosize:y},"__esModule",{value:!0}),v=n.createCommonjsModule((function(e,t){t.__esModule=!0,t.default=m.TextareaAutosize})),b=n.getDefaultExportFromCjs(v),g=["disabled","name","placeholder","label","required","error"],x=n.react.forwardRef((function(o,a){var s=o.disabled,l=o.name,p=o.placeholder,u=o.label,c=o.required,d=o.error,f=t._objectWithoutProperties(o,g);return n.react.createElement("div",{className:i.classnames(r.InputStyles.container,f.className,s&&r.InputStyles.disabled)},n.react.createElement(b,e._extends({ref:a,className:i.classnames(r.InputStyles.base,r.InputStyles.textArea),id:l,name:l,placeholder:p||u,required:c,disabled:s},f)),n.react.createElement("label",{htmlFor:l,className:i.classnames(r.InputStyles.label,d&&r.InputStyles.error)},d||u))}));x.propTypes={name:o.propTypes.string.isRequired,disabled:o.propTypes.bool,active:o.propTypes.bool,error:o.propTypes.oneOfType([o.propTypes.string,o.propTypes.bool]),predicted:o.propTypes.bool,label:o.propTypes.string,placeholder:o.propTypes.string},module.exports=x;
//# sourceMappingURL=TextArea.js.map
