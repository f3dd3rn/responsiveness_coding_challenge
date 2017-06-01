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
  gulp.watch('./assets/css/**/*.scss', ['minify-css']);
  gulp.watch('./assets/javascript/**/*.js', ['minify-js']);
});

gulp.task('minify-css', function() {
  gulp.src('./assets/css/application.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ' before minification: ' + details.stats.originalSize);
      console.log(details.name + ' after minification: ' + details.stats.minifiedSize);
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('minify-js', function() {
  gulp.src('./assets/javascript/application.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/javascript/'));
});
