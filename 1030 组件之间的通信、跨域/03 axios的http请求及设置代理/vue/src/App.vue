<template>
  <div id="app">
   <h1>hello from App</h1>
    <button @click="regClick">get请求</button>
    <button @click="loginClick">post请求</button>
    <p>{{result}}</p>
    <img :src="img">
    <i class="fa fa-address-book-o"></i>
  </div>
</template>

<script>
// npm install axios --save
// axios是一个基于ES6的Promise对象的网络请求库，用来处理AJAX请求
// import axios from 'axios';
import qs from 'qs'
export default {
  name: 'app',
  data(){
    return{
      result:'',
      params:{
        username:'jxz',
        password:'123'
      },
      img:"https://rpic.douyucdn.cn/acrpic/171030/606118_1523.jpg"
    }
  },
  methods: {
    regClick(){
      // 请求方法返回Promise对象，可以使用promise的方法
      // 在then方法的回调函数中，使用箭头函数，可以让this指向当前的vue实例
      this.$http.get('/user/reg',{
        params:this.params
      }).then(res=>{
        console.log(res.data);
        this.result = res.data
      },err=>{
        console.log(err);
      });
    },
    loginClick(){
      // axios.post('/user/login',{username:'jxz',password:'123'})
      // axios.post('/user/login','username=jxz&password=123')
      // qs 模块 在发送请求之前对数据进行处理
      console.log(qs.stringify(this.params));
      this.$http.post('/user/login',qs.stringify(this.params))
      .then(res=>{
        console.log(res.data);
        this.result = res.data
      },err=>{
        console.log(err);
      });
    }
  },
  mounted () {
    this.$http.get('/douyuapi/api/RoomApi/live').then(res=>{
      console.log(res.data);
    })
  }
}
</script>

<style>

</style>
