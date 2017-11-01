// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
Vue.use(VueRouter)
// 默认在点击和 click事件触发之间有300ms的延迟
// fastclick 可以避免移动端浏览器点击延迟
import FastClick from 'fastclick'
// 设置作用范围
FastClick.attach(document.body)

import {Actionsheet,AlertPlugin} from 'vux'
// 插件 使用弹窗
Vue.use(AlertPlugin)
// 注册为全局组件
Vue.component('Actionsheet',Actionsheet)





import Wechat from './components/Wechat.vue'
import Message from './components/Message.vue'
import Explore from './components/Explore.vue'
import News from './components/News.vue'
import Second from './components/Second.vue'
const routes = [   
  { path: '/wechat', component: Wechat },
  { path: '/message', component: Message },
  { path: '/explore', component: Explore },
  { path: '/news', component: News },
  // 二级界面
  { path: '/wechat/second', component: Second }
]

const router = new VueRouter({
  routes
})
router.push('/wechat')

// 导入 store 实例
// Vuex 通过store 实例，提供了一种机制，将状态从根组件 注入 每一个组件中
import store from './store/index'

// 创建vue 实例
new Vue({
  // 这样 把store中的状态注入所有的子组件
  // 在子组件中通过 this.$store 访问该对象
  // 访问state状态时：this.$store.state.count
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
