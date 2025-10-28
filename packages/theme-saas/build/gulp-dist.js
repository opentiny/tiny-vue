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
const theme = '../theme'
const svgInlineOption = {
  maxImageSize: 1 * 1024 * 1024,
  extensions: [/\.svg/gi]
}
const allLessFiles = [`${source}/**/*.less`]
const lessFiles = [`${source}/**/index.less`, `${source}/index.less`, `${source}/dark-theme-index.less`]
const jsFiles = [`${source}/**/*.js`, `${source}/index.js`, '../tailwind.config.js']
const svgFiles = [`${source}/svgs/**`]
const imageFiles = [`${source}/images/**`]
const pluginFiles = [`${plugin}/**`]
const themeFiles = [`${theme}/**`]

const devDist = '../../tiny-vue/node_modules/@opentiny/vue-theme'
let syncToTinyVueProject = false

// 将所有组件下的index.less合并到src下的index.less
const fileList = fg.sync('../src/*/index.less')
const importStr = fileList
  .map((filePath) => filePath.replace('../src/', './'))
  .map((path) => `@import '${path}';`)
  .join('\n')
const note = fs.readFileSync('../src/index.less', { encoding: 'utf-8' }).match(/(^\/\*\*.+?\*\/)/s)[0]
fs.writeFileSync('../src/index.less', `${note}\n\n${importStr}`)

function compile() {
  const tailwindcss = require('tailwindcss')

  console.log('开始编译LESS文件...')
  console.log('处理的文件:', lessFiles)

  const task = gulp
    .src(lessFiles, { since: gulp.lastRun(compile) })
    .on('error', (err) => {
      console.error('❌ 读取源文件时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .pipe(svgInline(svgInlineOption))
    .on('error', (err) => {
      console.error('❌ SVG内联处理时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .pipe(less())
    .on('error', (err) => {
      console.error('❌ LESS编译时出错:', err.message)
      console.error('错误堆栈:', err.stack)
      console.error('文件路径:', err.filename)
      console.error('行号:', err.line)
      console.error('列号:', err.column)
    })
    .pipe(postcss([tailwindcss('../tailwind.config.js'), require('autoprefixer')]))
    .on('error', (err) => {
      console.error('❌ PostCSS处理时出错:', err.message)
      console.error('错误堆栈:', err.stack)
      console.error('插件:', err.plugin)
      if (err.file) console.error('文件:', err.file)
      if (err.line) console.error('行号:', err.line)
      if (err.column) console.error('列号:', err.column)
    })
    .pipe(
      prefixer({
        borwsers: ['last 1 version', '> 1%', 'not ie <= 8'],
        cascade: true,
        remove: true
      })
    )
    .on('error', (err) => {
      console.error('❌ Autoprefixer处理时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .pipe(svgInline(svgInlineOption))
    .on('error', (err) => {
      console.error('❌ 第二次SVG内联处理时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .pipe(cssmin())
    .on('error', (err) => {
      console.error('❌ CSS压缩时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .pipe(gulp.dest(dist))
    .on('error', (err) => {
      console.error('❌ 写入目标目录时出错:', err.message)
      console.error('错误堆栈:', err.stack)
    })
    .on('end', () => {
      console.log('✅ 编译完成，文件已输出到:', dist)
    })

  if (syncToTinyVueProject) {
    task
      .pipe(gulp.dest(devDist))
      .on('error', (err) => {
        console.error('❌ 同步到开发目录时出错:', err.message)
        console.error('错误堆栈:', err.stack)
      })
      .on('end', () => {
        console.log('✅ 文件已同步到开发目录:', devDist)
      })
  }

  return task
}

gulp.task('compile', (done) => {
  compile()
    .on('error', (err) => {
      console.error('❌ 编译任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 编译任务完成')
      done()
    })
})

function copyCssvar() {
  const task = gulp.src(jsFiles, { allowEmpty: true, since: gulp.lastRun(copyCssvar) }).pipe(gulp.dest(`${dist}`))

  if (syncToTinyVueProject) task.pipe(gulp.dest(devDist))

  return task
}

gulp.task('copycssvar', (done) => {
  copyCssvar()
    .on('error', (err) => {
      console.error('❌ 复制CSS变量任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 复制CSS变量任务完成')
      done()
    })
})

function copySvgs() {
  const task = gulp.src(svgFiles).pipe(gulp.dest(`${dist}/svgs`), { since: gulp.lastRun(copySvgs) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/svgs`))

  return task
}

gulp.task('copysvgs', (done) => {
  copySvgs()
    .on('error', (err) => {
      console.error('❌ 复制SVG文件任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 复制SVG文件任务完成')
      done()
    })
})

function copyImage() {
  const task = gulp.src(imageFiles).pipe(gulp.dest(`${dist}/images`), { since: gulp.lastRun(copyImage) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/images`))

  return task
}

gulp.task('copyimage', (done) => {
  copyImage()
    .on('error', (err) => {
      console.error('❌ 复制图片文件任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 复制图片文件任务完成')
      done()
    })
})

function copyPlugin() {
  const task = gulp.src(pluginFiles).pipe(gulp.dest(`${dist}/plugins`), { since: gulp.lastRun(copyPlugin) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/plugins`))

  return task
}

gulp.task('copyplugin', (done) => {
  copyPlugin()
    .on('error', (err) => {
      console.error('❌ 复制插件文件任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 复制插件文件任务完成')
      done()
    })
})

function copyTheme() {
  const task = gulp.src(themeFiles).pipe(gulp.dest(`${dist}/theme`), { since: gulp.lastRun(copyTheme) })

  if (syncToTinyVueProject) task.pipe(gulp.dest(`${devDist}/theme`))

  return task
}

gulp.task('copyTheme', (done) => {
  copyTheme()
    .on('error', (err) => {
      console.error('❌ 复制主题文件任务失败:', err.message)
      done(err)
    })
    .on('end', () => {
      console.log('✅ 复制主题文件任务完成')
      done()
    })
})

gulp.task('build', gulp.series('compile', 'copycssvar', 'copysvgs', 'copyimage', 'copyplugin', 'copyTheme'))

gulp.task('dev', () => {
  syncToTinyVueProject = true

  return gulp.watch(allLessFiles, gulp.series('compile'))
})
