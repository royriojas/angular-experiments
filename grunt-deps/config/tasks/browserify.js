module.exports = function(grunt) {
  return {
    main: {
      // the entry point of the developed app
      // from this file all the dependencies will be resolved
      // and included in the output bundle
      src: [ './src/js/main.js' ],
      // the destination
      dest: 'dist/js/app.js',
      bundleOptions: {
        debug: true
      },
      options: {
        // change the name which will be used to include the app
        // from the browser (using require)
        // alias: [ "./src/js/app.js" ],
        exclude: [ './node_modules/jquery/dist/jquery.js', './node_modules/angular/index.js' ],
        transform: [
          'browserify-shim'
          //, 'uglifyify'
        ]
      }
    }
  }
};