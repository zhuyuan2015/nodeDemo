/**
 * Describe: 定制可读流可写流
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 19:44
 */
function l(n) {
    console.log(n);
}

var stream = require("stream");
var util = require("util");
function ReadStream(){
    stream.Readable.call(this);
}
util.inherits(ReadStream,stream.Readable);
ReadStream.prototype._read = function(){
    this.push("i");
    this.push("love");
    this.push("you");
    this.push(null);
}

function WritStream(){
    stream.Writable.call(this);
    this._cached = new Buffer("");
}

util.inherits(WritStream,stream.Writable);

WritStream.prototype._write = function(chunk,encode,callback){
    l(chunk.toString());
    callback();
}

function TransformStream(){
    stream.Transform.call(this);
}

util.inherits(TransformStream,stream.Transform);

TransformStream.prototype._transform = function(chunk,encode,callback){
    this.push(chunk);
    callback();
}

TransformStream.prototype._flush = function(callback){
    this.push("yeah");
    callback();
}
var rs = new ReadStream();
var ws = new WritStream();
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);

