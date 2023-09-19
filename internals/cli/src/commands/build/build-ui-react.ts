import { logGreen, kebabCase, capitalizeKebabCase, getMinorVersion, isValidVersion } from '../../shared/utils'
import { pathFromWorkspaceRoot } from '../../shared/utils'
import fg from 'fast-glob'
import path from 'node:path'
import { build, defineConfig } from 'vite'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { external } from '../../shared/config'
import dtsPlugin from 'vite-plugin-dts'
import type { Plugin, NormalizedOutputOptions, OutputBundle } from 'rollup'
import fs from 'fs-extra'
import { sync as findUpSync } from 'find-up'
import svgr from 'vite-plugin-svgr'
import { requireModules } from './build-ui'
import replace from 'rollup-plugin-replace'

const moduleMap = require(pathFromWorkspaceRoot('packages/modules-react.json'))
type mode = 'pc' | 'mobile' | 'mobile-first'

const pathFromPackages = (...args) => pathFromWorkspaceRoot('packages', ...args)

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

function getEntryTasks(): Module[] {
  // 读取TinyVue组件库入口文件
  return ['index', 'pc', 'mobile'].map((mode) => ({
    path: `react/${mode}.ts`,
    dtsRoot: true,
    libPath: `react/${mode}`,
    type: 'module',
    name: kebabCase({ str: '@opentiny/react' }),
    global: capitalizeKebabCase('opentinyReact'),
    importName: '@opentiny/react'
  }))
}

export function getAllModules(): Module[] {
  return getSortModules({ filterIntercept: () => true })
}

const getSortModules = ({ filterIntercept }: { filterIntercept: Function; }) => {
  let modules: Module[] = []
  let componentCount = 0
  const importName = '@pe-3/react'
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
        .replace('react/src/', 'packages/')
        .replace('react-common/src/', 'packages/common/')
        .replace('react-locale/src/', 'packages/locale/')
        .replace('react-icon/src/', 'packages/icon/')
        .replace('/index.ts', '/src/index.js')
        .replace('/src/', '/dist/lib/')
        .replace('.jsx', '.js')
        .replace('.tsx', '.js')

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
      component.importName = '@pe-3/react' + '-' + component.libName

      // libName: '@opentiny/vue/todo/pc'
      component.libName = importName + '/' + component.libName

      // tmpName: 'pc'
      component.tmpName = component.libPath.replace('.ts', '').split('/').slice(-1)[0]

      // global: 'TinyTodoPc'
      component.global = 'Tiny' + key

      component.importName = `@pe-3/react-${kebabCase({ str: key })}`

      // "vue-common/src/index.ts" ==> "vue-common/lib/index"
      if (component.type === 'module') {
        component.libPath = component.path.replace('/src/', '/lib/').replace('index.ts', 'index')
      }

      // "vue/src/button/index.ts" ==> "button/lib/index"
      if (component.type === 'component') {
        component.libPath = component.path.replace('react/src/', '').replace('/index.ts', '/lib/index')
      }

      // "vue/src/button/src/mobile-first.vue" ==> "button/lib/mobile-first"
      if (component.type === 'template') {
        component.libPath = component.path.replace('react/src/', '').replace('/src/', '/lib/').replace(/\..+$/, '')
      }

      modules.push(component)
    }

    component.type === 'component' && componentCount++
  })

  return modules
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

const getByName = ({
  name,
  isSort = true,
  inversion = false,
  isOriginal = false
}: {
  name: string
  isSort: boolean
  inversion?: boolean
  isOriginal?: boolean
}) => {
  const callback = (item) => {
    const result = new RegExp(`/${name}/|^react-${name}/`).test(item.path)
    return inversion ? !result : result
  }

  return isOriginal ? getModules(callback) : getSortModules({ filterIntercept: callback })
}

function getTasks(names: string[]) {
  // 没有指定组件，则全量构建
  if (names.length === 0) {
    return [...getAllModules(), ...getEntryTasks()]
  }

  return names
    .map((name) =>
      getByName({
        name: kebabCase({ str: name.replace('@opentiny/react-', '') }),
        isSort: false
      })
    )
    .flat()
}

const getAllIcons = () => {
  const entries = fg.sync('react-icon*/src/*', { cwd: pathFromWorkspaceRoot('packages'), onlyDirectories: true })

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

function toEntry(libs) {
  return libs.reduce((result, { libPath, path: file }) => {
    const tLibPath = libPath.replace('-lib/', '/lib/')
    result[tLibPath] = pathFromPackages(file)
    return result
  }, {})
}

function toTsInclued(libs) {
  return new Set(
    libs
      .filter((item) => ['module', 'component'].includes(item.type))
      .map((lib) => `packages/${lib.dtsRoot ? lib.path : path.dirname(lib.path)}`)
  )
}

function generatePackageJson({ beforeWriteFile }): Plugin {
  return {
    name: 'opentiny-vue:generate-package-json',
    generateBundle(output: NormalizedOutputOptions, bundle: OutputBundle) {
      const cache = {}
      Object.entries(bundle).forEach(([, item]) => {
        // 主入口文件, button/index.ts, common/src/index.ts
        if (item.type === 'chunk' && /\/index\.(js|ts)/.test(item.facadeModuleId!)) {
          // 从源文件中往上查找最近的 package.json 文件
          const packageJsonFile = findUpSync('package.json', { cwd: item.facadeModuleId! })

          if (!packageJsonFile) return

          if (cache[packageJsonFile]) return

          let packageJson
          try {
            packageJson = JSON.parse(fs.readFileSync(packageJsonFile, { encoding: 'utf-8' }))
          } catch { }

          const { filePath, content } = beforeWriteFile(path.dirname(item.fileName), packageJson)

          if (content) {
            this.emitFile({
              type: 'asset',
              fileName: `${filePath}/package.json`,
              source: typeof content === 'string' ? content : JSON.stringify(content, null, 2)
            })
          }

          const changelogFile = path.join(path.dirname(packageJsonFile), 'CHANGELOG.md')
          if (fs.existsSync(changelogFile)) {
            this.emitFile({
              type: 'asset',
              fileName: `${filePath}/CHANGELOG.md`,
              source: fs.readFileSync(changelogFile, { encoding: 'utf-8' })
            })
          }

          cache[packageJsonFile] = true
        }
      })
    }
  }
}

const getComponentAlias = (alias = {}) => {
  getAllModules().forEach((item) => {
    if (item.type === 'component')
      alias[item.importName] = pathFromWorkspaceRoot('packages', item.path)
  })
  return alias
}

const getReactPlugins = (reactVersion: string) => {
  const pluginMap = {
    '18': () => {
      const react18Plugin = requireModules('examples/react-docs/node_modules/@vitejs/plugin-react')
      const react18SvgPlugin = svgr

      return [react18Plugin(), react18SvgPlugin()]
    }
  }

  return pluginMap[reactVersion]()
}

function getBaseConfig({
  dtsInclude,
  dts
}) {
  return defineConfig({
    publicDir: false,
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    define: {
      'process.env.BUILD_TARGET': JSON.stringify('component')
    },
    plugins: [
      ...getReactPlugins('18'),
      generatePackageJson({
        beforeWriteFile: (filePath, content) => {
          // const themeAndRenderlessVersion = `3.${buildTarget}`
          const dependencies: any = {}

          Object.entries(content.dependencies).forEach(([key, value]) => {
            // dependencies里的@opentiny,统一使用：~x.x.0
            // if (isThemeOrRenderless(key)) {
            //   dependencies[key] = getMinorVersion(themeAndRenderlessVersion)
            // } else if ((value as string).includes('workspace:~')) {
            //   dependencies[key] = getMinorVersion(versionTarget)
            // } else {
            //  dependencies[key] = value
            // }
            if ((value as string).includes('workspace:~')) {
              dependencies[key] = '*'
            }
            else {
              dependencies[key] = value
            }
          })

          if (filePath.includes('react-common')) {
            dependencies.react = '18.2.0'
          }

          // 如果是主入口或者svg图标则直接指向相同路径
          if (
            filePath === 'react' ||
            filePath === 'react-icon'
          ) {
            content.main = './index.js'
            content.module = './index.js'
          } else {
            content.main = './lib/index.js'
            content.module = './lib/index.js'
          }

          // 为主入口包添加readme和LICENSE
          // if (filePath === 'vue') {
          //   ['README.md', 'README.zh-CN.md', 'LICENSE'].forEach((item) => {
          //     fs.copySync(
          //       pathFromWorkspaceRoot(item),
          //       path.resolve(pathFromPackages(''), `dist${vueVersion}/@opentiny/vue/${item}`)
          //     )
          //   })
          // }

          // content.types = 'index.d.ts'

          // if (filePath.includes('vue-common') || filePath.includes('vue-locale')) {
          //   content.types = './src/index.d.ts'
          // }

          content.version = '1.0.12'
          content.dependencies = dependencies

          delete content.devDependencies
          delete content.private
          delete content.exports

          return {
            filePath: filePath.replace(/[\\/]lib$/, ''),
            content
          }
        }
      })
    ]
  })
}

async function batchBuild({
  tasks,
  formats,
  message,
  emptyOutDir,
  dts,
  outDir
}) {
  if (tasks.length === 0) return
  logGreen(`====== 开始构建 ${message} ======`)
  const entry = toEntry(tasks)
  const dtsInclude = toTsInclued(tasks)
  await build({
    ...getBaseConfig({ dtsInclude, dts }),
    configFile: false,
    build: {
      outDir,
      emptyOutDir,
      minify: false,
      rollupOptions: {
        plugins: [
          getBabelOutputPlugin({
            presets: [['@babel/preset-env', { loose: true, modules: false }]]
          }) as any,
          replace({
            '.less': '.css'
          })
        ],
        output: {
          strict: false,
          manualChunks: {}
        },
        external: (source, importer, isResolved) => {
          // vite打包入口文件或者没有解析过得包不能排除依赖
          if (isResolved || !importer) {
            return false
          }

          // 图标入口排除子图标
          // if (/react-icon\/index/.test(importer)) {
          //   return /^\.\//.test(source)
          // }

          // 子图标排除周边引用, 这里注意不要排除svg图标
          if (/react-icon\/.+\/index/.test(importer)) {
            return !/\.svg/.test(source)
          }

          // todo: 绕开
          // if (/src\/index/.test(importer)) {
          //   // 模块入口，pc/mobile 文件要分离，同时排除 node_modules 依赖
          //   return /^\.\/(pc|mobile|mobile-first)/.test(source) || external(source)
          // }

          // @opentiny/vue 总入口，需要排除所有依赖
          if (/react\/(index|pc|mobile|mobile-first)\.ts$/.test(importer)) {
            return true
          }

          return external(source)
        },
      },
      lib: {
        entry,
        formats,
        fileName: (format, entryName) => `${entryName}.js`
      }
    }
  })
}

async function batchBuildAll({
  tasks,
  formats,
  message,
  emptyOutDir,
  dts,
  buildTarget,
  npmScope
}) {
  const rootDir = pathFromPackages('')
  const outDir = path.resolve(rootDir, `dist-react/${npmScope}`)
  await batchBuild({
    tasks,
    formats,
    message,
    emptyOutDir,
    dts,
    outDir
  })
}

export async function buildReact(
  names: string[] = [],
  {
    buildTarget = '8.0',
    formats = ['es'],
    clean = false,
    dts = true,
    scope = '@opentiny'
  }
) {
  // 要构建的模块
  let tasks = getTasks(names)

  // 如果指定了打包icon或者没有传入任何组件
  if (names.some((name) => name.includes('icon')) || !names.length) {
    tasks.push(...getAllIcons())
  }

  // 构建 @opentiny/react
  if (names.some((name) => ['@opentiny/react', 'react'].includes(name))) {
    tasks.push(...getEntryTasks())
  }

  const message = `TINY for react: ${JSON.stringify(names.length ? names : '全量')}`

  await batchBuildAll({
    tasks,
    formats,
    message,
    emptyOutDir: clean,
    dts,
    buildTarget,
    npmScope: scope
  })
}
