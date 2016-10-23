var gulp = require('gulp');

var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('tests.run', function() {
	return gulp.src('./responseHandlers/*.spec.js')
		.pipe(jasmine({verbose: true}));

});

gulp.task('tests.watch', function() {
	gulp.run('tests.run')
	gulp.watch('./responseHandlers/*.js', ['tests.run']);
});