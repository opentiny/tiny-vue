const { sep } = require('path')
const utils = require('./utils')
const { addModule, writeModuleMap, quickSort, readModuleMap } = require('./module-utils')

const isDeepFn = (file, dirs, subPath) =>
  // 如果底层文件夹内没有找到 vue 文件，找到 src//index.js 文件也被认可为组件
  (file.endsWith('.vue') && (dirs.includes('index.js') || dirs.includes('index.vue'))) || ~subPath.indexOf(['src', 'index.js'].join(sep))

const getTemplateName = (currentPaths) => currentPaths.slice(2).map(utils.capitalize).join('/').split('.')[0].replace('/', '')

/**
 * 扫描指定目录下面的组件目录，查找非 index.vue 文件（模板）生成 modules.json 中的对象
 */
const makeModules = () => {
  const templates = {}
  const oldModules = readModuleMap()
  const packagesStr = 'packages'
  utils.walkFileTree({
    isDeep: true,
    dirPath: utils.pathJoin('..', packagesStr),
    fileFilter({ file }) {
      return !/node_modules|helper|common|assets/.test(file)
    },
    callback({ file, subPath, dirs }) {
      const isDeep = isDeepFn(file, dirs, subPath)
      // NEXT: 针对 option 的模板做特殊处理
      if (isDeep && ['template.vue'].indexOf(file) === -1) {
        const isEntry = file.startsWith('index')
        const subPaths = subPath.split(sep)
        const currentPaths = subPaths.slice(subPaths.indexOf(packagesStr) + 1)
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
  utils.logRed('npm run create:mapping failed.', e)
}
