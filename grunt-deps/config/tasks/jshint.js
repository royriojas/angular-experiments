module.exports = function ( grunt ) {
  //var common = require( '../common.js' );

  // region ### jshint
  //
  // validate the javascript files against jshint
  return {
    options: {
      // the default configuration is taken from this file
      jshintrc: 'grunt-deps/.jshintrc'
    },
    develFiles: {
      files: {
        src: 'src/js/**/*.js'
      }
    }
  };
  // endregion
};
