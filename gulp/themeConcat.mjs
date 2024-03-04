import fs from 'node:fs'
import fg from 'fast-glob'
import gulp from 'gulp'
import minimist from 'minimist'

themeConcat.description = '将 theme/src中所有的smb-theme.js aurora-theme.js合并到一起，放到theme/src/theme对应目录中去'
themeConcat.flags = {
  '--watch  -w': '开发时，进入watch模式，监听变化并立即合并 *-theme.js'
}

export default function themeConcat(cb) {
  const argv = minimist(process.argv.slice(2))
  concat(cb)
  if (argv.w || argv.watch) {
    gulp.watch('packages/theme/src/**/*-theme.js', concat)
  }
}

function concat(cb) {
  fg(['packages/theme/src/**/*-theme.js']).then((files) => {
    const ignoreNames = ['base', 'theme']
    // 1、遍历，返回全部 [{ name:'button', theme:'smb-theme'} ......]
    const components = files
      .map((file) => {
        const arr = file.split('/')
        const themeFile = arr.slice(-1)[0]
        const content = fs.readFileSync(file, { encoding: 'utf8' })
        return {
          name: arr.slice(-2)[0],
          theme: themeFile.substring(0, themeFile.indexOf('.')),
          content
        }
      })
      .filter((item) => !ignoreNames.includes(item.name))

    // 2、把混在一起的主题js文件分开，返回 {'aurora-theme':[],  'smb-theme':[]}
    const themes = {}
    components.forEach((comp) => {
      const key = comp.theme
      if (!themes[key]) {
        themes[key] = [comp]
      } else {
        themes[key].push(comp)
      }
    })

    // 3、写入各自的component.js 文件
    Object.entries(themes).forEach(([themeKey, components]) => {
      // 抓取每一个 xxx-theme.js文件，每个文件都是一个对象体
      let themeObjs = components.map((component) => {
        let src = component.content
        src = src.replace(/export[\s\S]*\{/, '{')
        src = `(${src})`
        // eslint-disable-next-line no-eval
        return eval(src)
      })

      // 把对象体的所有键值组合为一个对象
      let contents = 'export const concatTheme = {\n'
      themeObjs.forEach((obj) => {
        Object.keys(obj).forEach((token) => {
          contents += `  '${token}': '${obj[token]}',\n`
        })
      })
      contents += '}\n'

      fs.writeFileSync(`packages/theme/src/theme/${themeKey}/component.js`, contents)
    })
    cb()
  })
}
