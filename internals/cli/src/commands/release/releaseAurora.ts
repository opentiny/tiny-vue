import { pathFromPackages } from '../build/build-ui'
import path from 'node:path'
import fs from 'fs-extra'

// 递归遍历所有的组件，然后依次修改文件内容
const findAllpage = (packagesPath) => {
  if (
    packagesPath.includes('.png') ||
    packagesPath.includes('.gif') ||
    packagesPath.includes('.jpeg') ||
    packagesPath.includes('.jpg') ||
    packagesPath.includes('.ttf') ||
    packagesPath.includes('node_modules') ||
    !fs.existsSync(packagesPath)
  ) {
    return
  }

  if (fs.statSync(packagesPath).isDirectory()) {
    // 循环递归查找子文件夹
    fs.readdirSync(packagesPath).forEach((childPatch) => {
      findAllpage(path.join(packagesPath, childPatch))
    })
  } else {
    const content = fs.readFileSync(packagesPath).toString('UTF-8' as BufferEncoding)
    const result = content
      .replace(/@opentiny\/vue-renderless/g, '@aurora/renderless')
      .replace(/@opentiny\/vue-theme/g, '@aurora/theme')
      .replace(/@opentiny/g, '@aurora')
      .replace(/tiny_/g, 'aui_')

    fs.writeFileSync(packagesPath, result)
  }
}

export const releaseAurora = () => {
  const distLists = ['dist2/@aurora', 'renderless/dist', 'theme/dist', 'theme-mobile/dist', 'theme-saas/dist']
  distLists.forEach((item) => {
    findAllpage(pathFromPackages(item))
  })
}
