var angular = require('angular');
var myApp = angular.module('myApp');
//var console = this.console;

myApp.controller('HomeController', ['$scope', function ($scope) {
  $scope.city = "San Francisco, CA";
  $scope.fetchData = function () {
    console.log('fetched data called for ' + $scope.city );
  };
}]);

module.exports = myApp;