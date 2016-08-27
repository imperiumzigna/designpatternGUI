/**
 * Configuracao base do Angular JS
 * @type {angular.Module}
 */


var app = angular.module('main', ['../Modules/Pattern']);

app.controller('sidebar', function ($scope){
   $scope.name = "Teste"
});
