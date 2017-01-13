/**
 * Created by richard.g on 20/12/2016.
 */
var net = require("net");
var server = net.createServer({
    allowHalfOpen: false
}, function(socket) {
// handle connection
});

server.listen(8000, "127.0.0.1");

