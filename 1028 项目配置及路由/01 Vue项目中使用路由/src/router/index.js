import Vue from 'vue'
// 导入路由
import Router from 'vue-router'
// 使用路由
Vue.use(Router);

// 导入子组件
import Home from '../components/Home.vue'
import Friends from '../components/Friends.vue'
import Settings from '../components/Settings.vue'

// 新建路由对象，并配置路由信息
export default new Router({
    routes:[
        { path: '/', component: Home },
        { path: '/friends', component: Friends },
        { path: '/settings', component: Settings }
    ]
})