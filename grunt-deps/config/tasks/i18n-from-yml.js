module.exports = function ( grunt ) {

  var common = require( '../common.js' );
  // region ###i18n-from-yml
  //
  return {
    all: {
      src: [ common.KNO_APP_BUNDLE_RESOURCES_FOLDER + '/translations/**/*.yml' ],
      dest: common.FRONTEND_APP_FOLDER + 'i18n/',
      options: {
        templateFile: 'grunt-deps/i18n.tpl'
      }
    }
  };
  //endregion
};
