import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import fs from 'fs-extra'
import { createRequire } from 'node:module'
import path from 'node:path'
import { build, defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import vue3SvgPlugin from 'vite-svg-loader'
import { getAlias, pathFromWorkspaceRoot } from '../../config/vite'
import { external } from '../../shared/config'
import type { Module } from '../../shared/module-utils'
import { getAllIcons, getAllModules, getByName } from '../../shared/module-utils'
import { logGreen, kebabCase, capitalizeKebabCase, getPatchVersion, isValidVersion } from '../../shared/utils'
import generatePackageJsonPlugin from './rollup/generate-package-json'
import inlineChunksPlugin from './rollup/inline-chunks'
import replaceModuleNamePlugin from './rollup/replace-module-name'

export const pathFromPackages = (...args) => pathFromWorkspaceRoot('packages', ...args)
export const require = createRequire(import.meta.url)
export const requireModules = (id: string) => require(require.resolve(pathFromWorkspaceRoot(id)))

export const getVuePlugins = (vueVersion: string) => {
  const pluginMap = {
    '2': () => {
      const vue2Plugin = requireModules('examples/vue2/node_modules/vite-plugin-vue2').createVuePlugin
      const vue2SvgPlugin = requireModules('examples/vue2/node_modules/vite-plugin-vue2-svg').createSvgPlugin
      return [
        vue2Plugin({
          jsx: true,
          template: {
            compilerOptions: {
              comments: false
            }
          }
        }),
        vue2SvgPlugin({
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false
                  }
                }
              },
              'prefixIds'
            ]
          }
        })
      ]
    },
    '2.7': () => {
      const vue27Plugin = requireModules('examples/vue2.7/node_modules/@vitejs/plugin-vue2')
      const vue27JsxPlugin = requireModules('examples/vue2.7/node_modules/@vitejs/plugin-vue2-jsx')
      const vue2SvgPlugin = requireModules('examples/vue2/node_modules/vite-plugin-vue2-svg').createSvgPlugin
      const vue27Compiler = requireModules('examples/vue2.7/node_modules/vue/compiler-sfc')

      return [
        vue27Plugin({
          compiler: vue27Compiler,
          template: {
            compilerOptions: {
              comments: false
            }
          }
        }),
        vue27JsxPlugin({ injectH: false }),
        vue2SvgPlugin({
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false
                  }
                }
              },
              'prefixIds'
            ]
          }
        })
      ]
    },
    '3': () => {
      const vue3Plugin = requireModules('examples/vue3/node_modules/@vitejs/plugin-vue')
      const vue3JsxPlugin = requireModules('examples/vue3/node_modules/@vitejs/plugin-vue-jsx')

      return [
        vue3Plugin({
          template: {
            compilerOptions: {
              comments: false
            }
          }
        }),
        vue3JsxPlugin(),
        vue3SvgPlugin({
          defaultImport: 'component',
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false
                  }
                }
              },
              'prefixIds'
            ]
          }
        })
      ]
    }
  }

  return pluginMap[vueVersion]() || []
}

export const ns = (ver) => ({ '2': '2', '2.7': '2', '3': '3' })[ver] || ''

export interface BaseConfig {
  vueVersion: string
  dtsInclude: string[] | Set<string>
  dts: boolean
  buildTarget: string
  npmScope?: string
  isRuntime: boolean
  design: string
}

export const getBaseConfig = ({ vueVersion, dtsInclude, dts, buildTarget, isRuntime, design }: BaseConfig) => {
  // 处理tsconfig中配置，主要是处理paths映射，确保dts可以找到正确的包
  const compilerOptions = require(pathFromWorkspaceRoot(`tsconfig.vue${vueVersion}.json`)).compilerOptions
  let versionTarget = isValidVersion(buildTarget) ? buildTarget : `${ns(vueVersion)}.${buildTarget}`
  let themeAndRenderlessVersion = isValidVersion(buildTarget) ? buildTarget : `3.${buildTarget}`
  const isThemeOrRenderless = (key) => key.includes('@opentiny/vue-theme') || key.includes('@opentiny/vue-renderless')

  return defineConfig({
    publicDir: false,
    plugins: [
      // pc和mobile的总入口可能是/src/index.ts或者/src/index.vue
      virtualTemplatePlugin({ include: ['**/packages/vue/**/src/index.ts', '**/packages/vue/**/src/index.vue'] }),
      ...getVuePlugins(vueVersion),
      dts &&
        dtsPlugin({
          root: pathFromWorkspaceRoot(),
          tsconfigPath: `tsconfig.vue${vueVersion}.json`,
          aliasesExclude: [/@opentiny\/vue.+/],
          compilerOptions: {
            paths: {
              ...compilerOptions.paths,
              // 一定要映射到 packages/vue 下对应的 vue 版本和 @vue/composition-api 才能正确生成 dts
              'vue': [`packages/vue/node_modules/vue${vueVersion}`],
              '@vue/runtime-core': ['packages/vue/node_modules/@vue/runtime-core'],
              '@vue/runtime-dom': ['packages/vue/node_modules/@vue/runtime-dom'],
              '@vue/composition-api': ['packages/vue/node_modules/@vue/composition-api']
            }
          },
          include: [...dtsInclude, 'packages/vue/*.d.ts'],
          exclude: ['**/__tests__', '**/__test__'],
          beforeWriteFile: (filePath, content) => {
            return {
              // "vue/src/alert/index.d.ts" ==> "alert/index.d.ts"
              filePath: filePath.replace('/vue/src', '').replace('\\vue\\src', ''),
              content: content
                // vue 2.7 还不能正常识别 vue-common
                .replace(/import\('[./]+vue-common.+'\)/, 'import("vue")')
                .replace(/\("vue[1-9\.]+/g, '("vue')
            }
          }
        }),
      !isRuntime && inlineChunksPlugin({ deleteInlinedFiles: true }),
      !isRuntime &&
        generatePackageJsonPlugin({
          beforeWriteFile: (filePath, content) => {
            const dependencies = {}
            const packageVersion = content.version

            // 如果没有指定版本号，则按源码版本发布
            if (!buildTarget) {
              themeAndRenderlessVersion = packageVersion
              versionTarget = `${vueVersion}${packageVersion.slice(1)}`
            }

            Object.entries(content.dependencies).forEach(([key, value]) => {
              // dependencies里的@opentiny,统一使用：~x.x.0
              if (isThemeOrRenderless(key)) {
                dependencies[key] = getPatchVersion(themeAndRenderlessVersion)
              } else if ((value as string).includes('workspace:~')) {
                dependencies[key] = getPatchVersion(versionTarget)
              } else {
                dependencies[key] = value
              }
            })

            if (filePath.includes('vue-common') && vueVersion === '2') {
              dependencies['@vue/composition-api'] = '1.7.2'
            }

            const matchList = ['vue-icon', 'vue-icon-saas', 'vue', 'design/smb', 'design/aurora', 'design/saas']

            // 如果是主入口、svg图标或者主题规范包则直接指向相同路径
            if (matchList.includes(filePath)) {
              content.main = './index.js'
              content.module = './index.js'
            } else {
              content.main = './lib/index.js'
              content.module = './lib/index.js'
            }

            // 为主入口包添加readme和LICENSE
            if (filePath === 'vue') {
              ;['README.md', 'README.zh-CN.md', 'LICENSE'].forEach((item) => {
                fs.copySync(
                  pathFromWorkspaceRoot(item),
                  path.resolve(pathFromPackages(''), `dist${vueVersion}/@opentiny/vue/${item}`)
                )
              })
            }

            content.types = 'index.d.ts'

            const matchTypeList = ['vue-common', 'vue-locale', 'vue-saas-common']

            if (matchTypeList.some((item) => filePath.includes(item))) {
              content.types = './src/index.d.ts'
            }

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
      !isRuntime && replaceModuleNamePlugin(versionTarget)
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        ...getAlias(vueVersion, '', design),
        '@tiptap/vue': `${
          vueVersion === '2'
            ? path.resolve(pathFromPackages(''), 'vue/src/rich-text-editor/node_modules/@tiptap/vue-2')
            : path.resolve(pathFromPackages(''), 'vue/src/rich-text-editor/node_modules/@tiptap/vue-3')
        }`,
        '@vue/babel-helper-vue-jsx-merge-props': 'node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js'
      }
    },
    define: {
      'process.env.BUILD_TARGET': JSON.stringify('component')
    }
  })
}

async function batchBuildAll({ vueVersion, tasks, formats, message, emptyOutDir, dts, buildTarget, npmScope, design }) {
  const rootDir = pathFromPackages('')
  const outDir = path.resolve(rootDir, `dist${vueVersion}/${npmScope}`)
  await batchBuild({
    vueVersion,
    tasks,
    formats,
    message,
    emptyOutDir,
    dts,
    design
  })

  function toEntry(libs) {
    return libs.reduce((result, { libPath, path: file }) => {
      const tLibPath = libPath.replace('-lib/', '/lib/')
      result[tLibPath] = pathFromPackages(file)
      return result
    }, {})
  }

  function toTsInclude(libs) {
    return new Set(
      libs
        .filter((item) => ['module', 'component'].includes(item.type))
        .map((lib) => `packages/${lib.dtsRoot ? lib.path : path.dirname(lib.path)}`)
    )
  }

  async function batchBuild({ vueVersion, tasks, formats, message, emptyOutDir, dts, design }) {
    if (tasks.length === 0) return
    logGreen(`====== 开始构建 ${message} ======`)
    const entry = toEntry(tasks)

    const dtsInclude = toTsInclude(tasks) as BaseConfig['dtsInclude']
    await build({
      configFile: false,
      ...getBaseConfig({ vueVersion, dtsInclude, dts, buildTarget, isRuntime: false, design }),
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

            // 此处为了适配MetaERP, 构建对应设计规范的common包，需要将icon、design、common打到一起去，防止循环依赖造成构建报错
            if (design) {
              if (source.includes('vue-design-') || source.includes('vue-icon') || source.includes('vue-common')) {
                return false
              }
            } else if (/vue-icon(-saas)?\/index/.test(importer)) {
              // 图标入口排除子图标
              return /^\.\//.test(source)
            }

            // design包不排除png文件
            if (/design\/(saas|aurora|smb|)/.test(importer) && /\.png/.test(source)) {
              return false
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
  vueVersions: string[] // vue的版本
  buildTarget?: string // 目标版本，非必填（1、不写major位，可以同时打出vue2和vue3包的版本。2、写完整版本号，可以打出指定版本号的包。3、不写版本号，按照源码里面的版本号构建）
  formats: string[] // 打包的格式
  clean: boolean // 是否清空build产物
  dts: boolean // 是否生成TS类型声明文件
  scope?: string // npm的组织名称
  min?: boolean // 是否压缩产物
  design?: string // 构建目标的设计规范
  isVisualizer?: boolean // 是否开启打包产物分析
}

function getEntryTasks(): Module[] {
  // 读取TinyVue组件库入口文件
  return ['index', 'pc', 'mobile'].map((mode) => ({
    path: `vue/${mode}.ts`,
    dtsRoot: true,
    libPath: `vue/${mode}`,
    type: 'module',
    name: kebabCase({ str: '@opentiny/vue' }),
    global: capitalizeKebabCase('opentinyVue'),
    importName: '@opentiny/vue'
  }))
}

function getTasks(names: string[]): Module[] {
  // 没有指定组件，则全量构建
  if (names.length === 0) {
    return [...getAllModules(false), ...getEntryTasks()]
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

export async function buildUi(
  names: string[] = [],
  {
    vueVersions = ['2', '3'],
    buildTarget,
    formats = ['es'],
    clean = false,
    dts = true,
    scope = '@opentiny',
    design = ''
  }: BuildUiOption
) {
  // 是否清空构建目录
  let emptyOutDir = clean
  // 要构建的模块
  let tasks = getTasks(names)

  // 如果指定了打包icon或者没有传入任何组件
  if (names.some((name) => name.includes('icon')) || !names.length) {
    tasks.push(...getByName({ name: kebabCase({ str: 'icon-saas' }), isSort: false }))
    tasks.push(...getAllIcons())
  }

  // 构建 @opentiny/vue
  if (names.some((name) => ['@opentiny/vue', '@opentiny/vue', 'vue'].includes(name))) {
    tasks.push(...getEntryTasks())
  }

  // 要构建的vue框架版本
  for (const vueVersion of vueVersions) {
    const message = `TINY for vue${vueVersion}: ${JSON.stringify(names.length ? names : '全量')}`
    await batchBuildAll({ vueVersion, tasks, formats, message, emptyOutDir, dts, buildTarget, npmScope: scope, design })
    // 确保只运行一次
    emptyOutDir = false
  }
}
