var should = require('should');
var request = require('request');
var server = require('../src/server.js');

describe('Server.js', function () {
    it('should always pass', function () {
        true.should.equal(true);
    });

    it('server should exist', function () {
        should.exist(server);
    });

    before(function () {
        server.listen(8000);
    });

    after(function () {
        server.close();
    });

    it('should return error', function (done) {
        request.post('http://127.0.0.1:8000', function (err, res, body){
            res.statusCode.should.equal(409);
            res.body.should.equal('{"errorcode":901,"error":"invalid code"}');
            done();
        });
    });
});