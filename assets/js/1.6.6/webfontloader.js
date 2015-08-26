/* Web Font Loader v1.6.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
!function(){function a(a,b,c){return a.call.apply(a.bind,arguments)}function b(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function c(d,e,f){return c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:b,c.apply(null,arguments)}function e(a,b){this.D=a,this.m=b||a,this.F=this.m.document}function f(a,b,c){a=a.F.getElementsByTagName(b)[0],a||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function g(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;e>d;d++)if(c[d]==b)return!0;return!1}function i(a){if("string"==typeof a.da)return a.da;var b=a.m.location.protocol;return"about:"==b&&(b=a.D.location.protocol),"https:"==b?"https:":"http:"}function j(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b,media:"all"}),d=!1;c.onload=function(){d||(d=!0)},c.onerror=function(){d||(d=!0)},f(a,"head",c)}function k(a,b,c,d){var e=a.F.getElementsByTagName("head")[0];if(e){var f=a.createElement("script",{src:b}),g=!1;return f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5e3),f}return null}function l(a){this.ca=a||"-"}function m(a,b){this.V=a,this.N=4,this.H="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.H=c[1],this.N=parseInt(c[2],10))}function n(a){return a.H+a.N}function o(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function p(a,b){this.a=a,this.h=a.m.document.documentElement,this.J=b,this.f="wf",this.e=new l("-"),this.Z=!1!==b.events,this.u=!1!==b.classes}function q(a){a.u&&g(a.h,[a.e.d(a.f,"loading")]),s(a,"loading")}function r(a){if(a.u){var b=h(a.h,a.e.d(a.f,"active")),c=[],d=[a.e.d(a.f,"loading")];b||c.push(a.e.d(a.f,"inactive")),g(a.h,c,d)}s(a,"inactive")}function s(a,b,c){a.Z&&a.J[b]&&(c?a.J[b](c.getName(),n(c)):a.J[b]())}function t(){this.t={}}function u(a,b,c){var e,d=[];for(e in b)if(b.hasOwnProperty(e)){var f=a.t[e];f&&d.push(f(b[e],c))}return d}function v(a,b){this.a=a,this.q=b,this.j=this.a.createElement("span",{"aria-hidden":"true"},this.q)}function w(a,b){var d,c=a.j;d=[];for(var e=b.V.split(/,\s*/),f=0;f<e.length;f++){var g=e[f].replace(/['"]/g,"");-1==g.indexOf(" ")?d.push(g):d.push("'"+g+"'")}d=d.join(","),e="normal","o"===b.H?e="oblique":"i"===b.H&&(e="italic"),c.style.cssText="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+d+";"+("font-style:"+e+";font-weight:"+(b.N+"00")+";")}function x(a){f(a.a,"body",a.j)}function y(a,b,c,d,e,f,g){this.O=a,this.ba=b,this.a=c,this.g=d,this.q=g||"BESbswy",this.s={},this.M=e||3e3,this.T=f||null,this.C=this.B=this.w=this.v=null,this.v=new v(this.a,this.q),this.w=new v(this.a,this.q),this.B=new v(this.a,this.q),this.C=new v(this.a,this.q),w(this.v,new m(this.g.getName()+",serif",n(this.g))),w(this.w,new m(this.g.getName()+",sans-serif",n(this.g))),w(this.B,new m("serif",n(this.g))),w(this.C,new m("sans-serif",n(this.g))),x(this.v),x(this.w),x(this.B),x(this.C)}function B(){if(null===A){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return A}function C(a,b,c){for(var d in z)if(z.hasOwnProperty(d)&&b===a.s[z[d]]&&c===a.s[z[d]])return!0;return!1}function D(a){var e,b=a.v.j.offsetWidth,c=a.w.j.offsetWidth;(e=b===a.s.serif&&c===a.s["sans-serif"])||(e=B()&&C(a,b,c)),e?d()-a.ea>=a.M?B()&&C(a,b,c)&&(null===a.T||a.T.hasOwnProperty(a.g.getName()))?F(a,a.O):F(a,a.ba):E(a):F(a,a.O)}function E(a){setTimeout(c(function(){D(this)},a),50)}function F(a,b){setTimeout(c(function(){this.v.remove(),this.w.remove(),this.B.remove(),this.C.remove(),b(this.g)},a),0)}function G(a,b,c){this.a=a,this.o=b,this.K=0,this.X=this.S=!1,this.M=c}function H(a){0==--a.K&&a.S&&(a.X?(a=a.o,a.u&&g(a.h,[a.e.d(a.f,"active")],[a.e.d(a.f,"loading"),a.e.d(a.f,"inactive")]),s(a,"active")):r(a.o))}function I(a){this.D=a,this.p=new t,this.U=0,this.P=this.Q=!0}function J(a,b,d,e,f){var h=0==--a.U;(a.P||a.Q)&&setTimeout(function(){var a=f||null,i=e||null||{};if(0===d.length&&h)r(b.o);else{b.K+=d.length,h&&(b.S=h);var j,k=[];for(j=0;j<d.length;j++){var l=d[j],m=i[l.getName()],o=b.o,p=l;o.u&&g(o.h,[o.e.d(o.f,p.getName(),n(p).toString(),"loading")]),s(o,"fontloading",p),o=null,o=new y(c(b.$,b),c(b.aa,b),b.a,l,b.M,a,m),k.push(o)}for(j=0;j<k.length;j++)k[j].start()}},0)}function K(a,b,c){var d=[],e=c.timeout;q(b);var d=u(a.p,c,a.a),f=new G(a.a,b,e);for(a.U=d.length,b=0,c=d.length;c>b;b++)d[b].load(function(b,c,d){J(a,f,b,c,d)})}function L(a,b,c){this.I=a?a:b+M,this.k=[],this.L=[],this.Y=c||""}function N(a){this.k=a,this.W=[],this.G={}}function S(a,b){this.a=a,this.c=b}function U(a,b){this.a=a,this.c=b,this.R=[]}function V(a,b){this.a=a,this.c=b}function W(a,b){this.a=a,this.c=b}function X(a,b){this.a=a,this.c=b}var d=Date.now||function(){return+new Date};e.prototype.createElement=function(a,b,c){if(a=this.F.createElement(a),b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));return c&&a.appendChild(this.F.createTextNode(c)),a},l.prototype.d=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ca)},m.prototype.getName=function(){return this.V},v.prototype.remove=function(){var a=this.j;a.parentNode&&a.parentNode.removeChild(a)};var z={ga:"serif",fa:"sans-serif"},A=null;y.prototype.start=function(){this.s.serif=this.B.j.offsetWidth,this.s["sans-serif"]=this.C.j.offsetWidth,this.ea=d(),D(this)},G.prototype.$=function(a){var b=this.o;b.u&&g(b.h,[b.e.d(b.f,a.getName(),n(a).toString(),"active")],[b.e.d(b.f,a.getName(),n(a).toString(),"loading"),b.e.d(b.f,a.getName(),n(a).toString(),"inactive")]),s(b,"fontactive",a),this.X=!0,H(this)},G.prototype.aa=function(a){var b=this.o;if(b.u){var c=h(b.h,b.e.d(b.f,a.getName(),n(a).toString(),"active")),d=[],e=[b.e.d(b.f,a.getName(),n(a).toString(),"loading")];c||d.push(b.e.d(b.f,a.getName(),n(a).toString(),"inactive")),g(b.h,d,e)}s(b,"fontinactive",a),H(this)},I.prototype.load=function(a){this.a=new e(this.D,a.context||this.D),this.Q=!1!==a.events,this.P=!1!==a.classes,K(this,new p(this.a,a),a)};var M="//fonts.googleapis.com/css";L.prototype.d=function(){if(0==this.k.length)throw Error("No fonts to load!");if(-1!=this.I.indexOf("kit="))return this.I;for(var a=this.k.length,b=[],c=0;a>c;c++)b.push(this.k[c].replace(/ /g,"+"));return a=this.I+"?family="+b.join("%7C"),0<this.L.length&&(a+="&subset="+this.L.join(",")),0<this.Y.length&&(a+="&text="+encodeURIComponent(this.Y)),a};var O={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},P={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Q={i:"i",italic:"i",n:"n",normal:"n"},R=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;N.prototype.parse=function(){for(var a=this.k.length,b=0;a>b;b++){var c=this.k[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f,g=c[1];if(f=[],g)for(var g=g.split(","),h=g.length,i=0;h>i;i++){var j;if(j=g[i],j.match(/^[\w-]+$/))if(j=R.exec(j.toLowerCase()),null==j)j="";else{var k;if(k=j[1],null==k||""==k)k="4";else{var l=P[k];k=l?l:isNaN(k)?"4":k.substr(0,1)}j=j[2],j=[null==j||""==j?"n":Q[j],k].join("")}else j="";j&&f.push(j)}0<f.length&&(e=f),3==c.length&&(c=c[2],f=[],c=c?c.split(","):f,0<c.length&&(c=O[c[0]])&&(this.G[d]=c))}for(this.G[d]||(c=O[d])&&(this.G[d]=c),c=0;c<e.length;c+=1)this.W.push(new m(d,e[c]))}};var T={Arimo:!0,Cousine:!0,Tinos:!0};S.prototype.load=function(a){for(var b=this.a,c=new L(this.c.api,i(b),this.c.text),d=this.c.families,e=d.length,f=0;e>f;f++){var g=d[f].split(":");3==g.length&&c.L.push(g.pop());var h="";2==g.length&&""!=g[1]&&(h=":"),c.k.push(g.join(h))}d=new N(d),d.parse(),j(b,c.d()),a(d.W,d.G,T)},U.prototype.A=function(a){var b=this.a;return i(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(b.m.location.hostname||b.D.location.hostname)+"/"+a+".js"},U.prototype.load=function(a){var b=this.c.id,c=this.a.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var e=0,f=c.fonts.length;f>e;++e){var g=c.fonts[e];d.R.push(new m(g.name,o("font-weight:"+g.weight+";font-style:"+g.style)))}a(d.R)},k(this.a,this.A(b),function(b){b&&a([])})):a([])},V.prototype.A=function(a){return(this.c.api||"https://use.typekit.net")+"/"+a+".js"},V.prototype.load=function(a){var b=this.c.id,c=this.a.m;b?k(this.a,this.A(b),function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var d=[],e=0;e<b.length;e+=2)for(var f=b[e],g=b[e+1],h=0;h<g.length;h++)d.push(new m(f,g[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(i){}a(d)}},2e3):a([])},W.prototype.A=function(a,b){var c=i(this.a),d=(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")},W.prototype.load=function(a){var b=this.c.projectId,c=this.c.version;if(b){var d=this.a.m;k(this.a,this.A(b,c),function(c){if(c)a([]);else if(d["__mti_fntLst"+b]){c=d["__mti_fntLst"+b]();var e=[];if(c)for(var f=0;f<c.length;f++)e.push(new m(c[f].fontfamily));a(e)}else a([])}).id="__MonotypeAPIScript__"+b}else a([])},X.prototype.load=function(a){var b,c,d=this.c.urls||[],e=this.c.families||[],f=this.c.testStrings||{};for(b=0,c=d.length;c>b;b++)j(this.a,d[b]);for(d=[],b=0,c=e.length;c>b;b++){var g=e[b].split(":");if(g[1])for(var h=g[1].split(","),i=0;i<h.length;i+=1)d.push(new m(g[0],h[i]));else d.push(new m(g[0]))}a(d,f)};var Y=new I(window);Y.p.t.custom=function(a,b){return new X(b,a)},Y.p.t.fontdeck=function(a,b){return new U(b,a)},Y.p.t.monotype=function(a,b){return new W(b,a)},Y.p.t.typekit=function(a,b){return new V(b,a)},Y.p.t.google=function(a,b){return new S(b,a)};var Z={load:c(Y.load,Y)};"function"==typeof define&&define.amd?define(function(){return Z}):"undefined"!=typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig))}();