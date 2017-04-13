var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, rese) {
	if(req.url == "/blue") {
		fs.readFile("./blue.html", function(err, data) {
			rese.writeHead(200, {
				"Content-type": "text/html;charset=utf-8;"
			});
			rese.end(data);
		});
	} else if(req.url == "/green") {
		fs.readFile("./green.html", function(err, data) {
			rese.writeHead(200, {
				"Content-type": "text/html;charset=utf-8;"
			});
			rese.end(data);
		});
	} else if(req.url == "/images/TaylorSwift.jpeg") {
		fs.readFile("./images/TaylorSwift.jpeg", function(err, data) {
			rese.writeHead(200, {
				"Content-type": "images/*;"
			});
			rese.end(data);
		});
	} else if(req.url == "/css/style.css") {
		fs.readFile("./css/style.css", function(err, data) {
			rese.writeHead(200, {
				"Content-type": "text/css;"
			});
			rese.end(data);
		});
	} else {
		fs.readFile("./index.html", function(err, data) {
			rese.writeHead(200, {
				"Content-type": "text/html;charset=utf-8;"
			});
			rese.end(data);
		});
	}
}).listen(8083, "127.0.0.1");
console.log("运行 Node 服务器 " + new Date());
