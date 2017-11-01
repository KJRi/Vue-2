<!-- wechat -->
<template>
    <div class="wechat">
        <header>Wechat</header>
        <p>
            <router-link to="/wechat/second"><button>进入second界面</button></router-link>
        </p>
        <button @click="add">add count</button>
        <p>
            count:{{count}}
        </p>
        <p>
            message:{{message}}
        </p>
        <p>
            <!-- localCC：{{localCC}} -->
        </p>
        <p>
            mm:{{mm}}
        </p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'wechat',
    data(){return{ localCount: 10 }},
    // 4. 使用对象展开运算符
    computed:{
        ...mapState({

            count:state => state.count,
            message:'message', // 相当于： state => state.message
            // 使用 this 来获取子组件自己的数据，只用一个常规函数
            localCC(state){
                return state.count + this.localCount
            }
        }),
        localComputed(){ 
            return this.localCount +100;
         },
        mm(){
            return this.$store.getters.updateMessage;
        }
    },
    // 3.当映射计算属性的名称 与 state中的属性同名时，可以给mapState传入一个字符串数组
    // 这样写就会从state状态中找同名的属性 count message
    // computed:mapState(['count','message']),
    // 2. mapState
    // computed:mapState({
        // count:state => state.count,
        // message:'message', // 相当于： state => state.message
        // // 使用 this 来获取子组件自己的数据，只用一个常规函数
        // localCC(state){
        //     return state.count + this.localCount
        // }
    // }),
    // 1.
    // computed: {
    //     count(){
    //         // 获取 状态中 count的值
    //         return this.$store.state.count
    //     }
    // },
    // 获取state状态时，只能作为组件的计算属性存在
    
    methods: {
        // 点击按钮 改变状态
        add(){
            // 当需要改变state中的状态树时，不要使用下面的方法
            // this.$store.state.count ++;

            // 当组件中需要改变Vuex中state状态，唯一方法是 提交 mutation
            // 使用commit 来提交改变
            // 参数1：mutations 中注册的方法的名字
            // 参数2：可选参数，传递的一些数据
            // this.$store.commit('addcount',2)

            // 执性dispatch 触发action中异步任务，触发action中的 addcount方法
            this.$store.dispatch('addcount',3);
        }
    }


    
}
</script>