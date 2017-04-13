/**
 * readdir 得到所有文件
 */
var fs = require("fs");
require("http").createServer(function(req, res) {
	if(req.url == "/favicon.ico") {
		return;
	}
	res.writeHead(200, {
		"Content-type": "text/html;charset=utf-8;"
	});
	var mkdir = []; // 保存文件夹
	fs.readdir("./fs", function(err, files) {
		for(var i = 0; i < files.length; i++) {
			var filesName = files[i]; // 所有文件名
			fs.stat("./fs/" + filesName, function(err, stats) {
				if(stats.isDirectory()) { // 判断是否为夹
					mkdir.push(filesName);
				}
				console.log(mkdir);
			});
		}
	});
	res.end("readdir");
}).listen(3000, "127.0.0.1");
console.log("运行 Node 服务器 " + new Date());