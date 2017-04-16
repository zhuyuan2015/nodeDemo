/**
 * Describe:流复制大文件
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 16:14
 */
function l(n) {
    console.log(n);
}
var fs = require("fs");
var readStream = fs.createReadStream("../video.mp4");
var writeStream = fs.createWriteStream("../videoCopy.mp4");

readStream.on("data",function(chunk){
    if(writeStream.write(chunk) == false){
        l("still cached");
        readStream.pause();
    }
});

readStream.on("end",function(){
    writeStream.end();
});

writeStream.on("drain",function(){
    l("data drain");
    readStream.resume();
});

