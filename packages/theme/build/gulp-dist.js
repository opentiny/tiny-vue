/**
 * 打包 theme 目录到 dist 目录
 */

const gulp = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-clean-css')
const svgInline = require('gulp-svg-inline')
const prefixer = require('gulp-autoprefixer')

const source = '../src'
const dist = '../dist'
const svgInlineOption = {
  maxImageSize: 1 * 1024 * 1024,
  extensions: [/\.svg/gi]
}

gulp.task('compile', () => {
  return gulp
    .src([`${source}/**/index.less`, `${source}/index.less`])
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

gulp.task('build', gulp.series('compile', 'copycssvar', 'copysvgs', 'copyimage'))
