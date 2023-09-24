// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).signrank=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,s=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,_=/(\..*[^0])0*e/;function h(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=y.call(e,_,"$1e"),e=y.call(e,w,"e"),e=y.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=y.call(e,s,"e+0$1"),e=y.call(e,v,"e-0$1"),r.alternate&&(e=y.call(e,b,"$1."),e=y.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var j=String.fromCharCode,S=isNaN,E=Array.isArray;function U(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,n,e,i,a,f,l,p,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(e=r[p]))f+=e;else{if(t=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,y=0;y<n.length;y++)switch(i=n.charAt(y)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,S(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,S(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!S(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=S(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=h(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,n,e,o;for(n=[],o=0,e=T.exec(r);e;)(t=r.slice(o,T.lastIndex-e[0].length)).length&&n.push(t),n.push(N(e)),o=T.lastIndex,e=T.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function V(r){var t,n,e;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=I(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return O.apply(null,n)}var P,k=Object.prototype,G=k.toString,x=k.__defineGetter__,H=k.__defineSetter__,L=k.__lookupGetter__,C=k.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===G.call(n))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(r,t,n.get),a&&H&&H.call(r,t,n.set),r};var W=P;function M(r,t,n){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}var B="function"==typeof Object.defineProperty?Object.defineProperty:null;var $,R=Object.defineProperty,Y=Object.prototype,Z=Y.toString,X=Y.__defineGetter__,q=Y.__defineSetter__,z=Y.__lookupGetter__,D=Y.__lookupSetter__;$=function(){try{return B({},"x",{}),!0}catch(r){return!1}}()?R:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(z.call(r,t)||D.call(r,t)?(e=r.__proto__,r.__proto__=Y,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&X&&X.call(r,t,n.get),a&&q&&q.call(r,t,n.set),r};var J=$;function K(r,t,n){J(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Q=Math.floor;function rr(r){return Q(r)===r&&r>0}var tr=Number.POSITIVE_INFINITY,nr=Number.NEGATIVE_INFINITY;function er(r){return r==r&&r>nr&&r<tr}function or(r){return r!=r}var ir=Math.round,ar=Math.ceil;function ur(r){return r<0?ar(r):Q(r)}function cr(r){return r===tr||r===nr}function fr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var lr=fr();var pr=Object.prototype.toString;var yr=Object.prototype.hasOwnProperty;function sr(r,t){return null!=r&&yr.call(r,t)}var vr="function"==typeof Symbol?Symbol.toStringTag:"";var br=lr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return pr.call(r);n=r[vr],t=sr(r,vr);try{r[vr]=void 0}catch(t){return pr.call(r)}return e=pr.call(r),t?r[vr]=n:delete r[vr],e}:function(r){return pr.call(r)},gr="function"==typeof Uint32Array;var dr="function"==typeof Uint32Array?Uint32Array:null;var wr,_r="function"==typeof Uint32Array?Uint32Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(gr&&n instanceof Uint32Array||"[object Uint32Array]"===br(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var hr=wr,mr="function"==typeof Float64Array;var Ar="function"==typeof Float64Array?Float64Array:null;var jr,Sr="function"==typeof Float64Array?Float64Array:void 0;jr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar([1,3.14,-3.14,NaN]),n=t,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===br(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var Er=jr,Ur="function"==typeof Uint8Array;var Or="function"==typeof Uint8Array?Uint8Array:null;var Tr,Nr="function"==typeof Uint8Array?Uint8Array:void 0;Tr=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or(t=[1,3.14,-3.14,256,257]),n=t,r=(Ur&&n instanceof Uint8Array||"[object Uint8Array]"===br(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ir=Tr,Fr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null;var Pr,kr="function"==typeof Uint16Array?Uint16Array:void 0;Pr=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Fr&&n instanceof Uint16Array||"[object Uint16Array]"===br(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Gr,xr={uint16:Pr,uint8:Ir};(Gr=new xr.uint16(1))[0]=4660;var Hr,Lr,Cr=52===new xr.uint8(Gr.buffer)[0];!0===Cr?(Hr=1,Lr=0):(Hr=0,Lr=1);var Wr={HIGH:Hr,LOW:Lr},Mr=new Er(1),Br=new hr(Mr.buffer),$r=Wr.HIGH,Rr=Wr.LOW;function Yr(r,t,n,e){return Mr[0]=r,t[e]=Br[$r],t[e+n]=Br[Rr],t}function Zr(r){return Yr(r,[0,0],1,0)}K(Zr,"assign",Yr);var Xr,qr,zr=!0===Cr?1:0,Dr=new Er(1),Jr=new hr(Dr.buffer);function Kr(r){return Dr[0]=r,Jr[zr]}!0===Cr?(Xr=1,qr=0):(Xr=0,qr=1);var Qr={HIGH:Xr,LOW:qr},rt=new Er(1),tt=new hr(rt.buffer),nt=Qr.HIGH,et=Qr.LOW;function ot(r,t){return tt[nt]=r,tt[et]=t,rt[0]}var it=[0,0];function at(r,t,n,e){return or(r)||cr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}K((function(r){return at(r,[0,0],1,0)}),"assign",at);var ut=[0,0],ct=[0,0];function ft(r,t){var n,e,o,i,a,u;return 0===t||0===r||or(r)||cr(r)?r:(at(r,ut,1,0),t+=ut[1],t+=function(r){var t=Kr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ut[0]),t<-1074?(o=0,i=r,Zr.assign(o,it,1,0),a=it[0],a&=2147483647,u=Kr(i),ot(a|=u&=2147483648,it[1])):t>1023?r<0?nr:tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Zr.assign(r,ct,1,0),n=ct[0],n&=2148532223,e*ot(n|=t+1023<<20,ct[1])))}var lt=1.4426950408889634,pt=1/(1<<28);function yt(r){var t;return or(r)||r===tr?r:r===nr?0:r>709.782712893384?tr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<pt?1+r:function(r,t,n){var e,o,i,a;return ft(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=ur(r<0?lt*r-.5:lt*r+.5)),1.9082149292705877e-10*t,t)}var st=.6931471805599453,vt=/./,bt="function"==typeof Object.defineProperty?Object.defineProperty:null;var gt,dt=Object.defineProperty,wt=Object.prototype,_t=wt.toString,ht=wt.__defineGetter__,mt=wt.__defineSetter__,At=wt.__lookupGetter__,jt=wt.__lookupSetter__;gt=function(){try{return bt({},"x",{}),!0}catch(r){return!1}}()?dt:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===_t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===_t.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(At.call(r,t)||jt.call(r,t)?(e=r.__proto__,r.__proto__=wt,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ht&&ht.call(r,t,n.get),a&&mt&&mt.call(r,t,n.set),r};var St=gt;function Et(r,t,n){St(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ut(r){return"boolean"==typeof r}var Ot=fr();function Tt(){return Ot&&"symbol"==typeof Symbol.toStringTag}var Nt=Object.prototype.toString;var It="function"==typeof Symbol?Symbol.toStringTag:"";var Ft=Tt()?function(r){var t,n,e;if(null==r)return Nt.call(r);n=r[It],t=sr(r,It);try{r[It]=void 0}catch(t){return Nt.call(r)}return e=Nt.call(r),t?r[It]=n:delete r[It],e}:function(r){return Nt.call(r)},Vt=Boolean.prototype.toString;var Pt=Tt();function kt(r){return"object"==typeof r&&(r instanceof Boolean||(Pt?function(r){try{return Vt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Ft(r)))}function Gt(r){return Ut(r)||kt(r)}function xt(){return new Function("return this;")()}Et(Gt,"isPrimitive",Ut),Et(Gt,"isObject",kt);var Ht="object"==typeof self?self:null,Lt="object"==typeof window?window:null,Ct="object"==typeof global?global:null;var Wt=function(r){if(arguments.length){if(!Ut(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return xt()}if(Ht)return Ht;if(Lt)return Lt;if(Ct)return Ct;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Wt.document&&Wt.document.childNodes,Bt=Int8Array;var $t=fr();var Rt=Object.prototype.toString;var Yt="function"==typeof Symbol?Symbol.toStringTag:"";var Zt=$t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Rt.call(r);n=r[Yt],t=sr(r,Yt);try{r[Yt]=void 0}catch(t){return Rt.call(r)}return e=Rt.call(r),t?r[Yt]=n:delete r[Yt],e}:function(r){return Rt.call(r)},Xt="function"==typeof Object.defineProperty?Object.defineProperty:null;var qt,zt=Object.defineProperty,Dt=Object.prototype,Jt=Dt.toString,Kt=Dt.__defineGetter__,Qt=Dt.__defineSetter__,rn=Dt.__lookupGetter__,tn=Dt.__lookupSetter__;qt=function(){try{return Xt({},"x",{}),!0}catch(r){return!1}}()?zt:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Jt.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Jt.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(rn.call(r,t)||tn.call(r,t)?(e=r.__proto__,r.__proto__=Dt,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kt&&Kt.call(r,t,n.get),a&&Qt&&Qt.call(r,t,n.set),r};var nn=qt;function en(){return/^\s*function\s*([^(]*)/i}var on=/^\s*function\s*([^(]*)/i;!function(r,t,n){nn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(en,"REGEXP",on);var an="function"==typeof Object.defineProperty?Object.defineProperty:null;var un,cn=Object.defineProperty,fn=Object.prototype,ln=fn.toString,pn=fn.__defineGetter__,yn=fn.__defineSetter__,sn=fn.__lookupGetter__,vn=fn.__lookupSetter__;un=function(){try{return an({},"x",{}),!0}catch(r){return!1}}()?cn:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ln.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===ln.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(sn.call(r,t)||vn.call(r,t)?(e=r.__proto__,r.__proto__=fn,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&pn&&pn.call(r,t,n.get),a&&yn&&yn.call(r,t,n.set),r};var bn=un;var gn=fr();var dn=Object.prototype.toString;var wn="function"==typeof Symbol?Symbol.toStringTag:"";var _n=gn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return dn.call(r);n=r[wn],t=sr(r,wn);try{r[wn]=void 0}catch(t){return dn.call(r)}return e=dn.call(r),t?r[wn]=n:delete r[wn],e}:function(r){return dn.call(r)};var hn=Array.isArray?Array.isArray:function(r){return"[object Array]"===_n(r)};function mn(r){return null!==r&&"object"==typeof r}function An(r){var t,n,e,o;if(("Object"===(n=Zt(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=on.exec(e.toString()))return t[1]}return mn(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(r,t,n){bn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(mn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!hn(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(mn));var jn,Sn="function"==typeof vt||"object"==typeof Bt||"function"==typeof Mt?function(r){return An(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?An(r).toLowerCase():t};function En(r){return"function"===Sn(r)}function Un(r){return r}jn=function(r,t){var n,e;if(!En(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)n=Un;else if(!En(n=t))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+n+"`.");return K(o,"cache",e={}),o;function o(){var t,o,i,a;for(t=new Array(arguments.length),a=0;a<arguments.length;a++)t[a]=arguments[a];return i=n(t).toString(),sr(e,i)?e[i]:(o=r.apply(null,t),e[i]=o,o)}}((function(r,t){var n;return 0===t?0===r?1:0:(n=t*(t+1)/2,r<0||r>n?0:(r>n/2&&(r=n-r),jn(r-t,t-1)+jn(r,t-1)))}));var On=jn;function Tn(r,t){var n,e,o;if(or(r)||!rr(t)||!er(t))return NaN;if(r<0)return 0;if((r=ir(r))>=t*(t+1)/2)return 1;for(n=yt(-t*st),o=0,e=0;e<=r;e++)o+=On(e,t)*n;return o}K(Tn,"factory",(function(r){var t,n,e;return rr(r)&&er(r)?(n=yt(-r*st),t=r*(r+1)/2,function(e){var o,i;if(or(e))return NaN;if(e<0)return 0;if((e=ir(e))>=t)return 1;for(i=0,o=0;o<=e;o++)i+=On(o,r)*n;return i}):(e=NaN,function(){return e})}));var Nn="function"==typeof Object.defineProperty?Object.defineProperty:null;var In,Fn=Object.defineProperty,Vn=Object.prototype,Pn=Vn.toString,kn=Vn.__defineGetter__,Gn=Vn.__defineSetter__,xn=Vn.__lookupGetter__,Hn=Vn.__lookupSetter__;In=function(){try{return Nn({},"x",{}),!0}catch(r){return!1}}()?Fn:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Pn.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Pn.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(xn.call(r,t)||Hn.call(r,t)?(e=r.__proto__,r.__proto__=Vn,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&kn&&kn.call(r,t,n.get),a&&Gn&&Gn.call(r,t,n.set),r};var Ln=In;function Cn(r,t,n){Ln(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Wn=Math.floor;function Mn(r){return Wn(r)===r&&r>0}var Bn=Number.POSITIVE_INFINITY,$n=Number.NEGATIVE_INFINITY;function Rn(r){return r==r&&r>$n&&r<Bn}function Yn(r){return r!=r}var Zn=Math.ceil;function Xn(r){return r<0?Zn(r):Wn(r)}var qn=1023;function zn(r){return r===Bn||r===$n}var Dn=fr();var Jn=Object.prototype.toString;var Kn="function"==typeof Symbol?Symbol.toStringTag:"";var Qn=Dn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Jn.call(r);n=r[Kn],t=sr(r,Kn);try{r[Kn]=void 0}catch(t){return Jn.call(r)}return e=Jn.call(r),t?r[Kn]=n:delete r[Kn],e}:function(r){return Jn.call(r)},re="function"==typeof Uint32Array;var te="function"==typeof Uint32Array?Uint32Array:null;var ne,ee="function"==typeof Uint32Array?Uint32Array:void 0;ne=function(){var r,t,n;if("function"!=typeof te)return!1;try{t=new te(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(re&&n instanceof Uint32Array||"[object Uint32Array]"===Qn(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var oe=ne,ie="function"==typeof Float64Array;var ae="function"==typeof Float64Array?Float64Array:null;var ue,ce="function"==typeof Float64Array?Float64Array:void 0;ue=function(){var r,t,n;if("function"!=typeof ae)return!1;try{t=new ae([1,3.14,-3.14,NaN]),n=t,r=(ie&&n instanceof Float64Array||"[object Float64Array]"===Qn(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ce:function(){throw new Error("not implemented")};var fe=ue,le="function"==typeof Uint8Array;var pe="function"==typeof Uint8Array?Uint8Array:null;var ye,se="function"==typeof Uint8Array?Uint8Array:void 0;ye=function(){var r,t,n;if("function"!=typeof pe)return!1;try{t=new pe(t=[1,3.14,-3.14,256,257]),n=t,r=(le&&n instanceof Uint8Array||"[object Uint8Array]"===Qn(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?se:function(){throw new Error("not implemented")};var ve=ye,be="function"==typeof Uint16Array;var ge="function"==typeof Uint16Array?Uint16Array:null;var de,we="function"==typeof Uint16Array?Uint16Array:void 0;de=function(){var r,t,n;if("function"!=typeof ge)return!1;try{t=new ge(t=[1,3.14,-3.14,65536,65537]),n=t,r=(be&&n instanceof Uint16Array||"[object Uint16Array]"===Qn(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?we:function(){throw new Error("not implemented")};var _e,he={uint16:de,uint8:ve};_e=function(){var r;return(r=new he.uint16(1))[0]=4660,52===new he.uint8(r.buffer)[0]}();var me,Ae,je=_e;!0===je?(me=1,Ae=0):(me=0,Ae=1);var Se={HIGH:me,LOW:Ae},Ee=new fe(1),Ue=new oe(Ee.buffer),Oe=Se.HIGH,Te=Se.LOW;function Ne(r,t,n,e){return Ee[0]=r,t[e]=Ue[Oe],t[e+n]=Ue[Te],t}function Ie(r){return Ne(r,[0,0],1,0)}Cn(Ie,"assign",Ne);var Fe,Ve,Pe=!0===je?1:0,ke=new fe(1),Ge=new oe(ke.buffer);function xe(r){return ke[0]=r,Ge[Pe]}!0===je?(Fe=1,Ve=0):(Fe=0,Ve=1);var He={HIGH:Fe,LOW:Ve},Le=new fe(1),Ce=new oe(Le.buffer),We=He.HIGH,Me=He.LOW;function Be(r,t){return Ce[We]=r,Ce[Me]=t,Le[0]}var $e=[0,0];function Re(r,t,n,e){return Yn(r)||zn(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}Cn((function(r){return Re(r,[0,0],1,0)}),"assign",Re);var Ye=[0,0],Ze=[0,0];function Xe(r,t){var n,e,o,i,a,u;return 0===t||0===r||Yn(r)||zn(r)?r:(Re(r,Ye,1,0),t+=Ye[1],t+=function(r){var t=xe(r);return(t=(2146435072&t)>>>20)-qn|0}(r=Ye[0]),t<-1074?(o=0,i=r,Ie.assign(o,$e,1,0),a=$e[0],a&=2147483647,u=xe(i),Be(a|=u&=2147483648,$e[1])):t>1023?r<0?$n:Bn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ie.assign(r,Ze,1,0),n=Ze[0],n&=2148532223,e*Be(n|=t+qn<<20,Ze[1])))}var qe=1.4426950408889634,ze=1/(1<<28);function De(r){var t;return Yn(r)||r===Bn?r:r===$n?0:r>709.782712893384?Bn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ze?1+r:function(r,t,n){var e,o,i,a;return Xe(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=Xn(r<0?qe*r-.5:qe*r+.5)),1.9082149292705877e-10*t,t)}var Je=!0===je?1:0,Ke=new fe(1),Qe=new oe(Ke.buffer);var ro=.6931471803691238,to=1.9082149292705877e-10,no=1048575;function eo(r){var t,n,e,o,i,a,u,c,f,l,p,y;return 0===r?$n:Yn(r)||r<0?NaN:(i=0,(n=xe(r))<1048576&&(i-=54,n=xe(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-qn|0,i+=(c=(n&=no)+614244&1048576|0)>>20|0,u=(r=function(r,t){return Ke[0]=r,Qe[Je]=t>>>0,Ke[0]}(r,n|1072693248^c))-1,(no&2+n)<3?0===u?0===i?0:i*ro+i*to:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*ro-(a-i*to-u)):(c=n-398458|0,f=440401-n|0,o=(p=(y=(l=u/(2+u))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*ro-(t-(l*(t+a)+i*to)-u)):0===i?u-l*(u-a):i*ro-(l*(u-a)-i*to-u))))}var oo,io=.6931471805599453;function ao(r){return r}oo=function(r,t){var n,e;if(!En(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)n=ao;else if(!En(n=t))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+n+"`.");return Cn(o,"cache",e={}),o;function o(){var t,o,i,a;for(t=new Array(arguments.length),a=0;a<arguments.length;a++)t[a]=arguments[a];return i=n(t).toString(),sr(e,i)?e[i]:(o=r.apply(null,t),e[i]=o,o)}}((function(r,t){var n;return 0===t?0===r?1:0:(n=t*(t+1)/2,r<0||r>n?0:(r>n/2&&(r=n-r),oo(r-t,t-1)+oo(r,t-1)))}));var uo=oo;function co(r,t){return!Yn(r)&&Mn(t)&&Rn(t)?r<0||r>t*(t+1)/2?0:De(eo(uo(r,t))-t*io):NaN}function fo(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}Cn(co,"factory",(function(r){var t,n;return Mn(r)&&Rn(r)?(t=r*(r+1)/2,function(n){if(Yn(n))return NaN;if(n<0||n>t)return 0;return De(eo(uo(n,r))-r*io)}):(n=NaN,function(){return n})}));var lo=Math.floor;function po(r){return lo(r)===r&&r>0}var yo=Number.POSITIVE_INFINITY,so=Number.NEGATIVE_INFINITY;function vo(r){return r==r&&r>so&&r<yo}function bo(r){return r!=r}var go=Math.ceil;function wo(r){return r<0?go(r):lo(r)}function _o(r){return r===yo||r===so}var ho=fr();function mo(){return ho&&"symbol"==typeof Symbol.toStringTag}var Ao=Object.prototype.toString;var jo=Object.prototype.hasOwnProperty;var So="function"==typeof Symbol?Symbol:void 0,Eo="function"==typeof So?So.toStringTag:"";var Uo=mo()?function(r){var t,n,e,o,i;if(null==r)return Ao.call(r);n=r[Eo],i=Eo,t=null!=(o=r)&&jo.call(o,i);try{r[Eo]=void 0}catch(t){return Ao.call(r)}return e=Ao.call(r),t?r[Eo]=n:delete r[Eo],e}:function(r){return Ao.call(r)},Oo="function"==typeof Uint32Array;var To="function"==typeof Uint32Array?Uint32Array:null;var No,Io="function"==typeof Uint32Array?Uint32Array:void 0;No=function(){var r,t,n;if("function"!=typeof To)return!1;try{t=new To(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Oo&&n instanceof Uint32Array||"[object Uint32Array]"===Uo(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Io:function(){throw new Error("not implemented")};var Fo=No,Vo="function"==typeof Float64Array;var Po="function"==typeof Float64Array?Float64Array:null;var ko,Go="function"==typeof Float64Array?Float64Array:void 0;ko=function(){var r,t,n;if("function"!=typeof Po)return!1;try{t=new Po([1,3.14,-3.14,NaN]),n=t,r=(Vo&&n instanceof Float64Array||"[object Float64Array]"===Uo(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Go:function(){throw new Error("not implemented")};var xo=ko,Ho="function"==typeof Uint8Array;var Lo="function"==typeof Uint8Array?Uint8Array:null;var Co,Wo="function"==typeof Uint8Array?Uint8Array:void 0;Co=function(){var r,t,n;if("function"!=typeof Lo)return!1;try{t=new Lo(t=[1,3.14,-3.14,256,257]),n=t,r=(Ho&&n instanceof Uint8Array||"[object Uint8Array]"===Uo(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wo:function(){throw new Error("not implemented")};var Mo=Co,Bo="function"==typeof Uint16Array;var $o="function"==typeof Uint16Array?Uint16Array:null;var Ro,Yo="function"==typeof Uint16Array?Uint16Array:void 0;Ro=function(){var r,t,n;if("function"!=typeof $o)return!1;try{t=new $o(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Bo&&n instanceof Uint16Array||"[object Uint16Array]"===Uo(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yo:function(){throw new Error("not implemented")};var Zo,Xo={uint16:Ro,uint8:Mo};Zo=function(){var r;return(r=new Xo.uint16(1))[0]=4660,52===new Xo.uint8(r.buffer)[0]}();var qo,zo,Do=Zo;!0===Do?(qo=1,zo=0):(qo=0,zo=1);var Jo={HIGH:qo,LOW:zo},Ko=new xo(1),Qo=new Fo(Ko.buffer),ri=Jo.HIGH,ti=Jo.LOW;function ni(r,t,n,e){return Ko[0]=r,t[e]=Qo[ri],t[e+n]=Qo[ti],t}function ei(r){return ni(r,[0,0],1,0)}fo(ei,"assign",ni);var oi,ii,ai=!0===Do?1:0,ui=new xo(1),ci=new Fo(ui.buffer);function fi(r){return ui[0]=r,ci[ai]}!0===Do?(oi=1,ii=0):(oi=0,ii=1);var li={HIGH:oi,LOW:ii},pi=new xo(1),yi=new Fo(pi.buffer),si=li.HIGH,vi=li.LOW;function bi(r,t){return yi[si]=r,yi[vi]=t,pi[0]}var gi=[0,0];function di(r,t,n,e){return bo(r)||_o(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}fo((function(r){return di(r,[0,0],1,0)}),"assign",di);var wi=[0,0],_i=[0,0];function hi(r,t){var n,e,o,i,a,u;return 0===t||0===r||bo(r)||_o(r)?r:(di(r,wi,1,0),t+=wi[1],t+=function(r){var t=fi(r);return(t=(2146435072&t)>>>20)-1023|0}(r=wi[0]),t<-1074?(o=0,i=r,ei.assign(o,gi,1,0),a=gi[0],a&=2147483647,u=fi(i),bi(a|=u&=2147483648,gi[1])):t>1023?r<0?so:yo:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ei.assign(r,_i,1,0),n=_i[0],n&=2148532223,e*bi(n|=t+1023<<20,_i[1])))}var mi=1.4426950408889634,Ai=1/(1<<28);function ji(r){var t;return bo(r)||r===yo?r:r===so?0:r>709.782712893384?yo:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ai?1+r:function(r,t,n){var e,o,i,a;return hi(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=wo(r<0?mi*r-.5:mi*r+.5)),1.9082149292705877e-10*t,t)}var Si=.6931471805599453,Ei=/./;function Ui(r){return"boolean"==typeof r}var Oi=Boolean,Ti=Boolean.prototype.toString;var Ni=mo();function Ii(r){return"object"==typeof r&&(r instanceof Oi||(Ni?function(r){try{return Ti.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Uo(r)))}function Fi(r){return Ui(r)||Ii(r)}function Vi(){return new Function("return this;")()}fo(Fi,"isPrimitive",Ui),fo(Fi,"isObject",Ii);var Pi="object"==typeof self?self:null,ki="object"==typeof window?window:null,Gi="object"==typeof global?global:null,xi="object"==typeof globalThis?globalThis:null;var Hi=function(r){if(arguments.length){if(!Ui(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Vi()}if(xi)return xi;if(Pi)return Pi;if(ki)return ki;if(Gi)return Gi;throw new Error("unexpected error. Unable to resolve global object.")}(),Li=Hi.document&&Hi.document.childNodes,Ci=Int8Array;function Wi(){return/^\s*function\s*([^(]*)/i}var Mi=/^\s*function\s*([^(]*)/i;fo(Wi,"REGEXP",Mi);var Bi=Array.isArray?Array.isArray:function(r){return"[object Array]"===Uo(r)};function $i(r){return null!==r&&"object"==typeof r}function Ri(r){var t,n,e,o;if(("Object"===(n=Uo(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Mi.exec(e.toString()))return t[1]}return $i(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}fo($i,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!Bi(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}($i));var Yi="function"==typeof Ei||"object"==typeof Ci||"function"==typeof Li?function(r){return Ri(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ri(r).toLowerCase():t};function Zi(r){return"function"===Yi(r)}function Xi(r){return r}var qi,zi=Object.prototype.hasOwnProperty;function Di(r,t){return null!=r&&zi.call(r,t)}qi=function(r,t){var n,e;if(!Zi(r))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)n=Xi;else if(!Zi(n=t))throw new TypeError(V("invalid argument. Hash function argument must be a function. Value: `%s`.",n));return fo(o,"cache",e={}),o;function o(){var t,o,i,a;for(t=new Array(arguments.length),a=0;a<arguments.length;a++)t[a]=arguments[a];return i=n(t).toString(),Di(e,i)?e[i]:(o=r.apply(null,t),e[i]=o,o)}}((function(r,t){var n;return 0===t?0===r?1:0:(n=t*(t+1)/2,r<0||r>n?0:(r>n/2&&(r=n-r),qi(r-t,t-1)+qi(r,t-1)))}));var Ji=qi;function Ki(r,t){var n,e,o;if(bo(t)||!po(t)||!vo(t))return NaN;if(bo(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return t*(t+1)/2;for(n=ji(-t*Si),o=0,e=-1;o<r;)o+=n*Ji(e+=1,t);return e}fo(Ki,"factory",(function(r){var t,n;return!bo(r)&&po(r)&&vo(r)?(t=ji(-r*Si),function(n){var e,o;if(bo(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return r*(r+1)/2;e=0,o=-1;for(;e<n;)e+=t*Ji(o+=1,r);return o}):(n=NaN,function(){return n})}));var Qi={};return M(Qi,"cdf",Tn),M(Qi,"pdf",co),M(Qi,"quantile",Ki),Qi}));
//# sourceMappingURL=index.js.map
