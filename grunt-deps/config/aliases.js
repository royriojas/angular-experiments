module.exports = function ( grunt ) {
  'use strict';

  require( './custom-tasks.js' )( grunt );

  var common = require( './common.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  var gruntTasks = {
//    'js-reader': [
//      'validate',
//      'compile-templates:reader',
//      'js-target:js-reader'
//    ],
//    'css-reader': [
//      //      'validate',
//      'css-target:css-reader'
//    ],
//    'css': [
//      'cLess',
//      'autoprefixer',
//      'csso'
//    ],
    'validate': [
      'jsonlint',
      'jsbeautifier',
      'jscs',
      'jshint',
      'jsvalidate'
    ]
//    'js': [
//      'preprocess',
//      'uglify'
//    ],
//    'i18nFiles': [
//      'i18n-from-yml',
//      'jsbeautifier:i18n'
//    ],
//    'warm-up': [
//      'validate',
//      'i18nFiles',
//      'i18n-to-ez-frontend',
//      'ez-frontend'
//    ],
//    'create-files': [
//      'warm-up',
//      'copy:lib',
//      'compile-templates',
//      'css',
//      'js'
//    ],
//    'build': [
//      'clean',
//      'check-kwl',
//      'create-files',
//      'exec:aa',
//      // 'js-tests',
//      'exec:docs'
//    ],
//    'tests': [
//      'jsbeautifier:tests',
//      'jsvalidate:tests',
//      'jshint:tests',
//      'jscs:tests',
//      'test-targets-generator',
//      'qunit'
//    ],
//    'dev': [
//      'clean',
//      'check-kwl',
//      // 'exec:codepainter',
//      'create-files',
//      'exec:aa'
//    ],
//    'default': [
//      'dev'
//    ],
//    'chrome-app': [
//      'dev',
//      'copy:chromeAppDeps',
//      'markdown-expander'
//    ]
  };

  gruntTaskUtils.registerTasks( gruntTasks );
};
