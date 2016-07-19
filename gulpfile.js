// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate JS
 gulp.task('scripts', function() {
     return gulp.src('app/**/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist'));
 });
 
// Watch Files For Changes
 gulp.task('watch', function() {
     gulp.watch('js/*.js', ['lint', 'scripts']);
     gulp.watch('scss/*.scss', ['sass']);
 });

// Default Task
gulp.task('default', ['lint', 'scripts','watch']);