<!-- wechat -->
<template>
    <div class="wechat">
        <header>Wechat</header>
        <p>
            <router-link to="/wechat/second"><button>进入second界面</button></router-link>
        </p>
        <p>
            localCount:{{localCount}}
        </p>
        <button @click="add">add</button>
    </div>
</template>

<script>
export default {
    name:'wechat',
    data(){
        return{
            localCount: this.bus.count
        }
    },
    methods: {
        add(){
            this.bus.count ++; //改变 bus的值
            this.localCount ++
        }
    }


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