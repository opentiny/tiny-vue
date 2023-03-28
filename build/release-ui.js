/**
 * 用于发布单组件包
 */
const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')
const utils = require('../build/utils')
const { logGreen } = require('../build/utils')

const sourcePkg = 'packages'
const packages = 'dist'
const tgzs = 'tgzs'
const packageName = 'package.json'
const NPM_TAG = process.env.NPM_TAG || '~0.1.0'
const VERSION_TAG = process.env.VERSION_TAG || '0.1.0'
const NPM_WAREHOUSE = process.env.NPM_WAREHOUSE
const targetVersion = utils.getTinyVersion('themeVersion')
const targetVersionArr = targetVersion.split('.')
const themeVersionDependencies = `~${targetVersionArr[0]}.${targetVersionArr[1]}.${targetVersionArr.slice(-targetVersionArr.length + 2).join('.')}`
const typings = 'typings'

const packPackages = (p, packagePath) => {
  execSync('npm pack -q', { cwd: path.join(packages, p) })
  fs.readdirSync(path.join(packages, p)).forEach((item) => {
    if (item.endsWith('.tgz')) {
      const tgzPath = path.join(packages, p, item)
      fs.moveSync(tgzPath, path.join(tgzs, item), { overwrite: true })
      fs.unlinkSync(packagePath)
    }
  })
}

// 处理每个组件包的package.json文件
const dealPackage = (p, packageJSON) => {
  const packageDeps = packageJSON.dependencies || []
  Object.keys(packageDeps).forEach((key) => {
    if (key.includes('@opentiny/vue')) {
      packageDeps[key] = NPM_TAG
    }
  })
  let dependencies = {
    '@opentiny/vue-renderless': themeVersionDependencies,
    '@opentiny/vue-common': NPM_TAG,
    '@opentiny/vue-icon': NPM_TAG,
    '@opentiny/vue-theme': themeVersionDependencies,
    '@opentiny/vue-theme-mobile': themeVersionDependencies
  }
  if (p === 'icon') {
    packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, {
      '@opentiny/vue-common': NPM_TAG,
      '@opentiny/vue-theme': themeVersionDependencies
    })
  } else if (p === 'locale') {
    dependencies = {
      '@opentiny/vue-renderless': themeVersionDependencies
    }
  } else if (p === 'common') {
    dependencies = {
      '@opentiny/vue-renderless': themeVersionDependencies,
      '@opentiny/vue-theme': themeVersionDependencies
    }
    if (VERSION_TAG.startsWith('2')) {
      dependencies['@vue/composition-api'] = '1.2.2'
    }
  }
  packageJSON.dependencies = Object.assign(packageJSON.dependencies || {}, dependencies)
  if (VERSION_TAG.startsWith('3')) {
    packageJSON.types = 'index.d.ts'
  }
  packageJSON.sideEffects = false
  packageJSON.version = VERSION_TAG
}

const release = (p) => {
  const packagePath = path.join(packages, p, packageName)
  const packageJSON = fs.readJSONSync(packagePath)
  const componentEntry = path.join(packagePath, '../lib', 'index.js')
  dealPackage(p, packageJSON)
  fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
  if (fs.existsSync(componentEntry)) {
    let componentEntryContent = fs.readFileSync(componentEntry).toString('UTF-8')
    componentEntryContent = componentEntryContent.replace('process.env.COMPONENT_VERSION', `'${VERSION_TAG}'`)
    fs.writeFileSync(componentEntry, componentEntryContent)
  }
  logGreen(`${p} pack done`)

  // 测试情况下可以打包成压缩包
  if (NPM_WAREHOUSE === 'test') {
    packPackages(p, packagePath)
  }
}

const dealFile = (componentDir, distDir) => {
  if (componentDir.includes('common')) {
    // 如果是vue3.0的打包命令下
    if (VERSION_TAG.startsWith('3')) {
      // 删除 vue2.0文件
      fs.removeSync(path.join(distDir, 'adapter/vue2.js'))
      // 重写adapter/index.js
      fs.copySync(path.join(__dirname, '../', 'template/common/vue3.js'), path.join(distDir, 'adapter/index.js'))
    } else {
      // 删除 vue3.0文件
      fs.removeSync(path.join(distDir, 'adapter/vue3.js'))
      // 重写adapter/index.js
      fs.copySync(path.join(__dirname, '../', 'template/common/vue2.js'), path.join(distDir, 'adapter/index.js'))
    }
  } else if (componentDir.includes('locale')) {
    // 如果是vue3.0的打包命令下
    if (VERSION_TAG.startsWith('3')) {
      // 删除 vue2.0文件
      fs.removeSync(path.join(distDir, 'vue2.js'))
      // 重写index.js
      fs.copySync(path.join(__dirname, '../', 'template/locale/vue3.js'), path.join(distDir, 'index.js'))
    } else {
      // 删除 vue3.0文件
      fs.removeSync(path.join(distDir, 'vue3.js'))
      // 重写index.js
      fs.copySync(path.join(__dirname, '../', 'template/locale/vue2.js'), path.join(distDir, 'index.js'))
    }
  }
}

// chart文件夹处理

const releaseChart = (componentDir, item) => {
  fs.readdirSync(componentDir).forEach((child) => {
    const stat = fs.statSync(path.join(componentDir, child))

    if (stat.isDirectory()) {
      const distPath = path.join(sourcePkg, item, child, packages)
      const packageJson = path.join(sourcePkg, item, child, packageName)

      const typingsPath = path.join(typings, item, child)

      if (fs.existsSync(typingsPath) && VERSION_TAG.startsWith('3')) {
        fs.copySync(typingsPath, path.join(packages, item), {
          overwrite: true
        })
      }

      if (fs.existsSync(distPath)) {
        fs.copySync(distPath, path.join(packages, item, child), {
          overwrite: true
        })
        fs.copySync(packageJson, path.join(packages, item, child, packageName), {
          overwrite: true
        })
      } else {
        fs.copySync(componentDir, path.join(packages, item, child), {
          overwrite: true
        })
      }
      release(path.join(item, child))
    }
  })
}

// 读取packages文件夹下的所有组件，并执行copy操作
const releaseAll = () => {
  fs.readdirSync(path.join(sourcePkg)).forEach((item) => {
    const componentDir = path.join(sourcePkg, item)
    const stat = fs.statSync(componentDir)

    if (stat.isDirectory()) {
      const distPath = path.join(sourcePkg, item, packages)
      const packageJson = path.join(sourcePkg, item, packageName)
      const typingsPath = path.join(typings, item)

      if (fs.existsSync(typingsPath) && VERSION_TAG.startsWith('3')) {
        fs.copySync(typingsPath, path.join(packages, item), {
          overwrite: true
        })
      }

      if (fs.existsSync(distPath)) {
        fs.copySync(distPath, path.join(packages, item), {
          overwrite: true
        })
        fs.copySync(packageJson, path.join(packages, item, packageName), {
          overwrite: true
        })
      } else {
        // 如果packags包里面没有dist目录，则copy整个目录，比如common local等适配层
        fs.copySync(componentDir, path.join(packages, item), {
          overwrite: true
        })

        // 处理common和locale包，分别针对vue2和vue3
        dealFile(componentDir, path.join(packages, item))
      }

      release(item)
      if (item === 'chart') {
        releaseChart(componentDir, item)
      }
    }
  })

  logGreen('-- all release done --')
}

releaseAll()
