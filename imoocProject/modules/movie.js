/**
 * Author: ZhuYuan
 * Email: 765596409@qq.com
 * Created time: 2017-04-17
 * Description：
 */

function l(n) {
    console.log(n);
}

var mogoose = require("mongoose");
var movieSchema = require("./schema/movieSchema.js");
var Movie = mogoose.model("Movie",movieSchema);
module.exports = Movie;