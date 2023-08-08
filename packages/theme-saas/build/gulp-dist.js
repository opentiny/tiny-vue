/**
 * 打包 theme 目录到 dist 目录
 */

const gulp = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-clean-css')
const svgInline = require('gulp-svg-inline')
const prefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const fg = require('fast-glob')
const fs = require('node:fs')

const source = '../src'
const dist = '../dist'
const plugin = '../plugins'
const svgInlineOption = {
  maxImageSize: 1 * 1024 * 1024,
  extensions: [/\.svg/gi]
}

// 将组件下的index.less合并到src.less
const fileList = fg.sync('../src/**/index.less')
const importStr = fileList
  .map((filePath) => filePath.replace('../src/', ''))
  .filter((path) => path !== 'index.less')
  .map((path) => `@import './${path}';`)
fs.writeFileSync('../src/index.less', importStr.join('\n'))

const allLessFiles = [`${source}/**/*.less`]
const lessFiles = [`${source}/**/index.less`, `${source}/index.less`]
const jsFiles = [`${source}/**/*.js`, `${source}/index.js`, '../tailwind.config.js']
const svgFiles = [`${source}/svgs/**`]
const imageFiles = [`${source}/images/**`]
const pluginFiles = [`${plugin}/**`]

const devDist = '../../tiny-vue/node_modules/@opentiny/vue-theme'
let syncToTinyVueProject = false

function compile() {
  const tailwindcss = require('tailwindcss')

  const task = gulp
    .src(lessFiles, { since: gulp.lastRun(compile) })
    .pipe(svgInline(svgInlineOption))
    .pipe(less())
    .pipe(postcss([tailwindcss('../tailwind.config.js'), require('autoprefixer')]))
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

  if (syncToTinyVueProject) task.pipe(gulp.dest(devDist))

  return task
}

gulp.task('compile', compile)

function copyCssvar() {
  const task = gulp.src(jsFiles, { allowEmpty: true, since: gulp.lastRun(copyCssvar) }).pipe(gulp.dest(`${dist}`))

  if (syncToTinyVueProject) task.pipe(gulp.dest(devDist))

  return task
}

gulp.task('copycssvar', copyCssvar)

function copySvgs() {
  const task = gulp.src(svgFiles).pipe(gulp.dest(`${dist}/svgs`), { since: gulp.lastRun(copySvgs) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/svgs`))

  return task
}

gulp.task('copysvgs', copySvgs)

function copyImage() {
  const task = gulp.src(imageFiles).pipe(gulp.dest(`${dist}/images`), { since: gulp.lastRun(copyImage) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/images`))

  return task
}

gulp.task('copyimage', copyImage)

function copyPlugin() {
  const task = gulp.src(pluginFiles).pipe(gulp.dest(`${dist}/plugins`), { since: gulp.lastRun(copyPlugin) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/plugins`))

  return task
}

gulp.task('copyplugin', copyPlugin)

gulp.task('build', gulp.series('compile', 'copycssvar', 'copysvgs', 'copyimage', 'copyplugin'))

gulp.task('dev', () => {
  return gulp.watch(allLessFiles, gulp.series('compile'))
})
