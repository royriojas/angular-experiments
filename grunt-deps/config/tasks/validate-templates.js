module.exports = function ( grunt ) {
  var common = require( '../common.js' );
  //region ### templates
  return {
    all: {
      src: common.LEGACY_READER_JS_FOLDER + 'templates/**/*.doT'
    }
  };
};
