"use strict";var r=require("./export-e024219b.js"),e=require("./object-define-property-96aa2944.js"),o=Array.isArray||function(e){return"Array"==r.classofRaw(e)},n=e.wellKnownSymbol("species");exports.arrayMethodHasSpeciesSupport=function(r){return e.engineV8Version>=51||!e.fails((function(){var e=[];return(e.constructor={})[n]=function(){return{foo:1}},1!==e[r](Boolean).foo}))},exports.isArray=o;
//# sourceMappingURL=array-method-has-species-support-4c71e125.js.map
