// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,b,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function N(r){var t,n,e;if(!F(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var V,k=Object.prototype,I=k.toString,P=k.__defineGetter__,C=k.__defineSetter__,L=k.__lookupGetter__,M=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||M.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&C&&C.call(r,t,n.set),r};var R=V;function $(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var G=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&q.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[H],t=z(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[H]=n:delete r[H],e}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return X(r)||tr(r)}function er(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ar="object"==typeof ur?ur:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr,vr=/^\s*function\s*([^(]*)/i;$(pr,"REGEXP",vr),yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=yr;function dr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(dr);function wr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=vr.exec(e.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}$(dr,"isObjectLikeArray",gr);var hr="function"==typeof G||"object"==typeof sr||"function"==typeof lr?function(r){return wr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?wr(r).toLowerCase():t};function mr(r){return"function"===hr(r)}var jr=/./;function Er(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ar(r){return"boolean"==typeof r}var _r=Boolean.prototype.toString;var Or=W();function Tr(r){return"object"==typeof r&&(r instanceof K||(Or?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Sr(r){return Ar(r)||Tr(r)}function xr(){return new Function("return this;")()}Er(Sr,"isPrimitive",Ar),Er(Sr,"isObject",Tr);var Ur="object"==typeof self?self:null,Br="object"==typeof window?window:null,Fr="object"==typeof ur?ur:null,Nr="object"==typeof globalThis?globalThis:null;var Vr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xr()}if(Nr)return Nr;if(Ur)return Ur;if(Br)return Br;if(Fr)return Fr;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Vr.document&&Vr.document.childNodes,Ir=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;function Lr(r){return null!==r&&"object"==typeof r}Er(Pr,"REGEXP",Cr);var Mr=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Lr);function Rr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Cr.exec(e.toString()))return t[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Er(Lr,"isObjectLikeArray",Mr);var $r="function"==typeof jr||"object"==typeof Ir||"function"==typeof kr?function(r){return Rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Rr(r).toLowerCase():t};function Gr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===$r(r)}(r.next)}function Xr(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Zr(r){return"number"==typeof r}var Wr=Number,Yr=Wr.prototype.toString;var qr=W();function zr(r){return"object"==typeof r&&(r instanceof Wr||(qr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Dr(r){return Zr(r)||zr(r)}Xr(Dr,"isPrimitive",Zr),Xr(Dr,"isObject",zr);var Hr="function"==typeof D&&"symbol"==typeof D("foo")&&z(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Jr=/./;function Kr(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Qr(r){return"boolean"==typeof r}var rt=Boolean.prototype.toString;var tt=W();function nt(r){return"object"==typeof r&&(r instanceof K||(tt?function(r){try{return rt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function et(r){return Qr(r)||nt(r)}function ot(){return new Function("return this;")()}Kr(et,"isPrimitive",Qr),Kr(et,"isObject",nt);var it="object"==typeof self?self:null,ut="object"==typeof window?window:null,at="object"==typeof ur?ur:null,ct="object"==typeof globalThis?globalThis:null;var ft=function(r){if(arguments.length){if(!Qr(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ot()}if(ct)return ct;if(it)return it;if(ut)return ut;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ft.document&&ft.document.childNodes,st=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var yt=/^\s*function\s*([^(]*)/i;function vt(r){return null!==r&&"object"==typeof r}Kr(pt,"REGEXP",yt);var bt=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vt);function dt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yt.exec(e.toString()))return t[1]}return vt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Kr(vt,"isObjectLikeArray",bt);var gt="function"==typeof Jr||"object"==typeof st||"function"==typeof lt?function(r){return dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dt(r).toLowerCase():t};function wt(r){return"function"===gt(r)}var ht=Object,mt=/./;function jt(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Et(r){return"boolean"==typeof r}var At=Boolean.prototype.toString;var _t=W();function Ot(r){return"object"==typeof r&&(r instanceof K||(_t?function(r){try{return At.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tt(r){return Et(r)||Ot(r)}function St(){return new Function("return this;")()}jt(Tt,"isPrimitive",Et),jt(Tt,"isObject",Ot);var xt="object"==typeof self?self:null,Ut="object"==typeof window?window:null,Bt="object"==typeof ur?ur:null,Ft="object"==typeof globalThis?globalThis:null;var Nt=function(r){if(arguments.length){if(!Et(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return St()}if(Ft)return Ft;if(xt)return xt;if(Ut)return Ut;if(Bt)return Bt;throw new Error("unexpected error. Unable to resolve global object.")}(),Vt=Nt.document&&Nt.document.childNodes,kt=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var Pt=/^\s*function\s*([^(]*)/i;function Ct(r){return null!==r&&"object"==typeof r}jt(It,"REGEXP",Pt);var Lt=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ct);function Mt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pt.exec(e.toString()))return t[1]}return Ct(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}jt(Ct,"isObjectLikeArray",Lt);var Rt="function"==typeof mt||"object"==typeof kt||"function"==typeof Vt?function(r){return Mt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Mt(r).toLowerCase():t};var $t,Gt,Xt=Object.getPrototypeOf;Gt=Object.getPrototypeOf,$t="function"===Rt(Gt)?Xt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Zt=$t;var Wt=Object.prototype;function Yt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=ht(r),Zt(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&wt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&wt(t.isPrototypeOf)&&(t===Wt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function qt(r,t){return Yt(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function zt(r,t,n){var e,o,i,u;if(!Gr(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!mr(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=qt(e,n)))throw i;return $(o={},"next",a),$(o,"return",c),Hr&&mr(r[Hr])&&$(o,Hr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Zr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return zt(r[Hr](),t,e)}}function Dt(r){return r!=r}var Ht=Math.sqrt,Jt="function"==typeof Uint32Array;var Kt="function"==typeof Uint32Array?Uint32Array:null;var Qt,rn="function"==typeof Uint32Array?Uint32Array:void 0;Qt=function(){var r,t;if("function"!=typeof Kt)return!1;try{r=function(r){return Jt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Kt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var tn=Qt,nn="function"==typeof Float64Array;var en="function"==typeof Float64Array?Float64Array:null;var on,un="function"==typeof Float64Array?Float64Array:void 0;on=function(){var r,t;if("function"!=typeof en)return!1;try{r=function(r){return nn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new en([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?un:function(){throw new Error("not implemented")};var an=on,cn="function"==typeof Uint8Array;var fn="function"==typeof Uint8Array?Uint8Array:null;var ln,sn="function"==typeof Uint8Array?Uint8Array:void 0;ln=function(){var r,t;if("function"!=typeof fn)return!1;try{r=function(r){return cn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new fn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var pn=ln,yn="function"==typeof Uint16Array;var vn="function"==typeof Uint16Array?Uint16Array:null;var bn,dn="function"==typeof Uint16Array?Uint16Array:void 0;bn=function(){var r,t;if("function"!=typeof vn)return!1;try{r=function(r){return yn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new vn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dn:function(){throw new Error("not implemented")};var gn,wn={uint16:bn,uint8:pn};(gn=new wn.uint16(1))[0]=4660;var hn=52===new wn.uint8(gn.buffer)[0],mn=!0===hn?1:0,jn=new an(1),En=new tn(jn.buffer);function An(r){return jn[0]=r,En[mn]}var _n=!0===hn?1:0,On=new an(1),Tn=new tn(On.buffer);var Sn=Wr.NEGATIVE_INFINITY;var xn=.6931471803691238,Un=1.9082149292705877e-10;function Bn(r){var t,n,e,o,i,u,a,c,f,l,s,p;return 0===r?Sn:Dt(r)||r<0?NaN:(i=0,(n=An(r))<1048576&&(i-=54,n=An(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(c=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=function(r,t){return On[0]=r,Tn[_n]=t>>>0,On[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===a?0===i?0:i*xn+i*Un:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*xn-(u-i*Un-a)):(c=n-398458|0,f=440401-n|0,o=(s=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),u=e+o,(c|=f)>0?(t=.5*a*a,0===i?a-(t-l*(t+u)):i*xn-(t-(l*(t+u)+i*Un)-a)):0===i?a-l*(a-u):i*xn-(l*(a-u)-i*Un-a))))}var Fn=Number.POSITIVE_INFINITY;function Nn(r){var t,n,e,o;return Dt(r)?NaN:0===r?Fn:2===r?Sn:1===r?0:r>2||r<0?NaN:(r>1?(t=-1,n=2-r):(t=1,n=r),(r=1-n)<=.5?(e=r*(r+10),o=function(r){var t,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(t=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/n)}(r),t*(.08913147449493408*e+e*o)):n>=.25?(e=Ht(-2*Bn(n)),o=function(r){var t,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(t=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/n)}(n-=.25),t*(e/(2.249481201171875+o))):(n=Ht(-Bn(n)))<3?(o=function(r){var t,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(t=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(t=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),t/n)}(n-1.125),t*(.807220458984375*n+o*n)):n<6?(o=function(r){var t,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(t=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(t=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),t/n)}(n-3),t*(.9399557113647461*n+o*n)):(o=function(r){var t,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(t=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(t=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),t/n)}(n-6),t*(.9836282730102539*n+o*n)))}function Vn(r){return zt(r,Nn)}export{Vn as default};
//# sourceMappingURL=mod.js.map
