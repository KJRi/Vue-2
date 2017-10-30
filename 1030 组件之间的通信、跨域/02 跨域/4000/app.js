const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/user',(req,res)=>{
    // 方式一：
    // res.set('Access-Control-Allow-Origin','*');
    // res.status(200).send('请求成功 4000');

    // 方式二：
    // 在浏览器中，只有AJAX有跨域的限制，script标签没有跨域限制，可以将需要请求的主句封装到一段代码中，将整个代码通过script标签请求到客户端，然后执行这段代码 
    // 这里是封装了add方法，响应数据的时候，直接返回 add(meesage)，返回的过程就是调用add方法的时候，同时把需要响应的数据message给到add方法
    var message = '请求成功4000';
    message = JSON.stringify({message}) //{message:'请求成功4000'}
    // console.log(req.query);//{ username: 'jxz', callback: 'add' }
    if (req.query.callback) {
        // add(message) 回调 add函数
        res.status(200).send(req.query.callback+'('+message+')');
    }else{
        res.status(200).send('请求失败')
    }

});


app.listen('4000',()=>{
    console.log('node running');
});