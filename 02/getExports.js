/**
 * Created by Administrator on 2017-02-22.
 */
/**
 * 得到 exports 暴露的类 用 require 引入
 * @type {exports|module.exports}
 */
var exports = require("./exports.js");
console.log(exports.html);
console.log(exports.js);
exports.fn();