var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
    'src/client/lib/angular/angular.min.js',
    'src/client/lib/angular-mocks/angular-mocks.js',
    'src/client/main*.js'
];

gulp.task('test', function() {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('default', function() {

});