<template>
    <div id="friends">
        <header-nav :atitle="title"></header-nav>

        <button @click="change">改变 传值</button>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav'
import bus from '../bus.js'
export default {
    name:'friends',
    components:{
        HeaderNav
    },
    data(){
        return{
            title:'好友'
        }
    },
    methods: {
        change(){
            console.log('friends click change');
            bus.$emit('fclick','点击好友页面-传值');
        }
    },
    created () {
        console.log('friends created');
    },
    destroyed () {
        console.log('friends destroyed');
    }
}
</script>