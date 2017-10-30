<template>
    <div id="home">
        <header>{{title}}</header>
        <ul>
            <li>列表</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return {
            title:'首页'
        }
    }
}
</script>
<style>
header{
    width: 100%;
    height: 44px;
    background-color: lightcoral;
    text-align: center;
    line-height: 44px;
    position: fixed;
    top: 0;
}
</style>