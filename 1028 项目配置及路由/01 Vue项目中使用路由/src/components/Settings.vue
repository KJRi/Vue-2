<template>
<div id="settings">
    <header>{{title}}</header>
</div>
</template>

<script>
export default {
    name:'settings',
    data(){
        return {
            title:'设置'
        }
    }
}
</script>

<style scoped>
header{
    background-color: lightgreen;
}
</style>