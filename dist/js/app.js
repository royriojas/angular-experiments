(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = (window.$);
var angular = (window.angular);

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'HomeController', function ( $scope, $element ) {
  var me = this;
  me.name = 'Roy is awesome!';

  me.sayHello = function () {
    console.log( 'Hello : ' + me.name );
    console.log( me === this );
    me.name = 'Roy is even more awesome!';
    console.log( $element );
    console.log( $scope );
    console.log( me );
    //console.log($scope === me);
  };
} );

myApp.controller( 'HomeController2', function ( $scope, $element ) {
  var me = $scope;
  me.name = 'Roy is awesome!';

  me.sayHello = function () {
    console.log( 'Hello : ' + me.name );
    console.log( me === this );
    me.name = 'Roy is even more awesome from HomeController2!';
    console.log( $element );
    console.log( $scope );
    console.log( me );
    //console.log($scope === me);
  };
} );

angular.bootstrap( $( '#body' ), [ 'myApp' ] );

},{}]},{},[1])