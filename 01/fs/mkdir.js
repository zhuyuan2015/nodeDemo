/**
 * mkdir 创建文件夹
 */
var fs = require("fs");
require("http").createServer(function(req, res) {
	if(req.url == "/favicon.ico") {
		return;
	}
	res.writeHead(200, {
		"Content-type": "text/html;charset=utf-8;"
	});
	// 异步创建目录 不然会抛异常
	fs.mkdir("./fs", 0777, function(err) {
		if(err) {
			// console.log(err);
		} else {
			console.log("fs 创建成功");
		}
		fs.mkdir("./fs/mkdir", 0777, function(err) {
			if(err) {
				// console.log(err);
			} else {
				console.log("mkdir 创建成功");
			}
		});
		// 判断是否为文件夹
		fs.stat("./fs/mkdir", function(err, data) {
			console.log(data.isDirectory());
		});
		// 列出文件夹所有内容 返回数组
		fs.readdir("./fs", function(err, files) {
			console.log(files);
		});
	});
	res.end("mkdir");
}).listen(3000, "127.0.0.1");
console.log("运行 Node 服务器 " + new Date());