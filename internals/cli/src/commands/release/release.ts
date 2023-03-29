/**
 * 用于发布 @opentiny/vue 包
 *
 * process.env.RELEASE_MODE 值为 test 时，将生成类 node_modules 下的安装包
 *
 */
const fs = require('fs-extra')
const path = require('path')
const utils = require('../build/utils')
const { execSync } = require('child_process')
const { getComponents } = require('../build/module-utils')

const isBuildTest = process.env.RELEASE_MODE === 'test'
const isVue2 = utils.isBuildForVue2()
const source = `dist-vue${isVue2 ? 2 : 3}`
const typesDir = `typings-vue${isVue2 ? 2 : 3}`
const packageName = 'package.json'
const packagePath = path.join(source, packageName)
const packageJSON = fs.readJSONSync(packageName)
const inputArgs = utils.getInputCmd() // 对应 build:version 的参数
const { isTestEnv, tag } = utils.getBuildTag({ isVue2, version: inputArgs[0] })

const keys = [
  'name',
  'version',
  'description',
  'main',
  'files',
  'sideEffects',
  'author',
  'license',
  'repository',
  'dependencies',
  'engines',
  'browserslist'
]

for (let key in packageJSON) {
  !~keys.indexOf(key) && delete packageJSON[key]
}

if (isVue2) {
  packageJSON.version = utils.getopentinyVersion({ isVue2 })
}

const genDependencies = () => {
  const dependencies = {}
  let version

  if (isTestEnv) {
    version = tag
  }

  getComponents(false).forEach((component) => {
    const packPath = component.path.replace(/index\.js$/, 'package.json')

    if (!fs.existsSync(packPath) || component.inEntry === false) {
      return
    }

    if (!isTestEnv) {
      version = utils.getPackageVersion({ name: component.LowerName, isVue2 })
    }

    dependencies[component.importName] = version
  })

  return dependencies
}

packageJSON.types = "index.d.ts"
packageJSON.dependencies = Object.assign({}, genDependencies())
utils.changePackageName({ packageJSON, isVue2 })

fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))

if (isBuildTest) {
  fs.copySync(source, path.join('tgzs', 'vue'), { overwrite: true })
} else {
  // copy ts 声明文件
  if (fs.existsSync(typesDir)) {
    const entrys = ['index', 'pc', 'mobile', 'mobile-first']

    entrys.forEach((name) => {
      const filename = `${name}.d.ts`

      fs.copyFileSync(path.join(typesDir, filename), path.join(source, filename))
    })
  }

  execSync('npm pack', { cwd: source })

  fs.readdirSync(source).forEach((item) => {
    if (item.endsWith('.tgz')) {
      const tgzPath = path.join(source, item)

      fs.moveSync(tgzPath, path.join('tgzs', item), { overwrite: true })
    }
  })
}

utils.logGreen(`npm run release:vue${isVue2 ? 2 : 3} done.`)
