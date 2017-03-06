const path = require('path');
const absolutepath = path.resolve(`${__dirname}/public/yanmianban`);

const express = require('express');
const app = express();
const serveIndex = require('serve-index');

app.use(express.static(absolutepath));
app.use('/', serveIndex(absolutepath))

app.use('/a/b/c', function (req, res) {
    res.end('hello world');
});

app.use('/robin', function (req, res) {
    res.end('i am robin');
});

app.listen(8080);


