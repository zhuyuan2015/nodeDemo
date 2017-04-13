
var http=require("http");
var server=http.createServer(function (req,rese) {
	rese.writeHead(200,{
//		"Content-type":"text/html;charset=utf-8;"
		"Content-type":"text/plain;charset=utf-8;"
	});
	rese.end("<h1>createServer</h1>");
}).listen("3000","localhost");
