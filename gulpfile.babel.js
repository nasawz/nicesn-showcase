import gulp from 'gulp';
import gulpLoadplugin from 'gulp-load-plugins';
import merge from 'merge-stream';
import minifyCss from "gulp-minify-css";
import minimist from 'minimist';
const $ = gulpLoadplugin();

const argv = minimist(process.argv.slice(2));
console.log(argv);
const DEBUG = !argv.release;
const cssDist = 'www/static/dist/css';
const fontsDist = 'www/static/dist/fonts';

// Compile and automatically prefix stylesheets
gulp.task('web styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'chrome >= 40',
    'ie >= 10',
    'ff >= 30',
    'safari >= 7',
    'opera >= 23'
  ];

  function compile(src, dist) {
    return DEBUG ? src.pipe($.changed('.tmp/styles', {
      extension: '.css'
    }))
      .pipe($.sourcemaps.init())
      .pipe($.less({
        sourceComments: true,
        includePaths: ['www/static/src/style', 'node_modules']
      }))
      .pipe($.autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS.slice(0, 1)
      }))
      .pipe($.concat(dist))
      .pipe(gulp.dest('.tmp'))
      .pipe($.sourcemaps.write('.', {
        includeContent: true,
        sourceRoot: '/static/src/style'
      }))
      .pipe(gulp.dest(cssDist))
      .pipe($.size({
        title: 'web styles'
      })) : src
      .pipe($.less({
        outputStyle: 'compressed',
        includePaths: ['www/static/src/style', 'node_modules']
      }))
      .pipe($.autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS
      }))
      .pipe($.concat(dist))
      .pipe(gulp.dest(cssDist))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(gulp.dest(cssDist))
      .pipe($.size({
        title: 'web styles'
      }));
  }
  gulp.src('www/static/src/fonts/*')
    .pipe(gulp.dest(fontsDist));
  return compile(gulp.src(['www/static/src/style/**/*.{css,less}']), 'web.css');
});
