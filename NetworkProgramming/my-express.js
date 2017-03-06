let http = require("http");

class express {
    constructor() {
        this.router = {};
        this.server = http.createServer((request, response) => {
            this.router[request.url](request, response);
        });
    }

    use(url, robin) {
        this.router[url] = robin;
    }

    listen(port) {
        this.server.listen(port);
    }
}


var app = new express();
app.use('///a', (req, res) => {
    res.end('///a');
});

app.listen(8080);






