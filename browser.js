// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function N(r){return"string"==typeof r}function k(r){var e,t,n;if(!N(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,B=V.__lookupGetter__,R=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var G=I;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function M(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&q.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[H],e=z(r,H);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return M(r)||er(r)}function nr(){return new Function("return this;")()}L(tr,"isPrimitive",M),L(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!M(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;L(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var gr="function"==typeof Z||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===gr(r)}function vr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&br(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=X();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return hr(r)||Ar(r)}L(Er,"isPrimitive",hr),L(Er,"isObject",Ar);var _r,Sr="function"==typeof D&&"symbol"==typeof D("foo")&&z(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null,xr=Object,Or=Object.getPrototypeOf;_r=br(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=_r,Tr=Object.prototype;function Fr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=xr(r),Ur(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&br(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===Tr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Nr(r,e){return Fr(e)?(z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",e))}function kr(r,e,t){var n,o,i,a;if(!vr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(e))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Nr(n,t)))throw i;return L(o={},"next",u),L(o,"return",c),Sr&&br(r[Sr])&&L(o,Sr,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:hr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Sr](),e,n)}}function Ir(r){return r!=r}var Vr,Pr=Math.sqrt,$r="function"==typeof Uint32Array,Cr="function"==typeof Uint32Array?Uint32Array:null,Br="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=($r&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr,Gr=Vr,Lr="function"==typeof Float64Array,Zr="function"==typeof Float64Array?Float64Array:null,Mr="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Wr,Xr=Rr,Yr="function"==typeof Uint8Array,qr="function"==typeof Uint8Array?Uint8Array:null,zr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr(e=[1,3.14,-3.14,256,257]),t=e,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Dr,Hr=Wr,Jr="function"==typeof Uint16Array,Kr="function"==typeof Uint16Array?Uint16Array:null,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Dr=function(){var r,e,t;if("function"!=typeof Kr)return!1;try{e=new Kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Jr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var re,ee={uint16:Dr,uint8:Hr};(re=new ee.uint16(1))[0]=4660;var te=52===new ee.uint8(re.buffer)[0],ne=!0===te?1:0,oe=new Xr(1),ie=new Gr(oe.buffer);function ae(r){return oe[0]=r,ie[ne]}var ue=!0===te?1:0,ce=new Xr(1),fe=new Gr(ce.buffer),le=wr.NEGATIVE_INFINITY,se=.6931471803691238,pe=1.9082149292705877e-10,ye=1048575;function de(r){var e,t,n,o,i,a,u,c,f,l,s,p;return 0===r?le:Ir(r)||r<0?NaN:(i=0,(t=ae(r))<1048576&&(i-=54,t=ae(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(c=614244+(t&=ye)&1048576|0)>>20|0,u=(r=function(r,e){return ce[0]=r,fe[ue]=e>>>0,ce[0]}(r,t|1072693248^c))-1,(ye&2+t)<3?0===u?0===i?0:i*se+i*pe:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*se-(a-i*pe-u)):(c=t-398458|0,f=440401-t|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(e=.5*u*u,0===i?u-(e-l*(e+a)):i*se-(e-(l*(e+a)+i*pe)-u)):0===i?u-l*(u-a):i*se-(l*(u-a)-i*pe-u))))}var ge=Number.POSITIVE_INFINITY;function be(r){var e,t,n,o;return Ir(r)?NaN:0===r?ge:2===r?le:1===r?0:r>2||r<0?NaN:(r>1?(e=-1,t=2-r):(e=1,t=r),(r=1-t)<=.5?(n=r*(r+10),o=function(r){var e,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/t)}(r),e*(.08913147449493408*n+n*o)):t>=.25?(n=Pr(-2*de(t)),o=function(r){var e,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/t)}(t-=.25),e*(n/(2.249481201171875+o))):(t=Pr(-de(t)))<3?(o=function(r){var e,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/t)}(t-1.125),e*(.807220458984375*t+o*t)):t<6?(o=function(r){var e,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/t)}(t-3),e*(.9399557113647461*t+o*t)):(o=function(r){var e,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/t)}(t-6),e*(.9836282730102539*t+o*t)))}return function(r){return kr(r,be)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterErfcinv=e();
//# sourceMappingURL=browser.js.map
