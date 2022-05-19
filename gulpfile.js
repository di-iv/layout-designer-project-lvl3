const { src, dest, parallel, series, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const aliases = require('gulp-style-aliases');
const { sassAliasesConfig, paths } = require('./params');

const svgConfig = {
  mode: {
    stack: {
      sprite: '../sprite.svg'
    }
  },
}

const sassCompile = () => {
  return src(paths.SCSS_ENTRY)
    .pipe(aliases(sassAliasesConfig))
    .pipe(sass())
    .pipe(dest(paths.BUILD_DIR))
    .pipe(browserSync.stream())
};

const pugCompile = () => {
    return src(paths.PUG_ENTRY)
      .pipe(pug())
      .pipe(dest(paths.BUILD_DIR))
      .pipe(browserSync.stream())
};

const imageCompile = () => {
  return src(paths.IMG_ENTRY)
    .pipe(dest(paths.IMG_BUILD_DIR))
}

const makeSprite = () => {
  return src(paths.SVG_ENTRY)
    .pipe(svgSprite(svgConfig))
    .pipe(dest(paths.BUILD_DIR))
    .pipe(browserSync.stream())
}

const browserSyncJob = () => {
  browserSync.init({
    server: paths.BUILD_DIR,
    open: false,
  });
  watch(paths.SCSS_WATCH, sassCompile);
  watch(paths.PUG_WATCH, pugCompile);
  watch(paths.IMG_WATCH, imageCompile);
  watch(paths.SVG_WATCH, makeSprite);
};

const cleanBuild = () => {
  return src(paths.BUILD_DIR, { 'allowEmpty': true } )
    .pipe(clean())
};

const build = series(cleanBuild, parallel(sassCompile, pugCompile, imageCompile, makeSprite));

exports.default = series(build, browserSyncJob);
exports.serve = series(build, browserSyncJob);
exports.build = build;
