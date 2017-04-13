/**
 * Created by Administrator on 2017-02-22.
 */
var http = require("http"),
    url = require("url"),
    fs = require("fs"),
    url=require("url");
http.createServer(function (req, res) {
    var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    fs.readFile("../static/index.html", function (err, data) {
        res.writeHead(200, {
            "Content-type": "text/html;charset=utf-8;"
        });
        res.end(data);
    });
}).listen(3000, "127.0.0.1");
console.log(new Date());
