import { pathFromPackages } from '../build/build-ui'
import path from 'node:path'
import fs from 'fs-extra'

const onlyMobileFirstTemplateLists = ['popconfirm', 'card', 'card-group']

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
    let result = content
      .replace(/@opentiny\/vue-renderless/g, '@aurora/renderless')
      .replace(/@opentiny\/vue-theme/g, '@aurora/theme')
      .replace(/@opentiny/g, '@aurora')
      .replace(/TINY/g, 'AUI')
      .replace(/Tiny/g, 'Aui')
      .replace(/tiny/g, 'aui')
      // 解决TinyVue和AUI国际化键名不兼容问题
      .replace(/zhCN/g, 'zh_CN')
      .replace(/enUS/g, 'en_US')
      // 解决在linkjs环境z-index无法统一导致下拉框被遮挡问题
      .replace(/"(.*?\/popup-manager)"/g, '"@aurora/renderless/common/deps/popup-manager"')

    // 解决当AUI只有一个mobile-first模板而TinyVue有多个模板，导致Linkjs加载不到多端模板的问题
    if (
      packagesPath.endsWith('index.js') &&
      onlyMobileFirstTemplateLists.some(
        (item) => packagesPath.includes(`${item}\\`) || packagesPath.includes(`${item}/`)
      )
    ) {
      result = result.replace(/pc.js/g, 'mobile-first.js')
    }

    fs.writeFileSync(packagesPath, result)
  }
}

export const releaseAurora = () => {
  const distLists = ['dist2/@aurora', 'renderless/dist', 'theme/dist', 'theme-mobile/dist', 'theme-saas/dist']
  distLists.forEach((item) => {
    findAllpage(pathFromPackages(item))
  })
}
