module.exports = function (grunt) {
  return {
    all: {
      files: 'src/**/*.js',
      tasks: ['jshint', 'jsvalidate', 'jscs', 'browserify'],
      options: {
        debounceDelay: 250
      }
    }
  };
};