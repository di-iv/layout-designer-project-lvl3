const SRC_DIR = 'app';
const BUILD_DIR = 'build';

module.exports.sassAliasesConfig = {
  '~': './node_modules',
  '@': './src'
}

module.exports.paths = {
  SCSS_ENTRY: `${SRC_DIR}/scss/index.scss`,
  PUG_ENTRY: `${SRC_DIR}/pug/pages/*.pug`,
  IMG_ENTRY: `${SRC_DIR}/assets/images/**/*`,
  SVG_ENTRY: `${SRC_DIR}/assets/icons/**/*.svg`,
  SCSS_WATCH: `${SRC_DIR}/scss/**/*.scss`,
  PUG_WATCH: `${SRC_DIR}/pug/**/*.pug`,
  IMG_WATCH: `${SRC_DIR}/assets/images/**/*`,
  SVG_WATCH: `${SRC_DIR}/assets/icons/**/*.svg`,
  BUILD_DIR: BUILD_DIR,
  IMG_BUILD_DIR: `${BUILD_DIR}/images`,
}
