import { capitalize, walkFileTree, pathFromWorkspaceRoot, logGreen, prettierFormat } from '../../shared/utils'
import { quickSort } from '../../shared/module-utils'
import path from 'node:path'
import fs from 'fs-extra'
import commonMappingReact from './common-mapping-react.json'

const getBuildEntryFile = (file, dirs, subPath) => {
  // 模板文件（pc|mobile|mobile-first）需要同级目录有index.ts文件才能成为打包入口
  const isTemplatePath = dirs.includes('index.ts')
  const isMainEntry = file.includes('index') && dirs.includes('package.json')
  const isPcEntry = file.includes('pc.') && subPath.includes(`src${path.sep}pc.`) && isTemplatePath
  const isMobileEntry = file.includes('mobile.') && subPath.includes(`src${path.sep}mobile.`) && isTemplatePath
  const isMobileFirstEntry =
    file.includes('mobile-first.') && subPath.includes(`src${path.sep}mobile-first.`) && isTemplatePath
  return {
    isBuildEntryFile: isMainEntry || isPcEntry || isMobileEntry || isMobileFirstEntry,
    isMainEntry,
    isPcEntry,
    isMobileEntry,
    isMobileFirstEntry
  }
}

const tempMap = {
  'pc.jsx': 'pc',
  'mobile.jsx': 'mobile',
  'mobile-first.jsx': 'mobile-first',
  'pc.tsx': 'pc',
  'mobile.tsx': 'mobile',
  'mobile-first.tsx': 'mobile-first'
}

const getTemplateName = (currentPaths, entryObj) => {
  const entryMaps = {
    isPcEntry: 'Pc',
    isMobileEntry: 'Mobile',
    isMobileFirstEntry: 'MobileFirst',
    isMainEntry: ''
  }
  const mapKey = Object.keys(entryObj).filter((item) => entryObj[item] && item !== 'isBuildEntryFile')[0]
  const subFix = entryMaps[mapKey]
  return `${currentPaths.split('-').map(capitalize).join('')}${subFix}`
}

export const writeModuleMap = (moduleMap) => {
  fs.writeFileSync(
    pathFromWorkspaceRoot('packages/modules-react.json'),
    prettierFormat({
      str: typeof moduleMap === 'string' ? moduleMap : JSON.stringify(moduleMap),
      options: {
        parser: 'json',
        printWidth: 10
      }
    })
  )
}

function makeReactModules() {
  const templates = { ...commonMappingReact }

  walkFileTree({
    isDeep: true,
    dirPath: pathFromWorkspaceRoot('packages/react/src'),
    fileFilter({ file }) {
      return !/node_modules/.test(file)
    },
    callback({ file, subPath, dirs, isDirectory }) {
      const entryObj = getBuildEntryFile(file, dirs, subPath)
      const mode: string[] = []

      if (entryObj.isMainEntry && dirs.includes('src')) {
        const srcPath = subPath.replace(file, 'src')
        const srcFiles = fs.readdirSync(srcPath) || []
        srcFiles.forEach((item) => {
          if (tempMap[item]) {
            mode.push(tempMap[item])
          }
        })
      }

      if (entryObj.isBuildEntryFile) {
        const modulePath = subPath.slice(subPath.lastIndexOf(`react${path.sep}src`)).replaceAll(path.sep, '/')
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
  makeReactModules()

  logGreen('npm run create:mapping-react done.')
}
catch (e) {
  console.log(e)
}