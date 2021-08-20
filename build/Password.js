"use strict";require("./es.reflect.construct-b9ae3d08.js");var e=require("./defineProperty-4bdd40d4.js"),o=require("./getPrototypeOf-6cad2081.js"),r=require("./export-e024219b.js"),s=require("./object-define-property-96aa2944.js"),t=require("./array-method-has-species-support-4c71e125.js"),n=require("./create-property-8c1548c0.js");require("./es.function.name-18c10bc6.js");var a=require("react"),d=require("zxcvbn"),l=require("prop-types"),i=require("classnames"),u=require("./style-inject.es-16eb3807.js"),c=require("./Input.module-a09ea586.js");function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./a-function-ddc7a282.js"),require("./setPrototypeOf-b2238c94.js");var Q=_(a),p=_(d),U=_(l),F=_(i),m=t.arrayMethodHasSpeciesSupport("slice"),h=s.wellKnownSymbol("species"),f=[].slice,B=Math.max;r._export({target:"Array",proto:!0,forced:!m},{slice:function(e,o){var a,d,l,i=r.toIndexedObject(this),u=r.toLength(i.length),c=r.toAbsoluteIndex(e,u),_=r.toAbsoluteIndex(void 0===o?u:o,u);if(t.isArray(i)&&("function"!=typeof(a=i.constructor)||a!==Array&&!t.isArray(a.prototype)?s.isObject(a)&&null===(a=a[h])&&(a=void 0):a=void 0,a===Array||void 0===a))return f.call(i,c,_);for(d=new(void 0===a?Array:a)(B(_-c,0)),l=0;c<_;c++,l++)c in i&&n.createProperty(d,l,i[c]);return d.length=l,d}});var b={container:"Password-module_container__2_uE9",field:"Password-module_field__1iVrE",active:"Password-module_active__34Ejy",label:"Password-module_label__2pcu3",error:"Password-module_error__Xcgqy",locked:"Password-module_locked__pNeiB",button:"Password-module_button__1S_JJ",passwordInput:"Password-module_passwordInput__zmm5c",isPasswordInvalid:"Password-module_isPasswordInvalid__3RXMD",strength:"Password-module_strength__2mIbu",score0:"Password-module_score0__1Gx26",score1:"Password-module_score1__327cA",score2:"Password-module_score2__2VDYe",score3:"Password-module_score3__10HnS",score4:"Password-module_score4__zmGRJ"};function x(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,t=o._getPrototypeOf(e);if(r){var n=o._getPrototypeOf(this).constructor;s=Reflect.construct(t,arguments,n)}else s=t.apply(this,arguments);return o._possibleConstructorReturn(this,s)}}u.styleInject("/* prettier-ignore */\n/* beautify ignore:start */\n.Password-module_container__2_uE9 {\n  width: 100%;\n  box-sizing: border-box;\n  height: 50px;\n  border-radius: 4px;\n  position: relative;\n  background-color: #fff;\n  transition: 0.3s background-color cubic-bezier(0.165, 0.84, 0.44, 1), 0.3s box-shadow cubic-bezier(0.165, 0.84, 0.44, 1);\n  border: 1px solid #c3ced9;\n  overflow: hidden; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE::-webkit-input-placeholder {\n    color: #081d57; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE::-moz-placeholder {\n    color: #081d57; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE:-ms-input-placeholder {\n    color: #081d57; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE:-moz-placeholder {\n    color: #081d57; }\n  .Password-module_container__2_uE9.Password-module_active__34Ejy {\n    background-color: #fff; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE::-webkit-input-placeholder {\n      color: #a1aab3; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE::-moz-placeholder {\n      color: #a1aab3; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE:-ms-input-placeholder {\n      color: #a1aab3; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE:-moz-placeholder {\n      color: #a1aab3; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE {\n      padding: 24px 76px 8px 16px; }\n    .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE + .Password-module_label__2pcu3 {\n      top: 4px;\n      opacity: 1;\n      color: #193278; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE {\n    box-sizing: border-box;\n    width: 100%;\n    height: 48px;\n    position: relative;\n    padding: 0px 12px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: normal;\n    background-color: transparent;\n    color: #212529;\n    outline: none;\n    box-shadow: 0px 4px 20px 0px transparent;\n    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;\n    -webkit-appearance: none; }\n  .Password-module_container__2_uE9.Password-module_active__34Ejy .Password-module_field__1iVrE {\n    padding: 24px 76px 8px 16px; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE + .Password-module_label__2pcu3 {\n    position: absolute;\n    top: 24px;\n    left: 16px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 24px;\n    color: #fff;\n    opacity: 0;\n    pointer-events: none;\n    transition: 0.1s all ease-in-out; }\n  .Password-module_container__2_uE9 .Password-module_field__1iVrE + .Password-module_label__2pcu3.Password-module_error__Xcgqy {\n    color: #ec392f; }\n  .Password-module_container__2_uE9:hover {\n    background-color: #fff; }\n  .Password-module_container__2_uE9:focus {\n    background-color: #fff; }\n  .Password-module_container__2_uE9.Password-module_locked__pNeiB {\n    pointer-events: none; }\n\n.Password-module_button__1S_JJ {\n  background-color: #f2f6fa;\n  border: 1px solid #c3ced9;\n  color: #3f474f;\n  font-size: 12px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-weight: 600;\n  line-height: 18px;\n  position: absolute;\n  padding: 1px 6px;\n  top: calc(50% - 10px);\n  right: 12.5px;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: background 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  .Password-module_button__1S_JJ:hover {\n    background-color: #d8dfe6; }\n\n.Password-module_passwordInput__zmm5c {\n  border: none;\n  box-sizing: border-box;\n  font-size: 14px;\n  padding: 12px 0 8px 12px;\n  width: calc(85% - 28px); }\n  .Password-module_passwordInput__zmm5c:not(:focus).Password-module_isPasswordInvalid__3RXMD {\n    color: #d1462f; }\n\n.Password-module_strength__2mIbu {\n  box-sizing: border-box;\n  height: 3px;\n  position: relative;\n  top: 0;\n  right: 0;\n  transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  width: 0;\n  border-bottom-right-radius: 5px;\n  border-top-right-radius: 5px;\n  margin: -3px 0 0; }\n  .Password-module_strength__2mIbu.Password-module_score0__1Gx26 {\n    background: #d1462f;\n    width: 20%; }\n  .Password-module_strength__2mIbu.Password-module_score1__327cA {\n    background: #d1462f;\n    width: 40%; }\n  .Password-module_strength__2mIbu.Password-module_score2__2VDYe {\n    background: #57b8ff;\n    width: 60%; }\n  .Password-module_strength__2mIbu.Password-module_score3__10HnS {\n    background: #57b8ff;\n    width: 80%; }\n  .Password-module_strength__2mIbu.Password-module_score4__zmGRJ {\n    background: #2fbf71;\n    width: calc(100% + 2px); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9JbnB1dC9QYXNzd29yZC9QYXNzd29yZC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUNBLDBCQUFBO0FDQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JESlU7RUNLVix3SERxRndDO0VDcEZ4Qyx5QkR3Qlk7RUN2QlosZ0JBQWdCLEVBQUE7RUFUbEI7SUFZSSxjRFlzQixFQUFBO0VDeEIxQjtJQWdCSSxjRFFzQixFQUFBO0VDeEIxQjtJQW9CSSxjRElzQixFQUFBO0VDeEIxQjtJQXdCSSxjREFzQixFQUFBO0VDeEIxQjtJQTRCSSxzQkQxQlEsRUFBQTtJQ0ZaO01BZ0NNLGNEQ2UsRUFBQTtJQ2pDckI7TUFvQ00sY0RIZSxFQUFBO0lDakNyQjtNQXdDTSxjRFBlLEVBQUE7SUNqQ3JCO01BNENNLGNEWGUsRUFBQTtJQ2pDckI7TUFnRE0sMkJBQTJCLEVBQUE7SUFoRGpDO01Bb0RNLFFBQVE7TUFDUixVQUFVO01BQ1YsY0QvQmEsRUFBQTtFQ3ZCbkI7SUEyREksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixjRGxDVztJQ21DWCxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLG9HQUMwQjtJQUMxQix3QkFBd0IsRUFBQTtFQTNFNUI7SUFnRk0sMkJBQTJCLEVBQUE7RUFoRmpDO0lBcUZJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdEekZRO0lDMEZSLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZ0NBQWdDLEVBQUE7RUE5RnBDO0lBa0dJLGNEWGUsRUFBQTtFQ3ZGbkI7SUFzR0ksc0JEcEdRLEVBQUE7RUNGWjtJQTRHSSxzQkQxR1EsRUFBQTtFQ0ZaO0lBb0hJLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLHlCRDNGa0I7RUM0RmxCLHlCRDFGWTtFQzJGWixjRHhGd0I7RUN5RnhCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDhERDVDd0MsRUFBQTtFQzRCMUM7SUFrQkkseUJEdUJhLEVBQUE7O0FDVmpCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHVCQUF1QixFQUFBO0VBTHpCO0lBUUksY0FBYyxFQUFBOztBQVFsQjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IseUREakZ3QztFQ2tGeEMsUUFBUTtFQUNSLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsZ0JBQWdCLEVBQUE7RUFWbEI7SUFhSSxtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBZGQ7SUFrQkksbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtFQW5CZDtJQXVCSSxtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBeEJkO0lBNEJJLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7RUE3QmQ7SUFpQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6IlBhc3N3b3JkLm1vZHVsZS5zY3NzIn0= */");var w=function(r){o._inherits(t,r);var s=x(t);function t(e){var r;return o._classCallCheck(this,t),(r=s.call(this,e)).handleFocus=function(e){try{r.props.onFocus(e)}catch(e){return}},r.handleBlur=function(e){try{r.props.onBlur(e)}catch(e){return}},r.handleToggle=function(){r.state.togglePassword?r.setState({togglePassword:!1}):r.setState({togglePassword:!0})},r.handleChange=function(e){var o=r.props,s=o.onChange,t=o.minScore,n=0,a=null,d=null;if(r.props.showStrength&&e.target.value&&!r.isTooShort(e.target.value)){n=(d=p.default(e.target.value)).score;try{a=d.feedback.suggestions.slice(-1)[0]}catch(e){a=null}}r.props.showStrength?r.setState({error:a,value:e.target.value,isValid:n>=t,score:n},(function(){null!==s&&s(r.state,d)})):(e.persist(),r.setState({error:r.props.error,value:e.target.value,isValid:!r.state.error},(function(){null!==s&&s(e)})))},r.handleKeyPress=function(e){r.props.onKeyPress&&r.props.onKeyPress(e)},r.state={error:e.error||null,score:0,isValid:null,value:e.value||"",togglePassword:!1},r}return o._createClass(t,[{key:"isTooShort",value:function(e){return e.length<this.props.minLength}},{key:"render",value:function(){var o=this.state,r=o.score,s=o.value,t=o.isValid,n=o.error,a=o.togglePassword,d=[b.isStrength0,b.isStrength1,b.isStrength2,b.isStrength3,b.isStrength4],l=a?"hide":"show",i=a?"text":"password";return Q.default.createElement("div",{className:F.default(c.InputStyles.container,n&&c.InputStyles.containerError,e._defineProperty({},d[r],s.length>0))},Q.default.createElement("input",{className:F.default(c.InputStyles.base,c.InputStyles.input),name:this.props.name,id:"password",type:i,value:s,autoComplete:"off",placeholder:this.props.placeholder,autoFocus:this.props.autoFocus,onChange:this.handleChange.bind(this),onFocus:this.handleFocus.bind(this),onBlur:this.handleBlur.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),Q.default.createElement("label",{htmlFor:"password",className:F.default(c.InputStyles.label,!1===t&&c.InputStyles.error)},!1===t&&n||this.props.placeholder),Q.default.createElement("span",{className:b.button,onClick:this.handleToggle},l),this.props.showStrength&&Q.default.createElement("div",{className:F.default(b.strength,s&&b["score"+r])}))}}],[{key:"getDerivedStateFromProps",value:function(e,o){return e.error!==o.error&&(o.error=e.error||null,o.isValid=!e.error),o}}]),t}(Q.default.Component);w.propTypes={value:U.default.string,name:U.default.string,onKeyPress:U.default.func,onChange:U.default.func,autoFocus:U.default.bool,minLength:U.default.number,minScore:U.default.number,placeholder:U.default.string,style:U.default.object,showStrength:U.default.bool,error:U.default.oneOfType([U.default.string,U.default.bool])},w.defaultProps={showStrength:!1,name:"password",error:null,onChange:null,className:"",minLength:5,autoFocus:!0,placeholder:"Password",minScore:2},module.exports=w;
//# sourceMappingURL=Password.js.map