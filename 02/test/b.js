console.log("b.js");
var fs = require("fs");
fs.readFile(__dirname + "/b.txt", function(err, data) {
    if (err) {
    	console.log(err);
    }else {
    	console.log(data.toString());
    }
})
