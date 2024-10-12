import { resolve } from 'node:path'
import { promises as fsPromises } from 'node:fs'

const root = resolve('./')

async function run() {
  const content = await fsPromises.readFile(resolve(root, 'package.json'), 'utf8')
  const packageJson = JSON.parse(content)
  delete packageJson.exports
  delete packageJson.private
  await fsPromises.writeFile(resolve(root, 'dist/package.json'), JSON.stringify(packageJson, null, 2))
}

run()
