/**
 * Describe:
 * Created by ZhuYuan on 2017-03-08 21:37
 */
var express=require("express");
var app=express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("useEjs",{
        e: 2017
    });
});
app.listen(3000);