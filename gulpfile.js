var gulp = require('gulp');

var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
const apiKey = require('./config.js').messenger.apikey;
const exec = require('child_process').exec;

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

gulp.task('suscribeApp', function (cb) {
  exec(`curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=${apiKey}"`, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})