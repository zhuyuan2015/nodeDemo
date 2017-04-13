/**
 * Describe: use ∑√Œ æ≤Ã¨“≥√Ê
 * Created by ZhuYuan on 2017-03-08 20:53
 */

var express=require("express");
var app=express();
app.use("/static",express.static("../static"));
app.get("/get",function(req,res){
    res.end("get");
});
app.use(function(req,res){
    res.status(404).send("404aa");
});
app.listen(3000);