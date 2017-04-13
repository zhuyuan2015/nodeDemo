/**
 * describe:
 * created by zhuyuan on 2017-03-05 16:51
 */
exports.index=index;
exports.student=student;
exports.err404=err404;
function index(req,res){
    head(res);
    res.end("<h1>index</h1>");
}
function student(req,res){
    head(res);
    res.end("<h1>sdudent</h1>");
}
function err404(req,res){
    head(res);
    res.end("<h1>404</h1>");
}
function head(res){
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8;"
    });
}



