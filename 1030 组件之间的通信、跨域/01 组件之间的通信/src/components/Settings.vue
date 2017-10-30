<template>
    <div id="settings">
        <header-nav :atitle="title"></header-nav>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
    name:'settings',
    components:{
        HeaderNav
    },
    data(){
        return{
            title:'设置'
        }
    }
}
</script>