var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.start('minify-css');
  gulp.start('watch');
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/**/*.scss', ['minify-css']);
});

gulp.task('minify-css', function() {
  gulp.src('./assets/css/application.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./assets/css/'));
});
