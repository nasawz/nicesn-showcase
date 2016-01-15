import gulp from 'gulp';
import gulpLoadplugin from 'gulp-load-plugins';
import merge from 'merge-stream';
import minimist from 'minimist';
const $ = gulpLoadplugin();

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const webDist = 'www/static/dist';

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
    return src.pipe($.changed('.tmp/styles', {
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
      .pipe(gulp.dest(webDist))
      .pipe($.size({
        title: 'web styles'
      }))
  }

  return compile(gulp.src(['www/static/src/style/**/*.{css,less}']), 'web.css');
});
