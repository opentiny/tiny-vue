/**
 * 批量更新组件版本号，一般用于大版本发布
 *  npm run build:version ${targetVersion} ${tag} ${single-components}|null[build all pkg]
 * example:
 *  发布 @opentiny/vue-alert@next 和 @opentiny/vue-button@next 命令:
 *    npm run build:version '0.1.0' 'next' 'alert button'
 *  发布全量包@next:
 *    npm run build:version '0.1.0' 'next'
 */
const fs = require('fs-extra')
const path = require('path')
const ROOT_PATH = path.join(__dirname, '..')
const TYPE = process.env.TYPE
const isFullVersionUpdate = true
const TAG = process.argv[3] === 'false' ? '' : process.argv[3]
const packages = path.join(ROOT_PATH, 'packages')
const pkgJsonFileName = 'package.json'
const { logGreen } = require('./utils')
const tinyVueReg = /@huawei\//

const targetVersion = process.argv[2] || JSON.parse(fs.readFileSync(path.join(ROOT_PATH, pkgJsonFileName)).toString()).version

const isUpdateDependenciesVersion = true // process.argv[3] === 'true'
const single = process.argv[4]
const targetVersionArr = targetVersion.split('.')
const oldVersion = `${targetVersionArr[0]}.${targetVersionArr[1] - 1}.0`
const targetVersionDependencies = `${targetVersionArr[0]}.${targetVersionArr[1]}.0`

const isTinyVuePkg = (str) => tinyVueReg.test(str || '')

const replaceDependenciesForTag = (obj) => {
  for (let key in obj) {
    if (isTinyVuePkg(key)) {
      obj[key] = TAG
    }
  }

  return obj
}

const replaceDependencies = (obj) => {
  for (let key in obj) {
    if (isTinyVuePkg(key) && /~/.test(obj[key])) {
      obj[key] = obj[key].replace(isUpdateDependenciesVersion ? /[0-9]+\.[0-9]+\.[0-9]+/ : oldVersion, targetVersionDependencies)
    }
  }

  return obj
}

const buidPackages = (dirs) => {
  let uiArr

  if (single) {
    uiArr = single.trim().split(' ')
  }

  fs.readdirSync(dirs).forEach((name) => {
    if (uiArr && !uiArr.includes(name)) {
      return
    }

    const component = path.join(dirs, name)

    if (name === 'src' || !fs.statSync(component).isDirectory()) {
      return
    }

    let pkgJsonFile, pkgJson

    try {
      pkgJsonFile = path.join(component, pkgJsonFileName)
      pkgJson = JSON.parse(fs.readFileSync(pkgJsonFile).toString())
    } catch (error) {
      return
    }

    if (isTinyVuePkg(pkgJson.name)) {
      const arr = ['dependencies', 'devDependencies']

      pkgJson.version = single || isFullVersionUpdate ? targetVersion : targetVersionDependencies

      arr.forEach((key) => {
        if (pkgJson[key]) {
          pkgJson[key] = TAG ? replaceDependenciesForTag(pkgJson[key]) : replaceDependencies(pkgJson[key])
        }
      })

      fs.writeFileSync(pkgJsonFile, JSON.stringify(pkgJson, null, 2))
    }

    if (name === 'chart') {
      buidPackages(component)
    }
  })
}

if (!targetVersion) {
  throw new Error('targetVersion is null, cmd example:\n npm run build:version 3.10.0 true "alert grid"')
}

const buildCommon = () => {
  const pkgJsonFile = path.join(ROOT_PATH, pkgJsonFileName)
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonFile).toString())

  pkgJson.version = targetVersion
  pkgJson.uiVersion = isFullVersionUpdate ? targetVersion : targetVersionDependencies
  pkgJson.srcVersion = isFullVersionUpdate ? targetVersion : targetVersionDependencies

  fs.writeFileSync(pkgJsonFile, JSON.stringify(pkgJson, null, 2))
  logGreen('update src version done')
}

const build = () => {
  buildCommon()

  if (TYPE === 'ui') {
    buidPackages(packages)
    logGreen('update all component version done')
  }
}

build()
