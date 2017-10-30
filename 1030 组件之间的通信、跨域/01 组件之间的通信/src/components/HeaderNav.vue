<template>
    <div id="nav">
        <header>
            <button>返回</button>
            {{atitle}}
            <button @click="change">改变</button>
        </header>
    </div>
</template>

<script>
import bus from '../bus.js'
export default {
    name:'headernav',
    // 接收父组件传递的值
    props: ['atitle'],
    methods: {
        change(){
            console.log('点击了改变');
            bus.$emit('myclick','点击改变按钮---传值')
        }
    }
}
</script>

<style scoped>
header{
    text-align: center;
    background-color: lightcoral;
    font-size: 22px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}
</style>