"use strict";var e=require("./export-e024219b.js"),r=require("./array-species-create-86c309e1.js"),t=require("./object-define-property-96aa2944.js"),i=require("./array-method-has-species-support-4c71e125.js"),a=[].push,s=function(i){var s=1==i,c=2==i,n=3==i,o=4==i,u=6==i,f=7==i,p=5==i||u;return function(l,d,h,j){for(var y,v,x=t.toObject(l),b=e.indexedObject(x),g=r.functionBindContext(d,h,3),q=e.toLength(b.length),m=0,S=j||r.arraySpeciesCreate,w=s?S(l,q):c||f?S(l,0):void 0;q>m;m++)if((p||m in b)&&(v=g(y=b[m],m,x),i))if(s)w[m]=v;else if(v)switch(i){case 3:return!0;case 5:return y;case 6:return m;case 2:a.call(w,y)}else switch(i){case 4:return!1;case 7:a.call(w,y)}return u?-1:n||o?o:w}},c={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)},n=c.filter,o=i.arrayMethodHasSpeciesSupport("filter");e._export({target:"Array",proto:!0,forced:!o},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),exports.arrayIteration=c;
//# sourceMappingURL=es.array.filter-02364506.js.map