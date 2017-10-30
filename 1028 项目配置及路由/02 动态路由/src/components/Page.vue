<template>
    <div id="page">
        <header>{{$route.params.title}}</header>

        <p>页面内容</p>

        <!-- <hello :tt="xx"></hello> -->
    </div>
</template>
<script>
// import Hello from './Hello'
export default {
    name:'page',
    // 使用之前，先注册组件
    // components:{
    //     Hello
    // }
}
</script>

<style scoped>
header{
    height: 44px;
    text-align: center;
    line-height: 44px;
    background-color: lightcoral;
    font-size: 22px;
}
</style>