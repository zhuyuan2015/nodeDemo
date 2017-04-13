/**
 * Describe: post接收
 * Created by ZhuYuan on 2017-03-05 17:38
 */
var http = require("http");
var querystring = require("querystring");
http.createServer(function(req,res){
    var allData = "";
    if(req.url == "/doPost" && req.method.toLocaleLowerCase() == "post"){
        req.addListener("data",function(chunk){
            allData += chunk;
        });
        req.addListener("end",function(){
            var dataString = allData.toString();
            var dataObj = querystring.parse(dataString);
            console.log(dataObj);
            res.end("Success");
        });
    }
}).listen(3000,"127.0.0.1");