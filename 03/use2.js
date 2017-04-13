/**
 * Describe:
 * Created by ZhuYuan on 2017-03-08 20:36
 */
var express=require("express");
var fs=require("fs");
var app=express();
app.use(router);
app.get("/admin",function(req,res){
    res.end("Admin");
});
app.listen(3000);
function router(req,res,next){
    var filtPath=req.originalUrl;
    fs.readFile("../static"+filtPath,function(err,data){
        if(err){
            next();
            return;
        }
        res.end(data);
    });
}
