var angular = require( 'angular' );
var myApp = angular.module( 'myApp' );
//var $ = require( 'jquery' );
//var console = this.console;

var controller = myApp.controller( 'HomeController', [ '$scope', '$http', 'weatherService',
  function ( $scope, $http, weatherService ) {

    $scope.loading = false;
    //  var yelpUrl = 'http://api.yelp.com/business_review_search',
    //    yelpKey = 'XXXXXXX-XXXXX'; //bepunXR8pyH2dHQsP7ZFLA
    $scope.city = "San Francisco, CA";
    $scope.fetchData = function () {
      $scope.getWeatherData();
      $scope.getYelpData();
    };

    $scope.getWeatherData = function () {
      weatherService.getWeatherFor( $scope.city )
        .then( function ( weather ) {
          $scope.weather = weather;
        } );
    };

    $scope.getYelpData = function () {

      var yelpUrl = 'http://api.yelp.com/business_review_search',
        yelpKey = 'SCPa0GWSy4ed-Gva1hf1RQ';

      var promise = $http( {
        method: 'JSONP',
        url: yelpUrl,
        params: {
          location: $scope.city,
          ywsid: yelpKey,
          callback: 'JSON_CALLBACK' //JSON callback is important!!!
        }
      } );

      //$scope.loading = true;

      promise.then( function ( response ) {
        $scope.nearby = response.data;

        //$scope.weather.temp = response.data.list[0].temp.day;
      } );

      promise[ 'catch' ]( function ( err ) {
        console.log( 'err', err );
      } );

      promise[ 'finally' ]( function () {
        //$scope.loading = false;
      } );
    };
  }
] );

module.exports = controller;
