"use strict";var e=require("./extends-56a4827e.js"),t=require("./slicedToArray-a08f645c.js"),a=require("./objectWithoutProperties-cab73789.js"),r=require("react");require("./index-a689fa6d.js");var l=require("prop-types"),u=require("./Input.module-a09ea586.js"),d=require("classnames"),n=require("react-datetime"),s=require("moment");require("react-datetime/css/react-datetime.css");var o=require("react-text-mask");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./style-inject.es-16eb3807.js"),require("./unsupportedIterableToArray-91aa3a91.js"),require("react-dom");var c=i(r),f=i(l),p=i(d),m=i(n),y=i(s),b=i(o),v=["onChange","placeholder","label","showTime","onInvalidDate","isValidDate","disabled"],h=function(l){var d=l.onChange,n=l.placeholder,s=l.label,o=l.showTime,i=l.onInvalidDate,f=l.isValidDate,h=l.disabled,q=a._objectWithoutProperties(l,v),g=r.useState(y.default(q.value)),I=t._slicedToArray(g,2),S=I[0],T=I[1],j=r.useState(q.error),D=t._slicedToArray(j,2),M=D[0];D[1];var Y=r.useState(q.active),x=t._slicedToArray(Y,2),F=x[0];x[1];var P=p.default(u.InputStyles.container,n&&u.InputStyles.active,((h?F:F||S)||M||h)&&u.InputStyles.active,h&&!F&&u.InputStyles.locked);return c.default.createElement("div",{className:P},c.default.createElement(m.default,{dateFormat:"DD/MM/YYYY",inputProps:{className:p.default(u.InputStyles.base,u.InputStyles.inputActive),placeholder:n||s,label:s,error:q.error},closeOnSelect:!0,strictParsing:!0,value:S,onChange:function(e){if(e){if(e instanceof y.default==!1||i&&f&&!f(e)){console.log("not valid");try{i(e)}catch(e){return}return}}else{T(null);try{d(null)}catch(e){return}}var t=e;T(t);try{d(t)}catch(e){return void console.error(e)}},timeFormat:o,isValidDate:f,renderInput:function(t,a,r){return c.default.createElement(c.default.Fragment,null,c.default.createElement(b.default,e._extends({mask:[/[0-9]/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],keepCharPositions:!0},t)),c.default.createElement("label",{htmlFor:name,className:p.default(u.InputStyles.label,t.error&&u.InputStyles.error)},t.error||s))}}))};h.propTypes={name:f.default.string.isRequired,disabled:f.default.bool,active:f.default.bool,placeholder:f.default.string,error:f.default.oneOfType([f.default.string,f.default.bool,f.default.func]),required:f.default.bool,showTime:f.default.bool,value:f.default.string,step:f.default.string,type:f.default.string,label:f.default.string,onChange:f.default.func,onInvalidDate:f.default.func,onKeyPress:f.default.func,onBlur:f.default.func,onFocus:f.default.func,min:f.default.number,isValidDate:f.default.func,viewMode:f.default.string,dateFormat:f.default.oneOfType([f.default.string,f.default.bool]),isMasked:f.default.bool},h.defaultProps={type:"text",step:null,max:null,showTime:!1,viewMode:"days",dateFormat:"DD/MM/YYYY",isMasked:!0},module.exports=h;
//# sourceMappingURL=DateSelector.js.map