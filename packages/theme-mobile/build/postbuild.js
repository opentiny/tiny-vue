const { resolve } = require('node:path')
const { promises: fsPromises } = require('node:fs')

const root = resolve('./')

async function run() {
  const content = await fsPromises.readFile(resolve(root, 'package.json'), 'utf8')
  const packageJson = JSON.parse(content)
  delete packageJson.exports
  delete packageJson.private
  await fsPromises.writeFile(resolve(root, 'dist/package.json'), JSON.stringify(packageJson, null, 2))
}

run()
