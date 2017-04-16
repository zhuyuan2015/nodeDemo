/**
 * Describe: http爬虫 爬幕课网的学习课程的信息
 * Created by ZhuYuan on 2017-04-16 00:11
 */

function l(n){
    console.log(n);
}

var http = require("http");
var Promise = require("Promise");
var cheerio = require("cheerio");
var querystring = require("querystring");
var baseUrl = "http://www.imooc.com/learn";
var videoId = [259,197,348,134,75];
var list = [];
var url = [];
var fetchCourseArray = [];

videoId.forEach(function(id){
    var getUrl = baseUrl+"/"+id;
    fetchCourseArray.push(getPageAsync(getUrl));
    url.push(getUrl);
});

setInterval(function(){
    getData();
},2000);


function getData(){
    Promise
        .all(fetchCourseArray)
        .then(function(pages){
            (function itertiro(i){
                if(i == videoId.length){
                    return;
                }
                getStudyNumber(videoId[i],function(studyNumber){
                    var $ = cheerio.load(pages[i]);
                    var title = $("#main h2").text();
                    list.push({
                        videoId:videoId[i],
                        studyNumber:studyNumber,
                        title:title,
                        url:url[i]
                    });
                    if(list.length == videoId.length){
                        list.sort(function(x,y){
                            return x.studyNumber < y.studyNumber;
                        });
                        l(list);
                        list = [];
                    }
                });
                itertiro(i + 1);
            })(0);
        });
}

function getPageAsync(url,id){
    return new Promise(function(resolve,reject){
        l("正在爬取 " + url);
        http.get(url,function(res){
            var html = "";
            res.on("data",function(data){
                html += data;
            });
            res.on("end",function(data){
                resolve(html);
            });
        }).on("error",function(e){
            reject(e);
            l("error");
        });
    });
}

function getStudyNumber(id,callback){
    var studyNumber = 0;
    var options = {
        hostname: "www.imooc.com",
        post: 80,
        path: "/course/AjaxCourseMembers?ids=+"+id,
        method: "GET",
        headers: {
            "Accept":"application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.8",
            "Connection":"keep-alive",
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie":"imooc_uuid=b09db9b9-143f-4199-8ee6-86824984cba3; imooc_isnew=1; imooc_isnew_ct=1492192348; last_login_username=765596409%40qq.com; PHPSESSID=8tqtd5bo097q44dbf2k4qrm7c5; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1492192291,1492235132,1492271888,1492271927; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1492271930; IMCDNS=0; cvde=58f24370bd245-5",
            "Host":"www.imooc.com",
            "Origin":"http://www.imooc.com",
            "Referer":"http://www.imooc.com/learn/"+id,
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
            "X-Requested-With":"XMLHttpRequest"
        }
    }
    var req = http.request(options,function(res){
        //l("Status: "+ res.statusCode);
        //l("Headers: "+ JSON.stringify(res.headers));
        res.on("data",function(chunk){
            studyNumber = JSON.parse(chunk).data[0].numbers;
        });
        res.on("end",function(){
            callback(studyNumber);
            l("OK");
        });
        res.on("error",function(e){
            l("Error: "+e);
        });
    });
    req.end();
}

