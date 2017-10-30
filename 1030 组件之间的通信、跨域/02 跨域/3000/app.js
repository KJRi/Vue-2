const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/user',(req,res)=>{
    res.status(200).send('请求成功 3000');
});


app.listen('3000',()=>{
    console.log('node running');
});