"use strict";var r=function(r,e,n,i,o,a,t,s){if("production"!==process.env.NODE_ENV&&void 0===e)throw new Error("invariant requires an error message argument");if(!r){var f;if(void 0===e)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,i,o,a,t,s],d=0;(f=new Error(e.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw f.framesToPop=1,f}};exports.browser=r;
//# sourceMappingURL=browser-714afdf1.js.map
