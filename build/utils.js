const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { execSync } = require('child_process')
const log = global.console

const logger = log.log

/**
 * 根据运行上下文获取路径（运行时打包用）
 * @returns 文件绝对路径
 */
const resolveCwd = (...args) => path.join(process.cwd(), ...args)

/**
 * 获取模板替换路径（动态）
 * @param {String} posixPath 路径
 * @returns 文件绝对路径
 */
const assetsPath = (posixPath) => path.posix.join('static', posixPath)

/**
 * 根据运行上下文获取，当前运行组件的名称
 * @returns 当前运行组件目录名称
 */
const getComponentName = () => process.cwd().split(path.sep).pop()

/**
 * 获取当前上下文的路径
 * @returns 文件绝对路径
 */
const pathJoin = (...args) => path.join(__dirname, ...args)

/**
 * 获取用户输入命令参数
 * @returns 参数数组
 */
const getInputCmd = () => {
  const args = []
  const argv = process.argv || []

  argv.forEach((item) => {
    if (item.indexOf(path.sep) === -1) {
      args.push(item)
    }
  })

  return args
}

/**
 * 获取当前执行 cli 命令的工具：node\npm\yarn
 * @returns node\npm\yarn
 */
const getCurrentCliTool = () => {
  const npmExecpaths = process.env.npm_execpaths

  if (!npmExecpaths) {
    return 'node'
  }

  return npmExecpaths.substring(npmExecpaths.lastIndexOf(path.sep) + 1).replace(/.js|-cli/g, '')
}

/**
 * 执行 node 命令
 * @param {String} cmdStr 命令字符串
 */
const execCmd = (cmdStr) => {
  cmdStr && execSync(cmdStr, { stdio: 'inherit' })
}

/**
 * 首字母大写
 * @param {String} str 字符串
 * @returns 字符串
 */
const capitalize = (str) => (typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str)

/**
 * 首字母大写
 * @param {String} str 字符串
 * @returns 字符串
 */
const capitalizeKebabCase = (str, splitChar = '-') => (typeof str === 'string' ? str.split(splitChar).map(capitalize).join('') : str)

/**
 * @description 将驼峰字符串转化为以指定字符分割的小写字符串
 * @example kebabCase({ str : 'ImgPreviewItem' } )
 * @example 输出结果：img-preview-item
 *
 * @param str 字符串
 * @param splitChar 分隔符
 */
const kebabCase = ({ str, splitChar = '-' }) => {
  if (!str || typeof str !== 'string') {
    return str
  }

  return str
    .split('')
    .map((char, index) => {
      const charCod = char.charCodeAt(0)

      if (charCod < 65 || charCod > 122) {
        return char
      }

      return (charCod >= 65 && charCod) <= 90 ? (index === 0 ? '' : splitChar) + char.toLowerCase() : char
    })
    .join('')
}

/**
 * 采用 prettier 美化字符串
 * @param {String} str 格式字符
 * @param {Object} options 格式字符
 */
const prettierFormat = ({ str, options = {} }) =>
  require('prettier').format(str, {
    printWidth: 100,
    jsxBracketSameLine: false,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: 'none',
    bracketSpacing: true,
    parser: 'babel',
    ...options
  })

/**
 * @private
 * @param {String} path dotted to indicate levels in an object.
 * @param {Object} view for the data.
 */
function extractValue(path, view) {
  if (view && view[path]) {
    return view[path]
  }

  const parts = path.split('.')
  let part = ''

  while (view && (part = parts.shift())) {
    view = typeof view === 'object' && part in view ? view[part] : undefined
  }

  return view
}

/**
 * 渲染字符串模板
 * @param {String} leftChar 匹配左边字符
 * @param {String} rightChar 匹配右边字符
 */
const renderTemplate = ({ leftChar = '{{', rightChar = '}}' } = {}) => {
  const specialChar = ['[', ']']
  const _leftChar = leftChar.split('').map((item) => (specialChar.includes(item) ? '\\' : '') + item)

  const _rightChar = rightChar.split('').map((item) => (specialChar.includes(item) ? '\\' : '') + item)

  const REGEX = new RegExp(`${_leftChar.join('')}([a-zA-Z.-_0-9]+)${_rightChar.join('')}`, 'g')

  return (input, view) => {
    if (input.indexOf(leftChar) === -1) {
      return input
    }

    let result
    const replaced = input.replace(REGEX, (original, path) => {
      const value = extractValue(path, view)

      if (undefined === value || value === null) {
        return original
      }

      if (typeof value === 'object') {
        result = value
        return
      }

      return value
    })

    return undefined === result ? replaced : result
  }
}

/**
 * 扫描指定目录下面的组件目录
 * @param {String} dirPath 绝对路径
 * @param {Boolean} isDeep 是否深度遍历
 * @param {Function} fileFilter 文件筛选拦截函数
 * @param {Function} callback 遍历回调
 */
const walkFileTree = ({ dirPath, isDeep = false, fileFilter, callback }) => {
  if (!dirPath || typeof callback !== 'function') {
    return
  }

  const dirs = fs.readdirSync(path.isAbsolute(dirPath) ? dirPath : path.join(__dirname, dirPath))

  if (Array.isArray(dirs) && dirs.length > 0) {
    dirs.forEach((file) => {
      let isFind = true
      const subPath = path.join(dirPath, file)
      const isDirectory = fs.statSync(subPath).isDirectory()

      if (typeof fileFilter === 'function') {
        isFind = fileFilter({ file, subPath, dirs, isDirectory }) === true
      }

      if (isFind && isDirectory) {
        if (isDeep) {
          walkFileTree({ isDeep, dirPath: subPath, fileFilter, callback })
          return
        }
      }

      callback({ file, subPath, dirs, isDirectory })
    })
  }
}

/**
 * 获取根目录 package.json 中的 version
 * @param {String} 对象的 Key
 */
const getTinyVersion = (key = 'version') => {
  const packageJson = fs.readJsonSync(pathJoin('..', 'package.json'))

  return packageJson[key] || packageJson
}

/**
 * 获取指定包名的版本号
 *
 * @param {String} name NPM 包名
 * @param {String} context 上下文
 * @returns
 */
const getVersion = (name, context = '..') => {
  let version
  const packageJSON = getTinyVersion('full')

  try {
    version = fs.readJsonSync(pathJoin(context, 'node_modules', name, 'package.json')).version
  } catch (e) {
    version = (packageJSON.devDependencies || packageJSON.dependencies || {})[name] || packageJSON.version
  }

  return '?v=' + version.replace(/[\^|~]/g, '')
}

/**
 * 在控制台显示绿色提示
 * @param {String} 提示内容
 */
const logGreen = (str) => {
  logger(chalk.green('### ' + str))
}

/**
 * 在控制台显示黄色提示
 * @param {String} 提示内容
 */
const logYellow = (str) => {
  logger(chalk.yellow('### ' + str))
}

/**
 * 在控制台显示青色提示
 * @param {String} 提示内容
 */
const logCyan = (str) => {
  logger(chalk.cyan('### ' + str))
}

/**
 * 在控制台显示红色提示
 * @param {String} 提示内容
 */
const logRed = (str) => {
  logger(chalk.red('### ' + str))
}

module.exports = {
  logRed,
  execCmd,
  logCyan,
  pathJoin,
  logGreen,
  logYellow,
  kebabCase,
  assetsPath,
  capitalize,
  getVersion,
  resolveCwd,
  getInputCmd,
  walkFileTree,
  renderTemplate,
  prettierFormat,
  getTinyVersion,
  getComponentName,
  getCurrentCliTool,
  capitalizeKebabCase
}
