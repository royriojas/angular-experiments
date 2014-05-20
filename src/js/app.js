( function ( $, global ) {
  'use strict';

  var angular = global.angular;

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

  angular.bootstrap( $( '#body' ), [ 'myApp' ] );

}( jQuery, this ) );
