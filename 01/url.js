/*
 * url 请求
 * url.parse() 可以将一个完整的url分成很多部分
 * 比如: pathname query
 */
var http = require("http");
var url = require("url");
var server = http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname; //路径请求名称
	var query = url.parse(req.url, true).query; //请求参数 设置为 true 得到对象
	console.log("pathname= " + pathname);
	console.log(query);
	res.end();
}).listen(3000, "localhost");
console.log("Run Node Server" + new Date());