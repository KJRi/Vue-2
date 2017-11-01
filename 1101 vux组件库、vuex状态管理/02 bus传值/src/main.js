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

import bus from './bus'
Vue.prototype.bus = bus; //this.bus



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

// 创建vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
