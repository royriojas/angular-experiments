module.exports = function ( grunt ) {

  var common = require( '../common.js' );
  //region ### test targets generator
  //takes a set of html files and genreate qunit-instambul tests that will also generate coverage report.
  return {
    // qunit phantomjs options
    options: {
      '--web-security': 'no',
      // coverage options.
      coverage: {
        // where to store the temporary files. They are removed after execution
        instrumentedFiles: 'temp/',
        // where to save the coverage reports. A folder with the name of the test will be created per each test.
        reportFolder: 'report/js/',
        // the minimum coverage thresholds. Currently set to 85
        linesThresholdPct: 100,
        statementsThresholdPct: 100,
        functionsThresholdPct: 100,
        branchesThresholdPct: 100
      }
    },
    // the actual target
    all: {
      // take all the files under the tests folder and create the qunit targets on the fly.
      //
      // by doing it this way adding a new test does not require any modification of this configuration file
      // the tests should have at least one referenced script with `data-cover`
      files: [ {
        src: [ common.FRONTEND_APP_FOLDER + 'tests/**/*.html' ],
        expand: true
      } ]
    }
  };
};
