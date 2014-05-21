var angular = require( 'angular' );
var myApp = angular.module( 'myApp' );

var service = myApp.service( 'yelpService', [ '$http', '$q',
  function ( $http, $q ) {
    var yelpUrl = 'http://api.yelp.com/business_review_search',
      yelpKey = 'SCPa0GWSy4ed-Gva1hf1RQ';

    this.getNearby = function ( city ) {
      return $http( {
        method: 'JSONP',
        url: yelpUrl,
        params: {
          location: city,
          ywsid: yelpKey,
          callback: 'JSON_CALLBACK'
        }
      } ).then( function ( data ) {
        return data.data;
      } ).
      catch ( function ( err ) {
        return $q.reject( {
          error: err
        } );
      } );
    };
  }
] );

module.exports = service;
