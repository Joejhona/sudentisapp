(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c6bd0c2"],{"11e9":function(e,t,r){var a=r("52a7"),n=r("4630"),s=r("6821"),i=r("6a99"),o=r("69a8"),u=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=s(e),t=i(t,!0),u)try{return l(e,t)}catch(r){}if(o(e,t))return n(!a.f.call(e,t),e[t])}},"1af6":function(e,t,r){var a=r("63b6");a(a.S,"Array",{isArray:r("9003")})},"2dc9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"animated fadeIn"},[r("b-row",[r("b-col",{attrs:{lg:"6"}},[r("c-table",{attrs:{"table-data":e.items,fields:e.fields,caption:"<i class='fa fa-align-justify'></i> Simple Table"}})],1),r("b-col",{attrs:{lg:"6"}},[r("c-table",{attrs:{"table-data":e.items,striped:"",caption:"<i class='fa fa-align-justify'></i> Striped Table"}})],1)],1),r("b-row",[r("b-col",{attrs:{lg:"6"}},[r("c-table",{attrs:{"table-data":e.items,small:"",caption:"<i class='fa fa-align-justify'></i> Condensed Table"}})],1),r("b-col",{attrs:{lg:"6"}},[r("c-table",{attrs:{"table-data":e.items,fixed:"",bordered:"",caption:"<i class='fa fa-align-justify'></i> Bordered Table"}})],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("c-table",{attrs:{"table-data":e.itemsArray,"per-page":10,hover:"",striped:"",bordered:"",small:"",fixed:"",caption:"<i class='fa fa-align-justify'></i> Combined All Table"}})],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("c-table",{attrs:{dark:"","table-data":e.itemsArray,"per-page":10,hover:"",striped:"",bordered:"",small:"",fixed:"",caption:"<i class='fa fa-align-justify'></i> Dark Table"}})],1)],1)],1)},n=[],s=r("8992"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{header:e.caption}},[r("b-table",{attrs:{dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.captions,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"status",fn:function(t){return[r("b-badge",{attrs:{variant:e.getBadge(t.item.status)}},[e._v(e._s(t.item.status))])]}}])}),r("nav",[r("b-pagination",{attrs:{"total-rows":e.totalRows,"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},o=[],u=r("a745"),l=r.n(u),c=(r("c5f6"),{name:"c-table",inheritAttrs:!1,props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},tableData:{type:[Array,Function],default:function(){return[]}},fields:{type:[Array,Object],default:function(){return[]}},perPage:{type:Number,default:5},dark:{type:Boolean,default:!1}},data:function(){return{currentPage:1}},computed:{items:function(){var e=this.tableData;return l()(e)?e:e()},totalRows:function(){return this.getRowCount()},captions:function(){return this.fields}},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(){return this.items.length}}}),d=c,f=r("2877"),p=Object(f["a"])(d,i,o,!1,null,null,null),b=p.exports,m=function(){return Object(s["b"])([{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active",_rowVariant:"success"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned",_rowVariant:"danger"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive",_rowVariant:"info"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}])},g={name:"tables",components:{cTable:b},data:function(){return{items:m,itemsArray:m(),fields:[{key:"username",label:"User",sortable:!0},{key:"registered"},{key:"role"},{key:"status",sortable:!0}]}}},v=g,y=Object(f["a"])(v,a,n,!1,null,null,null);t["default"]=y.exports},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var s,i=t.constructor;return i!==r&&"function"==typeof i&&(s=i.prototype)!==r.prototype&&a(s)&&n&&n(e,s),e}},8992:function(e,t,r){"use strict";function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n});var n=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a}return e}},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),s=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return s(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:s}},9003:function(e,t,r){var a=r("6b4c");e.exports=Array.isArray||function(e){return"Array"==a(e)}},9093:function(e,t,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},a745:function(e,t,r){e.exports=r("f410")},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),s=r("2d95"),i=r("5dbc"),o=r("6a99"),u=r("79e5"),l=r("9093").f,c=r("11e9").f,d=r("86cc").f,f=r("aa77").trim,p="Number",b=a[p],m=b,g=b.prototype,v=s(r("2aeb")(g))==p,y="trim"in String.prototype,h=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():f(t,3);var r,a,n,s=t.charCodeAt(0);if(43===s||45===s){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var i,u=t.slice(2),l=0,c=u.length;l<c;l++)if(i=u.charCodeAt(l),i<48||i>n)return NaN;return parseInt(u,a)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof b&&(v?u(function(){g.valueOf.call(r)}):s(r)!=p)?i(new m(h(t)),r,b):h(t)};for(var A,_=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)n(m,A=_[w])&&!n(b,A)&&d(b,A,c(m,A));b.prototype=g,g.constructor=b,r("2aba")(a,p,b)}},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-3c6bd0c2.c58d4991.js.map