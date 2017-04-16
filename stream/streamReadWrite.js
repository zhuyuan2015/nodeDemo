/**
 * Describe: 流加载过程
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 17:49
 */
function l(n) {
    console.log(n);
}
var Readable = require("stream").Readable;
var Writable = require("stream").Writable;
var readStream = new Readable();
var writeStream = new Writable();
readStream.push("i")
readStream.push("love");
readStream.push("you");
readStream.push(null);
writeStream._write = function(chunk,encode,callback){
    l(chunk.toString());
    callback();
}
readStream.pipe(writeStream);
