import path from 'node:path'
import * as utils from '../../shared/utils'
import { addModule, writeModuleMap, quickSort, readModuleMap } from '../../shared/module-utils'
import commonMapping from './commonMapping.json'

const isBuildEntryFile = (file, dirs, subPath) => {
  // 如果底层文件夹内没有找到 vue 文件，找到 src//index.ts 文件也被认可为组件
  return (file.endsWith('.vue') && (dirs.includes('index.ts') || dirs.includes('index.vue'))) || ~subPath.indexOf(['src', 'index.ts'].join(path.sep))
}

const getTemplateName = (currentPaths) => currentPaths.slice(2).map(utils.capitalize).join('/').split('.')[0].replace('/', '')

/**
 * 扫描指定目录下面的组件目录，查找非 index.vue 文件（模板）生成 modules.json 中的对象
 */
const makeModules = () => {
  const templates = { ...commonMapping }

  // 获取老的odules.json
  const oldModules = readModuleMap()
  // 获取存放所有组件的文件夹
  const packagesStr = 'packages/vue/src'
  utils.walkFileTree({
    isDeep: true,
    dirPath: utils.pathFromWorkspaceRoot(packagesStr),
    fileFilter({ file }) {
      return !/node_modules|helper|common|assets/.test(file)
    },
    callback({ file, subPath, dirs }) {
      // 判断是否是需要作为打包入口文件
      if (isBuildEntryFile(file, dirs, subPath)) {
        const isEntry = file.startsWith('index')
        const subPaths = subPath.split(path.sep)
        const currentPaths = subPaths.slice(subPaths.indexOf('src') + 1)
        const templateName = getTemplateName(currentPaths)
        const templatePath = currentPaths[currentPaths.length - 1].split('.')[0]
        const componentName = []
        currentPaths.every((dirName) => {
          if (dirName === 'src') {
            return false
          }
          componentName.push(dirName)
          return true
        })
        const globalName = componentName[componentName.length - 1].split('-').map(utils.capitalize).join('')
        const moduleName = globalName + (isEntry ? '' : templateName)
        const oldModuleItem = oldModules[moduleName] || {}
        const oldKeys = Object.keys(oldModuleItem)
        const newModuleItem = addModule({
          componentName: componentName.join('/'),
          templateName: templatePath
        })
        oldKeys.forEach((key) => {
          if (typeof newModuleItem[key] === 'undefined' || key === 'onlyMode') {
            newModuleItem[key] = oldModuleItem[key]
          }
        })
        newModuleItem.exclude = oldModuleItem.exclude || false
        templates[moduleName] = newModuleItem
      }
    }
  })

  writeModuleMap(quickSort({ sortData: templates, returnType: 'object' }))
}

try {
  makeModules()

  utils.logGreen('npm run create:mapping done.')
} catch (e) {
  utils.logRed(e)
}
