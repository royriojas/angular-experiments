// # Common files and directories

var grunt = require( 'grunt' );
var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

// region ## Paths and common directories
// Variables for the directories used in the grunt targets.
var KNO_APP_BUNDLE_RESOURCES_FOLDER = 'bundles/Kno/AppBundle/Resources/',

  // The default directory in the public folder where all the files are going to be copied
  DEPLOY_FOLDER = KNO_APP_BUNDLE_RESOURCES_FOLDER + 'public/',

  // The folder for all the frontend source code
  FRONTEND_APP_FOLDER = 'frontend-app/',

  // Legacy Reader Paths
  LEGACY_READER_FOLDER = FRONTEND_APP_FOLDER + 'legacy-reader/',
  LEGACY_READER_JS_FOLDER = LEGACY_READER_FOLDER + 'js/',
  LEGACY_READER_CSS_FOLDER = LEGACY_READER_FOLDER + 'css/',
  LEGACY_READER_THIRD_PARTY_FOLDER = LEGACY_READER_FOLDER + 'lib/',
  LEGACY_READER_COMPILED_TEMPLATES_FOLDER = LEGACY_READER_FOLDER + 'compiled-templates/',

  // The entire app is deployed under this folder
  READER_DEPLOY_FOLDER = DEPLOY_FOLDER + 'reader/',

  // The New Reader Paths
  READER_REFRESH_SOURCE_FOLDER = FRONTEND_APP_FOLDER + 'reader-refresh/',

  READER_REFRESH_CM_FIXES_SOURCE_FOLDER = READER_REFRESH_SOURCE_FOLDER + 'cm/',
  READER_REFRESH_CM_FIXES_JS_SOURCE_FOLDER = READER_REFRESH_CM_FIXES_SOURCE_FOLDER + 'js/',
  READER_REFRESH_CM_FIXES_LESS_SOURCE_FOLDER = READER_REFRESH_CM_FIXES_SOURCE_FOLDER + 'less/',

  READER_REFRESH_BOOKREADER_SOURCE_FOLDER = READER_REFRESH_SOURCE_FOLDER + 'bookreader/',
  READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER = READER_REFRESH_BOOKREADER_SOURCE_FOLDER + 'js/',
  READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER = READER_REFRESH_BOOKREADER_SOURCE_FOLDER + 'less/',
  READER_REFRESH_BOOKREADER_TEMPLATES_SOURCE_FOLDER = READER_REFRESH_BOOKREADER_SOURCE_FOLDER + 'templates/',
  READER_REFRESH_BOOKREADER_COMPILED_TEMPLATES_SOURCE_FOLDER = READER_REFRESH_BOOKREADER_SOURCE_FOLDER + 'compiled-templates/',

  // journal Paths
  JOURNAL_SOURCE_FOLDER = FRONTEND_APP_FOLDER + 'journal/',
  JOURNAL_JS_SOURCE_FOLDER = JOURNAL_SOURCE_FOLDER + 'js/',
  JOURNAL_CSS_SOURCE_FOLDER = JOURNAL_SOURCE_FOLDER + 'css/',

  JOURNAL_DEPLOY_FOLDER = DEPLOY_FOLDER + 'journal/',
  JOURNAL_CSS_DEPLOY_FOLDER = JOURNAL_DEPLOY_FOLDER + 'css/',
  JOURNAL_JS_DEPLOY_FOLDER = JOURNAL_DEPLOY_FOLDER + 'js/',

  // Flashcards folders
  FLASHCARDS_SOURCE_FOLDER = FRONTEND_APP_FOLDER + 'flashcards/',
  FLASHCARDS_JS_FOLDER = FLASHCARDS_SOURCE_FOLDER + 'js/',
  FLASHCARDS_CSS_FOLDER = FLASHCARDS_SOURCE_FOLDER + 'css/',

  FLASHCARDS_DEPLOY_FOLDER = DEPLOY_FOLDER + 'flashcards/',
  FLASHCARDS_JS_DEPLOY_FOLDER = FLASHCARDS_DEPLOY_FOLDER + 'js/',
  FLASHCARDS_CSS_DEPLOY_FOLDER = FLASHCARDS_DEPLOY_FOLDER + 'css/',

  // the vendor folder, for thirdparty libraries used
  VENDOR_FOLDER = FRONTEND_APP_FOLDER + 'vendor/';

//endregion

//region ## sources

// **Generated I18N files for Javascript usage**
//
// The Building process generates translations files from the ymls files used in symfony
// those files are copied to this location
var sourceI18nGeneratedFiles = [ FRONTEND_APP_FOLDER + 'i18n/**/*.js' ];

// The unit tests files
var sourceTests = FRONTEND_APP_FOLDER + 'tests/**/*.js';

// the i18n deploy folder
var i18nDestFolder = DEPLOY_FOLDER + 'i18n/';

//region ### Legacy Reader
// the common css/less files used in both the legacy reader and the legacy course manager
var cssCommonFiles = [
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/css/fonts/css/emo-font.css',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/css/font-awesome/css/font-awesome.css',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'css/normalize.css',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'css/base.less',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/css/animate.css',
  LEGACY_READER_CSS_FOLDER + 'common.less',
  LEGACY_READER_CSS_FOLDER + 'jquery-ui-fixes.less'
];

// the common js files used in both the legacy reader and legacy course manager
var jsCommonFiles = [
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/browser.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/bbq.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/jquery.ba-postmessage.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/kno.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/jsdump.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/requestfullscreen.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/ipad-draggable.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/color.js',
  LEGACY_READER_JS_FOLDER + 'special-events.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/dropdown.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/oop.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/service.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/events.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/renderer.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/notifier.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/button.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/textentry.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/overlay.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/tooltip.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/popover.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/hideable.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/quicktips.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/quickform.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/validator.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/list.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/dialog.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/searchresults.js',
  LEGACY_READER_JS_FOLDER + 'doAjax.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/enhace.js',
  LEGACY_READER_JS_FOLDER + 'auth.js',
  LEGACY_READER_JS_FOLDER + 'error.js',

  LEGACY_READER_JS_FOLDER + 'engage/shim.js',
  LEGACY_READER_JS_FOLDER + 'engage/pub-sub.js',
  LEGACY_READER_JS_FOLDER + 'engage/app-context/app-context.js',
  LEGACY_READER_JS_FOLDER + 'engage/app-context/service-error.js'
];

// **Legacy Reader Compiled Templates**
//
// Templates in the legacy reader are compiled into this file. Each found template generates an entry
// in the __dotTemplates global variable
var legacyReaderCompiledTemplates = LEGACY_READER_COMPILED_TEMPLATES_FOLDER + 'engage-templates.js';

// css for backpack
var cmCSSFiles = cssCommonFiles.concat( [
  LEGACY_READER_CSS_FOLDER + 'backpack.less'
] );

// js for backpack
var cmJSFiles = jsCommonFiles.concat( [
  legacyReaderCompiledTemplates,

  LEGACY_READER_JS_FOLDER + 'engage/logging-service.js',
  LEGACY_READER_JS_FOLDER + 'engage/logging-module.js',
  LEGACY_READER_JS_FOLDER + 'engage/create-group-dialog.js',
  LEGACY_READER_JS_FOLDER + 'engage/role-selector.js',
  LEGACY_READER_JS_FOLDER + 'engage/group-module.js',
  LEGACY_READER_JS_FOLDER + 'engage/engage.js',

  LEGACY_READER_JS_FOLDER + 'term-dialog.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/selector.js',
  LEGACY_READER_JS_FOLDER + 'course-container.js',
  LEGACY_READER_JS_FOLDER + 'backpack-service.js',
  LEGACY_READER_JS_FOLDER + 'backpack.js',
  LEGACY_READER_JS_FOLDER + 'backpack-app.js'
] );

// js for legacy reader
var jsReaderFiles = [

  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/jsdump.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/ipad-draggable.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/color.js',
  LEGACY_READER_JS_FOLDER + 'special-events.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/oop.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/service.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/renderer.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/overlay.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/tooltip.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/popover.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'js/dialog.js',

  LEGACY_READER_JS_FOLDER + 'doAjax.js',

  LEGACY_READER_JS_FOLDER + 'error.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/rangy-core.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/jswf.js',
  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/rangy-selectionsaverestore.js',
  LEGACY_READER_JS_FOLDER + 'kno.ui.js',
  LEGACY_READER_JS_FOLDER + 'model.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-model.js',
  LEGACY_READER_JS_FOLDER + 'book-service.js',
  LEGACY_READER_JS_FOLDER + 'logging-service.js',
  LEGACY_READER_JS_FOLDER + 'contextmenu.js',
  LEGACY_READER_JS_FOLDER + 'highlight.js',

  LEGACY_READER_JS_FOLDER + 'bottom-bar.js',
  LEGACY_READER_JS_FOLDER + 'ugc-controller.js',
  LEGACY_READER_JS_FOLDER + 'page-viewer.js',
  LEGACY_READER_JS_FOLDER + 'sticky.js',
  LEGACY_READER_JS_FOLDER + 'stickies.js',
  LEGACY_READER_JS_FOLDER + 'reader.js',

  LEGACY_READER_THIRD_PARTY_FOLDER + 'thirdparty/nearest.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/definition-popover.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/viewer.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/sliding-lateral-panel.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-drawer.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-regions.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-text-triggers.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-service.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink-popover.js',
  LEGACY_READER_JS_FOLDER + 'smartlinks/smartlink.js',
  LEGACY_READER_JS_FOLDER + 'search-results.js',
  LEGACY_READER_JS_FOLDER + 'editor-proxy.js',
  LEGACY_READER_JS_FOLDER + 'geometric-tool.js',
  LEGACY_READER_JS_FOLDER + 'kno-logger.js'
];

// **allSourceFiles**
//
// all the source files
var allSourceFiles = [
  'Gruntfile.js',
  'grunt-deps/**/*.js',
  READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER + '**/*.js',
  READER_REFRESH_CM_FIXES_JS_SOURCE_FOLDER + '**/*.js',
  JOURNAL_JS_SOURCE_FOLDER + '**/*.js',
  FLASHCARDS_JS_FOLDER + '**/*.js',
  FRONTEND_APP_FOLDER + 'chrome-app/js/**/*.js',
  '!' + FRONTEND_APP_FOLDER + 'chrome-app/js/responses.js'
];
//endregion

// the new compiled templates
var readerCompiledTemplates = READER_REFRESH_BOOKREADER_COMPILED_TEMPLATES_SOURCE_FOLDER + 'reader-templates.js';

// **Ajax Prefilter**
//
// This file is required to override all the xhr calls to the paths ./reader/* and ./engage/*
// and make them to pass through the Proxy.
var ajaxPrefilterFile = READER_REFRESH_SOURCE_FOLDER + 'common/js/ajax-prefilter.js';

var readerRefreshFiles = gruntTaskUtils.combineFiles( {
    cwd: READER_REFRESH_SOURCE_FOLDER,
    src: [
      'common/js/require-ssl.js',
      'common/js/ssl-helper-init.js'
    ]
  }, readerCompiledTemplates,
  VENDOR_FOLDER + 'jplayer/js/jquery.jplayer.min.js', {
    cwd: READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER,
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

      'modules/journal-panel/**/*.js',
      'modules/flashcards-panel/**/*.js',

      'modules/search/**/*.js',

      'modules/manage-share/**/*.js',

      'modules/smartlinks/form.js',
      'modules/smartlinks/smartlinks-list.js',
      'modules/smartlinks/**/*.js',

      'modules/media/**/*.js',

      'modules/add-sticky/**/*.js',

      'modules/zoom/**/*.js',
      'modules/toc-bookmarks/**/*.js',

      'modules/bookmarkable-page/**/*.js',

      'modules/logging/**/*.js',
      'modules/responsive/**/*.js'
    ]
  }, ajaxPrefilterFile );

//endregion

// region ## exports
module.exports = {
  KNO_APP_BUNDLE_RESOURCES_FOLDER: KNO_APP_BUNDLE_RESOURCES_FOLDER,
  DEPLOY_FOLDER: DEPLOY_FOLDER,

  FRONTEND_APP_FOLDER: FRONTEND_APP_FOLDER,
  LEGACY_READER_FOLDER: LEGACY_READER_FOLDER,

  LEGACY_READER_JS_FOLDER: LEGACY_READER_JS_FOLDER,
  LEGACY_READER_CSS_FOLDER: LEGACY_READER_CSS_FOLDER,

  LEGACY_READER_THIRD_PARTY_FOLDER: LEGACY_READER_THIRD_PARTY_FOLDER,
  LEGACY_READER_COMPILED_TEMPLATES_FOLDER: LEGACY_READER_COMPILED_TEMPLATES_FOLDER,

  READER_DEPLOY_FOLDER: READER_DEPLOY_FOLDER,
  READER_REFRESH_SOURCE_FOLDER: READER_REFRESH_SOURCE_FOLDER,

  READER_REFRESH_CM_FIXES_SOURCE_FOLDER: READER_REFRESH_CM_FIXES_SOURCE_FOLDER,
  READER_REFRESH_CM_FIXES_JS_SOURCE_FOLDER: READER_REFRESH_CM_FIXES_JS_SOURCE_FOLDER,

  READER_REFRESH_CM_FIXES_LESS_SOURCE_FOLDER: READER_REFRESH_CM_FIXES_LESS_SOURCE_FOLDER,
  READER_REFRESH_BOOKREADER_SOURCE_FOLDER: READER_REFRESH_BOOKREADER_SOURCE_FOLDER,

  READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER: READER_REFRESH_BOOKREADER_JS_SOURCE_FOLDER,
  READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER: READER_REFRESH_BOOKREADER_LESS_SOURCE_FOLDER,

  READER_REFRESH_BOOKREADER_TEMPLATES_SOURCE_FOLDER: READER_REFRESH_BOOKREADER_TEMPLATES_SOURCE_FOLDER,
  READER_REFRESH_BOOKREADER_COMPILED_TEMPLATES_SOURCE_FOLDER: READER_REFRESH_BOOKREADER_COMPILED_TEMPLATES_SOURCE_FOLDER,

  JOURNAL_SOURCE_FOLDER: JOURNAL_SOURCE_FOLDER,
  JOURNAL_JS_SOURCE_FOLDER: JOURNAL_JS_SOURCE_FOLDER,

  JOURNAL_CSS_SOURCE_FOLDER: JOURNAL_CSS_SOURCE_FOLDER,
  JOURNAL_DEPLOY_FOLDER: JOURNAL_DEPLOY_FOLDER,

  JOURNAL_CSS_DEPLOY_FOLDER: JOURNAL_CSS_DEPLOY_FOLDER,
  JOURNAL_JS_DEPLOY_FOLDER: JOURNAL_JS_DEPLOY_FOLDER,

  FLASHCARDS_SOURCE_FOLDER: FLASHCARDS_SOURCE_FOLDER,

  FLASHCARDS_JS_FOLDER: FLASHCARDS_JS_FOLDER,
  FLASHCARDS_CSS_FOLDER: FLASHCARDS_CSS_FOLDER,

  FLASHCARDS_DEPLOY_FOLDER: FLASHCARDS_DEPLOY_FOLDER,

  FLASHCARDS_JS_DEPLOY_FOLDER: FLASHCARDS_JS_DEPLOY_FOLDER,
  FLASHCARDS_CSS_DEPLOY_FOLDER: FLASHCARDS_CSS_DEPLOY_FOLDER,

  VENDOR_FOLDER: VENDOR_FOLDER,

  sourceI18nGeneratedFiles: sourceI18nGeneratedFiles,
  sourceTests: sourceTests,

  i18nDestFolder: i18nDestFolder,
  cssCommonFiles: cssCommonFiles,

  jsCommonFiles: jsCommonFiles,
  legacyReaderCompiledTemplates: legacyReaderCompiledTemplates,

  cmCSSFiles: cmCSSFiles,
  cmJSFiles: cmJSFiles,

  jsReaderFiles: jsReaderFiles,
  allSourceFiles: allSourceFiles,

  readerRefreshFiles: readerRefreshFiles,
  ajaxPrefilterFile: ajaxPrefilterFile,

  readerCompiledTemplates: readerCompiledTemplates
};

//endregion
