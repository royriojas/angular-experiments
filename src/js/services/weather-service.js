module.exports = function ( myApp ) {
  myApp.service( 'weatherService', [ '$http', '$q',
    function ( $http, $q ) {
      var weatherUrl =
        "http://api.openweathermap.org/data/2.5/" +
        "forecast/daily?mode=json" +
        "&units=imperial&cnt=1";

      this.getWeatherFor = function ( city ) {
        return $http( {
          method: 'JSONP',
          url: weatherUrl,
          params: {
            q: city,
            callback: 'JSON_CALLBACK'
          }
        } ).then( function ( response ) {
          return {
            temp: response.data.list[ 0 ].temp.day,
            description: response.data.list[ 0 ].weather[ 0 ].description
          };
        } ).
        catch ( function ( err ) {
          return $q.reject( {
            error: err
          } );
        } );
      };
    }
  ] );
};
