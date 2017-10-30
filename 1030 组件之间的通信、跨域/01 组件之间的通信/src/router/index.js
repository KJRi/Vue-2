import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入组件
import Home from '../components/Home.vue'
import Friends from '../components/Friends.vue'
import Settings from '../components/Settings.vue'

var router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/friends', component: Friends },
    { path: '/settings', component: Settings }
  ]
})
export default router;
