var http = require("http"),
	getUrl = require("url");
http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-type": "text/html;charet=utf-8;"
	});
	var query = getUrl.parse(req.url, true).query;
	console.log(query.name);
	console.log(query.name);
	console.log(query.age);
	res.end("success");
}).listen(3000, "127.0.0.1");
console.log("Run Node Server " + new Date());