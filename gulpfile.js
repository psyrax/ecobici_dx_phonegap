'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');
var inject = require('gulp-inject');

gulp.task('wiredep', function(){
    gulp.src('./www/index.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./www'));
});

gulp.task('inject', function(){
	    return gulp.src('./www/index.html')
        .pipe(inject(gulp.src(['./www/js/**/*.js', './www/css/**/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./www'));
})

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'))
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});