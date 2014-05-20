module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
      'vendor/angular/angular-1.2.js',
      'vendor/angular/angular-ui-router.min.js',
      'vendor/angular/angular-mocks.js',
      'dist/js/app2.js',
      'tests/home_test.js'
    ],
    browsers: ['Chrome'],

    reporters: ['progress', 'spec','coverage', 'junit', 'osx'],
    preprocessors: { 'dist/js/app2.js': ['coverage'] },

    singleRun: true

  });
};
