<template>
    <div id="home">
        <!-- 向子组件传值 -->
        <header-nav :atitle="title"></header-nav>
        <p>{{message}}</p>
    </div>
</template>

<script>
// 导入子组件
import HeaderNav from './HeaderNav'
import bus from '../bus.js'
export default {
    name:'home',
    // 注册子组件，注册之后才能使用
    components:{
        HeaderNav
    },
    data(){
        return{
            title:'首页',
            message:''
        }
    },
    created () {
        console.log('home created');  
    },
    destroyed () {
        console.log('home destroyed');
    },
    mounted () {
        console.log('监听 myclick');
        // 先有监听
        // bus.$on('myclick',function(value){
        //     console.log('home 接收到：'+value);
        //     this.message = value;
        // }.bind(this));
        // 在箭头函数中this指的还是当前组件的实例
        bus.$on('myclick',value=>{
            console.log(this);
            console.log(value);
            this.message = value;
        });
        // bus.$on('fclick',value=>{
        //     console.log('home fclick');
        //     console.log(value);
        //     this.message = value;
        // })
    }
}
</script>

<style scoped>

</style>