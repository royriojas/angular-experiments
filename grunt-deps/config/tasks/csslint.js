module.exports = function ( grunt, pkg ) {
  var common = require( '../common.js' );

  return {
    options: {
      'adjoining-classes': false,
      'bulletproof-font-face': false,
      'regex-selectors': false,
      // TODO: consider reviewing this https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors
      'unqualified-attributes': false,
      'compatible-vendor-prefixes': false,
      'gradients': false,
      'known-properties': false,
      'box-model': false,
      'fallback-colors': false,
      'outline-none': false
    },
    all: {

      src: [
        common.JOURNAL_CSS_DEPLOY_FOLDER + 'kno.journal.' + pkg.version + '.css',
        common.FLASHCARDS_CSS_DEPLOY_FOLDER + 'kno.flashcards.app' + pkg.version + 'css',
        common.READER_DEPLOY_FOLDER + 'reader.' + pkg.version + '.css'
      ]
    }
  };
};
