"use strict";require("./es.reflect.construct-b9ae3d08.js");var e=require("./react-select.browser.esm-63096722.js");require("./es.array.filter-02364506.js");var t=require("./defineProperty-4bdd40d4.js"),r=require("./getPrototypeOf-6cad2081.js");require("./es.function.name-18c10bc6.js");var n=require("./export-e024219b.js"),a=require("./object-define-property-96aa2944.js"),o=require("./array-species-create-86c309e1.js"),l=require("./create-property-8c1548c0.js"),u=require("./array-method-has-species-support-4c71e125.js"),i=require("./react-select.browser.esm-3a0b1b88.js"),s=require("./setPrototypeOf-b2238c94.js"),c=require("./to-string-b0abcdd5.js"),p=require("react"),d=require("prop-types"),f=require("./Input.module-a09ea586.js"),g=require("classnames"),h=require("./extends-56a4827e.js"),b=require("./lodash-b8c2d612.js"),v=require("react-dnd"),y=require("react-dnd-html5-backend"),m=require("./objectWithoutProperties-cab73789.js");function O(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./toConsumableArray-c25e9703.js"),require("./a-function-ddc7a282.js"),require("./set-to-string-tag-59dd206b.js"),require("./style-inject.es-16eb3807.js"),require("react-dom"),require("./unsupportedIterableToArray-91aa3a91.js");var j=O(p),S=O(d),q=O(g),C=O(y),P=u.arrayMethodHasSpeciesSupport("splice"),x=Math.max,D=Math.min;n._export({target:"Array",proto:!0,forced:!P},{splice:function(e,t){var r,u,i,s,c,p,d=a.toObject(this),f=n.toLength(d.length),g=n.toAbsoluteIndex(e,f),h=arguments.length;if(0===h?r=u=0:1===h?(r=0,u=f-g):(r=h-2,u=D(x(n.toInteger(t),0),f-g)),f+r-u>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(i=o.arraySpeciesCreate(d,u),s=0;s<u;s++)(c=g+s)in d&&l.createProperty(i,s,d[c]);if(i.length=u,r<u){for(s=g;s<f-u;s++)p=s+r,(c=s+u)in d?d[p]=d[c]:delete d[p];for(s=f;s>f-u+r;s--)delete d[s-1]}else if(r>u)for(s=f-u;s>g;s--)p=s+r-1,(c=s+u-1)in d?d[p]=d[c]:delete d[p];for(s=0;s<r;s++)d[s+g]=arguments[s+2];return d.length=f-u+r,i}});var I=a.wellKnownSymbol("unscopables"),V=Array.prototype;null==V[I]&&a.objectDefineProperty.f(V,I,{configurable:!0,value:s.objectCreate(null)});var w,M=n.arrayIncludes.includes;n._export({target:"Array",proto:!0},{includes:function(e){return M(this,e,arguments.length>1?arguments[1]:void 0)}}),w="includes",V[I][w]=!0;var R=a.wellKnownSymbol("match"),T=function(e){if(function(e){var t;return a.isObject(e)&&(void 0!==(t=e[R])?!!t:"RegExp"==n.classofRaw(e))}(e))throw TypeError("The method doesn't accept regular expressions");return e},_=a.wellKnownSymbol("match");n._export({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[_]=!1,"/./"[e](t)}catch(e){}}return!1}("includes")},{includes:function(e){return!!~c.toString(a.requireObjectCoercible(this)).indexOf(c.toString(T(e)),arguments.length>1?arguments[1]:void 0)}});var E,k,A,N,F,L,B,K,z,H,W=["isDragging","connectDragSource","connectDropTarget"],G=(E=e.components.MultiValue,k="multiValue",N=(A={getItem:function(e){return{value:e.selectProps.getOptionValue(e.data)}},getIndex:function(e){return e.data.index},getMoveFnc:function(e){return e.selectProps.moveDraggedOption}}).getItem,F=void 0===N?function(e){return{id:e.id}}:N,L=A.getIndex,B=void 0===L?function(e){return e.index}:L,K=A.getMoveFnc,z=void 0===K?function(e){return e.moveValue}:K,(H=j.default.forwardRef((function(e,t){var r=e.isDragging,n=e.connectDragSource,a=e.connectDropTarget,o=m._objectWithoutProperties(e,W),l=p.useRef(null);return n(l),a(l),p.useImperativeHandle(t,(function(){return{getNode:function(){return l.current}}})),j.default.createElement("div",{ref:l},j.default.createElement(E,h._extends({isDragging:r},o)))}))).displayName="Orderable(".concat(E.displayName||E.name||"Component",")"),H.propTypes={isDragging:S.default.bool.isRequired,connectDragSource:S.default.func.isRequired,connectDropTarget:S.default.func.isRequired},v.DropTarget(k,{hover:function(e,t,r){if(!r)return null;var n=r.getNode();if(!n)return null;var a=t.getItem().index,o=B(e);if(a===o)return null;var l=n.getBoundingClientRect(),u=(l.right-l.left)/2,i=t.getClientOffset().x-l.left;return a<o&&i<u||a>o&&i>u||(z(e)(a,o),t.getItem().index=o),null}},(function(e){return{connectDropTarget:e.dropTarget()}}))(v.DragSource(k,{beginDrag:function(e){return b.lodash.set(F(e),"index",B(e))}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(H))),J=function(e){return j.default.createElement("div",{className:"s-contact__multi-value-orderable",onMouseDown:function(e){e.stopPropagation()}},j.default.createElement(G,e))};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(n),!0).forEach((function(r){t._defineProperty(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=r._getPrototypeOf(e);if(t){var o=r._getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return r._possibleConstructorReturn(this,n)}}var Y=function(t){r._inherits(a,t);var n=X(a);function a(e){var t;return r._classCallCheck(this,a),(t=n.call(this,e)).handleChange=function(e,r){var n,a,o=r.action,l=r.name;if("select-option"===o){try{n=t.props.getOptionLabel(e),a=t.props.getOptionValue(e)}catch(e){}e&&e.value?t.setState({hasValue:!0,selectValue:e.value}):n&&a?t.setState({hasValue:!0,selectValue:a}):t.setState({selectValue:null,hasValue:!1,isClearable:!0})}else"remove-value"===o||"clear"===o?t.setState({selectValue:null,hasValue:!1,isClearable:!0}):t.setState({hasValue:!1,selectValue:null,isClearable:!0});try{t.props.onChange(U(U({},e),{},{target:{name:l,value:e}}))}catch(e){console.error(e)}},t.handleKeyPress=function(e){13===e.which&&t.setState({value:t.props.predicted});try{t.props.onKeyPress(e)}catch(e){return}},t.handleFocus=function(e){t.props.locked&&t.stateState({active:!0});try{t.props.onFocus(e)}catch(e){return}},t.handleBlur=function(e){t.props.locked&&t.stateState({active:!1});try{t.props.onBlur(e)}catch(e){return}},t.moveDraggedOption=function(e,r){var n=t.state.value;if(r>=n.length)for(var a=r-n.length+1;a--;)n.push(void 0);n.splice(r,0,n.splice(e,1)[0]),t.setState((function(e){return e.value=n,e}))},t.state={active:e.active||!1,value:e.value.map((function(e,t){return b.lodash.set(e,"index",t)}))||"",error:e.error||"",label:e.label||"Label",hasValue:!1},t}return r._createClass(a,[{key:"render",value:function(){var t,r,n=this.state,a=n.active,o=n.value,l=n.label,u=this.props,s=u.predicted,c=u.locked,p=u.name,d=u.required,g=q.default(f.InputStyles.container,((c?a:a||o.length)||this.state.error)&&f.InputStyles.active,c&&!a&&f.InputStyles.locked,this.props.isMulti?f.InputStyles.multiContainer:""),h={menu:function(e){return U(U({},e),{},{margin:"2px 0"})},control:function(e){return U(U({},e),{},{boxShadow:"none",":hover":{borderColor:"#a1aab3"}})},valueContainer:function(e){return U(U({},e),{},{padding:"2px 15px",fontSize:"16px"})},singleValue:function(e){return U(U({},e),{},{marginLeft:"0",fontSize:"16px"})},multiValue:function(e,t){var r=t.isDragging;return U(U({},e),{},{margin:"0",opacity:r?.5:null})}};return t=this.props.isPaginated?i.AsyncPaginate:this.props.isAsync?i.Async:e.InitialSelect,r=this.props.isCreatable?i.Creatable:e.InitialSelect,j.default.createElement("div",{className:g},a&&o&&s&&s.includes(o)&&j.default.createElement("p",{className:f.InputStyles.predicted},s),j.default.createElement(t,{className:q.default(f.InputStyles.select,f.InputStyles.field,this.props.isMulti?f.InputStyles.multi:""),classNamePrefix:"s-contact",name:p,menuPlacement:this.props.menuPlacement||"auto",styles:h,placeholder:l,selectValue:o,defaultValue:o,value:o&&o.map((function(e,t){return b.lodash.set(e,"index",t)})),required:d,isClearable:this.props.isClearable,getOptionLabel:this.props.getOptionLabel,getOptionValue:this.props.getOptionValue,options:this.props.options,onChange:this.handleChange,isMulti:this.props.isMulti,loadOptions:this.props.loadOptions,onInputChange:this.props.onInputChange,additional:{page:1},SelectComponent:r,onCreateOption:this.props.onCreateOption,createOptionPosition:"first",components:{MultiValue:J},moveDraggedOption:this.moveDraggedOption,closeMenuOnSelect:!this.props.isMulti}),j.default.createElement("label",{htmlFor:p,className:q.default(f.InputStyles.label,this.state.error&&f.InputStyles.error,this.state.hasValue&&f.InputStyles.hasValue)},this.state.error||l))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.error!==t.error&&(t.error=e.error||"",t.error&&(t.hasValue=!0)),e.value!==t.value&&(t.value=e.value||""),e.value&&(e.value.length>0||Object.keys(e.value).length>0)&&(t.hasValue=!0),t}}]),a}(j.default.Component);Y.propTypes={name:S.default.string.isRequired,menuPlacement:S.default.string,options:S.default.array,locked:S.default.bool,active:S.default.bool,error:S.default.oneOfType([S.default.string,S.default.bool]),isClearable:S.default.bool,predicted:S.default.bool,required:S.default.bool,value:S.default.oneOfType([S.default.string,S.default.array,S.default.object]),label:S.default.string,onChange:S.default.func,onKeyPress:S.default.func,onBlur:S.default.func,getOptionLabel:S.default.func,getOptionValue:S.default.func,onFocus:S.default.func,isAsync:S.default.bool,isPaginated:S.default.bool,isCreatable:S.default.bool,loadOptions:S.default.func,onInputChange:S.default.func},Y.defaultProps={isAsync:!1,isPaginated:!1,isCreatable:!1};var Z=v.DragDropContext(C.default)(Y);module.exports=Z;
//# sourceMappingURL=OrderableSelect.js.map
