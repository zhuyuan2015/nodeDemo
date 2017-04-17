/**
 * Author: ZhuYuan
 * Email: 765596409@qq.com
 * Created time: 2017-04-17
 * Description：电影模式
 */

function l(n) {
    console.log(n);
}

var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
    docuor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            defaule:Date.now()
        }
    }
});

movieSchema.pre("save",function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else {
        this.meta.updateAt = Date.now()
    }
    netx();
});

movieSchema.static = {
    fetch:function(callback){
        return this
                .find({})
                .sort("meta.updateAt")
                exec(callback);
    },
    findById: function(callback){
        return this
            .find({})
            .sort("meta.updateAt")
        exec(callback);
    }
}
module.exports = movieSchema;