// 导入vue.js模块
import Vue from 'vue'

// 导入App.vue
import App from './App'
// 导入路由对象
import router from './router'


// 创建一个根组件
new Vue({
  el: '#app',
  router,
  // 使用子组件App
  template: '<App/>',
  // 注册App组件
  components: { App }
})
