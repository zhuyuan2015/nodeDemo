/*
 * router.html url查询 
 * 用正则截取判断去查询
 */
require("http").createServer(function(req, res) {
	res.writeHead(200, {
		"Content-type": "text/html;charset=UTF-8;"
	});
	var url = req.url;
	if(url.substr(0, 9) == "/student/") {
		var studentId = url.substr(9);
		console.log(studentId);
		if(/^\d{2}$/.test(studentId)) {
			res.end("查询学生ID " + studentId);
		} else {
			res.end("没有ID为 " + studentId + " 的学生");
		}
	} else if(url.substr(0, 9) == "/teacher/") {
		var teacherId = url.substr(9);
		if(/^\d{3}$/.test(teacherId)) {
			res.end("查询老师ID " + teacherId);
		} else {
			res.end("没有ID为 " + teacherId + " 的老师");
		}
	} else {
		res.end("没有查询信息");
	}
	console.log("req= " + url);
}).listen(3000, "127.0.0.1");
console.log("Run Node Server " + new Date());