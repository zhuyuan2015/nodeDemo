/**
 * Describe: use ÖÐ¼ä¼þ
 * Created by ZhuYuan on 2017-03-08 20:05
 */
var express=require("express");
var app=express();
app.use("/",function(req,res,next){
    console.log(new Date());
    next();
});
app.use("/admin",function(req,res){
    res.write(req.originalUrl+"\n");
    res.write(req.baseUrl+"\n");
    res.write(req.path+"\n");
    res.end("user");
});
app.listen(3000);