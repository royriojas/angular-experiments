#!/usr/bin/env node

var exec = require( 'child_process' ).exec;
var Stream = require( 'stream' );

var createStream = function ( cb ) {
  var stream = new Stream();
  stream.writable = true;
  var first = true;
  stream.write = function ( data ) {

    if ( first ) {
      first = false;
      data = '  ' + data;
    }

    data = data.replace( /\n/g, '\n  ' );
    process.stdout.write( data );

  };
  stream.end = function () {
    // closed
  };
  return stream;
};

// hooks are always executed from the root
// directory of the git repo (the one where .git/ lives in)
process.chdir( './src/' );

console.log( '\n\x1B[33m\x1B[1m==========================================================' );
console.log( '               \x1B[1mValidation Hook Started!.' );
console.log( '==========================================================\n\x1B[22m\x1B[39m' );
var cp = exec( 'grunt newer:jsbeautifier:js-check', function ( err, stdout, stderr ) {
  console.log( 'beautifying... done!' );

  var regex = /needed\sbeautification/g;

  if ( regex.test( stdout )) {
    console.log( '\n\x1B[31m\x1B[1m###############################################################' );
    console.log( '#### VALIDATION FAILED. Add formatted files and try again. ####' );
    console.log( '###############################################################\x1B[22m\n\x1B[39m' );
    process.exit( 1 );
    return;
  }

  if ( err ) {
    console.log( '\n\x1B[31m\x1B[1m########################################################' );
    console.log( '#### VALIDATION FAILED, probably invalid grunt file ####' );
    console.log( '########################################################\x1B[22m\n\x1B[39m' );
    process.exit( 1 );
    return;
  }

  var cp2 = exec( 'grunt newer:jshint newer:jscs newer:jsvalidate', function ( err, stdout, stderr ) {
    if ( err ) {

      console.log( '\n\x1B[31m\x1B[1m#############################################################' );
      console.log( '#### VALIDATION FAILED, review your errors and try again ####' );
      console.log( '#############################################################\x1B[22m\n\x1B[39m' );

      process.exit( 1 );
    }

    console.log( 'validating jscs.. done!' );
    console.log( '\n\x1B[32m\x1B[1m==========================================================' );
    console.log( '               Validation Hook Completed!.' );
    console.log( '==========================================================\x1B[22m\x1B[39m\n' );
  } );

  cp2.stdout.pipe( createStream());
} );

cp.stdout.pipe( createStream());
