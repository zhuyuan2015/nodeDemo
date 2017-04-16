/**
 * Describe: 图片转base64编码
 * email: 765596409@qq.com
 * Created by ZhuYuan on 2017-04-16 15:01
 */
function l(n) {
    console.log(n);
}
var fs =require("fs");
fs.readFile("./image/user_card_top.png",function(err,data){
    //原始buffer
    fs.writeFile("./user_card_top_2.png",data,function(err){
        if(err){
            l(err);
            return;
        }
    });
    //原始转base64
    var base64Image = data.toString("base64");
    //解析base64重新写入
    var decodedImage = new Buffer(base64Image,"base64");
    fs.writeFile("./image/user_card_top_3.png",decodedImage,function(err){
        if(err){
            l(err);
            return;
        }
    });
});