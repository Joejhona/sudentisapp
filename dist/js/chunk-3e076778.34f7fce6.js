(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e076778"],{"3b8d":function(t,r,e){"use strict";e.d(r,"a",function(){return i});var n=e("795b"),o=e.n(n);function a(t,r,e,n,a,i,c){try{var s=t[i](c),u=s.value}catch(l){return void e(l)}s.done?r(u):o.a.resolve(u).then(n,a)}function i(t){return function(){var r=this,e=arguments;return new o.a(function(n,o){var i=t.apply(r,e);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)})}}},5893:function(t,r,e){},"96cf":function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=r.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=r.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},m={};m[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==n&&o.call(b,i)&&(m=b);var g=j.prototype=_.prototype=Object.create(m);L.prototype=g.constructor=j,j.constructor=L,j[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===L||"GeneratorFunction"===(r.displayName||r.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,r,e,n){var o=new E(w(t,r,e,n));return l.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(g),g[s]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},l.values=S,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),z(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}}}function w(t,r,e,n){var o=r&&r.prototype instanceof _?r:_,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=k(t,e,i),a}function x(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function j(){}function C(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function E(t){function r(e,n,a,i){var c=x(t[e],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){r("next",t,a,i)},function(t){r("throw",t,a,i)}):Promise.resolve(u).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,i)})}i(c.arg)}var e;function n(t,n){function o(){return new Promise(function(e,o){r(t,n,e,o)})}return e=e?e.then(o,o):o()}this._invoke=n}function k(t,r,e){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return q()}e.method=o,e.arg=a;while(1){var i=e.delegate;if(i){var c=N(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var s=x(t,r,e);if("normal"===s.type){if(n=e.done?p:h,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=p,e.method="throw",e.arg=s.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:q}}function q(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a3ee:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"animated fadeIn"},[e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Crear Clinica ")]),e("small",[t._v("Formulario")])]),e("b-form-group",[e("b-alert",{attrs:{show:"",variant:"danger"}},[e("strong",[t._v("Buscar en Sunat")]),t._v(" solo funciona para versiones pagadas adquierela \n              "),e("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("aqui")]),t._v(" solo por S/.30 mes.\n          ")]),e("b-input-group",[e("b-input-group-prepend",[e("b-button",{attrs:{variant:"primary"}},[e("i",{staticClass:"fa fa-search"}),t._v(" Buscar en Sunat\n              ")])],1),e("b-form-input",{attrs:{type:"text",placeholder:"Ingresa el Ruc"}})],1)],1),e("hr"),e("b-form",[e("b-form-group",[e("label",{attrs:{for:"company"}},[t._v("Nombre")]),e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{name:"nombre",type:"text",id:"company",placeholder:"Nombre de tu consultorio"},model:{value:t.nombre,callback:function(r){t.nombre=r},expression:"nombre"}})],1),e("b-form-group",[e("label",{attrs:{for:"street"}},[t._v("Ruc")]),e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:11",expression:"'required|digits:11'"}],attrs:{name:"ruc",type:"number",id:"street",placeholder:"Ruc de 11 digitos"},model:{value:t.ruc,callback:function(r){t.ruc=r},expression:"ruc"}})],1),e("b-row",[e("b-col",{attrs:{sm:"8"}},[e("b-form-group",[e("label",{attrs:{for:"city"}},[t._v("Zona de Trabajo")]),e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{name:"zonadetrabajo",type:"text",id:"city",placeholder:"Ciudad, distrito y barrio"},model:{value:t.zonadetrabajo,callback:function(r){t.zonadetrabajo=r},expression:"zonadetrabajo"}})],1)],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",[e("label",{attrs:{for:"postal-code"}},[t._v("Telefono")]),e("b-form-input",{attrs:{type:"text",id:"postal-code",placeholder:"Telefono"}})],1)],1)],1),t.nombre&&t.ruc&&t.zonadetrabajo?e("div",{attrs:{slot:"footer"},slot:"footer"},[e("b-button",{attrs:{size:"sm",variant:"primary",disabled:t.errors.any()},on:{click:t.addClinic}},[e("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" Crear Clinica")])],1):t._e()],1),e("hr"),t._l(t.errors.all(),function(r){return e("b-alert",{key:r.id,attrs:{show:"",variant:"danger"}},[t._v(t._s(r))])})],2)],1),e("b-col",{attrs:{sm:"6"}},[e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Postular a un consultorio")])]),e("b-form-group",[e("b-input-group",[e("b-input-group-prepend",[e("b-button",{attrs:{variant:"primary"}},[e("i",{staticClass:"fa fa-search"}),t._v(" Buscar\n              ")])],1),e("b-form-input",{attrs:{type:"text",placeholder:"Ingresa Ruc o Nombre"}})],1)],1)],1)],1),e("b-modal",{staticClass:"modal-primary",attrs:{title:"Felicitaciones ¡Clinica Creada!"},model:{value:t.clinicadd,callback:function(r){t.clinicadd=r},expression:"clinicadd"}},[t.clinicnew?e("div",[e("dl",{staticClass:"row"},[e("dt",{staticClass:"col-sm-4"},[t._v("Ruc")]),e("dd",{staticClass:"col-sm-8"},[t._v(t._s(t.clinicnew.idruc))]),e("dt",{staticClass:"col-sm-4"},[t._v("Nombre")]),e("dd",{staticClass:"col-sm-8"},[t._v(t._s(t.clinicnew.name))]),e("dt",{staticClass:"col-sm-4"},[t._v("Zona de trabajo")]),e("dd",{staticClass:"col-sm-8"},[t._v(t._s(t.clinicnew.zonework))])])]):t._e()])],1)],1)},o=[],a=(e("96cf"),e("3b8d")),i=(e("f1fb"),e("c684")),c={name:"Crear",data:function(){return{ruc:"",nombre:"",zonadetrabajo:"",clinicnew:"",clinicadd:!1}},methods:{addClinic:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({idruc:this.ruc,name:this.nombre,zonework:this.zonadetrabajo});case 2:r=t.sent,this.clinicnew=r.data.data.createClinic,this.clinicadd=r;case 5:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}()}},s=c,u=(e("fbcf"),e("2877")),l=Object(u["a"])(s,n,o,!1,null,null,null);r["default"]=l.exports},fbcf:function(t,r,e){"use strict";var n=e("5893"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-3e076778.34f7fce6.js.map