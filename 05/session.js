/**
 * Describe: session 用于登陆
 * Created by ZhuYuan on 2017-03-19 15:09
 */
var express=require("express");
var session=require("express-session");
var app=express();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.get("/",function(req,res){
    if(req.session.login == 1){
        res.send("用户名: "+req.session.userName);
    }else{
        res.send("你没有登陆");
    }
});
app.get("/login",function(req,res){
    req.session.login = 1;
    req.session.userName = "Super";
    res.send("成功登陆");
});
app.listen(3000);
