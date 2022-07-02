// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterErfcinv=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(r){return g.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,N=_;var P=A,T=function(r){var t,n,e;if(null==r)return N.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[S]=n:delete r[S],e},F=j()?T:P,x=Boolean.prototype.toString;var I=F,V=function(r){try{return x.call(r),!0}catch(r){return!1}},B=j();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?V(r):"[object Boolean]"===I(r)))},k=m,M=G;var C=s,L=function(r){return k(r)||M(r)},R=G;C(L,"isPrimitive",m),C(L,"isObject",R);var X=L;var Y=function(){return new Function("return this;")()},q="object"==typeof self?self:null,z="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof D?D:null;module.exports=H;var J=X.isPrimitive,K=Y,Q=q,W=z,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!J(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return K()}if(Q)return Q;if(W)return W;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=F;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return _r(r).toLowerCase()},hr=ir()?Ar:gr;var Or=function(r){return"function"===hr(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Nr=Number,Pr=Nr.prototype.toString;var Tr=F,Fr=Nr,xr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Ir=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Fr||(Ir?xr(r):"[object Number]"===Tr(r)))},Br=Sr,Gr=Vr;var kr=s,Mr=function(r){return Br(r)||Gr(r)},Cr=Vr;kr(Mr,"isPrimitive",Sr),kr(Mr,"isObject",Cr);var Lr=Mr,Rr=O;var Xr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Rr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Yr=yr;var qr=function(r){return"object"==typeof r&&null!==r&&!Yr(r)},zr=Object.getPrototypeOf;var Dr=function(r){return r.__proto__},Hr=F,Jr=Dr;var Kr=function(r){var t=Jr(r);return t||null===t?t:"[object Function]"===Hr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Qr=zr,Wr=Kr,Zr=Or(Object.getPrototypeOf)?Qr:Wr;var $r=qr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,yt=Lr.isPrimitive,vt=Xr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),vt&&ct(t[vt])&&ft(u,vt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt;var dt=function(r){return r!=r},mt=Math.sqrt,wt=F,jt="function"==typeof Uint32Array;var _t="function"==typeof Uint32Array?Uint32Array:null,gt=function(r){return jt&&r instanceof Uint32Array||"[object Uint32Array]"===wt(r)},At=_t;var ht=function(){var r,t;if("function"!=typeof At)return!1;try{t=new At(t=[1,3.14,-3.14,4294967296,4294967297]),r=gt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ot="function"==typeof Uint32Array?Uint32Array:void 0,Et=function(){throw new Error("not implemented")},Ut=ht()?Ot:Et,St=F,Nt="function"==typeof Float64Array;var Pt="function"==typeof Float64Array?Float64Array:null,Tt=function(r){return Nt&&r instanceof Float64Array||"[object Float64Array]"===St(r)},Ft=Pt;var xt=function(){var r,t;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),r=Tt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var It="function"==typeof Float64Array?Float64Array:void 0,Vt=function(){throw new Error("not implemented")},Bt=xt()?It:Vt,Gt=F,kt="function"==typeof Uint8Array;var Mt="function"==typeof Uint8Array?Uint8Array:null,Ct=function(r){return kt&&r instanceof Uint8Array||"[object Uint8Array]"===Gt(r)},Lt=Mt;var Rt=function(){var r,t;if("function"!=typeof Lt)return!1;try{t=new Lt(t=[1,3.14,-3.14,256,257]),r=Ct(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Xt="function"==typeof Uint8Array?Uint8Array:void 0,Yt=function(){throw new Error("not implemented")},qt=Rt()?Xt:Yt,zt=F,Dt="function"==typeof Uint16Array;var Ht="function"==typeof Uint16Array?Uint16Array:null,Jt=function(r){return Dt&&r instanceof Uint16Array||"[object Uint16Array]"===zt(r)},Kt=Ht;var Qt=function(){var r,t;if("function"!=typeof Kt)return!1;try{t=new Kt(t=[1,3.14,-3.14,65536,65537]),r=Jt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Wt,Zt="function"==typeof Uint16Array?Uint16Array:void 0,$t=function(){throw new Error("not implemented")},rn={uint16:Qt()?Zt:$t,uint8:qt};(Wt=new rn.uint16(1))[0]=4660;var tn=52===new rn.uint8(Wt.buffer)[0],nn=Ut,en=!0===tn?1:0,on=new Bt(1),un=new nn(on.buffer);var an=function(r){return on[0]=r,un[en]},fn=Ut,cn=!0===tn?1:0,ln=new Bt(1),yn=new fn(ln.buffer);var vn=function(r,t){return ln[0]=r,yn[cn]=t>>>0,ln[0]},pn=vn,bn=Nr.NEGATIVE_INFINITY;var sn=an,dn=pn,mn=dt,wn=bn,jn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},_n=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},gn=.6931471803691238,An=1.9082149292705877e-10,hn=1048575;var On=function(r){var t,n,e,o,u,i,a,f,c,l,y;return 0===r?wn:mn(r)||r<0?NaN:(o=0,(n=sn(r))<1048576&&(o-=54,n=sn(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=hn)+614244&1048576|0)>>20|0,i=(r=dn(r,n|1072693248^a))-1,(hn&2+n)<3?0===i?0===o?0:o*gn+o*An:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*gn-(u-o*An-i)):(a=n-398458|0,f=440401-n|0,e=(l=(y=(c=i/(2+i))*c)*y)*jn(l),u=y*_n(l)+e,(a|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*gn-(t-(c*(t+u)+o*An)-i)):0===o?i-c*(i-u):o*gn-(c*(i-u)-o*An-i))))},En=On,Un=Number.POSITIVE_INFINITY;var Sn=dt,Nn=mt,Pn=En,Tn=Un,Fn=bn,xn=function(r){var t,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(t=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/n)},In=function(r){var t,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(t=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/n)},Vn=function(r){var t,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(t=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(t=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),t/n)},Bn=function(r){var t,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(t=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(t=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),t/n)},Gn=function(r){var t,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(t=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(t=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),t/n)};var kn=function(r){var t,n,e;return Sn(r)?NaN:0===r?Tn:2===r?Fn:1===r?0:r>2||r<0?NaN:(r>1?(t=-1,n=2-r):(t=1,n=r),(r=1-n)<=.5?t*(.08913147449493408*(e=r*(r+10))+e*xn(r)):n>=.25?t*((e=Nn(-2*Pn(n)))/(2.249481201171875+In(n-=.25))):(n=Nn(-Pn(n)))<3?t*(.807220458984375*n+Vn(n-1.125)*n):n<6?t*(.9399557113647461*n+Bn(n-3)*n):t*(.9836282730102539*n+Gn(n-6)*n))};return function(r){return st(r,kn)}}));
//# sourceMappingURL=index.js.map
