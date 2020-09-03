const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');

// Styles

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('source/css'))
    .pipe(sync.stream());
}

const buildStyles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
}

const fonts = () => gulp.src('source/fonts/*').pipe(gulp.dest('build/fonts'));

const html = () => {
  return gulp.src('source/*.html')
    .pipe(replace('style.css', 'style.min.css'))
    .pipe(gulp.dest('build'));
}

const js = () => gulp.src('source/js/*.js').pipe(gulp.dest('build/js'));

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo(),
    ]))
    .pipe(gulp.dest('build/img'));
};

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
    browser: 'Firefox Developer Edition',
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('source/*.html').on('change', sync.reload);
}

// Other

const clean = () => del('build');

const build = gulp.parallel(
  buildStyles,
  fonts,
  html,
  js,
  images
);

exports.build = gulp.series(clean, build);

exports.default = gulp.series(
  styles, server, watcher
);
