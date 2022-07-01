// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).signrank=n()}(this,(function(){"use strict";function r(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,v=function(r,n,t){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r},y=e,p=v,b=(l=t()?y:p,l);var s=function(r,n,t){b(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=s,w=l;var m=function(r,n,t){w(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=m,g=Math.floor,A=g;var _=function(r){return A(r)===r&&r>0},j=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,U=j,E=N;var O=function(r){return r==r&&r>E&&r<U};var S=function(r){return r!=r},I=Math.round,T=Math.ceil,P=g,F=T;var G=function(r){return r<0?F(r):P(r)},H=j,V=N;var x=function(r){return r===H||r===V};var B=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var L=function(){return B&&"symbol"==typeof Symbol.toStringTag},M=Object.prototype.toString,k=M;var W=function(r){return k.call(r)},C=Object.prototype.hasOwnProperty;var R=function(r,n){return null!=r&&C.call(r,n)},X="function"==typeof Symbol?Symbol.toStringTag:"",Y=R,q=X,z=M;var D=W,J=function(r){var n,t,e;if(null==r)return z.call(r);t=r[q],n=Y(r,q);try{r[q]=void 0}catch(n){return z.call(r)}return e=z.call(r),n?r[q]=t:delete r[q],e},K=L()?J:D,Q=K,Z="function"==typeof Uint32Array;var $="function"==typeof Uint32Array?Uint32Array:null,rr=function(r){return Z&&r instanceof Uint32Array||"[object Uint32Array]"===Q(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,4294967296,4294967297]),r=rr(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var er="function"==typeof Uint32Array?Uint32Array:void 0,or=function(){throw new Error("not implemented")},ur=tr()?er:or,ir=K,ar="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null,cr=function(r){return ar&&r instanceof Float64Array||"[object Float64Array]"===ir(r)},lr=fr;var vr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,NaN]),r=cr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var yr="function"==typeof Float64Array?Float64Array:void 0,pr=function(){throw new Error("not implemented")},br=vr()?yr:pr,sr=K,dr="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null,mr=function(r){return dr&&r instanceof Uint8Array||"[object Uint8Array]"===sr(r)},hr=wr;var gr=function(){var r,n;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),r=mr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Ar="function"==typeof Uint8Array?Uint8Array:void 0,_r=function(){throw new Error("not implemented")},jr=gr()?Ar:_r,Nr=K,Ur="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null,Or=function(r){return Ur&&r instanceof Uint16Array||"[object Uint16Array]"===Nr(r)},Sr=Er;var Ir=function(){var r,n;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),r=Or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Tr,Pr="function"==typeof Uint16Array?Uint16Array:void 0,Fr=function(){throw new Error("not implemented")},Gr={uint16:Ir()?Pr:Fr,uint8:jr};(Tr=new Gr.uint16(1))[0]=4660;var Hr,Vr,xr=52===new Gr.uint8(Tr.buffer)[0];!0===xr?(Hr=1,Vr=0):(Hr=0,Vr=1);var Br=ur,Lr={HIGH:Hr,LOW:Vr},Mr=new br(1),kr=new Br(Mr.buffer),Wr=Lr.HIGH,Cr=Lr.LOW;var Rr=function(r,n){return Mr[0]=n,r[0]=kr[Wr],r[1]=kr[Cr],r};var Xr=function(r,n){return 1===arguments.length?Rr([0,0],r):Rr(r,n)},Yr=Xr,qr=ur,zr=!0===xr?1:0,Dr=new br(1),Jr=new qr(Dr.buffer);var Kr,Qr,Zr=function(r){return Dr[0]=r,Jr[zr]};!0===xr?(Kr=1,Qr=0):(Kr=0,Qr=1);var $r=ur,rn={HIGH:Kr,LOW:Qr},nn=new br(1),tn=new $r(nn.buffer),en=rn.HIGH,on=rn.LOW;var un=function(r,n){return tn[en]=r,tn[on]=n,nn[0]},an=Yr,fn=Zr,cn=un,ln=[0,0];var vn=x,yn=S,pn=function(r){return Math.abs(r)};var bn=function(r,n){return yn(n)||vn(n)?(r[0]=n,r[1]=0,r):0!==n&&pn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var sn=function(r,n){return 1===arguments.length?bn([0,0],r):bn(r,n)},dn=Zr;var wn=function(r){var n=dn(r);return(n=(2146435072&n)>>>20)-1023|0},mn=j,hn=N,gn=S,An=x,_n=function(r,n){var t,e;return an(ln,r),t=ln[0],t&=2147483647,e=fn(n),cn(t|=e&=2147483648,ln[1])},jn=sn,Nn=wn,Un=Yr,En=un,On=[0,0],Sn=[0,0];var In=function(r,n){var t,e;return 0===n||0===r||gn(r)||An(r)?r:(jn(On,r),n+=On[1],(n+=Nn(r=On[0]))<-1074?_n(0,r):n>1023?r<0?hn:mn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Un(Sn,r),t=Sn[0],t&=2148532223,e*En(t|=n+1023<<20,Sn[1])))};var Tn=In,Pn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Fn=S,Gn=G,Hn=N,Vn=j,xn=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*Pn(o),Tn(1-(n-e*u/(2-u)-r),t)},Bn=1.4426950408889634,Ln=1/(1<<28);var Mn=function(r){var n;return Fn(r)||r===Vn?r:r===Hn?0:r>709.782712893384?Vn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ln?1+r:(n=Gn(r<0?Bn*r-.5:Bn*r+.5),xn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},kn=/./;var Wn=function(r){return"boolean"==typeof r},Cn=Boolean.prototype.toString;var Rn=K,Xn=function(r){try{return Cn.call(r),!0}catch(r){return!1}},Yn=L();var qn=function(r){return"object"==typeof r&&(r instanceof Boolean||(Yn?Xn(r):"[object Boolean]"===Rn(r)))},zn=Wn,Dn=qn;var Jn=h,Kn=function(r){return zn(r)||Dn(r)},Qn=qn;Jn(Kn,"isPrimitive",Wn),Jn(Kn,"isObject",Qn);var Zn=Kn;var $n=function(){return new Function("return this;")()},rt="object"==typeof self?self:null,nt="object"==typeof window?window:null,tt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},et="object"==typeof tt?tt:null;module.exports=et;var ot=Zn.isPrimitive,ut=$n,it=rt,at=nt,ft=r(Object.freeze({__proto__:null}));var ct=function(r){if(arguments.length){if(!ot(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ut()}if(it)return it;if(at)return at;if(ft)return ft;throw new Error("unexpected error. Unable to resolve global object.")},lt=ct(),vt=lt.document&&lt.document.childNodes,yt=Int8Array,pt=kn,bt=vt,st=yt;var dt=function(){return"function"==typeof pt||"object"==typeof st||"function"==typeof bt};var wt=function(){return/^\s*function\s*([^(]*)/i},mt=wt;h(mt,"REGEXP",wt());var ht=mt,gt=K;var At=Array.isArray?Array.isArray:function(r){return"[object Array]"===gt(r)};var _t=function(r){return null!==r&&"object"==typeof r};h(_t,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!At(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(_t));var jt=_t;var Nt=K,Ut=ht.REGEXP,Et=function(r){return jt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Ot=function(r){var n,t,e;if(("Object"===(t=Nt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Ut.exec(e.toString()))return n[1]}return Et(r)?"Buffer":t},St=Ot;var It=Ot;var Tt=function(r){var n;return null===r?"null":"object"===(n=typeof r)?St(r).toLowerCase():n},Pt=function(r){return It(r).toLowerCase()},Ft=dt()?Pt:Tt;var Gt=function(r){return"function"===Ft(r)},Ht=h,Vt=function(r){return r},xt=R;var Bt,Lt=function(r,n){var t,e;if(!Gt(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Vt;else if(!Gt(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return Ht(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),xt(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}},Mt=Lt;Bt=Mt((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Bt(r-n,n-1)+Bt(r,n-1)))}));var kt=_,Wt=O,Ct=S,Rt=I,Xt=Mn,Yt=Bt;var qt=function(r){return function(){return r}},zt=_,Dt=qt,Jt=O,Kt=I,Qt=S,Zt=Mn,$t=Bt;var re=function(r,n){var t,e,o;if(Ct(r)||!kt(n)||!Wt(n))return NaN;if(r<0)return 0;if((r=Rt(r))>=n*(n+1)/2)return 1;for(t=Xt(.6931471805599453*-n),o=0,e=0;e<=r;e++)o+=Yt(e,n)*t;return o};h(re,"factory",(function(r){var n,t;return zt(r)&&Jt(r)?(t=Zt(.6931471805599453*-r),n=r*(r+1)/2,function(e){var o,u;if(Qt(e))return NaN;if(e<0)return 0;if((e=Kt(e))>=n)return 1;for(u=0,o=0;o<=e;o++)u+=$t(o,r)*t;return u}):Dt(NaN)}));var ne=re,te=ur,ee=!0===xr?1:0,oe=new br(1),ue=new te(oe.buffer);var ie=function(r,n){return oe[0]=r,ue[ee]=n>>>0,oe[0]};var ae=Zr,fe=ie,ce=S,le=N,ve=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ye=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},pe=.6931471803691238,be=1.9082149292705877e-10,se=1048575;var de,we=function(r){var n,t,e,o,u,i,a,f,c,l,v;return 0===r?le:ce(r)||r<0?NaN:(o=0,(t=ae(r))<1048576&&(o-=54,t=ae(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(a=(t&=se)+614244&1048576|0)>>20|0,i=(r=fe(r,t|1072693248^a))-1,(se&2+t)<3?0===i?0===o?0:o*pe+o*be:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*pe-(u-o*be-i)):(a=t-398458|0,f=440401-t|0,e=(l=(v=(c=i/(2+i))*c)*v)*ve(l),u=v*ye(l)+e,(a|=f)>0?(n=.5*i*i,0===o?i-(n-c*(n+u)):o*pe-(n-(c*(n+u)+o*be)-i)):0===o?i-c*(i-u):o*pe-(c*(i-u)-o*be-i))))},me=we;de=Mt((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),de(r-n,n-1)+de(r,n-1)))}));var he=_,ge=O,Ae=S,_e=Mn,je=me,Ne=de;var Ue=_,Ee=qt,Oe=O,Se=S,Ie=Mn,Te=me,Pe=de;var Fe=function(r,n){return!Ae(r)&&he(n)&&ge(n)?r<0||r>n*(n+1)/2?0:_e(je(Ne(r,n))-.6931471805599453*n):NaN};h(Fe,"factory",(function(r){var n;return Ue(r)&&Oe(r)?(n=r*(r+1)/2,function(t){if(Se(t))return NaN;if(t<0||t>n)return 0;return Ie(Te(Pe(t,r))-.6931471805599453*r)}):Ee(NaN)}));var Ge,He=Fe;Ge=Mt((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Ge(r-n,n-1)+Ge(r,n-1)))}));var Ve=_,xe=O,Be=S,Le=Mn,Me=Ge;var ke=_,We=qt,Ce=O,Re=S,Xe=Mn,Ye=Ge;var qe=function(r,n){var t,e,o;if(Be(n)||!Ve(n)||!xe(n))return NaN;if(Be(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=Le(.6931471805599453*-n),o=0,e=-1;o<r;)o+=t*Me(e+=1,n);return e};h(qe,"factory",(function(r){var n;return!Re(r)&&ke(r)&&Ce(r)?(n=Xe(.6931471805599453*-r),function(t){var e,o;if(Re(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*Ye(o+=1,r);return o}):We(NaN)}));var ze=qe,De={};return d(De,"cdf",ne),d(De,"pdf",He),d(De,"quantile",ze),De}));
//# sourceMappingURL=browser.js.map
