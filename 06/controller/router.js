/**
 * Describe: 路由控制
 * Created by ZhuYuan on 2017-03-17 23:27
 */
var formidable = require("formidable");
var sd = require("silly-datetime");
var db = require("../models/db.js");

var l = function (n) {
    console.log(n);
}

/**
 * 注册
 * @param req
 * @param res
 */
exports.getRegist = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var date = sd.format(new Date(),"YYYY-MM-DD HH:mm:ss");
        db.insertOne({
            name: "user",
            json:{
                username: fields.username,
                password: fields.passrod,
                registDate: date
            },
            callback:function(err,result){
                if(err){
                    res.json({"result":false,"info":"注册失败"});
                }
                res.json({"result":true,"info":"注册成功"});
            }
        });
    });
}
