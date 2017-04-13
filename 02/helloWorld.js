/**
 * Created by Administrator on 2017-02-21.
 */
require("http").createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/html;charset=utf-8;"
    });
    res.end("hello");
}).listen(3000,"127.0.0.1");
