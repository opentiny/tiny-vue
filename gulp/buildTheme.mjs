import gulp from 'gulp'
import less from 'gulp-less'
import cssmin from 'gulp-clean-css'
import svgInline from 'gulp-svg-inline'
import prefixer from 'gulp-autoprefixer'
import minimist from 'minimist'
import shell from 'shelljs'
import themeConcat from './themeConcat.mjs'

const argv = minimist(process.argv.slice(2))

const build = gulp.series(
  changeDir,
  themeConcat,
  cleanDist,
  compiler, // 编译
  gulp.parallel(copyThemeJs, copySvgs, copyImages), // 拷贝
  updateImageUrl,
  release,
  publish
)
build.description = '构建 @opentiny/theme'
build.flags = {
  '--ver': '设置版本号，比如  --ver 3.8.7',
  '--mobile  -m': '编译mobile',
  '--publish -p': '自动发布（提前修改好用户下的.npmrc）'
}
export default build

function changeDir(cb) {
  if (argv.m || argv.mobile) {
    shell.cd('packages/theme-mobile')
  } else {
    shell.cd('packages/theme')
  }
  cb()
}

function cleanDist(cb) {
  shell.rm('-rf', 'dist')
  cb()
}
const source = 'src'
const dist = 'dist'

// 编译所有的 index.less文件
function compiler() {
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
    .pipe(
      svgInline({
        maxImageSize: 1 * 1024 * 1024,
        extensions: [/\.svg/gi]
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest(dist))
}

// 这一步是否可以去掉了？？？？？？？？？？
function copyThemeJs() {
  return gulp
    .src([`${source}/**/*.js`], { allowEmpty: true }) //
    .pipe(gulp.dest(`${dist}`))
}

function copySvgs() {
  return gulp
    .src([`${source}/svgs/**`]) //
    .pipe(gulp.dest(`${dist}/svgs`))
}

function copyImages() {
  return gulp
    .src([`${source}/images/**`]) //
    .pipe(gulp.dest(`${dist}/images`))
}

// 将 dist/index.css 图片资源路径 ../images/ 改为 images
function updateImageUrl(cb) {
  shell.sed('-i', /url\(\.\.\/images/g, 'url(images', 'dist/index.css')

  cb()
}

function release(cb) {
  if (!argv.ver) {
    cb(new Error('必须填写 --ver 参数'))
  }

  shell.cp('README.md', 'dist/README.md')

  const pck = JSON.parse(shell.cat('package.json'))
  delete pck.exports
  delete pck.private
  pck.version = argv.ver

  shell.ShellString(JSON.stringify(pck, null, '  ')).to('dist/package.json')

  cb()
}

function publish(cb) {
  if (argv.p || argv.publish) {
    shell.cd('dist')
    shell.exec('npm publish')
  }
  cb()
}
