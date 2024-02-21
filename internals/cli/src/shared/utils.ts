import chalk from 'chalk'
import fs from 'fs-extra'
import { execSync } from 'node:child_process'
import path from 'node:path'
import semver from 'semver'
import prettier from 'prettier'
import { fileURLToPath } from 'node:url'
import { searchForWorkspaceRoot } from 'vite'

const workspaceRoot = searchForWorkspaceRoot(process.cwd())
const pathFromWorkspaceRoot = (...args: string[]) => path.resolve(workspaceRoot, ...args)

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * 根据运行上下文获取路径（运行时打包用）
 * @returns 文件绝对路径
 */
const resolveCwd = (...args: any[]) => {
  return path.join(process.cwd(), ...args)
}

/**
 * 获取模板替换路径（动态）
 * @param {String} posixPath 路径
 * @returns 文件绝对路径
 */
const assetsPath = (posixPath: string) => {
  return path.posix.join('static', posixPath)
}

/**
 * 根据运行上下文获取，当前运行组件的名称
 * @returns 当前运行组件目录名称
 */
const getComponentName = () => {
  return process.cwd().split(path.sep).pop()
}

/**
 * 获取当前上下文的路径
 * @returns 文件绝对路径
 */
const pathJoin = (...args: string[]) => {
  return path.join(dirname, ...args)
}

/**
 * 获取用户输入命令参数
 * @returns 参数数组
 */
const getInputCmd = () => {
  const args: string[] = []
  const argv: string[] = process.argv || []

  argv.forEach((item) => {
    if (!item.includes(path.sep)) {
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

  if (!npmExecpaths) return 'node'

  return npmExecpaths.substring(npmExecpaths.lastIndexOf(path.sep) + 1).replace(/.js|-cli/g, '')
}

/**
 * 执行 node 命令
 * @param {String} cmdStr 命令字符串
 */
const execCmd = (cmdStr: string) => {
  cmdStr && execSync(cmdStr, { stdio: 'inherit' })
}

/**
 * 首字母大写
 * @param {String} str 字符串
 * @returns 字符串
 */
const capitalize = (str: string) => {
  return typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str
}

/**
 * 首字母大写
 * @param {String} str 字符串
 * @returns 字符串
 */
const capitalizeKebabCase = (str: string, splitChar = '-') => {
  return typeof str === 'string' ? str.split(splitChar).map(capitalize).join('') : str
}

/**
 * @description 将驼峰字符串转化为以指定字符分割的小写字符串
 * @example kebabCase({ str : 'ImgPreviewItem' } )
 * @example 输出结果：img-preview-item
 *
 * @param str 字符串
 * @param splitChar 分隔符
 */
const kebabCase = ({ str, splitChar = '-' }: { str: string; splitChar?: string }) => {
  if (!str || typeof str !== 'string') return str

  return str
    .split('')
    .map((char, index) => {
      const charCod = char.charCodeAt(0)

      if (charCod < 65 || charCod > 122) return char

      return charCod >= 65 && charCod <= 90 ? (index !== 0 ? splitChar : '') + char.toLowerCase() : char
    })
    .join('')
}

/**
 * 采用 prettier 美化字符串
 * @param {String} str 格式字符
 * @param {Object} options 格式字符
 */
const prettierFormat = ({ str, options = {} }: { str: string; options?: object }):string => {
  return prettier.format(
    str,
    Object.assign(
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        bracketSpacing: true,
        quoteProps: 'preserve',
        parser: 'typescript'
      } as any,
      options
    )
  ) as unknown as string
}

/**
 * 扫描指定目录下面的组件目录
 * @param {String} dirPath 绝对路径
 * @param {Boolean} isDeep 是否深度遍历
 * @param {Function} fileFilter 文件筛选拦截函数
 * @param {Function} callback 遍历回调
 */
const walkFileTree = ({
  dirPath,
  isDeep = false,
  fileFilter,
  callback
}: {
  dirPath: string
  isDeep: boolean
  fileFilter?: Function
  callback: Function
}) => {
  if (!dirPath || typeof callback !== 'function') {
    return
  }

  const dirs = fs.readdirSync(path.isAbsolute(dirPath) ? dirPath : path.join(dirname, dirPath))

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
 * 获取指定包名的版本号
 * @param {String} name NPM 包名
 * @param {String} context 上下文
 * @param {Boolean} 是否为 vue2 环境
 * @returns 版本号
 */
const getVersion = ({ name, context, isVue2 }: { name: string; context: string; isVue2: boolean }) => {
  return getComponentVersion({ name, context, dir: 'node_modules', isVue2 })
}

/**
 * 获取指定包名的版本号
 * @param {String} name NPM 包名
 * @param {String} context 上下文
 * @param {String} dir 文件目录
 * @param {Boolean} 是否为 vue2 环境
 * @returns 版本号
 */
const getComponentVersion = ({
  name,
  context = '..',
  dir = 'packages',
  isOrigin = false,
  isVue2
}: {
  name: string
  context?: string
  dir?: string
  isOrigin?: boolean
  isVue2: boolean
}) => {
  let version: string
  const packageJSONPath = pathJoin(context, dir, name, 'package.json')

  if (fs.existsSync(packageJSONPath)) {
    version = fs.readJsonSync(packageJSONPath).version
  } else {
    const packageJSON = getopentinyVersion({ key: 'full' })

    version = (packageJSON.devDependencies || packageJSON.dependencies || {})[name] || packageJSON.version
  }

  version = isOrigin ? version : '?v=' + version.replace(/[\^|~]/g, '')

  return getPublichVersion({ version, isVue2 })
}

/**
 * 获取发布的实际版本号
 *
 * @param {String} version 版本号
 * @param {Boolean} 是否为 vue2 环境
 * @returns
 */
const getPublichVersion = ({ version, isVue2 }: { version: string; isVue2: boolean }) => {
  if (isVue2) {
    return version.replace(/^4/, '3').replace('?v=4', '?v=3')
  }

  return version
}

/**
 * 获取指定包的版本号
 * @param {String} name 文件名|字段名
 * @param {Boolean} isRoot
 * @param {Boolean} 是否为 vue2 环境
 * @returns 版本号
 */
const getPackageVersion = ({
  name,
  isRoot = false,
  isVue2 = false
}: {
  name: string
  isRoot: boolean
  isVue2: boolean
}) => {
  let version = isRoot ? getopentinyVersion({ key: name }) : getComponentVersion({ name, isOrigin: true, isVue2 })

  return getMinorVersion(version)
}

const getMinorVersion = (version) => {
  return `~${semver.major(version)}.${semver.minor(version)}.0`
}

// 支持 alpha / beta 等版本号
export const getPatchVersion = (version) => {
  const versionItems = version.split('.')
  versionItems.pop()
  return `~${versionItems.join('.')}.0`
}

/**
 * 获取组件的版本号
 * @param  {String} name 文件名|字段名
 * @param {Boolean} 是否为 vue2 环境
 * @returns 版本号
 */
const getComponentOriginVersion = ({ name, isVue2 }: { name: string; isVue2: boolean }) => {
  return getComponentVersion({ name, isOrigin: true, isVue2 })
}

/**
 * 获取根目录 package.json 中的 version
 * @param {String} 对象的 Key
 * @param {Boolean} 是否为 vue2 环境
 * @returns 版本号
 */
const getopentinyVersion = ({ key = 'version' }: { key: string }) => {
  const packageJson = fs.readJsonSync(pathFromWorkspaceRoot('packages/vue/package.json'))
  const packageJsonOption = packageJson[key] || packageJson

  return packageJsonOption
}

/**
 * 获取指定依赖的版本号
 */
const getDependentVersion = ({ libraryName, packageJSON }) => {
  const packageJson = packageJSON || getopentinyVersion({ key: 'all' })

  packageJson.dependencies = packageJson.dependencies || {}
  packageJson.devDependencies = packageJson.devDependencies || {}

  return packageJson.dependencies[libraryName] || packageJson.devDependencies[libraryName]
}

/**
 * 获取当前环境下 theme、theme-mobile、renderless
 */
const getInnerDependenciesVersion = ({ isTestEnv, tag, version }) => {
  let themeVersion
  let renderlessVersion
  let themeMobileVersion
  const themeCommonVersion = version.replace(/(4)(\.\d+\.\d+)/, '3$2')

  if (isTestEnv) {
    renderlessVersion = tag
    themeVersion = tag
    themeMobileVersion = tag
  } else {
    themeVersion = themeCommonVersion
    themeMobileVersion = themeCommonVersion
    renderlessVersion = version.replace('3.22.', '4.22.')
  }

  return {
    themeVersion,
    themeMobileVersion,
    renderlessVersion
  }
}

/**
 * 在控制台显示绿色提示
 * @param {String} 提示内容
 */
const logGreen = (str: string) => {
  /* eslint-disable no-console */
  console.log(chalk.green('### ' + str))
}

/**
 * 在控制台显示黄色提示
 * @param {String} 提示内容
 */
const logYellow = (str: string) => {
  console.log(chalk.yellow('### ' + str))
}

/**
 * 在控制台显示青色提示
 * @param {String} 提示内容
 */
const logCyan = (str: string) => {
  console.log(chalk.cyan('### ' + str))
}

/**
 * 在控制台显示红色提示
 * @param {String} 提示内容
 */
const logRed = (str: string) => {
  console.log(chalk.red('### ' + str))
}

/**
 * 根据运行上下文或者环境变量判断是否为 Vue2 环境
 */
const isBuildForVue2 = () => {
  return (process.env.VUE_VERSION || process.env.npm_lifecycle_event || 'vue2').includes('vue2')
}

const getVueVersion = () => {
  return parseFloat((process.env.VUE_VERSION || 'vue2').replace('vue', ''))
}

/**
 * 打包 Vue3 版本时 packageJson 文件 name dependencies 更改 @opentiny/vue 改为 @opentiny/vue3
 */
const changePackageName = ({ packageJSON, isVue2 }) => {
  if (!isVue2) {
    packageJSON.name = packageJSON.name.replace(/^@opentiny\/vue(?!3)/, '@opentiny/vue3')

    for (const key in packageJSON.dependencies) {
      if (/^@opentiny\/vue(?!3)/.test(key)) {
        const version = packageJSON.dependencies[key]

        delete packageJSON.dependencies[key]

        packageJSON.dependencies[key.replace(/^@opentiny\/vue(?!3)/, '@opentiny/vue3')] = version
      }
    }
  }
}

/*
 * 获取 opentiny 分组下指定包名、tag 名称的版本号
 */
const getLiblaryTagVersion = ({ tag, name }) => {
  const version = execSync(`npm v @opentiny/${name}@${tag} version`).toString('utf-8').replace(/\n/, '')

  if (tag === 'latest') {
    return getMinorVersion(version)
  }

  return version.includes(tag) ? version : ''
}

/*
 * 获取发布 npm 包版本支持的 tag 类别数组
 */
const getNpmTagArray = () => {
  return ['alpha', 'beta', 'latest', 'next', 'echarts5', 'icsl', 'saas', 'mf']
}

const getBuildTag = ({ version }) => {
  const tags = getNpmTagArray()
  const inputArgs = (version || '').split('.')
  let isTestEnv = false
  let tag = 'latest'

  if (inputArgs.length) {
    const versions = (inputArgs[2] || '').split('-')

    if (tags.includes(versions[1])) {
      isTestEnv = true
      tag = versions[1]
    }
  }

  return { isTestEnv, tag }
}

/**
 * 获取指定文件夹下所有文件的路径
 * @param {string} folderPath
 *
 * @return {Array<string>} filesPath
 */
const getFilesPath = (folderPath: string): Array<string> => {
  let filesPath: string[] = []
  try {
    let files = fs.readdirSync(folderPath)
    files.forEach((file) => {
      let tempPath = path.join(folderPath, file)
      let stats = fs.statSync(tempPath)

      if (stats.isDirectory()) {
        // eslint-disable-next-line prefer-spread
        filesPath.push.apply(filesPath, getFilesPath(tempPath))
      } else {
        filesPath.push(tempPath)
      }
    })
  } catch (e) {
    console.warn('Path Error:' + folderPath)
    return filesPath
  }

  return filesPath
}

/**
 * 读取指定文件 filePath，并将文件中 regExpStr 匹配的片段用 targetStr 替换
 * @param {string} filePath
 * @param {Array<RegExp> | RegExp} regExpStr
 * @param {Array<string> | string} targetStr
 */
const fragmentReplace = (filePath, regExpStr, targetStr) => {
  let file = fs.readFileSync(filePath, 'utf8')

  if (Array.isArray(regExpStr) && Array.isArray(targetStr) && regExpStr.length === targetStr.length) {
    targetStr.forEach((_, index) => {
      file = file.replace(regExpStr[index], targetStr[index])
    })
  } else {
    file = file.replace(regExpStr, targetStr)
  }

  fs.writeFileSync(filePath, file, 'utf8')
}

/**
 * 读取指定文件 filePath，并将文件中 regExpStr 匹配的片段用 targetStr 替换
 * @param {Array<string>} filesPath
 * @param {Array<string> | string} regExpStr
 * @param {Array<string> | string} targetStr
 */
const filesFragmentReplace = (
  folderPath,
  regExpStr: Array<string | RegExp> | string | RegExp,
  targetStr: Array<string> | string
) => {
  let filesPath = getFilesPath(folderPath)

  if (filesPath) {
    filesPath.forEach((item) => {
      fragmentReplace(item, regExpStr, targetStr)
    })
  }
}

/** 是否已打包 */
const isCLIProduction = process.env.TINY_TSUP_ENV === 'production'

/** 相对 `CLI` 工程目录解析路径 */
const pathJoinFromCLI = (...args: string[]) => {
  const cliDir = path.resolve(dirname, '../../', isCLIProduction ? '../' : '')
  return path.join(cliDir, ...args)
}

/** 相对 `CLI` 入口文件解析目录 */
const pathJoinFromCLIEntry = (...args: string[]) => {
  return path.join(dirname, '../', ...args)
}

/** 模板所在路径 */
const templatePath = isCLIProduction ? pathJoinFromCLIEntry('./template') : pathJoinFromCLI('./public/template')

export const isValidVersion = (version: string): boolean => /^\d+(\.\d+){2}(-[a-zA-Z0-9\.]+)?$/.test(version)

export {
  assetsPath,
  capitalize,
  capitalizeKebabCase,
  changePackageName,
  execCmd,
  fragmentReplace,
  filesFragmentReplace,
  getopentinyVersion,
  getComponentName,
  getComponentOriginVersion,
  getComponentVersion,
  getCurrentCliTool,
  getDependentVersion,
  getFilesPath,
  getInnerDependenciesVersion,
  getInputCmd,
  getLiblaryTagVersion,
  getNpmTagArray,
  getPackageVersion,
  getPublichVersion,
  getVersion,
  isBuildForVue2,
  kebabCase,
  logCyan,
  logGreen,
  logRed,
  logYellow,
  pathJoin,
  prettierFormat,
  resolveCwd,
  walkFileTree,
  getBuildTag,
  getVueVersion,
  pathFromWorkspaceRoot,
  getMinorVersion,
  pathJoinFromCLI,
  pathJoinFromCLIEntry,
  templatePath
}
