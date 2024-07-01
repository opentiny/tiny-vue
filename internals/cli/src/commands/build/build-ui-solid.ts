import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { createRequire } from 'node:module'
import path from 'node:path'
import { build, defineConfig } from 'vite'
import { getAlias, pathFromWorkspaceRoot } from '../../config/vite'
import { external } from '../../shared/config'
import type { Module } from '../../shared/module-utils'
import { getAllIcons, getAllModules, getByName } from '../../shared/module-utils'
import { logGreen, kebabCase, capitalizeKebabCase, getPatchVersion, isValidVersion } from '../../shared/utils'
import generatePackageJsonPlugin from './rollup/generate-package-json'
import inlineChunksPlugin from './rollup/inline-chunks'
import replaceModuleNamePlugin from './rollup/replace-module-name'
import solid from 'vite-plugin-solid'
import vueTemplate2jsx from '@opentiny/vue-vite-template2jsx'

export const pathFromPackages = (...args) => pathFromWorkspaceRoot('packages', ...args)
export const require = createRequire(import.meta.url)
export const requireModules = (id: string) => require(require.resolve(pathFromWorkspaceRoot(id)))

// 需要打包的solid组件
const buildComponents = ['alert', 'button']

export interface BaseConfig {
  buildTarget: string
  npmScope?: string
}

export const getBaseConfig = ({ buildTarget }: BaseConfig) => {
  const versionTarget = isValidVersion(buildTarget) ? buildTarget : `3.${buildTarget}`
  const themeAndRenderlessVersion = isValidVersion(buildTarget) ? buildTarget : `3.${buildTarget}`
  const isThemeOrRenderless = (key) => key.includes('@opentiny/vue-theme') || key.includes('@opentiny/vue-renderless')

  return defineConfig({
    publicDir: false,
    plugins: [
      inlineChunksPlugin({ deleteInlinedFiles: true }),
      generatePackageJsonPlugin({
        beforeWriteFile: (filePath, content) => {
          const dependencies = {}

          Object.entries(content.dependencies).forEach(([key, value]) => {
            // dependencies里的@opentiny,统一使用：~x.x.0
            if (isThemeOrRenderless(key)) {
              dependencies[key] = getPatchVersion(themeAndRenderlessVersion)
            } else if ((value as string).includes('workspace:~')) {
              dependencies[
                key.replace('@opentiny/vue', '@opensolidtiny/solid').replace('@opentiny/solid', '@opensolidtiny/solid')
              ] = getPatchVersion(versionTarget)
            } else {
              dependencies[key] = value
            }
          })

          const matchList = ['solid-icon', 'vue-icon-saas', 'solid']

          // 如果是主入口、svg图标或者主题规范包则直接指向相同路径
          if (matchList.includes(filePath)) {
            content.main = './index.js'
            content.module = './index.js'
          } else {
            content.main = './lib/index.js'
            content.module = './lib/index.js'
          }

          content.name = content.name
            .replace('@opentiny/vue', '@opensolidtiny/solid')
            .replace('@opentiny/solid', '@opensolidtiny/solid')
          content.version = versionTarget
          content.dependencies = dependencies

          delete content.devDependencies
          delete content.private
          delete content.exports

          return {
            filePath: filePath.replace(/[\\/]lib$/, ''),
            content
          }
        }
      }),
      replaceModuleNamePlugin(versionTarget),
      vueTemplate2jsx(),
      solid({ extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue'] })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        ...getAlias(3, '', '')
      }
    },
    define: {
      'process.env.BUILD_TARGET': JSON.stringify('component')
    }
  })
}

async function batchBuildAll({ tasks, formats, message, emptyOutDir, buildTarget, npmScope }) {
  const rootDir = pathFromPackages('')
  const outDir = path.resolve(rootDir, `dist-solid/${npmScope}`)
  await batchBuild({
    tasks,
    formats,
    message,
    emptyOutDir
  })

  function toEntry(libs) {
    return libs.reduce((result, { libPath, path: file }) => {
      const tLibPath = libPath.replace('-lib/', '/lib/')
      result[tLibPath] = pathFromPackages(file)
      return result
    }, {})
  }

  async function batchBuild({ tasks, formats, message, emptyOutDir }) {
    if (tasks.length === 0) return
    logGreen(`====== 开始构建 ${message} ======`)
    const entry = toEntry(tasks)

    await build({
      configFile: false,
      ...getBaseConfig({ buildTarget }),
      build: {
        emptyOutDir,
        minify: false,
        rollupOptions: {
          plugins: [
            getBabelOutputPlugin({
              presets: [['@babel/preset-env', { loose: true, modules: false }]]
            }) as any
          ],
          external: (source, importer, isResolved) => {
            // vite打包入口文件或者没有解析过得包不能排除依赖
            if (isResolved || !importer) {
              return false
            }

            if (/vue-icon(-saas)?\/index/.test(importer)) {
              // 图标入口排除子图标
              return /^\.\//.test(source)
            }

            // 子图标排除周边引用, 这里注意不要排除svg图标
            if (/vue-icon(-saas)?\/.+\/index/.test(importer)) {
              return !/\.svg/.test(source)
            }

            if (/src\/index/.test(importer)) {
              // 模块入口，pc/mobile 文件要分离，同时排除 node_modules 依赖
              return /^\.\/(pc|mobile|mobile-first)/.test(source) || external(source)
            }

            // @opentiny/vue 总入口，需要排除所有依赖
            if (/vue\/(index|pc|mobile|mobile-first)\.ts$/.test(importer)) {
              return true
            }

            return external(source)
          },
          output: {
            strict: false,
            manualChunks: {}
          }
        },
        lib: {
          // 这里可以多入口打包，也可以单入口打包
          entry,
          formats,
          fileName: (format, entryName) => `${entryName}.js`
        },
        outDir
      }
    })
  }
}

export interface BuildUiOption {
  buildTarget: string // 目标版本，必填, 不需要major位，因为需要同时打出vue2和vue3的包
  formats: string[] // 打包的格式
  clean: boolean // 是否清空build产物
  scope?: string // npm的组织名称
  min?: boolean // 是否压缩产物
}

function getEntryTasks(): Module[] {
  // 读取TinyVue组件库入口文件
  return [
    {
      path: `solid/index.ts`,
      libPath: `solid/index`,
      type: 'module',
      name: kebabCase({ str: '@opensolidtiny/solid' }),
      global: capitalizeKebabCase('opentinySolid'),
      importName: '@opensolidtiny/solid'
    }
  ]
}

function getSolidCommonTasks(): Module[] {
  // 读取TinyVue组件库入口文件
  return [
    {
      path: `solid/src/common/src/index.ts`,
      libPath: `common/lib/index`,
      type: 'module',
      name: kebabCase({ str: '@opensolidtiny/solid-common' }),
      global: capitalizeKebabCase('opentinySolidCommon'),
      importName: '@opensolidtiny/solid-common'
    }
  ]
}

function getTasks(names: string[]): Module[] {
  // 没有指定组件，则全量构建
  if (names.length === 0) {
    return [...getAllModules(false)]
  }

  return names
    .map((name) =>
      getByName({
        name: kebabCase({ str: name.replace('@opentiny/vue-', '') }),
        isSort: false
      })
    )
    .flat()
}

/**
 * TinyVue组件打包主入口
 * @private
 * @param {string[]} names 需要打包的名字，如果不传默认打包全量组件 例如只打包alert和button两个组件 pnpm build:ui alert button
 * @param {BuildUiOption} buildUiOption 具体参数参考BuildUiOption接口
 */

export async function buildSolid(
  names: string[] = [],
  { buildTarget = '3.14.0', formats = ['es'], clean = false, scope = '@opensolidtiny' }: BuildUiOption
) {
  // 是否清空构建目录
  let emptyOutDir = clean
  // 要构建的模块
  let tasks = getTasks(names).filter((item) => !item.path.includes('mobile'))

  // 如果指定了打包icon或者没有传入任何组件
  if (names.some((name) => name.includes('icon')) || !names.length) {
    const icons = getAllIcons()
    icons.forEach((item) => {
      item.libPath = item.libPath.replace('vue-icon', 'solid-icon')
    })

    tasks.push(...icons)
  }

  // 过虑出需要打包的solid组件入口
  tasks = tasks
    .filter((item) =>
      buildComponents.some((value) => item.path.includes(`/${value}/`) || item.path.includes('vue-icon'))
    )
    .filter((item) => !item.path.includes('icon-saas'))

  tasks.forEach((item) => {
    if (item.libPath.includes('vue-icon')) {
      item.libPath = item.libPath.replace('vue-icon', 'solid-icon')
    }
  })

  // 打包入口文件
  if (names.length === 0 || names.some((name) => ['@opensolidtiny/solid', 'solid'].includes(name))) {
    tasks.push(...getEntryTasks(), ...getSolidCommonTasks())
  }

  // 要构建的vue框架版本
  const message = `TINY for solid: ${JSON.stringify(names.length ? names : '全量')}`
  await batchBuildAll({ tasks, formats, message, emptyOutDir, buildTarget, npmScope: scope })
  // 确保只运行一次
  emptyOutDir = false
}
