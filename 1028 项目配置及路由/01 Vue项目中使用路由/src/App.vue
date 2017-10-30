<!-- 
  单文件组件
  Vue自定义了一种.vue文件，把html、css、js写到一个文件中，实现了对一个组件的封装，一个 .vue文件就是一个组件；
  由于 .vue 文件是自定义的，浏览器不认识，所以我们需要对改文件进行解析，webpack中已经使用vue-loader解析了文件，那么我们直接使用即可
-->
<!-- 
  template 是组件的模板，用来写html内容
 -->
<template>
  <div id="app">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/friends">好友</router-link></li>
      <li><router-link to="/settings">设置</router-link></li>
    </ul>
    <router-view></router-view>
    
    <h1>hello from App</h1>
    <p>{{message}}</p>
  </div>
</template>

<!-- script 中写js代码，用来定义组件所需要的数据及操作 -->
<script>
  // 在 .vue 文件中，export default 后面的对象就像当于 new Vue({}) 构造函数中传入的对象，它们都是定义组件所需要的数据，以及操作数据的方法等，在这个对象中可写data、methods、computed等属性
  // 注意：data属性必须是一个函数，函数中的return返回一个对象，这个对象中添加当前组件的数据
export default {
  // 给组件起名字
  name: 'app',
  data(){
    return {
      message: 'hello vue message'
    }
  }
}
</script>

<!-- style 中写样式，定义组件的样式 -->
<!-- scoped 指定当前样式表的作用范围/作用域，加上该属性只用于当前组件 -->
<style scoped>
p{
  color: red;
}
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
