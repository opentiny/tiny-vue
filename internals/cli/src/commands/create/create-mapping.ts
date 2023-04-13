import path from 'node:path'
import * as utils from '../../shared/utils'
import { writeModuleMap, quickSort } from '../../shared/module-utils'
import commonMapping from './commonMapping.json'

const isBuildEntryFile = (file, dirs, subPath) => {
  // 每个组件，最多三个入口：index.ts、pc.vue、mobile.vue 其他文件均不排除，直接打入到组件中
  const isMainEntry = file.includes('index') && dirs.includes('package.json')
  const isPcEntry = file.includes('pc.') && subPath.includes(`src${path.sep}pc.`)
  const isMobileEntry = file.includes('mobile.') && subPath.includes(`src${path.sep}mobile.`)
  return {
    isBuildEntryFile: isMainEntry || isPcEntry || isMobileEntry,
    isMainEntry,
    isPcEntry,
    isMobileEntry
  }
}

const getTemplateName = (currentPaths, entryObj) => {
  const subFix = entryObj.isPcEntry ? 'Pc' : (entryObj.isMobileEntry ? 'Mobile' : '')
  return `${currentPaths.split('-').map(utils.capitalize).join('')}${subFix}`
}

/**
 * 扫描指定目录下面的组件目录，查找非 index.vue 文件（模板）生成 modules.json 中的对象
 */
const makeModules = () => {
  const templates = { ...commonMapping }

  // 获取存放所有组件的文件夹
  const packagesStr = 'packages/vue/src'
  utils.walkFileTree({
    isDeep: true,
    dirPath: utils.pathFromWorkspaceRoot(packagesStr),
    fileFilter({ file }) {
      return !/node_modules|helper|common|assets/.test(file)
    },
    // file:模块文件名称，subPath:处于同一文件夹的文件集合，dirs:文件所在的绝对路径
    callback({ file, subPath, dirs }) {
      // 判断是否是需要作为打包入口文件
      const entryObj = isBuildEntryFile(file, dirs, subPath)
      if (entryObj.isBuildEntryFile) {
        const modulePath = subPath.slice(subPath.lastIndexOf(`vue${path.sep}src`)).replaceAll(path.sep, '/')
        const matchArr = modulePath.match(/.+\/(.+?)\/(index\.ts|src\/pc\.|src\/mobile\.)/)
        if (matchArr?.[1]) {
          const compName = getTemplateName(matchArr[1], entryObj)
          templates[compName] = {
            path: modulePath,
            type: entryObj.isMainEntry ? 'component' : 'template',
            exclude: false
          }
        }
      }
    }
  })

  const modulesJson = quickSort({ sortData: templates, returnType: 'object' })

  Object.entries(modulesJson).forEach(([key, value]) => {
    if (!key.includes('Pc') && !key.includes('Mobile')) {
      if (modulesJson[`${key}Pc`] && !modulesJson[`${key}Mobile`]) {
        value.onlyMode = 'pc'
      } else if (!modulesJson[`${key}Pc`] && modulesJson[`${key}Mobile`]) {
        value.onlyMode = 'mobile'
      }
    }
  })

  writeModuleMap(modulesJson)
}

try {
  makeModules()

  utils.logGreen('npm run create:mapping done.')
} catch (e) {
  utils.logRed(e)
}
