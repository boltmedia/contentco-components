"use strict";var r=require("./a-function-ddc7a282.js"),e=require("./object-define-property-96aa2944.js"),n=require("./array-method-has-species-support-4c71e125.js"),t=e.wellKnownSymbol("species");exports.arraySpeciesCreate=function(r,u){return new(function(r){var u;return n.isArray(r)&&("function"!=typeof(u=r.constructor)||u!==Array&&!n.isArray(u.prototype)?e.isObject(u)&&null===(u=u[t])&&(u=void 0):u=void 0),void 0===u?Array:u}(r))(0===u?0:u)},exports.functionBindContext=function(e,n,t){if(r.aFunction(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(r){return e.call(n,r)};case 2:return function(r,t){return e.call(n,r,t)};case 3:return function(r,t,u){return e.call(n,r,t,u)}}return function(){return e.apply(n,arguments)}};
//# sourceMappingURL=array-species-create-86c309e1.js.map
