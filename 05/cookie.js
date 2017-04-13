/**
 * Describe: 第一次访问没有cookie 第二次才有 发送记录的数据
 * Created by ZhuYuan on 2017-03-18 19:37
 */
var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();

app.use(cookieParser());

app.get("/",function(req,res){
    res.send("猜你喜欢: "+ req.cookies.like);
});

app.get("/search",function(req,res){
    //得到查询
    var like = req.query.like;
    //记录喜好,然后把新的数据添加进去
    var getLike = req.cookies.like || [];
    getLike.push(like);
    res.cookie("like",getLike,{
        maxAge: 99999999,
        httpOhly: true
    });
    res.send(like + " Get like");
});

app.listen(3000);

l(new Date);

function l(n){
    console.log(n);
}