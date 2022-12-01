// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function y(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=Math.floor;function p(r){return v(r)===r&&r>0}var s=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function w(r){return r==r&&r>b&&r<s}function d(r){return r!=r}var m=Math.round,A=Math.ceil;function g(r){return r<0?A(r):v(r)}function h(r){return r===s||r===b}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return N&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function E(r,n){return null!=r&&U.call(r,n)}var O="function"==typeof Symbol?Symbol.toStringTag:"";var S=_()?function(r){var n,t,e;if(null==r)return j.call(r);t=r[O],n=E(r,O);try{r[O]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[O]=t:delete r[O],e}:function(r){return j.call(r)},I="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null;var T,H="function"==typeof Uint32Array?Uint32Array:void 0;T=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G=T,P="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null;var B,L="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(P&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=B,x="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null;var k,C="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var Y=k,q="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var X,z="function"==typeof Uint16Array?Uint16Array:void 0;X=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D,J={uint16:X,uint8:Y};(D=new J.uint16(1))[0]=4660;var K,Q,Z=52===new J.uint8(D.buffer)[0];!0===Z?(K=1,Q=0):(K=0,Q=1);var $={HIGH:K,LOW:Q},rr=new M(1),nr=new G(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n,t,e){return rr[0]=r,n[e]=nr[tr],n[e+t]=nr[er],n}function ur(r){return or(r,[0,0],1,0)}y(ur,"assign",or);var ir,ar,fr=!0===Z?1:0,cr=new M(1),lr=new G(cr.buffer);function yr(r){return cr[0]=r,lr[fr]}!0===Z?(ir=1,ar=0):(ir=0,ar=1);var vr={HIGH:ir,LOW:ar},pr=new M(1),sr=new G(pr.buffer),br=vr.HIGH,wr=vr.LOW;function dr(r,n){return sr[br]=r,sr[wr]=n,pr[0]}var mr=[0,0];function Ar(r,n,t,e){return d(r)||h(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}y((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var gr=[0,0],hr=[0,0];function Nr(r,n){var t,e,o,u,i,a;return 0===n||0===r||d(r)||h(r)?r:(Ar(r,gr,1,0),n+=gr[1],n+=function(r){var n=yr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=gr[0]),n<-1074?(o=0,u=r,ur.assign(o,mr,1,0),i=mr[0],i&=2147483647,a=yr(u),dr(i|=a&=2147483648,mr[1])):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ur.assign(r,hr,1,0),t=hr[0],t&=2148532223,e*dr(t|=n+1023<<20,hr[1])))}function _r(r){var n;return d(r)||r===s?r:r===b?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return Nr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=g(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var jr=.6931471805599453,Ur=/./;function Er(r){return"boolean"==typeof r}var Or=Boolean.prototype.toString;var Sr=_();function Ir(r){return"object"==typeof r&&(r instanceof Boolean||(Sr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function Fr(r){return Er(r)||Ir(r)}function Tr(){return new Function("return this;")()}y(Fr,"isPrimitive",Er),y(Fr,"isObject",Ir);var Hr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Pr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Vr="object"==typeof Pr?Pr:null;var Br=function(r){if(arguments.length){if(!Er(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Tr()}if(Hr)return Hr;if(Gr)return Gr;if(Vr)return Vr;throw new Error("unexpected error. Unable to resolve global object.")}(),Lr=Br.document&&Br.document.childNodes,Mr=Int8Array;function xr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;y(xr,"REGEXP",Wr);var kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};function Cr(r){return null!==r&&"object"==typeof r}function Yr(r){var n,t,e,o;if(("Object"===(t=S(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Wr.exec(e.toString()))return n[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(Cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!kr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Cr));var qr,Rr="function"==typeof Ur||"object"==typeof Mr||"function"==typeof Lr?function(r){return Yr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Yr(r).toLowerCase():n};function Xr(r){return"function"===Rr(r)}function zr(r){return r}function Dr(r,n){var t,e;if(!Xr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=zr;else if(!Xr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return y(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),E(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}var Jr=qr=Dr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),qr(r-n,n-1)+qr(r,n-1)))}));function Kr(r,n){var t,e,o;if(d(r)||!p(n)||!w(n))return NaN;if(r<0)return 0;if((r=m(r))>=n*(n+1)/2)return 1;for(t=_r(-n*jr),o=0,e=0;e<=r;e++)o+=Jr(e,n)*t;return o}function Qr(r){return function(){return r}}y(Kr,"factory",(function(r){var n,t;return p(r)&&w(r)?(t=_r(-r*jr),n=r*(r+1)/2,function(e){var o,u;if(d(e))return NaN;if(e<0)return 0;if((e=m(e))>=n)return 1;for(u=0,o=0;o<=e;o++)u+=Jr(o,r)*t;return u}):Qr(NaN)}));var Zr=!0===Z?1:0,$r=new M(1),rn=new G($r.buffer);var nn,tn=.6931471803691238,en=1.9082149292705877e-10;function on(r){var n,t,e,o,u,i,a,f,c,l,y,v;return 0===r?b:d(r)||r<0?NaN:(u=0,(t=yr(r))<1048576&&(u-=54,t=yr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=function(r,n){return $r[0]=r,rn[Zr]=n>>>0,$r[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===a?0===u?0:u*tn+u*en:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*tn-(i-u*en-a)):(f=t-398458|0,c=440401-t|0,o=(y=(v=(l=a/(2+a))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(f|=c)>0?(n=.5*a*a,0===u?a-(n-l*(n+i)):u*tn-(n-(l*(n+i)+u*en)-a)):0===u?a-l*(a-i):u*tn-(l*(a-i)-u*en-a))))}var un,an=nn=Dr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),nn(r-n,n-1)+nn(r,n-1)))}));function fn(r,n){return!d(r)&&p(n)&&w(n)?r<0||r>n*(n+1)/2?0:_r(on(an(r,n))-n*jr):NaN}y(fn,"factory",(function(r){var n;return p(r)&&w(r)?(n=r*(r+1)/2,function(t){if(d(t))return NaN;if(t<0||t>n)return 0;return _r(on(an(t,r))-r*jr)}):Qr(NaN)}));var cn=un=Dr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),un(r-n,n-1)+un(r,n-1)))}));function ln(r,n){var t,e,o;if(d(n)||!p(n)||!w(n))return NaN;if(d(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=_r(-n*jr),o=0,e=-1;o<r;)o+=t*cn(e+=1,n);return e}y(ln,"factory",(function(r){var n;return!d(r)&&p(r)&&w(r)?(n=_r(-r*jr),function(t){var e,o;if(d(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*cn(o+=1,r);return o}):Qr(NaN)}));var yn={};l(yn,"cdf",Kr),l(yn,"pdf",fn),l(yn,"quantile",ln);export{Kr as cdf,yn as default,fn as pdf,ln as quantile};
//# sourceMappingURL=mod.js.map
