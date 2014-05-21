var $ = require( 'jquery' );
var angular = require( 'angular' );

var myApp = angular.module( 'myApp', [] );

var files = [ './src/js/services/yelp-service.js', './src/js/services/weather-service.js', './src/js/controllers/home-controller.js' ];

files.forEach( function ( dep ) {
  require( dep )( myApp );
} );

module.exports = {
  start: function () {
    angular.bootstrap( $( '#body' ), [ 'myApp' ] );
  }
};
