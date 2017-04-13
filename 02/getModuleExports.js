/**
 * Describe:
 * Created by ZhuYuan on 2017-02-23 23:21
 */

var moduleExports = require("./moduleExports.js");
var ps = new moduleExports({
    name : "Name",
    sex : "Sex",
    age : "Age"
});
ps.getName();
ps.getSex();
ps.getAge();
