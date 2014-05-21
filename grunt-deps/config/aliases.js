module.exports = function ( grunt ) {
  'use strict';

  var common = require( './common.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  var gruntTasks = {
    'validate': [
      'jsonlint',
      'jsbeautifier',
      'jscs',
      'jshint',
      'jsvalidate'
    ],
    'default': [
      'validate',
      'browserify'
    ]
  };

  gruntTaskUtils.registerTasks( gruntTasks );
};
