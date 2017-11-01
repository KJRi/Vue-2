<template>
    <div class="second">
        <header>Second</header>
        <!-- 返回上一级界面 -->
        <button @click="back">返回wechat界面</button>
        <button @click="$router.back()">返回上一页</button>

        <!-- 从新加载wechat -->
        <router-link to="/wechat">返回wechat</router-link>
    </div>
</template>

<script>
export default {
    name:'second',
    methods: {
        back(){
            window.history.back();
        }
    }
}
</script>

<style>
.second{
    width: 100vw;
    height: 100vh;
    background-color: red;
}
</style>