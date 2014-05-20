module.exports = function () {
  var common = require( '../common.js' );
  // region ### i18n to ez-frontend
  // takes cares of generating the tasks to generate minimized versions of the translation files
  return {
    all: {
      src: common.sourceI18nGeneratedFiles,
      dest: common.i18nDestFolder,
      options: {
        cwd: common.FRONTEND_APP_FOLDER + 'i18n/'
      }
    }
  };
  // endregion
};
