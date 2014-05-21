var angular = require( 'angular' );
var myApp = angular.module( 'myApp' );
//var $ = require( 'jquery' );
//var console = this.console;

var controller = myApp.controller( 'HomeController', [ '$scope', '$http', 'weatherService', 'yelpService', '$q',
  function ( $scope, $http, weatherService, yelpService, $q ) {

    $scope.loading = false;
    //  var yelpUrl = 'http://api.yelp.com/business_review_search',
    //    yelpKey = 'XXXXXXX-XXXXX'; //bepunXR8pyH2dHQsP7ZFLA
    $scope.city = "San Francisco, CA";
    $scope.fetchData = function () {
      $scope.getWeatherData();
      $scope.getYelpData();
    };

    $scope.getWeatherData = function () {
      return weatherService.getWeatherFor( $scope.city )
        .then( function ( weather ) {
          $scope.weather = weather;
        } );
    };

    $scope.getYelpData = function () {
      return yelpService.getNearby( $scope.city )
        .then( function ( data ) {
          $scope.nearby = data;
        } );
    };
  }
] );

module.exports = controller;
