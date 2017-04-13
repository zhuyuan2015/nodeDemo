/**
 * Describe:
 * Created by ZhuYuan on 2017-03-05 16:50
 */
var http=require("http");
var setRouter=require("./setRouter.js");
http.createServer(function(req,res){
    if(req.url == "/"){
        setRouter.index(req,res);
    }else if(req.url.substr(0,9) == "/student/"){
        setRouter.student(req,res);
    }else {
        setRouter.err404(req,res);
    }
}).listen(3000,"127.0.0.1");
