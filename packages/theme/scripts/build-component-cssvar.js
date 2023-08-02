const fs = require('node:fs')
const fg = require('fast-glob')

const ignoreNames = ['base', 'theme']

fg(['**/*-theme.js']).then((files) => {
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

  const themes = groupBy(components, (item) => item.theme)

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
    fs.writeFileSync(`src/theme/${themeKey}/component.js`, contents)
  })
})

function groupBy(array, fn) {
  const map = {}
  array.forEach((item) => {
    const key = fn(item)
    const collection = map[key]
    if (!collection) {
      map[key] = [item]
    } else {
      collection.push(item)
    }
  })
  return map
}
