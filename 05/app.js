/**
 * Describe: 登陆
 * Created by ZhuYuan on 2017-03-19 15:27
 */
var express=require("express");
var db=require("./model/mongo.js");
var session=require("express-session");
var app=express();
app.set("view engine","ejs");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.get("/",function(req,res){
    //登陆过后
    if(req.session.login == 1){
        res.render("form",{
            "username":req.session.username
        });
    }else {
        res.render("form",{
            "username":""
        });
    }
});
app.get("/login",function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    //查找数据库
    db.find({
        name:"user",
        json:{
            username: username,
            password: password
        },
        callback:function(err,result){
            if(result.length > 0){
                //设置session
                req.session.login = 1;
                req.session.username = username;
                res.json(result);
            }else {
                res.send("用户名或者密码错误");
            }
        }
    });
});
app.listen(3000);
l(new Date);
function l(n){
    console.log(n);
}
