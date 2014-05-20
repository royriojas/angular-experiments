module.exports = function ( grunt ) {

  var common = require( '../common.js' );
  // region ### clean
  // This task takes care of removing all the auto generated folders of the build process
  return {
    build: [
      // the i18n source files generated from the yaml files
      common.FRONTEND_APP_FOLDER + 'i18n/',

      // the generated documentation for this project
      'documentation/docs',

      // the destination of the generated i18n files
      common.i18nDestFolder,

      // the flashcards deploy folder
      common.FLASHCARDS_DEPLOY_FOLDER,

      // the journal deploy folder
      common.JOURNAL_DEPLOY_FOLDER,

      // the old reader deploy folder
      common.READER_DEPLOY_FOLDER,

      // compiled templates folders
      common.READER_REFRESH_BOOKREADER_COMPILED_TEMPLATES_SOURCE_FOLDER,
      common.LEGACY_READER_COMPILED_TEMPLATES_FOLDER
    ]
  };
  //endregion
};
