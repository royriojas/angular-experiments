module.exports = function ( grunt ) {
  var common = require( '../common.js' );
  //region ### templates
  return {
    options: {
      //template: '(function (jQuery, kno, window) { \n  var ns = kno.ns;\n  \n//[[CONTENT]]\n  \n}($, kno, window));'
      templateFile: 'grunt-deps/dot-template.tpl'
    },
    all: {
      src: common.LEGACY_READER_JS_FOLDER + 'templates/**/*.doT',
      dest: common.legacyReaderCompiledTemplates
    },
    'reader': {
      src: common.READER_REFRESH_BOOKREADER_TEMPLATES_SOURCE_FOLDER + '**/*.tpl',
      dest: common.readerCompiledTemplates,
      options: {
        ext: '.tpl'
      }
    }
  };
};
