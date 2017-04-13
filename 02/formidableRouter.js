/**
 * Describe: formidable.js引入, 进入首页
 * Created by ZhuYuan on 2017-03-05 19:54
 */
exports.index = index;
function index(obj){
    obj.fs.readFile("./formidable.html",function(err,data){
        if(err){
            throw Error("No Files");
        }
        obj.res.writeHead(200, {
            "content-type": "text/html;charset=utf-8;"
        });
        obj.res.end(data);
    });
}