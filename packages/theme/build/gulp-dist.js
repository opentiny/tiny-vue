/**
 * 打包 theme 目录到 dist 目录
 */
import path from 'node:path'
import gulp from 'gulp'
import less from 'gulp-less'
import cssmin from 'gulp-clean-css'
import svgInline from 'gulp-svg-inline'
import prefixer from 'gulp-autoprefixer'
import fg from 'fast-glob'
import fs from 'node:fs'

const source = '../src'
const dist = '../dist'
const svgInlineOption = {
  maxImageSize: 1 * 1024 * 1024,
  extensions: [/\.svg/gi]
}

function _concatFiles(srcNames, targetName) {
  const fileList = fg.sync(srcNames)
  const importStr = fileList
    .map((filePath) => filePath.replace('../src/', './'))
    .map((path) => `@import '${path}';`)
    .join('\n')
  fs.writeFileSync(targetName, importStr)
}
// 1、将所有组件下的index.less合并到src下的index.less
function concatIndex(cb) {
  _concatFiles('../src/*/index.less', '../src/index.less')
  cb()
}
// 2、拼接所有组件的 old-theme.less 到一起   old-theme-index.less
function concatOldTheme(cb) {
  _concatFiles('../src/*/old-theme.less', '../src/old-theme-index.less')
  cb()
}
// 3、编译
gulp.task('compile', () => {
  return gulp
    .src([
      `${source}/**/index.less`, // 编译默认主题
      `${source}/index.less`,
      `${source}/old-theme-index.less` // 编译旧主题
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

// 4、把 src/svgs 复制到 dist/svgs
gulp.task('copysvgs', () => {
  return gulp.src([`${source}/svgs/**`]).pipe(gulp.dest(`${dist}/svgs`))
})
// 5、把 src/images 复制到 dist/images
gulp.task('copyimage', () => {
  return gulp.src([`${source}/images/**`]).pipe(gulp.dest(`${dist}/images`))
})

// 6、将 dist 目录 index.css 图片资源路径 ../images/ 改为 images
function replaceImagesUrl(cb) {
  const entryFile = path.join('../dist', 'index.css')
  let file = fs.readFileSync(entryFile, 'utf8')
  file = file.replace(/url\(\.\.\/images\//g, 'url(images/')
  fs.writeFileSync(entryFile, file, 'utf8')
  cb()
}

gulp.task('build', gulp.series(concatIndex, concatOldTheme, 'compile', 'copysvgs', 'copyimage', replaceImagesUrl))
