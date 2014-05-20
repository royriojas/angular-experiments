var $ = require( 'jquery' );
var angular = require( 'angular' );

var myApp = angular.module( 'myApp', [] );

var homeController = require('./controller/home-controller.js');

//myApp.controller( 'HomeController', function ( $scope, $element ) {
//  var me = this;
//  me.name = 'Roy is awesome!';
//
//  me.sayHello = function () {
//    console.log( 'Hello : ' + me.name );
//    console.log( me === this );
//    me.name = 'Roy is even more awesome!';
//    console.log( $element );
//    console.log( $scope );
//    console.log( me );
//    //console.log($scope === me);
//  };
//} );
//
//myApp.controller( 'HomeController2', function ( $scope, $element ) {
//  var me = $scope;
//  me.name = 'Roy is awesome!';
//
//  me.sayHello = function () {
//    console.log( 'Hello : ' + me.name );
//    console.log( me === this );
//    me.name = 'Roy is even more awesome from HomeController2!';
//    console.log( $element );
//    console.log( $scope );
//    console.log( me );
//    //console.log($scope === me);
//  };
//} );

angular.bootstrap( $( '#body' ), [ 'myApp' ] );
