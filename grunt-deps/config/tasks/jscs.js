module.exports = function ( grunt ) {
  //var common = require( '../common.js' );
  // region ### Javascript Code Style Checker
  // validates the coding style of the files against the given configuration
  // which is stored under grunt-deps/.jscs.json file
  return {
    all: {
      src: 'src/js/**/*.js'
    },
    options: {
      config: 'grunt-deps/.jscs.json'
    }
  };
  // endregion
};
