import { resolve } from 'node:path'
import { promises as fs } from 'node:fs'

async function run() {
  const content = await fs.readFile(resolve('package.json'), 'utf8')
  const packageJson = JSON.parse(content)

  const dependenciesVersion = `~${packageJson.version.split('.').slice(0, 2).join('.')}.0`
  packageJson.dependencies['@opentiny/utils'] = dependenciesVersion
  packageJson.dependencies['@opentiny/vue-hooks'] = dependenciesVersion

  delete packageJson.exports
  delete packageJson.private
  await fs.writeFile(resolve('dist', 'package.json'), JSON.stringify(packageJson, null, 2))
}

void run()
