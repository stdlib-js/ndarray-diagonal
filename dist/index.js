"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=m(function(y,s){
var v=require('@stdlib/assert-is-integer-array/dist').primitives,d=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-is-ndarray-like/dist'),n=require('@stdlib/assert-has-own-property/dist'),l=require('@stdlib/ndarray-base-diagonal/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e,r){var a,t;if(!g(e))throw new TypeError(i('null4f',e));if(a=[-2,-1],t=0,arguments.length>1){if(!f(r))throw new TypeError(i('null2V',r));if(n(r,"k")){if(!d(r.k))throw new TypeError(i('null8M',"k",r.k));t=r.k}if(n(r,"dims")){if(!v(r.dims))throw new TypeError(i('nullHk',"dims",r.dims));a=r.dims}}return l(e,a,t,!1)}s.exports=o
});var w=u();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
