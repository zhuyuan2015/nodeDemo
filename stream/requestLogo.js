/**
 * Describe:
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 17:10
 */
function l(n) {
    console.log(n);
}
var http = require("http");
var fs = require("fs");
var request = require("request");
http.createServer(function(req,res){
    /*fs.readFile("../image/logo.png",function(err,data){
        if(err){
            res.end("error");
            return;
        }
        res.writeHead(200,{
            "Content-type": "text/html"
        });
        res.end(data);
    });*/
    //流发送
    //fs.createReadStream("../image/logo.png").pipe(res);
    //request发送
    request("http://www.imooc.com/static/img/index/logo.png").pipe(res);
    //fs.createReadStream("../video.mp4").pipe(res);
}).listen(3000);