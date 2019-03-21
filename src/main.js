// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store'
//import Axios from 'axios'
import VeeValidate from 'vee-validate';
import { apitoken } from '@/services/api'


Vue.use(BootstrapVue)
Vue.use(VeeValidate,{fieldsBagName: 'formFields'})

//Vue.prototype.$http = Axios;

const token = localStorage.getItem('user-token')

if (token) {
  apitoken.defaults.headers.common['Authorization'] = `JWT ${token}`
  //Vue.prototype.$http.defaults.headers.common['Authorization'] = `JWT ${token}`
  //let joelito = `Joel JWT ${token}`
  //console.log(joelito)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
