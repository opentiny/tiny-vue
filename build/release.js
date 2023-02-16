/**
 * 用于发布 @opentiny/vue 包
 */
const fs = require('fs-extra')
const path = require('path')
const semver = require('semver')
const { execSync } = require('child_process')
const sourcePkg = 'packages'
const source = 'dist'
const packageName = 'package.json'
const packagePath = path.join(source, packageName)
const packageJSON = fs.readJSONSync(packageName)

const keys = ['name', 'version', 'description', 'main', 'files', 'sideEffects', 'author', 'license', 'repository', 'dependencies', 'engines', 'browserslist']

const allDist = 'allDist'
const toOneZip = process.env.tiny_mode === 'pc'
const NPM_TAG = process.env.NPM_TAG
// 命令行中指定的版本号
const VERSION_TAG = process.env.VERSION_TAG
const NPM_WAREHOUSE = process.env.NPM_WAREHOUSE

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
  const { getComponents } = require('./module-utils')
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

// 根据组件列表信息重新package.json的dependencies信息
packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, genDependencies())

fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
fs.copySync(packagePath, path.join(source, 'vue', packageName), {
  overwrite: true
})

if (toOneZip) {
  const vuePackage = path.join(allDist, 'vue')

  if (!fs.existsSync(allDist)) {
    fs.mkdirSync(allDist)
  }

  if (!fs.existsSync(vuePackage)) {
    fs.mkdirSync(vuePackage)
  }

  fs.copyFileSync(packageName, path.join(vuePackage, packageName))

  fs.readdirSync(source).forEach((item) => {
    const stat = fs.statSync(path.join(source, item))

    if (!stat.isDirectory()) {
      fs.copyFileSync(path.join(source, item), path.join(vuePackage, item))
    }
  })
} else {
  const entrys = ['pc.js', 'mobile.js', 'index.js']

  entrys.forEach((name) => {
    fs.copyFileSync(path.join(sourcePkg, name), path.join(source, name))
    fs.copySync(path.join(sourcePkg, name), path.join(source, 'vue', name), {
      overwrite: true
    })
  })
  // 只有在发布npm测试仓库的时候才执行以下压缩包的逻辑
  if (NPM_WAREHOUSE === 'test') {
    execSync('npm pack', { cwd: source })

    fs.readdirSync(source).forEach((item) => {
      if (item.endsWith('.tgz')) {
        const tgzPath = path.join(source, item)

        fs.moveSync(tgzPath, path.join('tgzs', item), { overwrite: true })
      }
    })
  }
}
