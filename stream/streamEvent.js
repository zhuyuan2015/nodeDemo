/**
 * Describe: 流读取 流事件
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 15:48
 */
function l(n) {
    console.log(n);
}

var fs = require("fs");
var readStream = fs.createReadStream("./streamCopyLogo.js");
var count = 0;
readStream
    .on("data",function(chunk){
        count++;
        l(Buffer.isBuffer(chunk));
        l("data");
        //l(chunk.toString("utf-8"));
        //暂停
        readStream.pause();
        setTimeout(function(){
          l("data pause");
            //开始
            readStream.resume();
        },3000);
    })
    .on("readable",function(){
        l("readable");
    })
    .on("end",function(){
        l(count);
        l("end");
    })
    .on("close",function(){
        l("close");
    })
    .on("error",function(){
        l("error");
    });
