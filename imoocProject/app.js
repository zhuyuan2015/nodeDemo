/**
 * Author: ZhuYuan
 * Email: 765596409@qq.com
 * Created time: ${DATE} ${time}
 * Description：入口
 */

function l(n) {
    console.log(n);
}

var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.set("views","./views/pages");
app.set("view engine","jade");
app.use(express.static("./public"));
app.use(express.static(path.join(__dirname,"bower_components")));
app.listen(port);
l(port);

app.get("/",function(req,res){
    res.render("index",{
        title:"首页",
        movie: [
            {
                title:"机械战警",
                _id:1,
                poster:"http://www.163.com"
            },{
                title:"机械战警",
                _id:2,
                poster:"http://www.163.com"
            },{
                title:"机械战警",
                _id:3,
                poster:"http://www.163.com"
            },{
                title:"机械战警",
                _id:4,
                poster:"http://www.163.com"
            },{
                title:"机械战警",
                _id:5,
                poster:"http://www.163.com"
            }
        ]
    })
});

app.get("/detail",function(req,res){
    res.render("detail",{
        title:"详情页",
        movie:{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描描述我是描述我是描述我是描述'
        }
    })
});

app.get("/admin",function(req,res){
    res.render("admin",{
        title:"录入页",
        movie:{
            title:"",
            director:"",
            year:"",
            ccountry:"",
            language:"",
            inposter:"",
            flash:"",
            summary:""
        }
    })
});

app.get("/list",function(req,res){
    res.render("list",{
        title:"列表页",
        movie:[{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }]
    })
});

