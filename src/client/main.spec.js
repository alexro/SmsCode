'use strict';

describe('Data service', function () {
    var $httpBackend,
        Data;

    beforeEach(module('App'));

    beforeEach(inject(function (_$httpBackend_, _Data_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('POST', '/').respond(function (method, url, data, headers) {
            return [409, JSON.stringify({errorcode: 901, error: 'invalid code'}), {}];
        });

        Data = _Data_;
    }));

    it('should call error callback', function () {
        var data;
        Data.sendCode({}, function () {}, function (response) {
            data = response;
        });

        $httpBackend.flush();
        expect(data).toBeDefined();
    });
});

describe('PageController', function () {
    var scope,
        _Data_,
        _$controller_,
        ctrl;

    beforeEach(module('App'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        _Data_ = new DataMock();
        _$controller_ = $controller;
    }));

    it('should send code and fail', function () {
        ctrl = _$controller_('PageController', {$scope: scope, Data: _Data_});
        scope.submit();
        expect(scope.success).toEqual(false);
    });
});

function DataMock() {
    this.sendCode = function (code, successCallback, errorCallback) {
        errorCallback();
    }
};