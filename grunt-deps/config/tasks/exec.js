// # grunt exec task
//
// Run terminal commands from within grunt
module.exports = function ( grunt ) {
  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  return {
    // ## exec:docs
    // Generate the documentation for this project using
    // a modified version of `docco-husky`
    //
    // Call it executing `grunt exec:docs` or `grunt exec:docs:[fileOrFolder]
    //
    // if a file is passed when calling `grunt exec:docs:[fileOrFolder]`
    // then the documentation will be generated only for this file.
    docs: {
      command: function ( file ) {
        var filesOrFolders = [ 'Gruntfile.js',
          'grunt-deps/config-loader.js',
          'grunt-deps/config/',
          'grunt-deps/tasks/',
          'frontend-app/'
        ];

        if ( file ) {
          filesOrFolders = [ file ];
        }

        return lib.format( 'node_modules/docco-husky/bin/generate {0}', filesOrFolders.join( ' ' ));
      }
    },

    // ## exec:phptests
    // Run the php unit tests
    //
    // call it executing `grunt exec:phptests` or `grunt exec:phptests:[fileOrFolder]`
    //
    // if a file or folder is given, then the tests will be executed using only that file
    // if not it will run all the unit tests iniside the folder `bundles/Kno/AppBundle/Tests`
    phptests: {
      command: function ( file ) {

        //var cmd = ' sf/app/ --coverage-html report/php';
        var cmd = 'sf/vendor/phpunit/phpunit/phpunit --coverage-html report/php -c sf/app';

        if ( !file ) {
          file = 'bundles/Kno/AppBundle/Tests';
        }

        cmd += ' ' + file;

        return cmd;
      }
    },
    // ## exec:codepainter
    // Codepainter is a utility similar to jsbeautifier it format the code to
    // follow a given set of styles. It is similar to jsbeautifier. It actually
    // complements it, since we're using it to make sure we always use single
    // quotes in our strings in javascript.
    //
    // Call it executing `grunt exec:codepainter` or `grunt exec:codepainter:glob`
    //
    // The first call beautify all the source files, by application group
    // to avoid an issue with opening too many file descriptors. The second one will
    // beautify all the files that match the passed glob only.
    //
    // **Note**:
    //
    // a glob is a string that represent a set of files or directories
    // something like: `some/path/**/*.js` which will match all files inside some path that
    // have the js extension.
    codepainter: {
      command: function ( glob ) {

        if ( glob ) {
          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
            'grunt-deps/codepainter.json', glob );
        }

        // ** sourceFilesGlobs**
        //
        // globs to point to all the source files in this project
        var sourceFilesGlobs = [
          'frontend-app/journal/**/*.js',
          'frontend-app/tests/**/*.js',
          'frontend-app/reader-refresh/**/*.js',
          'frontend-app/flashcards/**/*.js',
          'Gruntfile.js',
          'grunt-deps/**/*.js, !grunt-deps/pre-push.js'
        ];

        return sourceFilesGlobs.map(function ( glob ) {
          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
            'grunt-deps/codepainter.json', glob );
        } ).join( ' && ' );
      }
    },

    // ## symfony assets deployment
    // Create a symlink to the public folder inside the bundles
    //
    // call it `grunt exec:aa`
    aa: {
      command: 'php sf/app/console assets:install sf/web --symlink'
    }
  };
};
