const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
var del = require('del');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        },
    })
});

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.reload({
    stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

var runSequence = require('run-sequence');

//Definicja tasków
gulp.task('build', function (callback) {
  runSequence('clean:dist','watch', 'sass', 'browserSync',callback)
});