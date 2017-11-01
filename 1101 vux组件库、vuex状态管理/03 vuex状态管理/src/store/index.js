import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vuex 是一个专门为 vue 应用程序开发的 状态管理模式，可以集中存储管理项目中所有组件的状态

// 创建一个 store 实例
// Vuex 使用 单一状态树，用一个 store 对象就包含了所有组件的状态
// store作为一个 唯一的数据源 而存在，每个应用也只能包含一个store实例
var store = new Vuex.Store({
    // 所有组件的状态（组件共用的数据）
    state:{
        count: 0,
        message: 'hello vuex'
    },
    // mutation  改变
    // 改变Vuex的state状态唯一方法是 提交mutation
    // mutations 是一种同步的操作
    mutations: {
        // 注册方法，在子组件中使用commit提交改变时调用这里的方法来改变state状态
        // 参数1：state状态
        // 参数2：使用commit提交改变时传递过来的数据
        addcount(state,payload){
            console.log('执行了 mutations addcount：'+payload);
            state.count += payload || 1
        }
    },
    // action 提价的是改变 mutation，不直接改变状态，是一个异步操作
    // 异步的操作写在action中
    actions:{
        // context 上下文，表示store对象
        addcount(context,param){
            console.log('执行了 action: '+param);
            // 模拟异步操作
            setTimeout(()=>{
                // 修改 state 依旧需要提交 mutation
                context.commit('addcount',param)
            },1000)
        }
    },
    // 数据的中间加工，类型过滤
    getters:{
        updateMessage(state){
            return state.message + '你好 vuex'
        }
    }
})

export default store;