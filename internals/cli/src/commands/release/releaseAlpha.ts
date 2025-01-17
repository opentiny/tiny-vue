import { pathFromPackages } from '../build/build-ui'
import path from 'node:path'
import fs from 'fs-extra'
import semver from 'semver'
import { execSync } from 'node:child_process'

const excludeFiles = ['.png', '.gif', '.jpeg', '.jpg', '.ttf', 'node_modules']

/**
 * @param {string} packageName 包名
 * @param {string} version 原始版本号
 * @returns {string} 自动升级patch版本后的版本号
 */
const getPatchVersion = (packageName: string, version: string): string => {
  try {
    // 防止测试仓库没有发布过该包，导致获取不到版本号
    const npmVersion = execSync(`npm v ${packageName} version`).toString('utf-8').replace(/\n/, '')
    const updateVersion = version.startsWith('2.') ? `2${npmVersion.slice(1)}` : npmVersion
    return semver.inc(updateVersion, 'patch')
  } catch (error) {
    return version
  }
}

// 递归遍历所有的组件，然后依次修改文件内容
const findAllpage = (packagesPath, updateVersion) => {
  if (excludeFiles.some((item) => packagesPath.includes(item)) || !fs.existsSync(packagesPath)) {
    return
  }

  if (fs.statSync(packagesPath).isDirectory()) {
    // 循环递归查找子文件夹
    fs.readdirSync(packagesPath).forEach((childPatch) => {
      findAllpage(path.join(packagesPath, childPatch), updateVersion)
    })
  } else {
    const content = fs.readFileSync(packagesPath).toString('UTF-8' as BufferEncoding)
    const result = content.replace(/@opentiny\/vue/g, '@opentinyvue/vue')

    if (packagesPath.endsWith('package.json') && updateVersion) {
      const packageJSON = JSON.parse(result)
      packageJSON.version = getPatchVersion(packageJSON.name, packageJSON.version)
      fs.writeFileSync(packagesPath, JSON.stringify(packageJSON, null, 2) + '\n')
    } else {
      fs.writeFileSync(packagesPath, result)
    }
  }
}

export const releaseAlpha = ({ updateVersion }) => {
  const distLists = ['dist3/', 'dist2/', 'renderless/dist', 'theme/dist', 'theme-mobile/dist', 'theme-saas/dist']
  distLists.forEach((item) => {
    findAllpage(pathFromPackages(item), updateVersion)
  })
}
