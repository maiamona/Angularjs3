var app = angular.module('loja', []);
app.controller('mona', ['$scope', function($scope){
    $scope.user={Nome: 'Maiamona'}
    $scope.use={Nome: 'Garcia'}
    $scope.contador=0;
    $scope.handleAction= function() {
        $scope.contador++;    
    }
    $scope.pessoa = ['ana', 'fransisca', 'isabela', 'bela'];
}])