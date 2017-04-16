/**
 * Describe:流函数pipe复制视频
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 17:42
 */
function l(n) {
    console.log(n);
}
var fs = require("fs");
fs.createReadStream("../video.mp4").pipe(fs.createWriteStream("../videoCopy.mp4"))