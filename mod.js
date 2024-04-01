// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,w,"$1e"),t=s.call(t,h,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,y,"e-0$1"),r.alternate&&(t=s.call(t,v,"$1."),t=s.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var A=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function j(r){var n,e,t,o,a,c,f,l,s,p,y,v,g;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)c+=t;else{if(n=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),e=t.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,N(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!N(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(a)?String(t.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,v=t.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(U(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function x(r){var n,e;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return j.apply(null,n)}var F,T=Object.prototype,k=T.toString,V=T.__defineGetter__,O=T.__defineSetter__,G=T.__lookupGetter__,L=T.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,n)||L.call(r,n)?(t=r.__proto__,r.__proto__=T,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,n,e.get),a&&O&&O.call(r,n,e.set),r};var $=F;function C(r,n,e){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function H(r,n,e){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var P=Math.floor;function W(r){return P(r)===r&&r>0}var B=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function R(r){return r==r&&r>M&&r<B}function Z(r){return r!=r}var X=Math.round,Y=Math.ceil;function q(r){return r<0?Y(r):P(r)}var z=1023,D=1023,J=-1023,K=-1074;function Q(r){return r===B||r===M}var rr=2147483648,nr=2147483647;var er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function tr(){return er&&"symbol"==typeof Symbol.toStringTag}var ir=Object.prototype.toString;var or=Object.prototype.hasOwnProperty;function ar(r,n){return null!=r&&or.call(r,n)}var ur="function"==typeof Symbol?Symbol:void 0,cr="function"==typeof ur?ur.toStringTag:"";var fr=tr()?function(r){var n,e,t;if(null==r)return ir.call(r);e=r[cr],n=ar(r,cr);try{r[cr]=void 0}catch(n){return ir.call(r)}return t=ir.call(r),n?r[cr]=e:delete r[cr],t}:function(r){return ir.call(r)},lr="function"==typeof Uint32Array;var sr="function"==typeof Uint32Array?Uint32Array:null;var pr,yr="function"==typeof Uint32Array?Uint32Array:void 0;pr=function(){var r,n,e;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(lr&&e instanceof Uint32Array||"[object Uint32Array]"===fr(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=pr,gr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var hr,wr="function"==typeof Float64Array?Float64Array:void 0;hr=function(){var r,n,e;if("function"!=typeof dr)return!1;try{n=new dr([1,3.14,-3.14,NaN]),e=n,r=(gr&&e instanceof Float64Array||"[object Float64Array]"===fr(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=hr,mr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null;var Nr,Er="function"==typeof Uint8Array?Uint8Array:void 0;Nr=function(){var r,n,e;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,256,257]),e=n,r=(mr&&e instanceof Uint8Array||"[object Uint8Array]"===fr(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r=Nr,jr="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Ur,Ir="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,n,e;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(jr&&e instanceof Uint16Array||"[object Uint16Array]"===fr(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var xr,Fr={uint16:Ur,uint8:_r};(xr=new Fr.uint16(1))[0]=4660;var Tr,kr,Vr=52===new Fr.uint8(xr.buffer)[0];!0===Vr?(Tr=1,kr=0):(Tr=0,kr=1);var Or={HIGH:Tr,LOW:kr},Gr=new br(1),Lr=new vr(Gr.buffer),$r=Or.HIGH,Cr=Or.LOW;function Hr(r,n,e,t){return Gr[0]=r,n[t]=Lr[$r],n[t+e]=Lr[Cr],n}function Pr(r){return Hr(r,[0,0],1,0)}H(Pr,"assign",Hr);var Wr,Br,Mr=!0===Vr?1:0,Rr=new br(1),Zr=new vr(Rr.buffer);function Xr(r){return Rr[0]=r,Zr[Mr]}!0===Vr?(Wr=1,Br=0):(Wr=0,Br=1);var Yr={HIGH:Wr,LOW:Br},qr=new br(1),zr=new vr(qr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,n){return zr[Dr]=r,zr[Jr]=n,qr[0]}var Qr=[0,0];var rn=22250738585072014e-324;var nn=4503599627370496;function en(r,n,e,t){return Z(r)||Q(r)?(n[t]=r,n[t+e]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<rn?(n[t]=r*nn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}H((function(r){return en(r,[0,0],1,0)}),"assign",en);var tn=2146435072;var on=2220446049250313e-31,an=2148532223,un=[0,0],cn=[0,0];function fn(r,n){var e,t,i,o,a,u;return 0===n||0===r||Z(r)||Q(r)?r:(en(r,un,1,0),r=un[0],n+=un[1],n+=function(r){var n=Xr(r);return(n=(n&tn)>>>20)-z|0}(r),n<K?(i=0,o=r,Pr.assign(i,Qr,1,0),a=Qr[0],a&=nr,u=Xr(o),Kr(a|=u&=rr,Qr[1])):n>D?r<0?M:B:(n<=J?(n+=52,t=on):t=1,Pr.assign(r,cn,1,0),e=cn[0],e&=an,t*Kr(e|=n+z<<20,cn[1])))}var ln=.6931471803691238,sn=1.9082149292705877e-10,pn=1.4426950408889634,yn=709.782712893384,vn=-745.1332191019411,gn=1/(1<<28),dn=-gn;function hn(r){var n;return Z(r)||r===B?r:r===M?0:r>yn?B:r<vn?0:r>dn&&r<gn?1+r:function(r,n,e){var t,i,o,a;return fn(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-(n=q(r<0?pn*r-.5:pn*r+.5))*ln,n*sn,n)}var wn=.6931471805599453,bn=/./;function mn(r){return"boolean"==typeof r}var An=Boolean,Nn=Boolean.prototype.toString;var En=tr();function _n(r){return"object"==typeof r&&(r instanceof An||(En?function(r){try{return Nn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===fr(r)))}function jn(r){return mn(r)||_n(r)}H(jn,"isPrimitive",mn),H(jn,"isObject",_n);var Sn="object"==typeof self?self:null,Un="object"==typeof window?window:null,In="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},xn="object"==typeof In?In:null,Fn="object"==typeof globalThis?globalThis:null;var Tn=function(r){if(arguments.length){if(!mn(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Fn)return Fn;if(Sn)return Sn;if(Un)return Un;if(xn)return xn;throw new Error("unexpected error. Unable to resolve global object.")}(),kn=Tn.document&&Tn.document.childNodes,Vn=Int8Array;function On(){return/^\s*function\s*([^(]*)/i}var Gn=/^\s*function\s*([^(]*)/i;H(On,"REGEXP",Gn);var Ln=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};function $n(r){return null!==r&&"object"==typeof r}function Cn(r){var n,e,t,i;if(("Object"===(e=fr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(n=Gn.exec(t.toString()))return n[1]}return $n(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}H($n,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!Ln(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}($n));var Hn,Pn="function"==typeof bn||"object"==typeof Vn||"function"==typeof kn?function(r){return Cn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Cn(r).toLowerCase():n};function Wn(r){return"function"===Pn(r)}function Bn(r){return r}function Mn(r,n){var e,t;if(!Wn(r))throw new TypeError(x("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)e=Bn;else if(!Wn(e=n))throw new TypeError(x("invalid argument. Hash function argument must be a function. Value: `%s`.",e));return H(i,"cache",t={}),i;function i(){var n,i,o,a;for(n=new Array(arguments.length),a=0;a<arguments.length;a++)n[a]=arguments[a];return o=e(n).toString(),ar(t,o)?t[o]:(i=r.apply(null,n),t[o]=i,i)}}var Rn=Hn=Mn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),Hn(r-n,n-1)+Hn(r,n-1)))}));function Zn(r,n){var e,t,i;if(Z(r)||!W(n)||!R(n))return NaN;if(r<0)return 0;if((r=X(r))>=n*(n+1)/2)return 1;for(e=hn(-n*wn),i=0,t=0;t<=r;t++)i+=Rn(t,n)*e;return i}function Xn(r){return function(){return r}}H(Zn,"factory",(function(r){var n,e;return W(r)&&R(r)?(e=hn(-r*wn),n=r*(r+1)/2,function(t){var i,o;if(Z(t))return NaN;if(t<0)return 0;if((t=X(t))>=n)return 1;for(o=0,i=0;i<=t;i++)o+=Rn(i,r)*e;return o}):Xn(NaN)}));var Yn=!0===Vr?1:0,qn=new br(1),zn=new vr(qn.buffer);var Dn,Jn=.6931471803691238,Kn=1.9082149292705877e-10,Qn=0x40000000000000,re=.3333333333333333,ne=1048575,ee=2146435072,te=1048576,ie=1072693248;function oe(r){var n,e,t,i,o,a,u,c,f,l,s,p;return 0===r?M:Z(r)||r<0?NaN:(o=0,(e=Xr(r))<te&&(o-=54,e=Xr(r*=Qn)),e>=ee?r+r:(o+=(e>>20)-z|0,o+=(c=(e&=ne)+614244&1048576|0)>>20|0,u=(r=function(r,n){return qn[0]=r,zn[Yn]=n>>>0,qn[0]}(r,e|c^ie))-1,(ne&2+e)<3?0===u?0===o?0:o*Jn+o*Kn:(a=u*u*(.5-re*u),0===o?u-a:o*Jn-(a-o*Kn-u)):(c=e-398458|0,f=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(c|=f)>0?(n=.5*u*u,0===o?u-(n-l*(n+a)):o*Jn-(n-(l*(n+a)+o*Kn)-u)):0===o?u-l*(u-a):o*Jn-(l*(u-a)-o*Kn-u))))}var ae,ue=Dn=Mn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),Dn(r-n,n-1)+Dn(r,n-1)))}));function ce(r,n){return!Z(r)&&W(n)&&R(n)?r<0||r>n*(n+1)/2?0:hn(oe(ue(r,n))-n*wn):NaN}H(ce,"factory",(function(r){var n;return W(r)&&R(r)?(n=r*(r+1)/2,function(e){if(Z(e))return NaN;if(e<0||e>n)return 0;return hn(oe(ue(e,r))-r*wn)}):Xn(NaN)}));var fe=ae=Mn((function(r,n){var e;return 0===n?0===r?1:0:(e=n*(n+1)/2,r<0||r>e?0:(r>e/2&&(r=e-r),ae(r-n,n-1)+ae(r,n-1)))}));function le(r,n){var e,t,i;if(Z(n)||!W(n)||!R(n))return NaN;if(Z(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(e=hn(-n*wn),i=0,t=-1;i<r;)i+=e*fe(t+=1,n);return t}H(le,"factory",(function(r){var n;return!Z(r)&&W(r)&&R(r)?(n=hn(-r*wn),function(e){var t,i;if(Z(e)||e<0||e>1)return NaN;if(0===e)return 0;if(1===e)return r*(r+1)/2;t=0,i=-1;for(;t<e;)t+=n*fe(i+=1,r);return i}):Xn(NaN)}));var se={};C(se,"cdf",Zn),C(se,"pdf",ce),C(se,"quantile",le);export{Zn as cdf,se as default,ce as pdf,le as quantile};
//# sourceMappingURL=mod.js.map
