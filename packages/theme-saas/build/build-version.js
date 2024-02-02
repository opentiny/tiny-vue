/**
 * 修改package.json的版本号
 */

const fs = require('fs-extra')
const path = require('node:path')

const source = './'
const packageName = 'package.json'
const packagePath = path.join(source, packageName)
const packageJSON = fs.readJSONSync(packageName)

const getInputCmd = () => {
  const args = []
  const argv = process.argv || []

  argv.forEach((item) => {
    if (!item.includes(path.sep)) {
      args.push(item)
    }
  })

  return args
}

const inputArgs = getInputCmd()
const version = inputArgs[0]

if (!version) {
  // eslint-disable-next-line no-throw-literal
  throw 'Version is undefined!'
}

packageJSON.version = version

fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
