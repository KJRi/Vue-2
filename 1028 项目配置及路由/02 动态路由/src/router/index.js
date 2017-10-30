import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Page from '../components/Page.vue'

export default new Router({
  routes: [
    // 动态路由
    { path: '/page/:title', component: Page }
  ]
})
