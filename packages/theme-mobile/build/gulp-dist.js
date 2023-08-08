/**
 * 打包 src 目录到 dist 目录
 */

const gulp = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-clean-css')
const prefixer = require('gulp-autoprefixer')
const fg = require('fast-glob')
const fs = require('node:fs')

const source = '../src'
const dist = '../dist'

// 将组件下的index.less合并到src.less
const fileList = fg.sync('../src/**/index.less')
const importStr = fileList
  .map((filePath) => filePath.replace('../src/', ''))
  .filter((path) => path !== 'index.less')
  .map((path) => `@import './${path}';`)
fs.writeFileSync('../src/index.less', importStr.join('\n'))

gulp.task('compile', () => {
  return gulp
    .src([`${source}/**/index.less`, `${source}/index.less`])
    .pipe(less())
    .pipe(
      prefixer({
        borwsers: ['last 1 version', '> 1%', 'not ie <= 8'],
        cascade: true,
        remove: true
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest(dist))
})

gulp.task('copycssvar', () => {
  return gulp.src([`${source}/**/*.js`, `${source}/index.js`], { allowEmpty: true }).pipe(gulp.dest(`${dist}`))
})

gulp.task('copysvgs', () => {
  return gulp.src([`${source}/svgs/**`]).pipe(gulp.dest(`${dist}/svgs`))
})

gulp.task('copyimage', () => {
  return gulp.src([`${source}/images/**`]).pipe(gulp.dest(`${dist}/images`))
})

gulp.task('build', gulp.series('compile', 'copycssvar', 'copysvgs', 'copyimage'))
