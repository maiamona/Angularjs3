var app = angular.module('myApp', []);

app.controller('mona1', function ($scope) {
    $scope.names = ["Emis", "Tobias", "Linux "]
});

app.controller('mona2', function ($scope) {
    $scope.names = ["Maiamona", "Elias", "Cazevo", "Garcia"]
});

app.controller('expression', function ($scope) {
    $scope.lista = {nomes: ["Maiamona", "Elias", "Cazevo", "Garcia"],
    cidade: ["Angola", "Turquia", "Venezuela", "Zambia"]
}
});



app.controller('nameCtrl', function ($scope, $http) {
    $http.get("data2.json").then(function (response) {
        $scope.lista = response.data.weather;
    });
});