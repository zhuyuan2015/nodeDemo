/**
 * Describe: express 中间件 处理相同的地址请求
 * Created by ZhuYuan on 2017-03-08 19:12
 */
var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.end("express");
});
app.get("/:user/:id",function(req,res,next){
    var user=req.params.user;
    var id=req.params.id;
    if(user == 1 && id == 2){
        res.end(user+" "+id);
    }else {
        next();
    }

});
app.get("/admin/pass",function(req,res){
    res.end(req.url);
});
app.listen(3000);
console.log(new Date());
