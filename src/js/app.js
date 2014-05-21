var $ = require( 'jquery' );
var angular = require( 'angular' );

var myApp = angular.module( 'myApp', [] );

require( './services/yelp-service.js' )( myApp );
require( './services/weather-service.js' )( myApp );
require( './controller/home-controller.js' )( myApp );

module.exports = {
  start: function () {
    angular.bootstrap( $( '#body' ), [ 'myApp' ] );
  }
};
