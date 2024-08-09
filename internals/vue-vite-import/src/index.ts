import * as changeCase from 'change-case'
import type { Plugin } from 'vite'

type ChangeCaseType =
  | 'camelCase'
  | 'capitalCase'
  | 'constantCase'
  | 'dotCase'
  | 'headerCase'
  | 'noCase'
  | 'paramCase'
  | 'pascalCase'
  | 'pathCase'
  | 'sentenceCase'
  | 'snakeCase'

interface PluginInnerOption {
  libraryName: string
  libraryResolve: (name: string) => string
  customName?: (name: string) => string
}

type PluginInnerOptions = Array<PluginInnerOption>

export interface PluginOption {
  libraryName: string
  libraryDirectory?: string
  split?: string
  customName?: (name: string) => string
  libraryChangeCase?: ChangeCaseType | ((name: string) => string)
}

export interface allOptions {
  options: PluginOptions
  mode?: ModeType
  exclude?: Array<RegExp | string>
}

export type PluginOptions = Array<PluginOption>

type ModeType = 'pc' | 'mobile' | undefined

const matchExclude = (exclude, id) => exclude.some((item) => item === id || item?.test?.(id))

export default function vitePluginBabelImport(plgOptions: PluginOptions | allOptions, modeType?: ModeType): Plugin {
  let pluginOption
  let mode
  let exclude
  if (Array.isArray(plgOptions)) {
    pluginOption = plgOptions
    mode = modeType
  } else if (plgOptions && typeof plgOptions === 'object') {
    pluginOption = plgOptions.options
    mode = plgOptions.mode
    exclude = plgOptions.exclude
  }
  return {
    name: '@opentiny/vue-vite-import',
    transform(code, id) {
      if (Array.isArray(exclude) && matchExclude(exclude, id)) {
        return code
      }

      const isCheckMode = mode && /@opentiny\/vue-.+?\/lib\/index.js$/.test(id) && code.includes(`./${mode}`)

      // 不处理node_modules内的依赖
      if (/\.(?:[jt]sx?|vue)$/.test(id) && !/(node_modules)/.test(id)) {
        return {
          code: transformCode(code, transformOptions(pluginOption)),
          map: null
        }
      } else if (isCheckMode) {
        const newCode = code.replace(/('|")\.\/(mobile|pc|mobile-first)(\.js)?('|")/g, `"./${mode}"`)
        return {
          code: newCode,
          map: null
        }
      }
    }
  }
}

interface CaseFnObjType {
  libraryCaseFn: (name: string) => string
  styleCaseFn: (name: string) => string
}

function generateOptions(caseFnObj: CaseFnObjType, opt: PluginOption) {
  if (typeof opt.libraryChangeCase === 'function') {
    caseFnObj.libraryCaseFn = opt.libraryChangeCase
  } else {
    caseFnObj.libraryCaseFn = (name) => {
      return changeCase[(opt.libraryChangeCase || 'paramCase') as ChangeCaseType](name)
    }
  }
}

function transformOptions(options: PluginOptions): PluginInnerOptions {
  return options.map((opt) => {
    const caseFnObj: CaseFnObjType = {
      libraryCaseFn: (name: string) => {
        return name
      },
      styleCaseFn: (name: string) => {
        return name
      }
    }

    generateOptions(caseFnObj, opt)

    return {
      libraryName: opt.libraryName,
      customName: (name) => {
        return opt?.customName?.(caseFnObj.libraryCaseFn(name))
      },
      libraryResolve: (name) => {
        let libraryPaths: string[] = [opt.libraryName]
        if (opt.libraryDirectory) {
          libraryPaths.push(opt.libraryDirectory)
        }
        libraryPaths.push(caseFnObj.libraryCaseFn(name))
        return libraryPaths.join(opt.split || '-').replace(/\/\//g, '/')
      }
    } as PluginInnerOption
  })
}

const transformImport = (matchRes: string, opt: PluginInnerOption) => {
  const componentsArr = matchRes
    .split(',')
    .filter((item) => item.trim())
    .map((item) => {
      let itemName = item.trim()
      let asName = ''

      // 处理import { Alert as TinyAlert } from '@opentiny/vue' --> import TinyAlert from '@opentiny/vue'
      const isImportWithAs = itemName.includes(' as ')
      if (isImportWithAs) {
        const allName = itemName.split(' as ')
        itemName = allName[0]
        asName = allName[1]
      }
      // 1.2.0版本新增，组件版本新增Tiny前缀导出，因此需要特殊处理一下
      const importItemName = itemName?.startsWith('Tiny') ? itemName.substr(4) : itemName
      const importName = opt.customName?.(importItemName) || opt.libraryResolve(importItemName)
      const compImportName = isImportWithAs ? asName : itemName
      return `import ${compImportName} from '${importName}'`
    })
  return componentsArr.join('\n') + '\n'
}

const transformDefaultImport = (matchRes: string, opt: PluginInnerOption) => {
  const importName = opt.customName?.('default') || matchRes
  return `import ${matchRes} from '${importName}'`
}

const getCompRegExp = (libraryName: any) =>
  new RegExp(`import\\s+?{*([\\w ,\\s]+)}*\\s+?from\\s+?('|")${libraryName}('|")`, 'g')

function transformCode(code: string, plgOptions: PluginInnerOptions): string {
  let resultCode = code
  plgOptions.forEach((opt) => {
    const compRegexp = getCompRegExp(opt.libraryName)
    if (compRegexp.test(resultCode)) {
      const newCode = resultCode.replace(compRegexp, (_all, matchRes): string => {
        if (_all.includes('{')) {
          return transformImport(matchRes, opt)
        } else {
          return transformDefaultImport(matchRes, opt)
        }
      })
      resultCode = newCode
    }
  })

  return resultCode
}
