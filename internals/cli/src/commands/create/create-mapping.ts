import path from 'node:path'
import fs from 'fs-extra'
import * as utils from '../../shared/utils'
import { writeModuleMap, quickSort } from '../../shared/module-utils'
import commonMapping from './commonMapping.json'

// 每个组件，最多四个入口：index.ts、pc.vue、mobile.vue mobile-first 其他文件均不排除，直接打入到组件中
const getBuildEntryFile = (file, dirs, subPath) => {
  // 模板文件（pc|mobile|mobile-first）需要同级目录有index.ts文件才能成为打包入口
  const isTemplatePath = dirs.includes('index.ts')
  const isMainEntry = file.includes('index') && dirs.includes('package.json')
  const isPcEntry = file.includes('pc.') && subPath.includes(`src${path.sep}pc.`) && isTemplatePath
  const isMobileEntry = file.includes('mobile.') && subPath.includes(`src${path.sep}mobile.`) && isTemplatePath
  const isMobileFirstEntry = file.includes('mobile-first.') && subPath.includes(`src${path.sep}mobile-first.`) && isTemplatePath
  return {
    isBuildEntryFile: isMainEntry || isPcEntry || isMobileEntry || isMobileFirstEntry,
    isMainEntry,
    isPcEntry,
    isMobileEntry,
    isMobileFirstEntry
  }
}

const getTemplateName = (currentPaths, entryObj) => {
  const entryMaps = {
    isPcEntry: 'Pc',
    isMobileEntry: 'Mobile',
    isMobileFirstEntry: 'MobileFirst',
    isMainEntry: ''
  }
  const mapKey = Object.keys(entryObj).filter(item => entryObj[item] && item !== 'isBuildEntryFile')[0]
  const subFix = entryMaps[mapKey]
  return `${currentPaths.split('-').map(utils.capitalize).join('')}${subFix}`
}

const tempMap = {
  'pc.vue': 'pc',
  'mobile.vue': 'mobile',
  'mobile-first.vue': 'mobile-first',
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
      const entryObj = getBuildEntryFile(file, dirs, subPath)
      const mode: string[] = []

      if (entryObj.isMainEntry && dirs.includes('src')) {
        const srcPath = subPath.replace(file, 'src')
        const srcFiles = fs.readdirSync(srcPath) || []
        srcFiles.forEach(item => {
          if (tempMap[item]) {
            mode.push(tempMap[item])
          }
        })
      }

      if (entryObj.isBuildEntryFile) {
        const modulePath = subPath.slice(subPath.lastIndexOf(`vue${path.sep}src`)).replaceAll(path.sep, '/')
        const matchArr = modulePath.match(/.+\/(.+?)\/(index\.ts|src\/pc\.|src\/mobile\.|src\/mobile-first\.)/)
        if (matchArr?.[1]) {
          const compName = getTemplateName(matchArr[1], entryObj)
          templates[compName] = {
            path: modulePath,
            type: entryObj.isMainEntry ? 'component' : 'template',
            exclude: false
          }

          if (mode.length > 0) {
            templates[compName].mode = mode
          }
        }
      }
    }
  })

  const modulesJson = quickSort({ sortData: templates, returnType: 'object' })

  writeModuleMap(modulesJson)
}

try {
  makeModules()

  utils.logGreen('npm run create:mapping done.')
} catch (e) {
  utils.logRed(e)
}
