/** 把图标打包为 css, 参考：https://antfu.me/posts/icons-in-pure-css-zh */
import gulp from 'gulp'
import transform from 'gulp-transform'
import concat from 'gulp-concat'
import svgo from 'svgo'

// svg的明文替换
function encodeSvg(svg) {
  return svg
    .replace('<svg', ~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"')
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}

function genClass(name, data) {
  const mode = data.includes('currentColor') ? 'mask' : 'background-img'

  const uri = `url("data:image/svg+xml;utf8,${encodeSvg(data)}")`

  let rules
  // 单色图标
  if (mode === 'mask') {
    rules = {
      'mask': `${uri} no-repeat`,
      'mask-size': '100% 100%',
      '-webkit-mask-size': '100% 100%',
      'background-color': 'currentColor',
      'height': '1em',
      'width': '1em',
      'display': 'inline-block'
    }
  }
  // 彩色图标
  else {
    rules = {
      'background': `${uri} no-repeat`,
      'background-size': '100% 100%',
      'background-color': 'transparent',
      'height': '1em',
      'width': '1em',
      'display': 'inline-block'
    }
  }
  const rulesStr = Object.keys(rules)
    .map((key) => `${key}:${rules[key]};`)
    .join('')
  return `.ticon-${name}{${rulesStr}}`
}

function buildSvg(cb) {
  gulp
    .src('../src/svgs/*.svg')
    .pipe(
      // content是svg内容，  file:File对象
      transform('utf8', function (content, file) {
        const name = file.basename.slice(0, -4)
        const data = svgo.optimize(content).data
        return genClass(name, data)
      })
    )
    .pipe(concat('icon.css'))
    .pipe(gulp.dest('../src/base'))
  // 生成测试页面
  gulp
    .src('../src/svgs/*.svg')
    .pipe(
      transform('utf8', function (content, file) {
        const name = file.basename.slice(0, -4)
        return `<i class="ticon-${name}"></i>`
      })
    )
    .pipe(concat('icon.html'))
    .pipe(gulp.dest('../src/base'))

  cb()
}

export { buildSvg }
