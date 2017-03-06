let http = require("http");

function express() {
    this.router = {};
    this.server = http.createServer((request, response) => {
        this.router[request.url](request, response);
    });
    this.use = function (url, robin) {
        this.router[url] = robin;
    }

    this.listen = function (port) {
        this.server.listen(port);
    }
}

var app = new express();
app.use('///a', (req, res) => {
    res.end('///a');
});

app.listen(8080);





