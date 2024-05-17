import fs from 'fs-extra'
import semver from 'semver'
import { execSync } from 'node:child_process'
import { getModuleVersion, pathFromWorkspaceRoot, logYellow, logGreen } from '../utils/common'

const VALID_MODULES = ['ui', 'theme', 'themeSaas', 'themeMobile', 'renderless', 'docs']
const VALID_VUE_VERSION = ['2', '3']
enum Module {
  ui = 'ui',
  theme = 'theme',
  themeSaas = 'themeSaas',
  themeMobile = 'themeMobile',
  renderless = 'renderless',
  docs = 'docs'
}

const getBuildVueVersion = (version: string): string => {
  return [semver.minor(version), semver.patch(version)].join('.')
}

/**
 * 获取模块发布版本号
 * @param module 模块
 * @returns 发布版本号
 */
const getPublishVersion = (module: Module): string => {
  if (process.env.VERSION) {
    return process.env.VERSION
  }

  let packageName: string
  if (module === Module.ui) {
    packageName = 'vue'
  } else if (module === Module.docs) {
    packageName = 'vue-docs'
  } else {
    packageName = `vue-${module}`
  }
  const version = getModuleVersion({ name: packageName })
  return semver.inc(version, 'patch')
}

/**
 * 打包组件vue模板
 * @param {string} publishVersion 版本号
 * @returns void
 */
const execBuildUI = (publishVersion: string): void => {
  const components = process.env.COMPONENTS || ''
  const vueVersion = process.env.VUE_VERSION || ''
  const buildVersion = getBuildVueVersion(publishVersion)
  const vueVersionParam = VALID_VUE_VERSION.includes(vueVersion) ? `-v ${vueVersion}` : ''
  const buildCommand = `pnpm -C ../../ build:ui ${components} ${vueVersionParam} -t ${buildVersion}`

  logYellow(`\n[auto-build-pub] start to build ui ${vueVersionParam} -t ${buildVersion}  >>>>>>>>>>>>>>>`)
  execSync(buildCommand, { stdio: 'inherit' })
}

/**
 * 构建包
 * @param {string} module 包名
 * @param {string} publishVersion 版本号
 * @returns void
 */
const execBuild = (module: Module, publishVersion: string): void => {
  // 官网文档不需要打包
  if (module === Module.docs) {
    return
  }

  if (module === Module.ui) {
    execBuildUI(publishVersion)
  } else {
    logYellow(`\n[auto-build-pub] start to build ${module} v${publishVersion}  >>>>>>>>>>>>>>>`)

    const buildCommand = `pnpm -C ../../ build:${module}`
    execSync(buildCommand, { stdio: 'inherit' })
  }

  logGreen(`[auto-build-pub] finish building ${module} v${publishVersion} \n`)
}

/**
 * 获取模块包的 package.json 路径
 * @param module 模块名
 * @returns {string} 文件路径
 */
const getPackageJsonPath = (module: Module): string => {
  let packageJsonDir = module === Module.docs ? 'examples/sites' : `packages/${module}/dist`

  return pathFromWorkspaceRoot(`${packageJsonDir}/package.json`)
}

/**
 * 修改构建包中package.json的version
 * @param {string} module 模块名
 * @param {string} publishVersion 发布版本号
 * @returns void
 */
const modifyVersion = (module: Module, publishVersion: string): void => {
  if (!publishVersion || module === Module.ui) {
    return
  }

  const packageJsonPath = getPackageJsonPath(module)
  if (fs.existsSync(packageJsonPath)) {
    const packageJSON = fs.readJSONSync(packageJsonPath)
    packageJSON.version = publishVersion
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJSON, null, 2) + '\n')
  }
}

/**
 * 发布包到测试仓库
 * @param {string[]} moduleList 待发布的npm包列表
 * @returns void
 */
const execPublish = (moduleList: string[]): void => {
  logYellow(`\n[auto-build-pub] start to publish ${moduleList.join(',')}  >>>>>>>>>>>>>>>`)

  execSync('pnpm -C ../../ pub:all', { stdio: 'inherit' })
  if (moduleList.includes('docs')) {
    execSync('pnpm -C ../../ pub:site', { stdio: 'inherit' })
  }
  logGreen(`[auto-build-pub] finish publishing.\n`)
}

/** 待处理的依赖 */
const MODULES = process.env.MODULES
if (MODULES) {
  const moduleList = MODULES.split(',')
    .map((i) => i.trim())
    .filter((i) => VALID_MODULES.includes(i)) as Module[]
  moduleList.forEach((module: Module) => {
    // 发布版本号
    const publishVersion = getPublishVersion(module)
    execBuild(module, publishVersion)
    modifyVersion(module, publishVersion)
  })
  execPublish(moduleList)
}
