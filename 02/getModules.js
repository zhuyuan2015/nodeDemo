/**
 * Describe:
 * Created by ZhuYuan on 2017-02-27 23:51
 */
var getModules = require("modules.js");
console.log(getModules.msg);

var date=require("silly-datetime");
var formatDate = date.format(new Date(),"YYYY-MM-DD HH:mm:ss");
console.log(formatDate);