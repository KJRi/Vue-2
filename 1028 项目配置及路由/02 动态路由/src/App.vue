<template>
  <div id="app">
    <ul>
      <li v-for="item in items">
        <router-link :to="/page/+item">{{item}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      items:['首页','好友','设置']
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
}
li{
  width: 33.33%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
li:hover{
  background-color: #ccc;
}
a{
  display: block;
}
</style>
