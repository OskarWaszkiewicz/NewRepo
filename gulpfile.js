const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();


const server = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
  });

  cb();
};

const css = function () {
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
};

const js = function (cb) {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
};

const html = function (cb) {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
};

const htmlReload = function (cb) {
  browserSync.reload();
  cb();
};

const watch = function () {
  gulp.watch("src/scss/**/*.scss", { usePolling: true }, gulp.series(css));
  gulp.watch("src/js/**/*.js", { usePolling: true }, gulp.series(js));
  gulp.watch("src/*.html", { usePolling: true }, gulp.series(html, htmlReload));
};

exports.default = gulp.series(css, html, js, server, watch);
exports.css = css;
exports.html = html;
exports.js = js;
exports.watch = watch;