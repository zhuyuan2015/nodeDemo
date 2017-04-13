/**
 * mongoDB 增删改查测试
 * Created by nows on 2017/3/14.
 */

var express = require("express");
var app = express();
var db = require("./model");

function l(n){
    console.log(n);
}

//增加
app.get("/",function(req,res){
    db.insertOne({
        name:"student",
        json:{
            "id" : (parseInt(Math.random() * 89999999) + 10000000),
            "name" : "ZhuYuan",
            "age" : 22,
        },
        callback:function(err,result){
            if(err){
                res.end(err);
            }
            res.json(result);
        }
    });
});

//删除
app.get("/delete",function(req,res){
    db.deleteMany({
        name: "student",
        json: {
            id : 463575
        },
        callback:function(err,result){
            if(err){
                res.end(err);
            }
            res.json(result);
        }
    });
});

//修改
app.get("/update",function(req,res){
    db.updateOne({
        name:"student",

        oldData:{
            name:"小强"
        },
        newData:{
            $set : {
                name : "修改为: 小强"
            }
        },
        callback:function(err,result){
            if(err){
                res.end(err);
            }
            res.json(result);
        }
    });
});

//查找
app.get("/find",function(req,res){
    var page = req.query.page;
    var getPage = page == undefined ? 0 : parseInt(page);
    var result = [];
    db.find({
        name:"student",
        json:{},
        pageAmount:10, //每页的数量
        page:getPage, //从每几页开始查找
        callback:function(err,result){
            // 不设置页数和数量默认查找所有,在数组如果中筛选,这是错误的查找
            /*for(var i = 10 * page; i < 10 * (page + 1); i++){
             l(i);
             result.push(docs[i]);
             }
             res.json(result);*/
            if(err){
                res.end(err);
            }
            res.json(result);
        }
    });
});

app.listen(3000);
l(new Date());