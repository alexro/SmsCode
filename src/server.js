var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.post('/', function (req, res) {
    console.log('code rejected');
    res.status(409);
    res.json({errorcode: 901, error: 'invalid code'})
});

var server = http.createServer(app);

if (process.env.NODE_ENV != 'test') {
    server.listen(8080, 'localhost').on('listening', function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server listening at http://%s:%s', host, port)
    });
}

module.exports = server;