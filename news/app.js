// ejs模版加载数据

1var express = require("express");
var app = express();
var fs = require("fs");

app.set("view engine", "ejs");
app.get("/:news/:id", function (req, res) {
    var id = parseInt(req.params.id);
    fs.readFile("./news.json",function(req,data){
        var content = JSON.parse(data)[id];
        if(content != undefined){
            res.render("content",JSON.parse(data)[id]);
        }else{
            res.writeHead(200,{"Content-Type":"text/plain;charset=UTF8"});
            res.end("查询出错");
        }
    });
});
app.listen(3000);

console.log(new Date());