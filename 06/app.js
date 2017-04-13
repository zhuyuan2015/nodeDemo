/**
 * Describe: MD5注册登陆
 * Created by ZhuYuan on 2017-03-19 22:11
 */
var express = require("express");
var formidable = require("express");
var router = require("./controller");
var app = express();

var l = function(n){
    console.log(n);
}

app.use(express.static("./public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("form");
});

app.post("/regist",router.getRegist);

app.listen(3000);

l(new Date());
