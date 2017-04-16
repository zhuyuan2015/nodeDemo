/**
 * Describe:
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-15 1:45
 */
function l(n) {
    console.log(n);
}

var http = require("http");
var querystring = require("querystring");
var postData = querystring.stringify({
    content:"123456",
    mid:"8837"
});
var options = {
    hostname: "www.imooc.com",
    post: 80,
    path: "/course/docomment",
    method: "POST",
    headers: {
        "Accept":"application/json, text/javascript, */*; q=0.01",
		"Accept-Encoding":"gzip, deflate",
		"Accept-Language":"zh-CN,zh;q=0.8",
		"Connection":"keep-alive",
		"Content-Length":"6",
		"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"imooc_uuid=b09db9b9-143f-4199-8ee6-86824984cba3; imooc_isnew=1; imooc_isnew_ct=1492192348; loginstate=1; apsid=FiNzBiYzhiN2VmNDU0YTliOTdmNDZhNzI1MjEyOTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjcyMTE1MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3NjU1OTY0MDlAcXEuY29tAAAAAAAAAAAAAAAAAAAAADIwODk4ZTU5ZjM4NzY3ZjAyMzE5MzYzNTJkYTI4YmMzZAzxWGQM8Vg%3DN2; last_login_username=765596409%40qq.com; PHPSESSID=4avah6ntgg24ltsgkd9jtk1cj3; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1492192291,1492235132; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1492235132; cvde=58f1b3b635d93-6",
		"Host":"www.imooc.com",
		"Origin":"http://www.imooc.com",
		"Referer":"http://www.imooc.com/video/8837",
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
		"X-Requested-With":"XMLHttpRequest"
    }
}

var req = http.request(options,function(res){
    l("Status: "+ res.statusCode);
    l("Headers: "+ JSON.stringify(res.headers));
    res.on("data",function(chunk){
        l(Buffer.isBuffer(chunk));
        l(typeof chunk);
    });
    res.on("end",function(){
        l("写入成功");
    });
    res.on("error",function(e){
        l("Error: "+e);
    });
});
req.write(postData);
req.end();