var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.controller('nameCtrl', function ($scope, $resource) {
    // com Spring Framework RestFul
    //pessoa= $resource("/pessoas/:CodPessoa") ;
    
    // com Serlets
    pessoa= $resource("data3/weather/:CodPessoa") ;

    $scope.ID = function () {
     pessoa.get({CodPessoa: $scope.CodPessoa}, function (data) {
         $scope.objetoPessoa = data;
     });  
    };
});