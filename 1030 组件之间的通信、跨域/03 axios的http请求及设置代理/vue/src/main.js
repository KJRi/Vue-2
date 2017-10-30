import Vue from 'vue'
import App from './App'

import axios from 'axios';
// 对于网络请求工具，每个页面都要用，把axios添加到Vue对象的原型中，以后在使用的时候就可以直接使用： this.$http.get()
Vue.prototype.$http = axios;

import './assets/font-awesome-4.7.0/css/font-awesome.css'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
