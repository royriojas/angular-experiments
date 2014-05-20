var $ = require( 'jquery' );
var angular = require( 'angular' );

var myApp = angular.module( 'myApp', [] );
require( './controller/home-controller.js' );

module.exports = {
  start: function () {
    angular.bootstrap( $( '#body' ), [ 'myApp' ] );
  }
};
