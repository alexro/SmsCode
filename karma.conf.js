module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/client/lib/angular/angular.min.js',
      'src/client/lib/angular-mocks/angular-mocks.js',
      'src/client/main*.js'
    ],
    exclude: [
    ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress'],
    preprocessors: {
      "src/client/main*.js": 'coverage'
    }

  });
};
