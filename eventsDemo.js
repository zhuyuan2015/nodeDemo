/**
 * Describe: 异步 I/O 操作在完成时都会发送一个事件到事件队列
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-15 0:54
 */
function l(n) {
    console.log(n);
}

// 引入 events 模块
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(15);
function one(str){
    l(str+ " 1");
}
life.on("demo",one);
life.on("demo",function(str){
    l(str+" 2");
});
life.on("demo",function(str){
    l(str+" 3");
});
life.on("demo2",function(str){
    l(str+" 4");
});
life.on("demo2",function(str){
    l(str+" 5");
});
life.removeListener("demo",one);
//life.removeAllListeners();
life.removeAllListeners("demo");
life.emit("demo","test");
life.emit("demo2","test2");
//l(life.listeners("demo").length);
/*
var has1 = life.emit("demo","test");
var has2 = life.emit("demo2","test2");
var has3 = life.emit("demo3","test3");
l(has1);
l(has2);
l(has3);*/
