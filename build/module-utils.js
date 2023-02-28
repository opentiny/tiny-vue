/**
 * 专门用于 modules.json 配置的通用方法
 * modules.json 作为单组件的清单列表，记录组件类型、路径、是否排除引用、仅支持某种[pc/mobile]模式等
 */
const { writeFileSync } = require('fs')
const moduleMap = require('../modules.json')
const { kebabCase, pathJoin, capitalize, prettierFormat, logGreen, capitalizeKebabCase } = require('./utils')

const realNameMap = {
  realValue: '__real_value'
}

/**
 * 默认的组件模板
 */
const defaultMode = ['index', 'pc']

/**
 * 组件组包名前缀：@opentiny/vue-tag | @opentiny/vue/tag
 */
const importName = '@opentiny/vue'

const exampleBase = 'basic-usage.vue'

/**
 * 查询没有模板的组件（单层组件）
 */
const getNoTemplateComponents = () => {
  const components = []
  const templates = ['Pc', 'Mobile']

  Object.keys(moduleMap).forEach((key) => {
    if (!key.endsWith(templates[0]) && !key.endsWith(templates[1]) && !key.startsWith('Chart')) {
      if (!moduleMap[key + templates[0]] && !moduleMap[key + templates[1]]) {
        components.push(moduleMap[key])
      }
    }
  })

  return components
}

/**
 * 判断是否为 PC 组件
 */
const isPcComponent = (name) => {
  const componentName = capitalizeKebabCase(name)
  const moduleInfo = moduleMap[componentName]

  return moduleInfo && moduleInfo.onlyMode !== 'mobile'
}

/**
 * 判断是否为 Mobile 组件
 */
const isMobileComponent = (name) => {
  const componentName = capitalizeKebabCase(name)
  const moduleInfo = moduleMap[componentName]

  return moduleInfo && moduleInfo.onlyMode === 'mobile'
}

const setIndex = (obj, key, maxNumberLength, indexArr) => {
  // 一个字母用3位数代替，没有达到3位用0填充到前面，为了减少差值，在前面设置1
  const priority =
    '1' +
    obj[key]
      .split('')
      .map((chart) => String(chart.charCodeAt()).padStart(3, '0'))
      .join('')
      .padEnd(maxNumberLength, '0')
      .substr(0, maxNumberLength)

  // 分段比较 （javascript 超过15位比较失效）
  obj.priority1 = Number(priority.substr(0, 15))
  obj.priority2 = Number(priority.substr(15, 30))
  obj.priority3 = Number(priority.substr(30, 45))
  obj.priority4 = Number(priority.substr(45, maxNumberLength))

  obj.priority = priority

  indexArr.push(obj)
}

const arrayToObject = (arr, key) => {
  const sortObj = {}

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i][realNameMap.realValue]) {
      sortObj[arr[i][key]] = arr[i][realNameMap.realValue]
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

const sortArray = (arr) => {
  if (Array.isArray(arr) && arr.length > 1) {
    const middleIndex = Math.floor(arr.length / 2)
    const middleValue = arr.splice(middleIndex, 1)[0]
    const leftArr = []
    const rightArr = []

    for (let i = 0, len = arr.length; i < len; i++) {
      const left = arr[i].priority1 - middleValue.priority1
      const right = arr[i].priority2 - middleValue.priority2
      const right2 = arr[i].priority3 - middleValue.priority3
      const right3 = arr[i].priority4 - middleValue.priority4

      let isLeft = false

      if (left === 0 && (right < 0 || (right === 0 && right2 < 0) || (right === 0 && right2 === 0 && right3 < 0))) {
        isLeft = true
      }

      if (left < 0 || isLeft) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }

    return sortArray(leftArr).concat([middleValue], sortArray(rightArr))
  } else {
    return arr
  }
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
  if (sortData instanceof Array) {
    sortData.forEach((item) => {
      setIndex(item, key, maxNumberLength, indexArr)
    })
  } else if (typeof sortData === 'object') {
    for (const sortKey in sortData) {
      if (Object.prototype.hasOwnProperty.call(sortData, sortKey)) {
        const dataItem = sortData[sortKey]
        let sortItem = {}

        if (typeof dataItem === 'object') {
          sortItem = {
            ...sortData[sortKey]
          }
        } else {
          sortItem[realNameMap.realValue] = dataItem
        }
        sortItem[key] = sortData[key] || sortKey
        setIndex(sortItem, key, maxNumberLength, indexArr)
      }
    }
  } else {
    return sortData
  }

  return returnType === 'array' ? sortArray(indexArr) : arrayToObject(sortArray(indexArr), key)
}

/**
 * 根据指定条件搜索模块列表，并排序与生成必要字段
 * @private
 * @param {Function} filterIntercept 搜索条件
 * @param {Boolean} isSort 是否需要排序
 */
const getSortModules = ({ filterIntercept, isSort = true }) => {
  let modules = []
  let componentCount = 0
  if (typeof filterIntercept === 'function') {
    Object.keys(moduleMap).forEach((key) => {
      const component = moduleMap[key]
      component.name = key
      if (filterIntercept(component) === true && component.exclude !== true) {
        const dirs = component.path.split('/')
        const componentName = dirs.slice(1, dirs.indexOf('src'))
        component.UpperName = componentName.pop().split('-').map(capitalize).join('')
        component.LowerName = kebabCase({ str: component.UpperName })
        // 工程的父文件夹
        component.parentDir = componentName
        // libPath: 'packages/todo/dist/pc.js' 组件输出路径
        component.libPath = component.path.replace('/index.js', '/src/index.js').replace('/src/', '/dist/lib/').replace('.vue', '.js')
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
        component.tmpName = component.libPath.replace('.js', '').split('/').slice(-1)[0]
        // global: 'TinyTodoPc'
        component.global = 'Tiny' + key
        modules.push(component)
      }
      component.type === 'component' && componentCount++
    })
    logGreen(`[Contain Components]: Total(${componentCount}) `)
  } else {
    modules = moduleMap
  }
  return isSort ? quickSort({ sortData: modules }) : modules
}

/**
 * 获取所有模块，并排序、格式化
 * @param {Boolean} isSort 是否需要排序
 * @returns 模块对象
 */
const getAllModules = (isSort) => getSortModules({ filterIntercept: () => true, isSort })

/**
 * 获取所有组件，并排序、格式化
 * @param {Boolean} isSort 是否需要排序
 * @returns 组件对象
 */
const getComponents = (isSort) =>
  getSortModules({
    filterIntercept: (item) => !['template'].includes(item.type),
    isSort
  })

/**
 * @param {String} key 根据模块对象的 Key 获取对应的值
 * @returns 模块对象
 */
const getModuleInfo = (key) => moduleMap[key] || {}

/**
 * 将输入的 Map 写入到 modules.json 文件中，并格式化
 * @param {String|Object} moduleMap 模块 Json 对象集合或 Json 字符串
 */
const writeModuleMap = (moduleMap) => {
  writeFileSync(
    pathJoin('..', 'modules.json'),
    prettierFormat({
      str: typeof componentMap === 'string' ? moduleMap : JSON.stringify(moduleMap),
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
const readModuleMap = () => moduleMap || {}

/**
 * 获取模块项的模块
 * @param {String} componentName 组件名称（大写，例如：ImgPreview）
 * @param {String} templateName 模板名称/路径
 * @param {Oject} newObj 新增对象
 * @returns 模块对象
 */
const addModule = ({ componentName, templateName, newObj = {} }) => {
  const isEntry = templateName.endsWith('index')

  return {
    path: `packages/${componentName}/` + (isEntry ? `${templateName}.js` : `src/${templateName}.vue`),
    type: isEntry ? 'component' : 'template',
    exclude: false,
    ...newObj
  }
}

/**
 * 根据指定条件搜索原始模块列表
 * @private
 * @param {Function} filterIntercept 搜索条件
 */
const getModules = (filterIntercept) => {
  let modules = {}

  if (typeof filterIntercept === 'function') {
    for (const key in moduleMap) {
      if (Object.prototype.hasOwnProperty.call(moduleMap, key)) {
        const component = moduleMap[key]

        if (filterIntercept(component) === true && component.exclude !== true) {
          modules[key] = component
        }
      }
    }
  } else {
    modules = moduleMap
  }

  return modules
}

/**
 * 根据组件名称查找模块列表
 * @private
 * @param {String} name 组件名称
 * @param {Boolean} inversion 是否取反
 * @param {Boolean} isOriginal 是否取原始数据
 * @param {Boolean} isSort 是否需要排序
 */
const getByName = ({ name, inversion = false, isOriginal = false, isSort = true }) => {
  const callback = (item) => (inversion ? item.path.indexOf(`/${name}/`) === -1 : item.path.indexOf(`/${name}/`) > -1)

  return isOriginal ? getModules(callback) : getSortModules({ filterIntercept: callback, isSort })
}

const getMobileComponents = () => {
  const modules = getAllModules()
  const componentNames = modules.filter((item) => item.tmpName === 'mobile').map((item) => item.UpperName)

  const components = modules.filter(
    (item) => item.onlyMode === 'mobile' || item.onlyMode === 'all' || (item.type === 'component' && componentNames.includes(item.UpperName))
  )

  return components
}

const getPcComponents = () => {
  const modules = getAllModules()

  const components = modules.filter((item) => item.type === 'component' && item.onlyMode !== 'mobile')

  return components
}

const getOnlyMobileComponents = () => getAllModules().filter((item) => item.onlyMode === 'mobile')

/**
 * 动态创建 modules.json ，适配新建组件
 * @param {String} componentName 组件名称 （驼峰大写：img-preview）
 * @param {Boolean} isMobile 是否为移动组件
 */
const createModuleMapping = (componentName, templateName, isMobile = false) => {
  const upperName = capitalizeKebabCase(componentName)

  // 生成 modules.json 文件
  moduleMap[upperName] = addModule({
    isMobile,
    templateName,
    componentName
  })

  const moduleJson = quickSort({ sortData: moduleMap, returnType: 'object' })

  writeFileSync(
    pathJoin('..', 'modules.json'),
    prettierFormat({
      str: JSON.stringify(moduleJson),
      options: {
        parser: 'json',
        printWidth: 10
      }
    })
  )
}

module.exports = {
  quickSort,
  getByName,
  addModule,
  importName,
  exampleBase,
  defaultMode,
  createModuleMapping,
  isPcComponent,
  getAllModules,
  getComponents,
  getModuleInfo,
  readModuleMap,
  writeModuleMap,
  getPcComponents,
  isMobileComponent,
  getMobileComponents,
  getOnlyMobileComponents,
  getNoTemplateComponents
}
