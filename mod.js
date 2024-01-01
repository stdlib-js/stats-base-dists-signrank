// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,h,"e"),t=p.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,v,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function A(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function N(r,n,e){var t=n-r.length;return t<0?r:r=e?r+A(t):A(t)+r}var E=String.fromCharCode,_=isNaN,j=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,e,t,o,a,f,l,s,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(t=r[s]))f+=t;else{if(n=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,_(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!_(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(a)?String(t.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,e,t,i;for(e=[],i=0,t=I.exec(r);t;)(n=r.slice(i,I.lastIndex-t[0].length)).length&&e.push(n),e.push(x(t)),i=I.lastIndex,t=I.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function T(r){return"string"==typeof r}function k(r){var n,e,t;if(!T(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=F(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return U.apply(null,e)}var V,O=Object.prototype,G=O.toString,L=O.__defineGetter__,$=O.__defineSetter__,C=O.__lookupGetter__,H=O.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(C.call(r,n)||H.call(r,n)?(t=r.__proto__,r.__proto__=O,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,n,e.get),a&&$&&$.call(r,n,e.set),r};var P=V;function W(r,n,e){P(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function B(r,n,e){P(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var M=Math.floor;function R(r){return M(r)===r&&r>0}var Z=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Y(r){return r==r&&r>X&&r<Z}function q(r){return r!=r}var z=Math.round,D=Math.ceil;function J(r){return r<0?D(r):M(r)}function K(r){return r===Z||r===X}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var er=Object.prototype.hasOwnProperty;function tr(r,n){return null!=r&&er.call(r,n)}var ir="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ir?ir.toStringTag:"";var ar=rr()?function(r){var n,e,t;if(null==r)return nr.call(r);e=r[or],n=tr(r,or);try{r[or]=void 0}catch(n){return nr.call(r)}return t=nr.call(r),n?r[or]=e:delete r[or],t}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array;var cr="function"==typeof Uint32Array?Uint32Array:null;var fr,lr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,e;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(ur&&e instanceof Uint32Array||"[object Uint32Array]"===ar(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr=fr,pr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,gr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,e;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),e=n,r=(pr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr=vr,wr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var br,mr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,n,e;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),e=n,r=(wr&&e instanceof Uint8Array||"[object Uint8Array]"===ar(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar=br,Nr="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null;var _r,jr="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,n,e;if("function"!=typeof Er)return!1;try{n=new Er(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Nr&&e instanceof Uint16Array||"[object Uint16Array]"===ar(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Sr,Ur={uint16:_r,uint8:Ar};(Sr=new Ur.uint16(1))[0]=4660;var Ir,xr,Fr=52===new Ur.uint8(Sr.buffer)[0];!0===Fr?(Ir=1,xr=0):(Ir=0,xr=1);var Tr={HIGH:Ir,LOW:xr},kr=new dr(1),Vr=new sr(kr.buffer),Or=Tr.HIGH,Gr=Tr.LOW;function Lr(r,n,e,t){return kr[0]=r,n[t]=Vr[Or],n[t+e]=Vr[Gr],n}function $r(r){return Lr(r,[0,0],1,0)}B($r,"assign",Lr);var Cr,Hr,Pr=!0===Fr?1:0,Wr=new dr(1),Br=new sr(Wr.buffer);function Mr(r){return Wr[0]=r,Br[Pr]}!0===Fr?(Cr=1,Hr=0):(Cr=0,Hr=1);var Rr={HIGH:Cr,LOW:Hr},Zr=new dr(1),Xr=new sr(Zr.buffer),Yr=Rr.HIGH,qr=Rr.LOW;function zr(r,n){return Xr[Yr]=r,Xr[qr]=n,Zr[0]}var Dr=[0,0];function Jr(r,n,e,t){return q(r)||K(r)?(n[t]=r,n[t+e]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}B((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function rn(r,n){var e,t,i,o,a,u;return 0===n||0===r||q(r)||K(r)?r:(Jr(r,Kr,1,0),n+=Kr[1],n+=function(r){var n=Mr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Kr[0]),n<-1074?(i=0,o=r,$r.assign(i,Dr,1,0),a=Dr[0],a&=2147483647,u=Mr(o),zr(a|=u&=2147483648,Dr[1])):n>1023?r<0?X:Z:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,$r.assign(r,Qr,1,0),e=Qr[0],e&=2148532223,t*zr(e|=n+1023<<20,Qr[1])))}function nn(r){var n;return q(r)||r===Z?r:r===X?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,e){var t,i,o,a;return rn(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(n=J(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var en=.6931471805599453,tn=/./;function on(r){return"boolean"==typeof r}var an=Boolean,un=Boolean.prototype.toString;var cn=rr();function fn(r){return"object"==typeof r&&(r instanceof an||(cn?function(r){try{return un.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ar(r)))}function ln(r){return on(r)||fn(r)}function sn(){return new Function("return this;")()}B(ln,"isPrimitive",on),B(ln,"isObject",fn);var pn="object"==typeof self?self:null,yn="object"==typeof window?window:null,vn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gn="object"==typeof vn?vn:null,dn="object"==typeof globalThis?globalThis:null;var wn=function(r){if(arguments.length){if(!on(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return sn()}if(dn)return dn;if(pn)return pn;if(yn)return yn;if(gn)return gn;throw new Error("unexpected error. Unable to resolve global object.")}(),hn=wn.document&&wn.document.childNodes,bn=Int8Array;function mn(){return/^\s*function\s*([^(]*)/i}var An=/^\s*function\s*([^(]*)/i;B(mn,"REGEXP",An);var Nn=Array.isArray?Array.isArray:function(r){return"[object Array]"===ar(r)};function En(r){return null!==r&&"object"==typeof r}function _n(r){var n,e,t,i;if(("Object"===(e=ar(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(n=An.exec(t.toString()))return n[1]}return En(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}B(En,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!Nn(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}(En));var jn,Sn="function"==typeof tn||"object"==typeof bn||"function"==typeof hn?function(r){return _n(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?_n(r).toLowerCase():n};function Un(r){return"function"===Sn(r)}function In(r){return r}function xn(r,n){var e,t;if(!Un(r))throw new TypeError(k("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)e=In;else if(!Un(e=n))throw new TypeError(k("invalid argument. Hash function argument must be a function. Value: `%s`.",e));return B(i,"cache",t={}),i;function i(){var n,i,o,a;for(n=new Array(arguments.length),a=0;a<arguments.length;a++)n[a]=arguments[a];return o=e(n).toString(),tr(t,o)?t[o]:(i=r.apply(null,n),t[o]=i,i)}}var Fn=jn=xn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),jn(r-n,n-1)+jn(r,n-1)))}));function Tn(r,n){var e,t,i;if(q(r)||!R(n)||!Y(n))return NaN;if(r<0)return 0;if((r=z(r))>=n*(n+1)/2)return 1;for(e=nn(-n*en),i=0,t=0;t<=r;t++)i+=Fn(t,n)*e;return i}function kn(r){return function(){return r}}B(Tn,"factory",(function(r){var n,e;return R(r)&&Y(r)?(e=nn(-r*en),n=r*(r+1)/2,function(t){var i,o;if(q(t))return NaN;if(t<0)return 0;if((t=z(t))>=n)return 1;for(o=0,i=0;i<=t;i++)o+=Fn(i,r)*e;return o}):kn(NaN)}));var Vn=!0===Fr?1:0,On=new dr(1),Gn=new sr(On.buffer);var Ln,$n=.6931471803691238,Cn=1.9082149292705877e-10;function Hn(r){var n,e,t,i,o,a,u,c,f,l,s,p;return 0===r?X:q(r)||r<0?NaN:(o=0,(e=Mr(r))<1048576&&(o-=54,e=Mr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(c=(e&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return On[0]=r,Gn[Vn]=n>>>0,On[0]}(r,e|1072693248^c))-1,(1048575&2+e)<3?0===u?0===o?0:o*$n+o*Cn:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*$n-(a-o*Cn-u)):(c=e-398458|0,f=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(c|=f)>0?(n=.5*u*u,0===o?u-(n-l*(n+a)):o*$n-(n-(l*(n+a)+o*Cn)-u)):0===o?u-l*(u-a):o*$n-(l*(u-a)-o*Cn-u))))}var Pn,Wn=Ln=xn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),Ln(r-n,n-1)+Ln(r,n-1)))}));function Bn(r,n){return!q(r)&&R(n)&&Y(n)?r<0||r>n*(n+1)/2?0:nn(Hn(Wn(r,n))-n*en):NaN}B(Bn,"factory",(function(r){var n;return R(r)&&Y(r)?(n=r*(r+1)/2,function(e){if(q(e))return NaN;if(e<0||e>n)return 0;return nn(Hn(Wn(e,r))-r*en)}):kn(NaN)}));var Mn=Pn=xn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),Pn(r-n,n-1)+Pn(r,n-1)))}));function Rn(r,n){var e,t,i;if(q(n)||!R(n)||!Y(n))return NaN;if(q(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(e=nn(-n*en),i=0,t=-1;i<r;)i+=e*Mn(t+=1,n);return t}B(Rn,"factory",(function(r){var n;return!q(r)&&R(r)&&Y(r)?(n=nn(-r*en),function(e){var t,i;if(q(e)||e<0||e>1)return NaN;if(0===e)return 0;if(1===e)return r*(r+1)/2;t=0,i=-1;for(;t<e;)t+=n*Mn(i+=1,r);return i}):kn(NaN)}));var Zn={};W(Zn,"cdf",Tn),W(Zn,"pdf",Bn),W(Zn,"quantile",Rn);export{Tn as cdf,Zn as default,Bn as pdf,Rn as quantile};
//# sourceMappingURL=mod.js.map
