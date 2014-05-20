module.exports = function ( grunt ) {
  //var common = require( '../common.js' );

  // region ### jsvalidate
  // validate the javascript files looking for syntax errors. It complements jshint and it is based on Esprima.
  return {
    options: {
      globals: {},
      esprimaOptions: {},
      verbose: false
    },
    all: {
      files: {
        src: 'src/js/**/*.js'
      }
    }
  };
  // endregion
};
