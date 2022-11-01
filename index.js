// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).signrank={})}(this,(function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};var l=t;function y(r,n,t){l(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function v(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function s(r){return p(r)===r&&r>0}var b=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;function w(r){return r==r&&r>d&&r<b}function m(r){return r!=r}var A=Math.round,h=Math.ceil;function g(r){return r<0?h(r):p(r)}var _=1023;function N(r){return r===b||r===d}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return j&&"symbol"==typeof Symbol.toStringTag}var E=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;function S(r,n){return null!=r&&O.call(r,n)}var I="function"==typeof Symbol?Symbol.toStringTag:"";var T=U()?function(r){var n,t,e;if(null==r)return E.call(r);t=r[I],n=S(r,I);try{r[I]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[I]=t:delete r[I],e}:function(r){return E.call(r)},F="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null;var P,G="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(F&&t instanceof Uint32Array||"[object Uint32Array]"===T(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var V=P,x="function"==typeof Float64Array;var B="function"==typeof Float64Array?Float64Array:null;var L,M="function"==typeof Float64Array?Float64Array:void 0;L=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===T(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k=L,W="function"==typeof Uint8Array;var C="function"==typeof Uint8Array?Uint8Array:null;var q,Y="function"==typeof Uint8Array?Uint8Array:void 0;q=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===T(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R=q,X="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var D,J="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var r,n,t;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(X&&t instanceof Uint16Array||"[object Uint16Array]"===T(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:D,uint8:R};(K=new Q.uint16(1))[0]=4660;var Z,$,rr=52===new Q.uint8(K.buffer)[0];!0===rr?(Z=1,$=0):(Z=0,$=1);var nr={HIGH:Z,LOW:$},tr=new k(1),er=new V(tr.buffer),or=nr.HIGH,ur=nr.LOW;function ir(r,n){return tr[0]=n,r[0]=er[or],r[1]=er[ur],r}function fr(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var ar,cr,lr=!0===rr?1:0,yr=new k(1),vr=new V(yr.buffer);function pr(r){return yr[0]=r,vr[lr]}!0===rr?(ar=1,cr=0):(ar=0,cr=1);var sr={HIGH:ar,LOW:cr},br=new k(1),dr=new V(br.buffer),wr=sr.HIGH,mr=sr.LOW;function Ar(r,n){return dr[wr]=r,dr[mr]=n,br[0]}var hr=[0,0];function gr(r,n,t,e){return m(r)||N(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}v((function(r){return gr(r,[0,0],1,0)}),"assign",gr);var _r=[0,0],Nr=[0,0];function jr(r,n){var t,e,o,u,i;return 0===n||0===r||m(r)||N(r)?r:(gr(r,_r,1,0),n+=_r[1],n+=function(r){var n=pr(r);return(n=(2146435072&n)>>>20)-_|0}(r=_r[0]),n<-1074?(o=r,fr(hr,0),u=hr[0],u&=2147483647,i=pr(o),Ar(u|=i&=2147483648,hr[1])):n>1023?r<0?d:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,fr(Nr,r),t=Nr[0],t&=2148532223,e*Ar(t|=n+_<<20,Nr[1])))}var Ur=1.4426950408889634,Er=1/(1<<28);function Or(r){var n;return m(r)||r===b?r:r===d?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,o,u,i;return jr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=g(r<0?Ur*r-.5:Ur*r+.5)),1.9082149292705877e-10*n,n)}var Sr=.6931471805599453,Ir=/./;function Tr(r){return"boolean"==typeof r}var Fr=Boolean.prototype.toString;var Hr=U();function Pr(r){return"object"==typeof r&&(r instanceof Boolean||(Hr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===T(r)))}function Gr(r){return Tr(r)||Pr(r)}function Vr(){return new Function("return this;")()}v(Gr,"isPrimitive",Tr),v(Gr,"isObject",Pr);var xr="object"==typeof self?self:null,Br="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Mr="object"==typeof Lr?Lr:null;var kr=function(r){if(arguments.length){if(!Tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Vr()}if(xr)return xr;if(Br)return Br;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Wr=kr.document&&kr.document.childNodes,Cr=Int8Array;function qr(){return/^\s*function\s*([^(]*)/i}var Yr=/^\s*function\s*([^(]*)/i;v(qr,"REGEXP",Yr);var Rr=Array.isArray?Array.isArray:function(r){return"[object Array]"===T(r)};function Xr(r){return null!==r&&"object"==typeof r}function zr(r){var n,t,e,o;if(("Object"===(t=T(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Yr.exec(e.toString()))return n[1]}return Xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}v(Xr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Rr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Xr));var Dr,Jr="function"==typeof Ir||"object"==typeof Cr||"function"==typeof Wr?function(r){return zr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?zr(r).toLowerCase():n};function Kr(r){return"function"===Jr(r)}function Qr(r){return r}function Zr(r,n){var t,e;if(!Kr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Qr;else if(!Kr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return v(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),S(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}var $r=Dr=Zr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Dr(r-n,n-1)+Dr(r,n-1)))}));function rn(r,n){var t,e,o;if(m(r)||!s(n)||!w(n))return NaN;if(r<0)return 0;if((r=A(r))>=n*(n+1)/2)return 1;for(t=Or(-n*Sr),o=0,e=0;e<=r;e++)o+=$r(e,n)*t;return o}function nn(r){return function(){return r}}v(rn,"factory",(function(r){var n,t;return s(r)&&w(r)?(t=Or(-r*Sr),n=r*(r+1)/2,function(e){var o,u;if(m(e))return NaN;if(e<0)return 0;if((e=A(e))>=n)return 1;for(u=0,o=0;o<=e;o++)u+=$r(o,r)*t;return u}):nn(NaN)}));var tn=!0===rr?1:0,en=new k(1),on=new V(en.buffer);var un,fn=.6931471803691238,an=1.9082149292705877e-10,cn=1048575;function ln(r){var n,t,e,o,u,i,f,a,c,l,y,v;return 0===r?d:m(r)||r<0?NaN:(u=0,(t=pr(r))<1048576&&(u-=54,t=pr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-_|0,u+=(a=(t&=cn)+614244&1048576|0)>>20|0,f=(r=function(r,n){return en[0]=r,on[tn]=n>>>0,en[0]}(r,t|1072693248^a))-1,(cn&2+t)<3?0===f?0===u?0:u*fn+u*an:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*fn-(i-u*an-f)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*fn-(n-(l*(n+i)+u*an)-f)):0===u?f-l*(f-i):u*fn-(l*(f-i)-u*an-f))))}var yn,vn=un=Zr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),un(r-n,n-1)+un(r,n-1)))}));function pn(r,n){return!m(r)&&s(n)&&w(n)?r<0||r>n*(n+1)/2?0:Or(ln(vn(r,n))-n*Sr):NaN}v(pn,"factory",(function(r){var n;return s(r)&&w(r)?(n=r*(r+1)/2,function(t){if(m(t))return NaN;if(t<0||t>n)return 0;return Or(ln(vn(t,r))-r*Sr)}):nn(NaN)}));var sn=yn=Zr((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),yn(r-n,n-1)+yn(r,n-1)))}));function bn(r,n){var t,e,o;if(m(n)||!s(n)||!w(n))return NaN;if(m(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=Or(-n*Sr),o=0,e=-1;o<r;)o+=t*sn(e+=1,n);return e}v(bn,"factory",(function(r){var n;return!m(r)&&s(r)&&w(r)?(n=Or(-r*Sr),function(t){var e,o;if(m(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*sn(o+=1,r);return o}):nn(NaN)}));var dn={};y(dn,"cdf",rn),y(dn,"pdf",pn),y(dn,"quantile",bn),r.cdf=rn,r.default=dn,r.pdf=pn,r.quantile=bn,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
