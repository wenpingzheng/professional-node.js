var fs = require("fs");
var path = __dirname + "/hello.txt";

fs.open(path, "r", function (error, fd) {
    console.log(fd);
});


