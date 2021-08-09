"use strict";var n=require("./style-inject.es-619a93d8.js"),e=require("./Loader-2cafcc69.js"),t=require("react"),o=require("prop-types"),r=require("classnames");function l(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var u,i=l(t),Q=l(o),a=l(r),c=function(n,e,t){if(function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function")}(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,o){return n.call(e,t,o)};case 3:return function(t,o,r){return n.call(e,t,o,r)}}return function(){return n.apply(e,arguments)}},d=Array.isArray||function(n){return"Array"==e.classofRaw(n)},U=e.wellKnownSymbol("species"),s=function(n,t){return new(function(n){var t;return d(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!d(t.prototype)?e.isObject(t)&&null===(t=t[U])&&(t=void 0):t=void 0),void 0===t?Array:t}(n))(0===t?0:t)},B=[].push,F=function(n){var t=1==n,o=2==n,r=3==n,l=4==n,u=6==n,i=7==n,Q=5==n||u;return function(a,d,U,F){for(var _,b,f=e.toObject(a),L=e.indexedObject(f),h=c(d,U,3),m=e.toLength(L.length),p=0,g=F||s,R=t?g(a,m):o||i?g(a,0):void 0;m>p;p++)if((Q||p in L)&&(b=h(_=L[p],p,f),n))if(t)R[p]=b;else if(b)switch(n){case 3:return!0;case 5:return _;case 6:return p;case 2:B.call(R,_)}else switch(n){case 4:return!1;case 7:B.call(R,_)}return u?-1:r||l?l:R}},_={forEach:F(0),map:F(1),filter:F(2),some:F(3),every:F(4),find:F(5),findIndex:F(6),filterReject:F(7)},b=e.wellKnownSymbol("species"),f=_.filter,L=(u="filter",e.engineV8Version>=51||!e.fails((function(){var n=[];return(n.constructor={})[b]=function(){return{foo:1}},1!==n[u](Boolean).foo})));e._export({target:"Array",proto:!0,forced:!L},{filter:function(n){return f(this,n,arguments.length>1?arguments[1]:void 0)}});var h={btn:"Button-module_btn__173LG",blue:"Button-module_blue__3scNy",darkblue:"Button-module_darkblue__spEK8",lightGray:"Button-module_lightGray__2B-hB",gray:"Button-module_gray__10NAk",white:"Button-module_white__1LXIC",blueOutline:"Button-module_blueOutline__3sFRD",redOutline:"Button-module_redOutline__3uZzc",whiteBlueOutline:"Button-module_whiteBlueOutline__2TZcV",fullwidth:"Button-module_fullwidth__GxWlw",large:"Button-module_large__1nbMn",fullwidthLarge:"Button-module_fullwidthLarge__rLxyj"};n.styleInject('/* prettier-ignore */\n/* beautify ignore:start */\n.Button-module_btn__173LG {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 0 18px;\n  font-family: "Cerebri Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  min-width: 75px;\n  min-height: 42px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n  overflow: hidden;\n  line-height: 38px;\n  transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease-in-out;\n  will-change: background;\n  word-wrap: break-word;\n  outline: none;\n  background-color: transparent; }\n  .Button-module_btn__173LG ~ .Button-module_btn__173LG {\n    margin-left: 10px; }\n  .Button-module_btn__173LG[disabled] {\n    cursor: default;\n    opacity: 0.5; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .Button-module_btn__173LG {\n      height: 42px; } }\n  .Button-module_btn__173LG:focus {\n    transition: none;\n    outline: none;\n    box-shadow: 0 0 0 3px #c4e0fb; }\n\n.Button-module_blue__3scNy {\n  background-color: #1269db;\n  color: #fff; }\n  .Button-module_blue__3scNy:hover {\n    background-color: #0e52ac; }\n  .Button-module_blue__3scNy:active {\n    background-color: #0a3c7d; }\n\n.Button-module_darkblue__spEK8 {\n  background-color: #193278;\n  color: #fff; }\n  .Button-module_darkblue__spEK8:hover {\n    background-color: #10204e; }\n  .Button-module_darkblue__spEK8:active {\n    background-color: #070f24; }\n\n.Button-module_lightGray__2B-hB {\n  background-color: #edf0f3;\n  color: #3f474f; }\n  .Button-module_lightGray__2B-hB:hover {\n    background-color: #ced7df; }\n  .Button-module_lightGray__2B-hB:active {\n    background-color: #b0bdca; }\n\n.Button-module_gray__10NAk {\n  background-color: #3f474f;\n  color: #fff; }\n  .Button-module_gray__10NAk:hover {\n    background-color: #282e33; }\n  .Button-module_gray__10NAk:active {\n    background-color: #121416; }\n\n.Button-module_white__1LXIC {\n  background-color: #fff;\n  color: #193278; }\n  .Button-module_white__1LXIC:hover {\n    background-color: #eff7ff;\n    color: #193278; }\n  .Button-module_white__1LXIC:active {\n    background-color: #c4e0fb;\n    color: #193278; }\n\n.Button-module_blueOutline__3sFRD {\n  color: #1269db;\n  border-color: #1269db;\n  background: transparent; }\n  .Button-module_blueOutline__3sFRD:hover {\n    border-color: #0e52ac;\n    color: #0e52ac; }\n  .Button-module_blueOutline__3sFRD:active {\n    border-color: #0a3c7d;\n    color: #0a3c7d; }\n\n.Button-module_redOutline__3uZzc {\n  color: #c66;\n  border-color: #c66;\n  background: transparent; }\n  .Button-module_redOutline__3uZzc:hover {\n    border-color: #bf4040;\n    color: #bf4040; }\n  .Button-module_redOutline__3uZzc:active {\n    border-color: #993333;\n    color: #993333; }\n\n.Button-module_whiteBlueOutline__2TZcV {\n  color: #0751b3;\n  border-color: #fff;\n  background-color: #fff;\n  border-color: #0751b3;\n  word-break: break-word;\n  white-space: normal; }\n  .Button-module_whiteBlueOutline__2TZcV:hover {\n    background-color: #eff7ff;\n    border-color: #053b82;\n    color: #053b82; }\n  .Button-module_whiteBlueOutline__2TZcV:active {\n    background-color: #eff7ff;\n    border-color: #032551;\n    color: #032551; }\n\n.Button-module_fullwidth__GxWlw {\n  width: 100%;\n  margin: 6px 0px; }\n\n.Button-module_large__1nbMn {\n  height: 56px; }\n\n.Button-module_fullwidthLarge__rLxyj {\n  width: 100%;\n  margin: 6px 0px;\n  height: 56px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0EsMEJBQUE7QUNDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0tEOE5pQjtFQzdOakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUdBQXFFO0VBQ3JFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBMUIvQjtJQTZCSSxpQkFBaUIsRUFBQTtFQTdCckI7SUFpQ0ksZUFBZTtJQUNmLFlBQVksRUFBQTtFRHNNZDtJQ3hPRjtNQXNDSSxZQUFZLEVBQUEsRUFRZjtFQTlDRDtJQTBDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCRHhDZ0IsRUFBQTs7QUM0Q3BCO0VBQ0UseUJEN0JZO0VDOEJaLFdEaERVLEVBQUE7RUM4Q1o7SUFLSSx5QkFBd0MsRUFBQTtFQUw1QztJQVFJLHlCQUF3QyxFQUFBOztBQUk1QztFQUNFLHlCRHRDaUI7RUN1Q2pCLFdENURVLEVBQUE7RUMwRFo7SUFLSSx5QkFBeUMsRUFBQTtFQUw3QztJQVFJLHlCQUF5QyxFQUFBOztBQUk3QztFQUNFLHlCRHVGYztFQ3RGZCxjRHZDd0IsRUFBQTtFQ3FDMUI7SUFLSSx5QkFBc0MsRUFBQTtFQUwxQztJQVNJLHlCQUFzQyxFQUFBOztBQUkxQztFQUNFLHlCRG5Ed0I7RUNvRHhCLFdEckZVLEVBQUE7RUNtRlo7SUFLSSx5QkFBdUMsRUFBQTtFQUwzQztJQVFJLHlCQUF1QyxFQUFBOztBQUkzQztFQUNFLHNCRGhHVTtFQ2lHVixjRDVFaUIsRUFBQTtFQzBFbkI7SUFLSSx5QkRuR2tCO0lDb0dsQixjRGhGZSxFQUFBO0VDMEVuQjtJQVVJLHlCRHZHZ0I7SUN3R2hCLGNEckZlLEVBQUE7O0FDeUZuQjtFQUNFLGNEN0ZZO0VDOEZaLHFCRDlGWTtFQytGWix1QkFBdUIsRUFBQTtFQUh6QjtJQU1JLHFCQUFvQztJQUNwQyxjQUE2QixFQUFBO0VBUGpDO0lBV0kscUJBQW9DO0lBQ3BDLGNBQTZCLEVBQUE7O0FBSWpDO0VBQ0UsV0Q5Q1E7RUMrQ1Isa0JEL0NRO0VDZ0RSLHVCQUF1QixFQUFBO0VBSHpCO0lBTUkscUJBQStCO0lBQy9CLGNBQXdCLEVBQUE7RUFQNUI7SUFXSSxxQkFBK0I7SUFDL0IsY0FBd0IsRUFBQTs7QUFJNUI7RUFDRSxjRDVIbUI7RUM2SG5CLGtCRGhKVTtFQ2lKVixzQkRqSlU7RUNrSlYscUJEL0htQjtFQ2dJbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBTnJCO0lBU0kseUJEM0ZZO0lDNEZaLHFCQUF1QztJQUN2QyxjQUFnQyxFQUFBO0VBWHBDO0lBZUkseUJEakdZO0lDa0daLHFCQUF1QztJQUN2QyxjQUFnQyxFQUFBOztBQUlwQztFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoiQnV0dG9uLm1vZHVsZS5zY3NzIn0= */');var m=["type","size","className","children","content","disabled","isLoading","element"],p={WHITE:h.white,WHITE_BLUE_OUTLINE:h.whiteBlueOutline,BLUE_OUTLINE:h.blueOutline,RED_OUTLINE:h.redOutline,LIGHT_GRAY:h.lightGray,BLUE:h.blue,DARKBLUE:h.darkblue,GRAY:h.gray},g=[p.WHITE,p.WHITE_BLUE_OUTLINE,p.BLUE_OUTLINE,p.RED_OUTLINE,p.LIGHT_GRAY],R=i.default.memo((function(t){var o=t.type,r=t.size,l=t.className,u=t.children,Q=t.content,c=t.disabled,d=t.isLoading,U=t.element,s=n._objectWithoutProperties(t,m),B=g.filter((function(n){return n===o}));return i.default.createElement(U,n._extends({type:"button",className:a.default(h.btn,l,o,r),disabled:c},s),d&&i.default.createElement(e.Loader,{style:{marginRight:"10px"},color:null!=B&&B.length?e.Loader.Color.BLUE:e.Loader.Color.WHITE,size:e.Loader.Size.SMALL}),Q||u)}));R.Type=p,R.Size={FULLWIDTH:h.fullwidth,FULLWIDTH_LARGE:h.fullwidthLarge,LARGE:h.large},R.Styles=h,R.defaultProps={element:"button"},R.propTypes={type:Q.default.string,size:Q.default.string,children:Q.default.node,content:Q.default.string,className:Q.default.string,disabled:Q.default.bool,isLoading:Q.default.bool,asLink:Q.default.bool},module.exports=R;
//# sourceMappingURL=Button.js.map
