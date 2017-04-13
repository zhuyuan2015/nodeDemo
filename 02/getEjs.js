/**
 * Describe: ejs
 * Created by ZhuYuan on 2017-03-07 23:18
 */
var fs = require("fs");
var ejs = require("ejs");
require("http").createServer(function(req,res){
    fs.readFile("./ejs.ejs", function(err,data){
        if(err){
            throw Error("no files");
        }
        var tempData = data.toString();
        var dict = {
            e : 2017,
            news :
                [
                    {
                        "title" : "title news zere",
                        "count" : "0"
                    },{
                        "title" : "title news one",
                        "count" : "1"
                    },{
                        "title" : "title news three",
                        "count" : "2"
                    }
                ]
        }
        var html = ejs.render(tempData,dict);
        res.writeHead(200,{
            "Content-type":"text/html;charset=utf-8;"
        });
        res.end(html);
    });
}).listen(3000,"127.0.0.1");
console.log(new Date());

