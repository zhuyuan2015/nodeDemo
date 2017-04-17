/**
 * Description：nkems小爬虫
 * Created by ZhuYuan on 2017/4/14
 */

function l(n) {
    console.log(n);
}

var http = require("http");
var cheerio = require("cheerio");
var url = "http://192.168.6.206:8080/nkems/login?username=test&password=1";

//for(var i=0;i<100;i++){
http.get(url,function(res){
    var html = "";
    res.on("data",function(data){
        html += data;
    });
    res.on("end",function(data){
        filtration(html);
    });
}).on("error",function(){
    l("error");
});
//}

function filtration(html){
    l(html);
}
