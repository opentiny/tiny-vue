/**
 * 用于发布单组件包
 *
 * process.env.RELEASE_MODE 值为 test 时，将生成类 node_modules 下的安装包
 *
 */
import * as utils from '../../shared/utils.js'
import fs from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'

const isVue2 = utils.isBuildForVue2()
const packages = 'packages'
const dist = `dist${isVue2 ? 2 : 3}`
const tgzs = 'tgzs'
const packageName = 'package.json'
const isBuildTest = process.env.RELEASE_MODE === 'test'
const inputArgs = utils.getInputCmd() // 对应 build:version 的参数
const { isTestEnv, tag } = utils.getBuildTag({ isVue2, version: inputArgs[0] })
const typesDir = `typings-vue${isVue2 ? 2 : 3}`

let opentinyVueVersion

if (isTestEnv) {
  opentinyVueVersion = tag
} else {
  opentinyVueVersion = utils.getPackageVersion({ name: 'version', isRoot: true, isVue2 })
}

const { themeVersion, renderlessVersion, themeMobileVersion } = utils.getInnerDependenciesVersion({
  isTestEnv,
  tag,
  version: opentinyVueVersion
})

function modifyDependencyByComponentName(componentName, packageJSON, dependencies) {
  if (['icon', 'icon-saas'].includes(componentName)) {
    packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, {
      '@opentiny/vue-theme': themeVersion,
      '@opentiny/vue-common': opentinyVueVersion
    })
  } else if (componentName === 'locale') {
    // 不处理
  } else if (componentName === 'common') {
    if (componentName === 'common') {
      if (isVue2) {
        packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, { '@vue/composition-api': '1.2.2' })
      } else {
        packageJSON.peerDependencies = { 'vue': '^3.2.0' }
      }
    }
  } else {
    packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, dependencies)
  }
}

function setDependencyComponentPublichVersionVue2(packageJSON, componentName) {
  if (isVue2) {
    packageJSON.version = utils.getComponentOriginVersion({ name: componentName, isVue2 })

    const dependencies = packageJSON.dependencies

    for (let key in dependencies) {
      if (/@opentiny\/(vue-)/.test(key)) {
        packageJSON.dependencies[key] = utils.getPublichVersion({ version: dependencies[key], isVue2 })
      }
    }
  }
}

const release = (componentName) => {
  let packagePath = path.join(packages, componentName, packageName)
  const distPath = path.join(packages, componentName, dist)

  if (!fs.existsSync(packagePath) || !fs.existsSync(distPath)) {
    utils.logYellow(`${componentName} haven't ${packageName} or dist.`)
    return
  }

  const packageJSON = fs.readJSONSync(packagePath)
  const dependencies = {
    '@opentiny/vue-renderless': renderlessVersion,
    '@opentiny/vue-theme': themeVersion,
    '@opentiny/vue-theme-mobile': themeMobileVersion,
    '@opentiny/vue-common': opentinyVueVersion,
    '@opentiny/vue-icon': opentinyVueVersion
  }

  modifyDependencyByComponentName(componentName, packageJSON, dependencies)

  packageJSON.sideEffects = false
  packageJSON.type = 'module'
  packageJSON.types = 'index.d.ts'
  packagePath = path.join(distPath, packageName)

  setDependencyComponentPublichVersionVue2(packageJSON, componentName)
  utils.changePackageName({ packageJSON, isVue2 })

  fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))

  if (isBuildTest) {
    fs.copySync(distPath, path.join(tgzs, 'vue-' + componentName.split('\\').slice(-1)[0]), { overwrite: true })
  } else {
    const componentTypesDir = path.join(typesDir, componentName)

    if (fs.existsSync(componentTypesDir)) {
      fs.readdirSync(componentTypesDir).forEach((item) => {
        const componentDir = path.join(componentTypesDir, item)
        const stat = fs.statSync(componentDir)

        if (stat.isDirectory()) {
          fs.copySync(componentDir, path.join(distPath, item))
        } else {
          fs.copyFileSync(componentDir, path.join(distPath, item))
        }
      })
    } else {
      utils.logYellow(`${componentName} missing typings declaration file.`)
    }

    execSync('npm pack -q', { cwd: distPath })

    fs.readdirSync(distPath).forEach((item) => {
      if (item.endsWith('.tgz')) {
        const tgzPath = path.join(distPath, item)

        fs.moveSync(tgzPath, path.join(tgzs, item), { overwrite: true })

        utils.logGreen(`${componentName} pack done.`)
      }
    })
  }
}

fs.readdirSync(path.join(packages)).forEach((item) => {
  const componentDir = path.join(packages, item)
  const stat = fs.statSync(componentDir)

  if (stat.isDirectory()) {
    release(item)

    if (item === 'chart') {
      fs.readdirSync(componentDir).forEach((child) => {
        const stat = fs.statSync(path.join(componentDir, child))

        if (stat.isDirectory()) {
          release(path.join(item, child))
        }
      })
    }
  }
})

utils.logGreen(`npm run release:ui-vue${isVue2 ? 2 : 3} done.`)
