module.exports = function ( grunt ) {
  'use strict';

  var path = require( 'path' );
  var twig = require( 'twig' ).twig;
  var marked = require( 'marked' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  gruntTaskUtils.registerTasks( {
    'markdown-expander': {
      description: 'Creates a static site based on twig templates and markdown files',
      multiTask: function () {
        var me = this;
        var files = me.files || [];
        var opts = me.options( {
          basePath: '',
          template: '',
          beforeMarkdownExpand: function ( rawContent, path ) {
            return rawContent;
          },
          afterMarkdownExpand: function ( content, path ) {
            return content;
          }
        } );

        files.forEach(function ( dataEntry ) {
          var src = dataEntry.src;
          if ( !src || src.length === 0 ) {
            grunt.log.ok( 'Nothing to process' );
            return;
          }

          var dest = dataEntry.dest;

          var pageTemplate = twig( {
            path: opts.template,
            async: false
          } );

          var entries = src.map(function ( file ) {
            var content = grunt.file.read( file );
            var basename = path.basename( file, '.md' );

            var fname = path.join( dest, basename + '.html' );

            var args = {
              file: file,
              href: basename + '.html',
              title: basename,
              description: '',
              category: 'main'
            };

            content = content.replace( /<![ \r\n\t]*--META(([^\-]|[\r\n]|-[^\-])*)--[ \r\n\t]*>/g, function ( a, b ) {
              var val = JSON.parse( b );
              args = lib.extend( true, args, val );
              console.log( 'args', args );
              return ''; // remove the entire metadata comment
            } );

            opts.beforeMarkdownExpand && ( content = opts.beforeMarkdownExpand( content, args ));

            var processed = marked( content );

            opts.afterMarkdownExpand && ( processed = opts.afterMarkdownExpand( processed, args ));

            return {
              content: content,
              metadata: args,
              file: file,
              dest: fname,
              basename: basename,
              parsedContent: processed
            };
          } );

          entries.forEach(function ( entry ) {
            var processed = pageTemplate.render( {
              entry: entry,
              pages: entries.map(function ( ele ) {
                return ele.metadata;
              } )
            } );

            grunt.file.write( entry.dest, processed );
            grunt.log.ok( 'File created: ' + entry.dest );
          } );

        } );
      }
    }
  } );
};
