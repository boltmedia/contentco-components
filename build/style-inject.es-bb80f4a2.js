"use strict";var e=require("./index-9506e720.js").createCommonjsModule((function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)){if(s.length){var i=r.apply(null,s);i&&e.push(i)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var a in s)t.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}));
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/exports.classnames=e,exports.styleInject=function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===r&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}};
//# sourceMappingURL=style-inject.es-bb80f4a2.js.map
