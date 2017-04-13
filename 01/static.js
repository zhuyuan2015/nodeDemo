/*
 * 访问页面
 */
var getUrl = require("url"),
	fs = require("fs");
require("http").createServer(function(req, res) {
	if(req.url == "favicon.ico") {
		return;
	}
	res.writeHead(200, {
		"Content-type": "text/html;charset=UTF-8;"
	});
	var pathname = getUrl.parse(req.url).pathname;
	fs.readFile("./" + pathname, function(err, data) {
		if(err) {
			fs.readFile("./static/404.html", function(err, data) {
				res.end(data);
				return;
			});
		} else {
			res.end(data);
		}
	});
}).listen(3000, "localhost");
console.log("运行 Node 服务器 " + new Date());