module.exports = function ( grunt ) {
  return {
    unit: {
      configFile: 'grunt-deps/karma.conf.js',
      singleRun: true,
      browsers: [ 'PhantomJS' ]
    }
  };
};
