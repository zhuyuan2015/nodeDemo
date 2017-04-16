/**
 * Describe:
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-15 18:30
 */
function l(n) {
    console.log(n);
}

var https = require("https");
var fs = require("fs");
var options = {
    key: fs.readFileSync("ssh_key.pem"),
    cert: fs.readFileSync("ssh_cert.pem")
}
https
    .createServer(options,function(req,res){
        res.writeHead(200);
        res.end("https");
    })
    .listen(3000);