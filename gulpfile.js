var gulp = require('gulp'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');;

gulp.task('default', function() {
  gulp.start('watch');
});

gulp.task('watch', ['minify-css', 'minify-js'], function() {
  gulp.watch('./public/css/**/*.scss', ['minify-css']);
  gulp.watch('./public/javascript/**/*.js', ['minify-js']);
});

gulp.task('minify-css', function() {
  gulp.src('./public/css/application.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ' before minification: ' + details.stats.originalSize);
      console.log(details.name + ' after minification: ' + details.stats.minifiedSize);
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('minify-js', function() {
  gulp.src('./public/javascript/application.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/javascript/'));
});
