/**
 * Describe: formidable上传文件 修改扩展名
 * Created by ZhuYuan on 2017-03-05 19:54
 */
var http = require("http");
var formidable = require("formidable");
var util = require("util");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");
var formidableRouter = require("./formidableRouter.js");
http.createServer(function(req,res){
    if(req.url == "/formidable" && req.method.toLocaleLowerCase() == "post"){
        var form = new formidable.IncomingForm();
            form.uploadDir = "./upload";
        form.parse(req,function(err,fields,files){
            var tt = sd.format(new Date(),"YYYYMMDDHHmm");
            var random = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.file.name);
            // 修改路径
            var oldPath = __dirname + "/" + files.file.path;
            //新文件名由 时间 随机数 扩展名 组成
            var newPath = __dirname + "/upload/"+ GetFileNameNoExt(files.file.name) +"_"+ tt + "_" + random + extname;
            fs.rename(oldPath,newPath,function(err){
                if(err){
                    throw Error("修改失败");
                }
                res.writeHead(200, {
                    "content-type": "text/plain;"
                });
                res.end("Success");
            });
        });
    }else {
        formidableRouter.index({
            fs : fs,
            req : req,
            res : res
        });
    }
}).listen(3000,"192.168.1.119");
console.log("Run Node Server "+sd.format(new Date("YYYY-MM-DD HH:mm")));
//取文件名不带后缀
function GetFileNameNoExt(filepath) {
    if (filepath != "") {
        var names = filepath.split("\\");
        var pos = names[names.length - 1].lastIndexOf(".");
        return names[names.length - 1].substring(0, pos);
    }
}