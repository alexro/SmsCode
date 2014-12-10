'use strict';

angular.module('App', [])
    .service('Data', [
        '$http',
        function ($http) {

            this.sendCode = function (data, successCallback, errorCallback) {
                $http(
                    {
                        url: '/',
                        method: 'POST',
                        data: data
                    }
                )
                .success(function (data, status, headers, config) {
                        // never fires
                        successCallback();
                    }
                ).error(function (data, status) {
                        console.log(data);
                        errorCallback(data);
                    }
                );
            }
        }
    ])
    .controller('PageController', [
        '$scope',
        'Data',
        function ($scope, Data) {
            $scope.code = '';
            $scope.success = true;

            $scope.submit = function () {
                Data.sendCode(
                    {code: $scope.code},
                    function () {
                        // never fires
                    },
                    function () {
                        $scope.success = false;
                    }
                );
            }
        }
    ]);