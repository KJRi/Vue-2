<!-- wechat -->
<template>
    <div class="wechat">
        <header>Wechat</header>
        <p>
            <router-link to="/wechat/second"><button>进入second界面</button></router-link>
        </p>
    </div>
</template>

<script>
export default {
    name:'wechat',
    // created () {
    //     console.log('wechat created');
    // },
    // destroyed () {
    //     console.log('wechat destroyed');
    // }
}
</script>

<style>
header{
    /* width: 100%;
    height: 64px;
    line-height: 80px;
    text-align: center;
    font-size: 26px;
    background-color: lightblue; */
    /* position: fixed;
    top: 0;
    left: 0;
    z-index: 999; */
}

</style>