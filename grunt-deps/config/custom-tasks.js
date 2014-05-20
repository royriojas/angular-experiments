module.exports = function ( grunt ) {
  'use strict';

  var common = require( './common.js' );
  var path = require( 'path' );
  var cheerio = require( 'cheerio' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );
  var flattenObject = require( './helpers/flatten-object.js' );
  var mergeKeys = require( './helpers/merge-keys.js' );
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  //var entities = new (require('html-entities').Html5Entities);

  var gruntTasks = {
    // load all the tests using grunt-qunit-istanbul
    'js-tests': function () {
      var allFilesSrc = common.readerRefreshFiles.concat( [
        common.READER_REFRESH_SOURCE_FOLDER + 'cm/js/**/*.js',
        '!' + common.READER_REFRESH_SOURCE_FOLDER + 'bookreader/compiled-templates/**/*.js',
        '!' + common.VENDOR_FOLDER + '**/*.js'
      ] );

      var files = grunt.file.expand( allFilesSrc ).map(function ( file ) {
        return {
          name: path.basename( file ),
          file: path.resolve( file ),
          covered: false
        };
      } );

      var allTestsSrc = [ 'frontend-app/tests/**/*.html' ];
      var allTestsFiles = grunt.file.expand( allTestsSrc );

      allTestsFiles.forEach(function ( file ) {

        var content = grunt.file.read( file );
        var $ = cheerio.load( content );

        $( 'script[data-cover]' ).each(function () {
          var $this = $( this );
          var src = $this.attr( 'src' );
          var fileDirname = path.dirname( file );
          var rel = path.resolve( fileDirname, src );

          var result = files.filter(function ( entry ) {
            return entry.file === rel;
          } );

          if ( result.length > 0 ) {
            result[ 0 ].covered = true;
          }
        } );
      } );

      var coverageResult = {
        total: files.length,
        covered: ( files.filter(function ( entry ) {
          return entry.covered;
        } ).length / files.length * 100 ),
        missingFiles: files.filter(function ( entry ) {
          return !entry.covered;
        } )
      };

      grunt.log.ok( 'Percentage of files tested: ' + coverageResult.covered.toFixed( 2 ) + '%' );

      var entry = {
        'src': [ 'frontend-app/tests/**/*.html' ],
        'options': {
          '--web-security': 'no',
          'coverage': {
            'instrumentedFiles': 'temp/',
            'reportFolder': 'report/js-all',
            'linesThresholdPct': 85,
            'statementsThresholdPct': 85,
            'functionsThresholdPct': 85,
            'branchesThresholdPct': 85,
            'htmlReport': 'report/js-all',
            'src': grunt.file.expand( allFilesSrc )
          }
        }
      };

      grunt.config.set( [ 'qunit', 'all' ], entry );

      grunt.task.run( [ 'qunit' ] );

      grunt.verbose.write( JSON.stringify( coverageResult.missingFiles, null, 2 ));

    },
    't': function ( testName ) {
      grunt.task.run( [ 'validate', 'test:' + testName ] );
    },
    'generate-tokens': function () {
      var gruntFile = grunt.file;

      var files = gruntFile.expand( common.KNO_APP_BUNDLE_RESOURCES_FOLDER + '/translations/**/*.yml' );

      var transFiles = {};
      var transFilesArr = [];

      files.map(function ( file ) {
        var fileName = path.basename( file, '.yml' );
        var lang = fileName.split( '.' )[ 1 ];
        transFiles[ lang ] = flattenObject( grunt.file.readYAML( file ) || {} );
        transFilesArr.push( transFiles[ lang ] );
      } );

      var keys = mergeKeys.apply( null, transFilesArr );

      var structure = [
        [ '"token"' ]
      ];

      var langs = Object.keys( transFiles );

      structure[ 0 ] = structure[ 0 ].concat( langs.map(function ( lang ) {
        return '"' + lang + '"';
      } ));

      keys.forEach(function ( key ) {
        var arr = [ '"' + key + '"' ];
        langs.forEach(function ( lang ) {
          var tranFile = transFiles[ lang ];
          arr.push( '"' + lib.trim( tranFile[ key ] ).replace( /"/g, '""' ).replace( /\n/g, '\\n' ).replace( /\s+/g, ' ' ) + '"' );
        } );
        structure.push( arr );
      } );

      var oFile = 'translations.csv';
      grunt.file.write( oFile, structure.join( '\n' ));
      grunt.log.ok( 'File ' + oFile + ' saved.' );
    }
  };

  gruntTaskUtils.registerTasks( gruntTasks );
};
