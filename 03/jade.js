/**
 * Describe:
 * Created by ZhuYuan on 2017-03-10 0:13
 */
var express=require("express");
var app=express();
app.engine("jade",require("jade").__express);
app.set("view engine","jade");
app.get("/",function(req,res){
    console.log(req.ip);
    res.render("jade");
});
app.listen(3000);