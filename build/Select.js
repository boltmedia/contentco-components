"use strict";require("./es.object.keys-b84310b4.js"),require("./es.array.filter-fb4db559.js");var e=require("./objectWithoutProperties-c681446b.js"),t=require("./defineProperty-4dba4d6d.js"),r=require("./slicedToArray-87b5ca9c.js");require("./es.array.map-b7f90c8b.js");var n=require("./Input.module-84244b42.js"),a=require("react"),l=require("prop-types"),i=require("classnames"),u=require("react-select"),s=require("react-select/async"),o=require("react-select-async-paginate"),c=require("react-select/creatable");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./export-dd5669ae.js"),require("./object-define-property-78f695c9.js"),require("./style-inject.es-16eb3807.js"),require("./array-method-has-species-support-d9d3e6df.js"),require("./to-string-fd42d601.js"),require("./create-property-99ba75c4.js"),require("./unsupportedIterableToArray-2a3d52c5.js"),require("./array-species-create-af04dcb5.js");var p=d(a),f=d(l),m=d(i),y=d(u),b=d(s),v=d(o),g=d(c),j=["disabled","name","className","label","placeholder","onChange","classNamePrefix"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){t._defineProperty(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=a.memo(y.default),P=a.memo(b.default),q=a.memo(v.default),I=a.memo(g.default),x=function(){return p.default.createElement("span",{className:n.InputStyles.rightArrow})},E=function(){return p.default.createElement("span",{className:n.InputStyles.downArrow})},N=function t(l){var i,u,s,o,c=l.data;l.getStyles,l.innerRef;var d=l.innerProps,f=l.indentBy,m=void 0===f?0:f,y=l.selectOption,b=l.selectProps,v=a.useState(!1),g=r._slicedToArray(v,2),j=g[0],h=g[1],O=S(S({},d),{},{onClick:function(){return y(c)}}),P=c&&(null==b||null===(i=b.getOptionChildren)||void 0===i?void 0:i.call(b,c))||(null==c?void 0:c.children)||[];return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:n.InputStyles.multiLevelOption},p.default.createElement("div",{className:n.InputStyles.actions},(null===(u=l.data)||void 0===u||null===(s=u.children)||void 0===s?void 0:s.length)>0&&p.default.createElement("button",{className:n.InputStyles.action,onClick:function(){return h(!j)}},j?p.default.createElement(x,null):p.default.createElement(E,null))),p.default.createElement("div",e._extends({},O,{style:{marginLeft:"".concat(20*m,"px")},className:n.InputStyles.optionItem}),null==b||null===(o=b.getOptionLabel)||void 0===o?void 0:o.call(b,c))),j&&(null==P?void 0:P.length)>0?null==P?void 0:P.map((function(r,n){return p.default.createElement(t,e._extends({key:n},l,{data:r,indentBy:m+1}))})):null)},C={option:function(e,t){return S({},e)},input:function(e){return S(S({},e),{},{margin:0,padding:0})},menu:function(e){return S(S({},e),{},{margin:"2px 0"})},placeholder:function(e){return S({},e)},control:function(e){return S(S({},e),{},{boxShadow:"none",":hover":{borderColor:"#a1aab3"}})},valueContainer:function(e){return S(S({},e),{},{padding:"2px 15px",fontSize:"16px"})},singleValue:function(e){return S(S({},e),{},{marginLeft:"0",fontSize:"16px"})}},w=function(t){var l=t.disabled,i=t.name,u=t.className,s=t.label,o=t.placeholder,c=t.onChange,d=t.classNamePrefix,f=e._objectWithoutProperties(t,j),y=a.useState(f.value||f.defaultValue),b=r._slicedToArray(y,2),v=b[0],g=b[1],h=m.default(n.InputStyles.container,u,f.isMulti&&(null==v?void 0:v.length)&&n.InputStyles.active,!f.isMulti&&Object.keys(v||{}).length&&n.InputStyles.active,l&&n.InputStyles.locked,f.error&&n.InputStyles.containerError,f.isMulti&&n.InputStyles.multiContainer);a.useEffect((function(){f.value&&g(f.value)}),[f.value]);var x=m.default(n.InputStyles.select,f.isMulti&&n.InputStyles.multi,f.error&&n.InputStyles.error),E=m.default(n.InputStyles.label,f.error&&n.InputStyles.error,f.isMulti&&(null==v?void 0:v.length)&&n.InputStyles.hasValue,!f.isMulti&&Object.keys(v||{}).length&&n.InputStyles.hasValue),w=f.isPaginated?q:f.isAsync?P:O,M=f.isCreatable?I:O;return p.default.createElement("div",{className:h,"data-test-id":f["data-test-id"]||i},p.default.createElement(w,e._extends({className:x,styles:C,name:i,placeholder:o||s,selectValue:v,defaultValue:v,onChange:function(e,t){var r=t.action,n=t.name;g(e);try{c(S(S({},e),{},{target:{name:n,value:e},action:r}))}catch(e){}},additional:{page:1},SelectComponent:M,createOptionPosition:"first",isDisabled:l,classNamePrefix:d,closeMenuOnSelect:!f.isMulti},f,f.isMultiLevel&&{components:S(S({},f.components),{},{Option:N})})),p.default.createElement("label",{htmlFor:i,className:E},f.error||s))};w.propTypes={classNamePrefix:f.default.string,"data-test-id":f.default.string,isMultiLevel:f.default.bool,getOptionChildren:f.default.func},w.defaultProps={menuPlacement:"auto",classNamePrefix:"s-contact",isAsync:!1,isPaginated:!1},module.exports=w;
//# sourceMappingURL=Select.js.map
