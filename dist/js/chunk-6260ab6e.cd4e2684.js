(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6260ab6e"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),o=r("07e3"),i=r("8e60"),a=r("63b6"),u=r("9138"),c=r("ebfd").KEY,s=r("294c"),f=r("dbdb"),l=r("45f2"),h=r("62a0"),p=r("5168"),d=r("ccb9"),y=r("6718"),v=r("47ee"),m=r("9003"),g=r("e4ae"),b=r("f772"),w=r("36c3"),O=r("1bc3"),x=r("aebd"),k=r("a159"),_=r("0395"),j=r("bf0b"),E=r("d9f6"),S=r("c3a1"),L=j.f,P=E.f,N=_.f,T=n.Symbol,F=n.JSON,A=F&&F.stringify,I="prototype",G=p("_hidden"),C=p("toPrimitive"),J={}.propertyIsEnumerable,R=f("symbol-registry"),D=f("symbols"),U=f("op-symbols"),Y=Object[I],K="function"==typeof T,M=n.QObject,W=!M||!M[I]||!M[I].findChild,z=i&&s(function(){return 7!=k(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=L(Y,e);n&&delete Y[e],P(t,e,r),n&&t!==Y&&P(Y,e,n)}:P,Q=function(t){var e=D[t]=k(T[I]);return e._k=t,e},$=K&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},q=function(t,e,r){return t===Y&&q(U,e,r),g(t),e=O(e,!0),g(r),o(D,e)?(r.enumerable?(o(t,G)&&t[G][e]&&(t[G][e]=!1),r=k(r,{enumerable:x(0,!1)})):(o(t,G)||P(t,G,x(1,{})),t[G][e]=!0),z(t,e,r)):P(t,e,r)},B=function(t,e){g(t);var r,n=v(e=w(e)),o=0,i=n.length;while(i>o)q(t,r=n[o++],e[r]);return t},H=function(t,e){return void 0===e?k(t):B(k(t),e)},V=function(t){var e=J.call(this,t=O(t,!0));return!(this===Y&&o(D,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,G)&&this[G][t])||e)},X=function(t,e){if(t=w(t),e=O(e,!0),t!==Y||!o(D,e)||o(U,e)){var r=L(t,e);return!r||!o(D,e)||o(t,G)&&t[G][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=N(w(t)),n=[],i=0;while(r.length>i)o(D,e=r[i++])||e==G||e==c||n.push(e);return n},tt=function(t){var e,r=t===Y,n=N(r?U:w(t)),i=[],a=0;while(n.length>a)!o(D,e=n[a++])||r&&!o(Y,e)||i.push(D[e]);return i};K||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===Y&&e.call(U,r),o(this,G)&&o(this[G],t)&&(this[G][t]=!1),z(this,t,x(1,r))};return i&&W&&z(Y,t,{configurable:!0,set:e}),Q(t)},u(T[I],"toString",function(){return this._k}),j.f=X,E.f=q,r("6abf").f=_.f=Z,r("355d").f=V,r("9aa9").f=tt,i&&!r("b8e3")&&u(Y,"propertyIsEnumerable",V,!0),d.f=function(t){return Q(p(t))}),a(a.G+a.W+a.F*!K,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)p(et[rt++]);for(var nt=S(p.store),ot=0;nt.length>ot;)y(nt[ot++]);a(a.S+a.F*!K,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=T(t)},keyFor:function(t){if(!$(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!K,"Object",{create:H,defineProperty:q,defineProperties:B,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&a(a.S+a.F*(!K||s(function(){var t=T();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(r=e=n[1],(b(e)||void 0!==t)&&!$(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!$(e))return e}),n[1]=e,A.apply(F,n)}}),T[I][C]||r("35e8")(T[I],C,T[I].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),o=r("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(n(t))}},"0976":function(t,e,r){},"268f":function(t,e,r){t.exports=r("fde4")},"32a6":function(t,e,r){var n=r("241e"),o=r("c3a1");r("ce7e")("keys",function(){return function(t){return o(n(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"3b8d":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("795b"),o=r.n(n);function i(t,e,r,n,i,a,u){try{var c=t[a](u),s=c.value}catch(f){return void r(f)}c.done?e(s):o.a.resolve(s).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new o.a(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}},"47ee":function(t,e,r){var n=r("c3a1"),o=r("9aa9"),i=r("355d");t.exports=function(t){var e=n(t),r=o.f;if(r){var a,u=r(t),c=i.f,s=0;while(u.length>s)c.call(t,a=u[s++])&&e.push(a)}return e}},"637e":function(t,e,r){"use strict";var n=r("0976"),o=r.n(n);o.a},6718:function(t,e,r){var n=r("e53d"),o=r("584a"),i=r("b8e3"),a=r("ccb9"),u=r("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),o=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=_(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function y(){}function v(){}function m(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,i)&&(g=w);var O=m.prototype=y.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(r,o,i,a){var u=s(t[r],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var r;function o(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=o}function _(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:l,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=O.constructor=m,m.constructor=v,m[u]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var i=new k(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(O),O[u]="Generator",O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,r){t.exports=r("8aae")},b0a7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Pagina de Inicio")]),r("h1",[t._v("Anuncions e imagenes para la aplicación")]),t.isAuthenticated||t.authLoading?t._e():r("b-button",{attrs:{to:"/pages/login",variant:"primary",size:"lg"}},[t._v("Iniciar Sesion")]),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"edit me"},domProps:{value:t.username},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getUsername(e)},input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("button",{attrs:{type:"submit"},on:{click:t.getUsername}},[t._v("\n                Click\n        ")])]),t.user?r("section",[r("div",[t._v(" "+t._s(t.user.username)+" ")]),r("div",[t._v(" "+t._s(t.user.id)+" ")])]):t._e(),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userlogin,expression:"userlogin"}],attrs:{type:"text",placeholder:"usernamet",autocomplete:"userrr"},domProps:{value:t.userlogin},on:{input:function(e){e.target.composing||(t.userlogin=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"passworddd"},domProps:{value:t.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getToken(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("button",{attrs:{type:"submit"},on:{click:t.getToken}},[t._v("\n                Obtener Token\n        ")])]),t.token?r("section",[t._v("\n            TOKEN: "+t._s(t.token)+"\n    ")]):t._e()],1)},o=[],i=r("cebc"),a=(r("96cf"),r("3b8d")),u=(r("f1fb"),r("c684")),c=r("2f62"),s=localStorage.getItem("user-token");console.log(s);var f={name:"indexjoe",data:function(){return{username:"",user:"",userlogin:"",password:"",token:""}},methods:{getUsername:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,getUser({username:this.username});case 2:e=t.sent,this.username=e.data.data.user.username,this.user=e.data.data.user;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getToken:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["d"])({username:this.userlogin,password:this.password});case 2:e=t.sent,this.token=e.data.data.tokenAuth.token;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},computed:Object(i["a"])({},Object(c["b"])(["isAuthenticated"]),Object(c["c"])({name:function(t){return"".concat(t.user.profile.nombre)}}))},l=f,h=(r("637e"),r("2877")),p=Object(h["a"])(l,n,o,!1,null,null,null);e["default"]=p.exports},bf0b:function(t,e,r){var n=r("355d"),o=r("aebd"),i=r("36c3"),a=r("1bc3"),u=r("07e3"),c=r("794b"),s=Object.getOwnPropertyDescriptor;e.f=r("8e60")?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(r){}if(u(t,e))return o(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),o=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(n(t),e)}})},ccb9:function(t,e,r){e.f=r("5168")},cebc:function(t,e,r){"use strict";r.d(e,"a",function(){return f});var n=r("268f"),o=r.n(n),i=r("e265"),a=r.n(i),u=r("a4bb"),c=r.n(u),s=r("bd86");function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=c()(r);"function"===typeof a.a&&(n=n.concat(a()(r).filter(function(t){return o()(r,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,r[e])})}return t}},e265:function(t,e,r){t.exports=r("ed33")},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-6260ab6e.cd4e2684.js.map