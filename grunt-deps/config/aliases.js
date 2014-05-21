module.exports = function ( grunt ) {
  'use strict';

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
    ],
    'create-structure': function () {
      var patterns = ['src/js/services/**/*.js',
      'src/js/controllers/**/*.js'];

      var files = grunt.file.expand(patterns);

      console.log(files);

    }
  };

  gruntTaskUtils.registerTasks( gruntTasks );
};
