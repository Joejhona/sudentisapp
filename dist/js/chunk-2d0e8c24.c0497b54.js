(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"8"}},[e("b-card-group",[e("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[e("b-card-body",[e("b-form",{on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[e("h2",[t._v("Login AppSudentis3")]),e("p",{staticClass:"text-muted"},[t._v("Si ya te registraste entra con tu cuenta")]),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-user"})])],1),e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"form-control",attrs:{required:"",type:"text",name:"Usuario","data-vv-as":"Numero de COP",placeholder:"Colegiatura COP",autocomplete:"username email"},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),t._l(t.errors.collect("Usuario"),function(a){return e("b-alert",{key:a.id,attrs:{show:"",variant:"danger"}},[t._v(t._s(a))])}),e("b-input-group",{staticClass:"mb-4"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),e("b-form-input",{staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Contraseña",autocomplete:"current-password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-button",{staticClass:"px-4",attrs:{variant:"primary",type:"submit"}},[t._v("Entrar")])],1),e("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[e("b-button",{staticClass:"px-0",attrs:{variant:"link"}},[t._v("¿olvidaste tu contraseña?")])],1)],1)],2)],1)],1),e("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[e("b-card-body",{staticClass:"text-center"},[e("div",[e("h2",[t._v("Registrate")]),e("p",[t._v("Si todavia no tienes cuenta, creala con tu cuenta de Google, Facebook, Instagram o Twiter. \n                  Debes ingresar tu Colegiatura y crear una contraseña, es muy facil.")]),e("b-button",{staticClass:"active mt-3",attrs:{variant:"primary",href:"https://joejhona.pythonanywhere.com/"}},[t._v("¡Registrate Ahora!")])],1)])],1)],1)],1)],1)],1)])},r=[],n=e("d017"),o={name:"Login",data:function(){return{username:"",password:"",key:1}},methods:{login:function(){var t=this,a=this.username,e=this.password;this.$store.dispatch(n["c"],{username:a,password:e}).then(function(){t.$router.push("/control")})}}},i=o,c=e("2877"),u=Object(c["a"])(i,s,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e8c24.c0497b54.js.map