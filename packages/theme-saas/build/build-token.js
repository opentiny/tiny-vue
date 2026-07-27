const fs = require('node:fs')
const path = require('node:path')

const { loadCssVar } = require('../plugins/loadTheme.js')
const designToken = require('../theme/theme.json')

const borderRadiusToken = loadCssVar(designToken.baseLayout.radius)

const sourceFile = path.resolve(__dirname, '../src/base/reset.less')
const destFile = path.resolve(__dirname, '../src/base/reset-copy.less')
let additions = '\nhtml {\n'

for (let key in borderRadiusToken) {
  additions += `${key}: ${borderRadiusToken[key]};\n`
}

additions += '}'

fs.copyFile(sourceFile, destFile, (err) => {
  if (err) {
    console.error('Failed to copy file:', err)
    return
  }
  console.error('File copied successfully!')
})

fs.readFile(sourceFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Failed to read file:', err)
    return
  }

  const newData = data + additions
  fs.writeFile(sourceFile, newData, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write to file:', err)
      return
    }
    console.error('File modified successfully!')
  })
})
