/**
 * 用于发布 @opentiny/vue 包
 */
const fs = require('fs-extra')
const path = require('path')
const semver = require('semver')
const sourcePkg = 'packages'
const source = 'dist'
const packageName = 'package.json'
const typings = 'typings'
const packagePath = path.join(source, packageName)
const packageJSON = fs.readJSONSync(packageName)

const keys = [
  'name',
  'version',
  'description',
  'main',
  'files',
  'sideEffects',
  'author',
  'license',
  'home',
  'repository',
  'dependencies',
  'engines',
  'browserslist'
]

const NPM_TAG = process.env.NPM_TAG
// 命令行中指定的版本号
const VERSION_TAG = process.env.VERSION_TAG

for (let key in packageJSON) {
  if (Object.prototype.hasOwnProperty.call(packageJSON, key)) {
    !~keys.indexOf(key) && delete packageJSON[key]
  }
}

// 配置指定的版本号
if (VERSION_TAG) {
  packageJSON.version = VERSION_TAG
}

// 根据modules.json生成所有组件列表信息
const genDependencies = () => {
  const { getComponents } = require('../build/module-utils')
  let dependencies = {}

  getComponents(false).forEach((component) => {
    const packPath = component.path.replace(/index\.js$/, 'package.json')

    if (!fs.existsSync(packPath)) {
      return
    }

    if (NPM_TAG) {
      dependencies[component.importName] = NPM_TAG
    } else {
      let { version } = fs.readJSONSync(packPath)

      if (version) {
        const major = semver.major(version)
        const minor = semver.minor(version)

        version = `${major}.${minor}.0`
        dependencies[component.importName] = '~' + version
      }
    }
  })

  return dependencies
}

if (VERSION_TAG.startsWith('3')) {
  packageJSON.types = 'index.d.ts'
}

// 根据组件列表信息重新package.json的dependencies信息
packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, genDependencies())

fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
fs.copySync(packagePath, path.join(source, 'vue', packageName), {
  overwrite: true
})

const entrys = ['pc.js', 'mobile.js', 'index.js']

entrys.forEach((name) => {
  fs.copySync(path.join(sourcePkg, name), path.join(source, 'vue', name), {
    overwrite: true
  })
  if (VERSION_TAG.startsWith('3')) {
    fs.copySync(path.join(typings, name.replace('.js', '.d.ts')), path.join(source, 'vue', name.replace('.js', '.d.ts')), {
      overwrite: true
    })
  }
})
