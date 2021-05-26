var app = angular.module('loja', ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { controller: "listaController", templateUrl: "lista.html" })
        .when("/edit/:name", { controller: "editController", templateUrl: "form.html" })
        .when("/new", { controller: "newController", templateUrl: "form.html" })
        .otherwise({ redirectTo: "/" })
});
app.run(function ($rootScope) {
    $rootScope.frutas = ['Banana', 'Melancia', 'Abacaxi'];
});

app.controller('listaController', ['$scope', function ($scope) {

}]);

app.controller('editController', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function editController($scope, $routePrams, $rootScope, $route, $location) {
    $scope.title = 'Editar frutas';
    $scope.fruta = $routeParams.name;//pegando nome da fruta para editar
    $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);//pegando a fruta dentro da lista

    $scope.salvar = function () {
        $scope.frutas[$scope.frutaIndex] = $scope.fruta;//pegando o novo nome da fruta editado
        $location.path('/');//voltar para o index
    }
}]);

app.controller('newController', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function newController($scope, $routePrams, $rootScope, $route, $location) {
    $scope.title = 'Nova Fruta';
    $scope.fruta = '';

    $scope.salvar = function () {
        $scope.frutas.push($scope.fruta); //add nova fruta
        $location.path('/');//voltar para o index
    }
}]);


