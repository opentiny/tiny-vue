/**
 * 打包 theme 目录到 dist 目录
 */

const gulp = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-clean-css')
const svgInline = require('gulp-svg-inline')
const prefixer = require('gulp-autoprefixer')
const fg = require('fast-glob')
const fs = require('node:fs')
const { createTheme, removeDir } = require('./edit‐dir‐theme.js')
const { buildSvg } = require('./build-svg-to-css.js')

const source = '../src'
const dist = '../dist'
const distSmb = '../dist/smb-theme'
const distAurora = '../dist/aurora-theme'
const svgInlineOption = {
  maxImageSize: 1 * 1024 * 1024,
  extensions: [/\.svg/gi]
}

// 将所有组件下的index.less合并到src下的index.less
const fileList = fg.sync('../src/*/index.less')
const importStr = fileList
  .map((filePath) => filePath.replace('../src/', './'))
  .map((path) => `@import '${path}';`)
  .join('\n')
const note = fs.readFileSync('../src/index.less', { encoding: 'utf-8' }).match(/(^\/\*\*.+?\*\/)/s)[0]
fs.writeFileSync('../src/index.less', `${note}\n\n${importStr}`)

gulp.task('build-dir', createTheme)

gulp.task('build-svg', buildSvg)

gulp.task('compile', () => {
  return gulp
    .src([
      `${source}/**/index.less`,
      `${source}/aurora-theme/**/index.less`,
      `${source}/smb-theme/**/index.less`,
      `${source}/index.less`
    ])
    .pipe(svgInline(svgInlineOption))
    .pipe(less())
    .pipe(
      prefixer({
        borwsers: ['last 1 version', '> 1%', 'not ie <= 8'],
        cascade: true,
        remove: true
      })
    )
    .pipe(svgInline(svgInlineOption))
    .pipe(cssmin())
    .pipe(gulp.dest(dist))
})

gulp.task('copycssvar', () => {
  return gulp
    .src([`${source}/**/*.js`, `${source}/**/*.ts`, `${source}/index.js`], { allowEmpty: true })
    .pipe(gulp.dest(`${dist}`))
})

gulp.task('copysvgs', () => {
  return gulp.src([`${source}/svgs/**`]).pipe(gulp.dest(`${dist}/svgs`))
})

gulp.task('copyimage', () => {
  return gulp.src([`${source}/images/**`]).pipe(gulp.dest(`${dist}/images`))
})

gulp.task('copyimage-aurora', () => {
  return gulp.src([`${source}/aurora-theme/images/**`]).pipe(gulp.dest(`${distAurora}/images`))
})

gulp.task('copyimage-smb', () => {
  return gulp.src([`${source}/smb-theme/images/**`]).pipe(gulp.dest(`${distSmb}/images`))
})

gulp.task('remove-dir', removeDir)

gulp.task(
  'build',
  gulp.series(
    'build-dir',
    // 'build-svg',
    'compile',
    'copycssvar',
    'copysvgs',
    'copyimage',
    'copyimage-aurora',
    'copyimage-smb',
    'remove-dir'
  )
)
