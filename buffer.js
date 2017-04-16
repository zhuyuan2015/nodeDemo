/**
 * Describe:编码之间的转换
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 14:18
 */
function l(n) {
    console.log(n);
}

var buf = new Buffer("Hello world");
l(buf.toString());

var buf2 = new Buffer("hello world");
var buf3 = new Buffer(5);
//buf2.copy(buf3);
//l(buf3.toString()); //hello
buf2.copy(buf3,0,6,11);
l(buf3.toString()); //world

var buf4 = new Buffer("hello");
var str = buf4.toString("base64");
l(str);
var buf5 = new Buffer("aGVsbG8=","base64");
var str2 = buf5.toString();
var str3 = buf5.toString("hex");
l(str2);
l(str3);

var buf6 = new Buffer("68656c6c6f","hex");
var str4 = buf6.toString("utf-8");
l(str4);