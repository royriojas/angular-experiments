//var $ = require( 'jquery' );
var angular = require( 'angular' );

var myApp = angular.module( 'myApp', [] );

require( './services/weather-service.js' );
require( './controller/home-controller.js' );

module.exports = {
  start: function () {
    //angular.bootstrap( angular.element( 'body' ), [ 'myApp' ] );
  }
};
