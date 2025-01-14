import { pathFromPackages } from '../build/build-ui'
import path from 'node:path'
import fs from 'fs-extra'

const excludeFiles = ['.png', '.gif', '.jpeg', '.jpg', '.ttf', 'node_modules']

// 递归遍历所有的组件，然后依次修改文件内容
const findAllpage = (packagesPath) => {
  if (excludeFiles.some((item) => packagesPath.includes(item)) || !fs.existsSync(packagesPath)) {
    return
  }

  if (fs.statSync(packagesPath).isDirectory()) {
    // 循环递归查找子文件夹
    fs.readdirSync(packagesPath).forEach((childPatch) => {
      findAllpage(path.join(packagesPath, childPatch))
    })
  } else {
    const content = fs.readFileSync(packagesPath).toString('UTF-8' as BufferEncoding)
    let result = content.replace(/@opentiny\/vue/g, '@opentinyvue/vue')

    fs.writeFileSync(packagesPath, result)
  }
}

export const releaseAlpha = () => {
  const distLists = ['dist3/', 'dist2/', 'renderless/dist', 'theme/dist', 'theme-mobile/dist', 'theme-saas/dist']
  distLists.forEach((item) => {
    findAllpage(pathFromPackages(item))
  })
}
