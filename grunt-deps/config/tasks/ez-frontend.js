// # grunt-ez-frontend
// This task will help process js and css targets. All the targets will include the version
// in the filename and both unminified and minified versions will be created.
//
// - css targets are generated from less and css files.
//   They are preprocessed and as well as autoprefixed
// - js targets are generated from javascript files.
//   They are concatenated, preprocessed and minified using uglify
module.exports = function ( grunt, pkg ) {
  'use strict';

  var path = require( 'path' );
  var common = require( '../common.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  // **customLessImports**
  //
  // this files are used to provide custom mixins used in the current app
  var customLessImports = gruntTaskUtils.combineFiles( {
    cwd: 'node_modules/kwl-dist/dist/less/',
    src: [ 'mixins.less',
      'constants.less',
      'theme.less',
      'KWL-font/kwl-font.mixins.less'
    ]
  } );

  var ajaxPrefilterFile = common.ajaxPrefilterFile;

  // region readerRefreshLessFiles.
  var readerRefreshLessFiles = gruntTaskUtils.combineFiles(
    common.VENDOR_FOLDER + 'jplayer/skin/blue.monday/jplayer.blue.monday.css', {
      cwd: common.LEGACY_READER_CSS_FOLDER,
      src: [
        'jquery-ui-fixes.less',
        'reader.less'
      ]
    }, {
      cwd: common.READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER,
      src: [
        'overlay.less',
        'jquery-fixes.less',
        'fix.less',
        'fix-ie.less',
        'layout/**/*.less',
        'modules/**/*.less',
        'widgets/**/*.less'
      ]
    }
  );
  // endregion

  // region sourcesJournal
  var sourcesJournal = gruntTaskUtils.combineFiles(
    ajaxPrefilterFile, {
      cwd: common.JOURNAL_JS_SOURCE_FOLDER,
      src: [ './models/**/*.js',
        './services/user-profile-service.js',
        './services/journal-service.js',
        './lib/**/*.js',
        './misc/**/*.js',
        './modules/**/*.js',
        './views/**/*.js',
        './widgets/**/*.js',
        './app.js'
      ]
    }
  );
  // endregion

  // region sourceFlashcards
  var sourceFlashcards = gruntTaskUtils.combineFiles(
    ajaxPrefilterFile, {
      cwd: common.FLASHCARDS_JS_FOLDER,
      src: [ './services/flashcard-service-webreader.js',
        './services/user-profile-service.js',
        './misc/**/*.js',
        './modules/**/*.js',
        './views/**/*.js',
        './widgets/**/*.js',
        './app.js'
      ]
    }
  );
  // endregion

  // region chromeAppReaderFiles
  var chromeAppReaderFiles = gruntTaskUtils.combineFiles( {
      cwd: 'frontend-app/chrome-app/js/',
      src: [
        'page-data.js',
        'responses.js',
        'replay-xhr.js'
      ]
    },
    common.readerCompiledTemplates,
    common.VENDOR_FOLDER + 'jplayer/js/jquery.jplayer.min.js', {
      cwd: common.READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER,
      src: [
        'fixes/fix.js',

        'fixes/kno.js',
        'fixes/medium-hold.js',
        'utils/**/*.js',
        'base/**/*.js',
        'common/**/*.js',
        'models/**/*.js',
        'services/**/*.js',

        'modules/window-open/**/*.js',
        'modules/global-header/**/*.js',

        'modules/search/**/*.js',
        'modules/reader/**/*.js',

        'modules/book-panel/**/*.js',

        'modules/sample-book-constraints/**/*.js',
        'modules/anonymous-user/**/*.js',

        'modules/search/**/*.js',

        'modules/manage-share/**/*.js',

        'modules/smartlinks/form.js',
        'modules/smartlinks/smartlinks-list.js',
        'modules/smartlinks/**/*.js',

        'modules/media/**/*.js',

        'modules/add-sticky/**/*.js',

        'modules/zoom/**/*.js',
        'modules/toc-bookmarks/**/*.js',

        'modules/responsive/**/*.js'
      ]
    },
    ajaxPrefilterFile
  );
  // endregion

  return {
    options: {
      assetsVersion: pkg.version,
      bannerFile: 'grunt-deps/license.txt',
      rewritePathTemplate: 'assets/{0}/{1}__{2}',
      separator: '\n\n',
      customImports: customLessImports
    },

    // region journal
    'js-journal': {
      src: sourcesJournal,
      dest: common.JOURNAL_JS_DEPLOY_FOLDER + 'kno.journal.js'
    },

    'css-journal': {
      src: gruntTaskUtils.combineFiles( {
        cwd: common.JOURNAL_CSS_SOURCE_FOLDER,
        src: [
          'journal-font-icons/css/journal-font-icons.css',
          'module-transitions.less',
          'style.less'
        ]
      } ),
      dest: common.JOURNAL_CSS_DEPLOY_FOLDER + 'kno.journal.css'
    },
    //endregion

    //region cm
    'js-cm-cssfiles': {
      src: common.cmCSSFiles.concat( common.READER_REFRESH_CM_FIXES_LESS_SOURCE_FOLDER + 'fix.less' ),
      dest: common.READER_DEPLOY_FOLDER + 'cm.css'
    },
    'js-cm-jsfiles': {
      src: [
        common.READER_REFRESH_CM_FIXES_JS_SOURCE_FOLDER + 'fix.js',
        ajaxPrefilterFile
      ].concat( common.cmJSFiles )
        .concat( [
          common.READER_REFRESH_SOURCE_FOLDER + 'common/js/require-ssl.js',
          common.READER_REFRESH_SOURCE_FOLDER + 'common/js/ssl-helper-init.js'
        ] ),
      dest: common.READER_DEPLOY_FOLDER + 'cm.js'
    },

    //endregion

    //region reader
    'css-reader': {
      src: readerRefreshLessFiles,
      dest: common.READER_DEPLOY_FOLDER + 'reader.css',
      options: {
        customImports: customLessImports.concat( [
          common.READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER + 'custom-mixins.less'
        ] )
      }
    },

    'js-reader': {
      src: common.readerRefreshFiles.
      concat( common.jsReaderFiles ),
      dest: common.READER_DEPLOY_FOLDER + 'reader.js'
    },
    //endregion

    // region chrome app files
    'js-ca-reader': {
      src: chromeAppReaderFiles.concat( common.jsReaderFiles ).concat( [
        'frontend-app/chrome-app/js/chrome-app-init.js'
      ] ),
      dest: 'frontend-app/chrome-app/reader-dist/reader.js'
    },

    'css-ca-reader': {
      src: readerRefreshLessFiles,
      dest: 'frontend-app/chrome-app/reader-dist/reader.css',
      options: {
        customImports: customLessImports.concat( [
          common.READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER + 'custom-mixins.less'
        ] )
      }
    },
    // endregion

    // region flashcards
    'js-flashcards': {
      src: sourceFlashcards,
      dest: common.FLASHCARDS_JS_DEPLOY_FOLDER + 'kno.flashcards.app.js'
    },
    'css-flashcards': {
      src: [
        common.FLASHCARDS_CSS_FOLDER + '/style.less',
        common.FLASHCARDS_CSS_FOLDER + 'oobe.less',
        common.FLASHCARDS_CSS_FOLDER + '/coverflow.less',
        common.FLASHCARDS_CSS_FOLDER + '/320.less',
        common.FLASHCARDS_CSS_FOLDER + '/480.less',
        common.FLASHCARDS_CSS_FOLDER + '/600.less',
        common.FLASHCARDS_CSS_FOLDER + '/busy.less',
        common.FLASHCARDS_CSS_FOLDER + '/theme.less'
      ],
      dest: common.FLASHCARDS_CSS_DEPLOY_FOLDER + 'kno.flashcards.app.css'
    },

    'flashcards-cabin': {
      src: common.FLASHCARDS_CSS_FOLDER + 'cabin-font/cabin.less',
      dest: common.FLASHCARDS_CSS_DEPLOY_FOLDER + 'cabin.css'
    }
    // endregion
  };
};
