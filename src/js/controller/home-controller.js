var angular = require( 'angular' );
var myApp = angular.module( 'myApp' );
//var console = this.console;

myApp.controller( 'HomeController', [ '$scope', '$http',
  function ( $scope, $http ) {

    var weatherUrl = "http://api.openweathermap.org/data/2.5/" +
      "forecast/daily?mode=json" +
      "&units=imperial&cnt=1";

    //  var yelpUrl = 'http://api.yelp.com/business_review_search',
    //    yelpKey = 'XXXXXXX-XXXXX'; //bepunXR8pyH2dHQsP7ZFLA
    $scope.city = "San Francisco, CA";
    $scope.fetchData = function () {

      var promise = $http( {
        method: 'JSONP',
        url: weatherUrl,
        params: {
          q: encodeURIComponent( $scope.city ),
          callback: 'JSON_CALLBACK' //JSON callback is important!!!
        }
      } );

      promise.then( function ( response ) {
        //console.log( 'data', response.data );
        $scope.weather = response.data;
      } );

      promise[ 'catch' ]( function ( err ) {
        console.log( 'err', err );
      } );

    };
  }
] );

module.exports = myApp;
