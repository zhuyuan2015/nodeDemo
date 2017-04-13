/**
 * Describe: express post«Î«Û
 * Created by ZhuYuan on 2017-03-09 23:45
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("form");
});
app.use(bodyParser.urlencoded({ extended : true }));
app.post("/",function(req,res){
    console.log(req.body);
    res.end(req.body.toString());
});
app.listen(3000);
console.log(new Date());