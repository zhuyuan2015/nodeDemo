/*
 * 把异步改为同步
 * 同步到得所有文件夹
 */
var fs = require("fs");
require("http").createServer(function(req, res) {
	if (req.url == "favicon.ico") {
		return;
	}
	res.writeHead(200, {
		"Content-type": "text/html;charset=utf-8;"
	});
	var allMkdir = [];
	fs.readdir("./fs", function(err, files) {
		(function getMkdir(i) {
			if(i == files.length) {
				console.log(allMkdir);
				return;
			}
			fs.stat("./fs/" + files[i], function(err, status) {
				if(status.isDirectory()) {
					allMkdir.push(files[i]);
				}
				getMkdir(i + 1);
			});
		})(0);
	});
	res.end("mkdir");
}).listen(3000, "localhost");
console.log("运行 Node 服务器 " + new Date());