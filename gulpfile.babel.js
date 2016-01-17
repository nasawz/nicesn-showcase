import browserSync from 'browser-sync';
import chalk from 'chalk';
import del from 'del';
import gulp from 'gulp';
import gulpLoadplugin from 'gulp-load-plugins';
import merge from 'merge-stream';
import minifyCss from "gulp-minify-css";
import minimist from 'minimist';
import runSequence from 'run-sequence';
import webpack from 'webpack';

import serverConfig from './src/common/config/config.js'
import webpackConfig from './webpack.config';

const $ = gulpLoadplugin();

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const serverDist = 'app';
const webDist = 'www/static/dist';
const cssDist = 'www/static/dist/css';
const fontsDist = 'www/static/dist/fonts';
let WATCH = false;


// Build all files, the default task
gulp.task('default', ['clean'], cb => {
  $.util.log('DEBUG: ', DEBUG ? chalk.red('ON') : chalk.green('OFF'));
  runSequence('web', 'clean-tmp', cb);
});

// Watch files for changes
gulp.task('watch', cb => {
  WATCH = true;

  gulp.watch(['www/static/src/**/*.{js,jsx}'], ['web scripts']);
  gulp.watch(['www/static/src/style/**/*.{css,less}'], ['web styles']);

  runSequence('default', cb);
});

// Build-in server for developer
gulp.task('serve', ['watch'], () => {
  browserSync({
    proxy: `127.0.0.1:${serverConfig.port}`,
    reloadDebounce: 500,
    open: false
  });

  let reload = browserSync.reload;

  // gulp.watch(`${webDist}/*.{css,js}`, reload);
  // gulp.watch(`www/static/dist/css/**`, reload);
  gulp.watch(`www/static/dist/js/**`, reload);
// gulp.watch(`www/static/dist/images/**`, reload);
// gulp.watch(`www/static/dist/fonts/**`, reload);
});

// Clean output directory and temporary directory
gulp.task('clean', cb => del(['.tmp', webDist], {
    dot: true
  }, cb));
gulp.task('clean-tmp', cb => del(['.tmp'], {
    dot: true
  }, cb));

// Compile web
gulp.task('web', ['web scripts', 'web styles']);

// Compile web scripts by webpack
gulp.task('web scripts', callback => {
  const bundler = webpack(webpackConfig);
  let flag = true;

  let bundle = function(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({
      hash: false,
      version: false,
      chunkModules: false
    }));
    flag && callback();
    flag = false;
  };

  if (WATCH) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});


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
