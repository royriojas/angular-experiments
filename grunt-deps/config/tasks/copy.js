module.exports = function () {
  var common = require( '../common.js' );
  //region ### copy
  return {
    options: {
      // copy will try to process the content of the files as text. This behavior
      // could **potentially corrupt some binary files** as described
      // [here.](http://royriojas.wordpress.com/2014/02/06/grunt-copy-corrupting-binary-files/).
      // In order to prevent this, we exclude from processing all the binary formats we may use.
      processContentExclude: [
        '**/*.{png,gif,jpg,ico,psd,ttf,otf,woff,svg}'
      ]
    },
    // region **copy:lib**
    //
    // the files from the KWL distribution folder should be copied
    // to the deploy folder in order to be used by this project
    lib: {
      files: [ {
        src: [ '**/*.*' ],
        dest: common.VENDOR_FOLDER,
        cwd: common.DEPLOY_FOLDER + 'vendor/',
        expand: true
      }, {
        src: [ '**/*.*' ],
        dest: common.READER_DEPLOY_FOLDER + 'img/',
        cwd: common.READER_REFRESH_SOURCE_FOLDER + 'img/',
        expand: true
      } ]
    },
    chromeAppDeps: {
      files: [ {
        src: [ '**/*.*' ],
        dest: 'frontend-app/chrome-app/kwl/',
        cwd: 'node_modules/kwl-dist/kwl',
        expand: true
      }, {
        src: [ '**/*.*' ],
        cwd: 'bundles/Kno/AppBundle/Resources/public/i18n/',
        dest: 'frontend-app/chrome-app/i18n/',
        expand: true
      } ]
    }
    //endregion
  };
  // endregion
};
