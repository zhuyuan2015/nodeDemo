/*
 * fs 文件模块读取测试
 * var fs = require("fs");
 * fs.readFile("./fs.txt");
 */
var fs = require("fs");
require("http").createServer(function  (req,res) {
	if (req.url == "/favicon.ico") {
		return;
	}
	var userId = parseInt(Math.random() * 89999) + 10000;
	console.log(userId +" 进入");
	res.writeHead(200, {
		"Content-type": "text/html;charset=UTF-8;"
	});
	fs.readFile("./fs.txt",function  (err,data) {
		if (err) {
			throw err;
		}else{
			console.log(userId +" 成功读取文件");
		}
		res.end(data);
	});
}).listen(3000,"127.0.0.1");
console.log("Run Node Server " + new Date());