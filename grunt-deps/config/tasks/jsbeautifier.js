module.exports = function ( grunt ) {
  //var common = require( '../common.js' );
  // region ### jsbeautifier
  // This task correct any formatting issue in the javascript files by automatically applying the right format
  // the format is controlled by the `grunt-deps/beautify-config.json` file.
  // Additional transformations are done after the file is beautified as described above.
  return {
    options: {
      mode: 'VERIFY_AND_WRITE',
      config: 'grunt-deps/beautify-config.json'
    },
    js: {
      src: 'src/js/**/*.js'
    }
  };
  //endregion
};
