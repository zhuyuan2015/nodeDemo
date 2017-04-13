/**
 * Describe:
 * Created by ZhuYuan on 2017-02-23 23:21
 */
function Person(obj) {
    this.name = obj.name;
    this.sex = obj.sex;
    this.age = obj.age;
}
Person.prototype = {
    getName : function () {
        console.log(this.name);
    },
    getSex : function () {
        console.log(this.sex);
    },
    getAge : function () {
        console.log(this.age);
    }
}
module.exports = Person;