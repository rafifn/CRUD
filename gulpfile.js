var gulp = require('gulp')
var config = require('./gulpfile.config')
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var runSequence = require('run-sequence')

gulp.task('default', function (callback) {
  runSequence('inject-html', callback)
  console.log('DONE')
})

gulp.task('inject-html', function () {
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(config.dev.css.concat(config.dev.js), {
      read: false
    })))
    // .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))

  console.log(config.dev.css.concat(config.dev.js))
})

gulp.task('watch', function() {
  gulp.watch('./assets/js/*.js', ['inject-html'])
  gulp.watch('./*.js', ['inject-html'])
  gulp.watch('./view/**/*.js', ['inject-html'])
  gulp.watch('./view/**/*.html', ['inject-html'])
  gulp.watch('./assets/css/*.css', ['inject-html'])
})

// gulp.task('dev', [
//   'inject-html',
//   'watch'
// ])
// gulp.task('build', [
//   'inject-html'
// ])