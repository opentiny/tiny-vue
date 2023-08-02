/**
 * 专门用于 modules.json 配置的通用方法
 * modules.json 作为单组件的清单列表，记录组件类型、路径、是否排除引用、仅支持某种[pc/mobile/mobile-first]模式等
 */
import * as fs from 'fs-extra'
import path from 'node:path'
import { createRequire } from 'node:module'
import fg from 'fast-glob'
import {
  pathFromWorkspaceRoot,
  capitalizeKebabCase,
  kebabCase,
  prettierFormat,
  pathJoinFromCLI
} from './utils'

const require = createRequire(import.meta.url)
const moduleMap = require(pathFromWorkspaceRoot('packages/modules.json'))

type mode = 'pc' | 'mobile' | 'mobile-first'

export interface Module {
  /** 源码路径，如 vue/src/button/index.ts */
  path: string
  /** 模块类型，可选 component, template, module */
  type: 'component' | 'template' | 'module'
  /** 是否排除构建，例如组件尚未开发完，设置 true */
  exclude?: boolean
  /** 组件类型支持的模式 */
  mode?: mode[]
  /** 模块名称，如 Button */
  name: string
  /** 模块构建物路径，如 vue/button/lib/index */
  libPath: string
  /** 模块名，如 @opentiny/vue/vue/lib/button/src，@deprecated */
  libName?: string
  /** 模块的npm包名，如 @opentiny/vue-button */
  importName: string
  /** 构建物文件名，@deprecated */
  tmpName?: string
  /** 全局变量名，如 TinyButton */
  global?: string
  /** 组件名的大写形态，如 Button */
  UpperName?: string
  /** 组件名的小写形态，如 button */
  LowerName?: string
  /** 模块的路径 */
  parentDir?: string[]
}

/**
 * 获取所有模块，并排序、格式化
 * @param {Boolean} isSort 是否需要排序
 * @returns 模块对象
 */
const getAllModules = (isSort: boolean) => {
  return getSortModules({ filterIntercept: () => true, isSort })
}

/**
 * @param {String} key 根据模块对象的 Key 获取对应的值
 * @returns 模块对象
 */
const getModuleInfo = (key: string) => {
  return moduleMap[key] || {}
}

/**
 * 根据组件名称查找模块列表
 * @param {String} name 组件名称
 * @param {Boolean} inversion 是否取反
 * @param {Boolean} isOriginal 是否取原始数据
 * @param {Boolean} isSort 是否需要排序
 */
const getByName = ({ name, isSort = true, inversion = false, isOriginal = false }:
{ name: string; isSort: boolean; inversion?: boolean; isOriginal?: boolean }) => {
  const callback = (item) => {
    const result = new RegExp(`/${name}/|^vue-${name}/`).test(item.path)
    return inversion ? !result : result
  }

  return isOriginal ? getModules(callback) : getSortModules({ filterIntercept: callback, isSort })
}

/**
 * 根据指定条件搜索原始模块列表
 * @private
 * @param {Function} filterIntercept 搜索条件
 */
const getModules = (filterIntercept: Function) => {
  let modules = {}

  if (typeof filterIntercept === 'function') {
    for (const key in moduleMap) {
      const component = moduleMap[key]

      if (filterIntercept(component) === true && component.exclude !== true) {
        modules[key] = component
      }
    }
  } else {
    modules = moduleMap
  }

  return modules
}

/**
 * 根据指定条件搜索模块列表，并排序与生成必要字段
 * @private
 * @param {Function} filterIntercept 搜索条件
 * @param {Boolean} isSort 是否需要排序
 */
const getSortModules = ({ filterIntercept, isSort = true }: { filterIntercept: Function; isSort: boolean }) => {
  let modules: Module[] = []
  let componentCount = 0
  const importName = '@opentiny/vue'
  Object.entries(moduleMap).forEach(([key, module]) => {
    let component = module as Module

    component.name = key
    // filterIntercept过滤筛选命令行传过来的组件名称，只输出命令行传递过来的组件
    if (filterIntercept(component) === true && component.exclude !== true) {
      const dirs = component.path.split('/')

      // 这段逻辑暂时没有用到
      const componentName = dirs.slice(1, dirs.indexOf('src'))
      // UpperName: Todo
      component.UpperName = capitalizeKebabCase(componentName.pop() ?? '')

      // LowerName: todo
      component.LowerName = kebabCase({ str: component.UpperName })

      // 工程的父文件夹
      component.parentDir = componentName

      // libPath: 'packages/todo/dist/pc.ts' 组件输出路径
      component.libPath = component.path
        .replace('vue/src/', 'packages/')
        .replace('vue-common/src/', 'packages/common/')
        .replace('vue-locale/src/', 'packages/locale/')
        .replace('vue-icon/src/', 'packages/icon/')
        .replace('/index.ts', '/src/index.js')
        .replace('/src/', '/dist/lib/')
        .replace('.vue', '.js')

      // libName: '@opentiny/vue/todo/pc'
      component.libName = component.libPath
        .replace('packages/', '')
        .replace('/index', '')
        .replace('.js', '')
        .replace('/dist/', '/')
        .replace(/\/lib$/, '')

      // 处理子目录
      if (componentName.length) {
        component.libName = component.libName.replace(componentName.join('/'), '').replace(/^\//, '')
      }

      // importName: '@opentiny/vue-tag/pc'
      component.importName = importName + '-' + component.libName

      // libName: '@opentiny/vue/todo/pc'
      component.libName = importName + '/' + component.libName

      // tmpName: 'pc'
      component.tmpName = component.libPath.replace('.ts', '').split('/').slice(-1)[0]

      // global: 'TinyTodoPc'
      component.global = 'Tiny' + key

      component.importName = `@opentiny/vue-${kebabCase({ str: key })}`

      // "vue-common/src/index.ts" ==> "vue-common/lib/index"
      if (component.type === 'module') {
        component.libPath = component.path
          .replace('/src/', '/lib/')
          .replace('index.ts', 'index')
      }

      // "vue/src/button/index.ts" ==> "button/lib/index"
      if (component.type === 'component') {
        component.libPath = component.path.replace('vue/src/', '').replace('/index.ts', '/lib/index')
      }

      // "vue/src/button/src/mobile-first.vue" ==> "button/lib/mobile-first"
      if (component.type === 'template') {
        component.libPath = component.path.replace('vue/src/', '').replace('/src/', '/lib/').replace(/\..+$/, '')
      }

      modules.push(component)
    }

    component.type === 'component' && componentCount++
  })

  return isSort ? quickSort({ sortData: modules }) : modules
}

/**
 * 将模块数组按字母的 ASCII 值进行排序（目前只支持16位字母排序）
 * @private
 * @param {Array|Object} sortData 模块数组
 * @param {String} key 排序字段
 * @param {String} returnType 返回类型 Array|Object
 * @returns 排序后的数组或对象
 */
const quickSort = ({ sortData, key = 'name', returnType = 'array' }) => {
  const maxNumberLength = 59
  let indexArr = []
  const setIndex = getFuncSetIndex(key, maxNumberLength, indexArr)
  const arrayToObject = getFuncArrayToObject(key)

  isArraySortData(sortData, setIndex)
  isNotArrayObject(sortData, key, setIndex)

  const ret = isNotArrayNotObject(sortData)

  if (ret.flag) return ret.result

  const sortArray = getFuncSortArray()

  return returnType === 'array' ? sortArray(indexArr) : arrayToObject(sortArray(indexArr))
}

function getFuncSortArray() {
  const sortArray = (arr) => {
    if (Array.isArray(arr) && arr.length > 1) {
      const middleIndex = Math.floor(arr.length / 2)
      const middleValue = arr.splice(middleIndex, 1)[0]
      const leftArr = []
      const rightArr = []

      for (let i = 0, len = arr.length; i < len; i++) {
        const left = arr[i].priority1 - middleValue.priority1
        const isLeft = computeIsLeft({ arr, i, left, middleValue })

        pushArr({ arr, i, isLeft, left, leftArr, rightArr })
      }

      return sortArray(leftArr).concat([middleValue], sortArray(rightArr))
    } else {
      return arr
    }
  }

  return sortArray
}

function pushArr({ arr, i, isLeft, left, leftArr, rightArr }) {
  if (left < 0 || isLeft) {
    leftArr.push(arr[i])
  } else {
    rightArr.push(arr[i])
  }
}

function computeIsLeft({ arr, i, left, middleValue }) {
  const right = arr[i].priority2 - middleValue.priority2
  const right2 = arr[i].priority3 - middleValue.priority3
  const right3 = arr[i].priority4 - middleValue.priority4

  let isLeft = false

  if (left === 0) {
    if (right < 0 || (right === 0 && right2 < 0) || (right === 0 && right2 === 0 && right3 < 0)) {
      isLeft = true
    }
  }

  return isLeft
}

function getFuncArrayToObject(key) {
  const arrayToObject = (arr) => {
    const sortObj = {}

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].__real_value) {
        sortObj[arr[i][key]] = arr[i].__real_value
      } else {
        delete arr[i].priority
        delete arr[i].priority1
        delete arr[i].priority2
        delete arr[i].priority3
        delete arr[i].priority4

        sortObj[arr[i][key]] = arr[i]

        delete sortObj[arr[i][key]][key]
      }
    }

    return sortObj
  }

  return arrayToObject
}

function getFuncSetIndex(key, maxNumberLength, indexArr) {
  const setIndex = (obj) => {
    // 一个字母用3位数代替，没有达到3位用0填充到前面，为了减少差值，在前面设置1
    const priority =
      '1' +
      obj[key]
        .split('')
        .map((chart) => (chart.charCodeAt() + '').padStart(3, '0'))
        .join('')
        .padEnd(maxNumberLength, '0')
        .substr(0, maxNumberLength)

    // 分段比较 （javascript 超过15位比较失效）
    obj.priority1 = +priority.substr(0, 15)
    obj.priority2 = +priority.substr(15, 30)
    obj.priority3 = +priority.substr(30, 45)
    obj.priority4 = +priority.substr(45, maxNumberLength)

    obj.priority = priority

    indexArr.push(obj)
  }

  return setIndex
}

const isArraySortData = (sortData, setIndex) => {
  if (Array.isArray(sortData)) {
    sortData.forEach(setIndex)
  }
}

const isNotArrayObject = (sortData, key, setIndex) => {
  if (!Array.isArray(sortData) && typeof sortData === 'object') {
    for (const sortKey in sortData) {
      const dataItem = sortData[sortKey]
      let sortItem = {}

      if (typeof dataItem !== 'object') {
        (sortItem as unknown as Record<string, any>).__real_value = dataItem
      } else {
        sortItem = {
          ...sortData[sortKey]
        }
      }

      sortItem[key] = sortData[key] || sortKey
      setIndex(sortItem)
    }
  }
}

const isNotArrayNotObject = (sortData) => {
  const ret = { flag: false, result: null }

  if (!Array.isArray(sortData) && !(typeof sortData === 'object')) {
    ret.flag = true
    ret.result = sortData
  }

  return ret
}

/**
 * 根据模式获取所有组件，并排序、格式化
 * @param {Boolean} mode 生成模式 'all', 'pc', 'mobile', 'mobile-first'
 * @param {Boolean} isSort 是否需要排序
 * @returns 组件对象
 */
const getComponents = (mode, isSort = true) => {
  const modules = getAllModules(isSort)

  const components = modules.filter(item => item.type === 'component')
    // 以下3种情况，均写入entry js文件。
    // 1、入参all，  2、chart组件，item.mode不存在  3、item.mode包含要输出的entry
    .filter(item => mode === 'all' || !item.mode || item.mode.includes(mode))
  return components
}

/**
 * 获取模块项的模块
 * @param {String} componentName 组件名称（大写，例如：img-preview）
 * @param {Oject} newObj 新增对象
 * @returns 模块对象
 */
export const addModule = ({ componentName, templateName, newObj = {}, isMobile }:
{ componentName: string; templateName?: string; newObj?: object; isMobile: boolean }) => {
  const isEntry = templateName?.endsWith('index') ?? false
  return {
    path: `vue/src/${componentName}/` + (isEntry ? `${templateName}.ts` : `src/${templateName}.vue`),
    type: isEntry ? 'component' : 'template',
    exclude: false,
    mode: isMobile ? 'mobile' : 'all',
    ...newObj
  }
}

/**
 * 将输入的 Map 写入到 modules.json 文件中，并格式化
 * @param {String|Object} moduleMap 模块 Json 对象集合或 Json 字符串
 */
export const writeModuleMap = (moduleMap) => {
  fs.writeFileSync(
    pathFromWorkspaceRoot('packages/modules.json'),
    prettierFormat({
      str: typeof moduleMap === 'string' ? moduleMap : JSON.stringify(moduleMap),
      options: {
        parser: 'json',
        printWidth: 10
      }
    })
  )
}

/**
 * 读取 modules.json 中的模块信息
 * @returns 模块对象
 */
export const readModuleMap = () => moduleMap || {}

/**
 * 动态创建 modules.json ，适配新建组件
 * @param {String} componentName 组件名称 （驼峰大写：img-preview）
 * @param {Boolean} isMobile 是否为移动组件
 */
const createModuleMapping = (componentName, isMobile = false) => {
  const upperName = capitalizeKebabCase(componentName)

  // 生成 modules.json 文件
  moduleMap[upperName] = addModule({
    isMobile,
    componentName
  })

  const moduleJson = quickSort({ sortData: moduleMap, returnType: 'object' })

  fs.writeJsonSync(
    pathJoinFromCLI('../../packages/modules.json'),
    prettierFormat({
      str: JSON.stringify(moduleJson),
      options: {
        parser: 'json',
        printWidth: 10
      }
    })
  )
}

const getAllIcons = () => {
  const entries = fg.sync('vue-icon*/src/*', { cwd: pathFromWorkspaceRoot('packages'), onlyDirectories: true })

  return entries.map((item) => {
    const name = path.basename(item)

    return {
      path: item + '/index.ts',
      libPath: item.replace('/src/', '/lib/'),
      type: 'component',
      componentType: 'icon',
      name: kebabCase({ str: name }),
      global: capitalizeKebabCase(name),
      importName: '@opentiny/vue-' + item
    } as Module
  })
}

export {
  getByName,
  quickSort,
  getModules,
  getAllModules,
  getComponents,
  getModuleInfo,
  getSortModules,
  createModuleMapping,
  getAllIcons
}
