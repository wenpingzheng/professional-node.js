var obj = {
    '///a': function (req, res) {
        req.url;

        res.end();
    }
}


var reqest = {url: '///a'};

var response = {
    end: function () {

    }
};


var fun = obj['///a'];


fun(reqest, respens);



