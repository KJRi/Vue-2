<template>
  <div id="app">
    <nav>
      <!-- 必要的key值 -->
      <router-link v-for="item in items" :to="item.topath" :key="item.title">
        {{item.title}}
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      items:[
        {title:'首页',topath:'/'},
        {title:'好友',topath:'/friends'},
        {title:'设置',topath:'/settings'}
      ]
    }
  }
}
</script>

<style scoped>
nav{
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a{
  flex-grow: 1;
  text-align: center;
  line-height: 44px;
}
a:hover{
  background-color: #ccc;
} 
</style>
