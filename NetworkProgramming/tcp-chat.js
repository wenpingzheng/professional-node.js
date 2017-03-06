var net = require('net');
var server = net.createServer();
var sockets = [];
server.on('connection', function (socket) {
    socket.message = '';
    socket.name = socket.remoteAddress;
    sockets.push(socket);
    socket.on('data', function (data) {
        console.log('got data:', data.toString());
        socket.message += data;

        if (data.indexOf(13) != -1) {
            if (/i\s+?am\s+?(\w+)/im.test(socket.message) || /my\s+?name\s+?is\s+?(\w+)/im.test(socket.message)) {
                socket.name = RegExp.$1;
            }

            sockets.forEach(function (otherSocket) {
                if (otherSocket !== socket) {
                    otherSocket.write("[" + otherSocket.name + "] " + otherSocket.message);
                    otherSocket.message = '';
                }
            });
        }
    });
    socket.on('close', function () {
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });
});

server.listen(4001);


