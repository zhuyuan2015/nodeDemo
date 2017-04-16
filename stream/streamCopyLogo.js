/**
 * Describe:流 readFileSunc是同步的
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 15:30
 */
function l(n) {
    console.log(n);
}
var fs = require("fs");
var sourse = fs.readFileSync("../image/logo.png");
fs.writeFileSync("../image/streamCopyLogo.png",sourse);

