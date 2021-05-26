var app = angular.module('myApp', []);
app.controller('pegarResposta', function ($scope, $http) {
    var sucessCallBack = function (response) {
        $scope.data = response.data.weather;
    };
    var errorCallBack = function (reason) {
        $scope.error = reason.data.weather; 
     }
    $http.get("data.json").then(sucessCallBack, errorCallBack);   
});

