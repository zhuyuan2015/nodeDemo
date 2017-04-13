/**
 * Describe: http小爬虫 爬幕课网的某个学习课程的章节信息
 * Created by ZhuYuan on 2017-04-11 00:01
 */

function l(n){
    console.log(n);
}

var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.imooc.com/learn/348";

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

function filtration(html){
    var $ = cheerio.load(html);
    var chapters = $(".chapter");
    var curseData = [];
    chapters.each(function(item){
        var _this = $(this);
        var chapterTitle = _this.find("strong").text();
        var  videos = _this.find(".video").children("li");
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function(item){
            var video = $(this).find(".J-media-item");
            var videoTitle = video.text();
            var id = video.attr("href").split("video/")[1];
            chapterData.videos.push({
                title: videoTitle,
                id: id
            });
        });
        curseData.push(chapterData);
    });
    curseData.forEach(function(item){
        l(item);
    });
}