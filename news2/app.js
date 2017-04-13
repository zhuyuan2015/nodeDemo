// html模版加载数据

var express = require("express");
var app = express();
var fs = require("fs");
var article = [
    {
        "title": "title 1",
        "time": "title 1",
        "author": "author 1",
        "article": "article 1"
    },
    {
        "title": "title 2",
        "time": "title 2",
        "author": "<p>\"author 2\"</p>",
        "article": "article 2"
    },
    {
        "title": "title 3",
        "time": "title 3",
        "author": "author 3",
        "article": "article 3"
    }
];

app.use(express.static("./public"));
app.get("/news", function (req, res) {
    res.json(article);
});
app.listen(3000);

console.log(new Date());

// 把json中的双引号转义
//for(var i=0;i<article.length;i++){
//    for(var j in article[i]){
//        console.log(article[i][j].replace(/\"/g,"\\\""));
//    }
//}