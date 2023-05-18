const fs = require('fs')
const fg = require('fast-glob')

const ignoreNames = ['base', 'theme']

fg(['**/*-theme.js']).then((files) => {
  const components = files
    .map((file) => {
      const arr = file.split('/')
      const themeFile = arr.slice(-1)[0]
      return {
        name: arr.slice(-2)[0],
        theme: themeFile.substring(0, themeFile.indexOf('.')),
      }
    })
    .filter((item) => !ignoreNames.includes(item.name))

  const themes = groupBy(components, item => item.theme)

  Object.entries(themes).forEach(([themeKey, components]) => {
    const contents = components.map(component => `export * from '../../${component.name}/${themeKey}'`).join('\n')
    fs.writeFileSync(`src/theme/${themeKey}/component.js`, contents)
  })

  console.log('build component css var done.')
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
