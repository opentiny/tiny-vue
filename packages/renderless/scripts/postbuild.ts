import { resolve } from 'node:path'
import { promises as fs } from 'node:fs'

async function run() {
  const content = await fs.readFile(resolve('package.json'), 'utf8')
  const packageJson = JSON.parse(content)
  packageJson.dependencies['@opentiny/utils'] = '^1.0.0'
  delete packageJson.exports
  delete packageJson.private
  await fs.writeFile(resolve('dist', 'package.json'), JSON.stringify(packageJson, null, 2))
}

void run()
