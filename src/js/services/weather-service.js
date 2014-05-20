var angular = require( 'angular' );
var myApp = angular.module( 'myApp' );

var service = myApp.service( 'weatherService', [ '$http', '$q',
  function ( $http, $q ) {
    var deferred = $q.defer();

    this.getWeatherFor = function ( city ) {
      var weatherUrl = "http://api.openweathermap.org/data/2.5/" +
        "forecast/daily?mode=json" +
        "&units=imperial&cnt=1";

      var promise = $http( {
        method: 'JSONP',
        url: weatherUrl,
        params: {
          q: city,
          callback: 'JSON_CALLBACK' //JSON callback is important!!!
        }
      } );

      //$scope.loading = true;

      promise.then( function ( response ) {
        deferred.resolve( {
          temp: response.data.list[ 0 ].temp.day,
          description: response.data.list[ 0 ].weather[ 0 ].description
        } );
        //$scope.weather.temp = response.data.list[0].temp.day;
      } );

      promise[ 'catch' ]( function ( err ) {
        console.log( 'err', err );
      } );

      promise[ 'finally' ]( function () {
        //$scope.loading = false;
      } );

      return deferred.promise;
    };
  }
] );

module.exports = service;
