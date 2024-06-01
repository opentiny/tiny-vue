import path from 'node:path'
import type { UserConfig } from 'vite'
import { build } from 'vite'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { logGreen } from '../../shared/utils'
import type { BuildUiOption, BaseConfig } from './build-ui'
import { pathFromPackages, getBaseConfig, requireModules } from './build-ui'
import { createProcessor } from 'tailwindcss/src/cli/build/plugin'
import { visualizer } from 'rollup-plugin-visualizer'

async function batchBuildAll({ vueVersion, tasks, message, emptyOutDir, npmScope, min, isVisualizer }) {
  const rootDir = pathFromPackages('')
  const runtimeDir = `vue-runtime/dist${vueVersion}`
  const outDir = path.resolve(rootDir, runtimeDir)

  await batchBuild({
    vueVersion,
    tasks,
    message,
    emptyOutDir,
    npmScope,
    min,
    isVisualizer
  })

  function toEntry(libs) {
    return libs.reduce((result, { libPath, path: file }) => {
      result[libPath] = pathFromPackages(file)
      return result
    }, {})
  }

  function getExternal() {
    return {
      vue: 'Vue',
      '@vue/composition-api': 'VueCompositionAPI',
      '@opentiny/vue-locale': 'TinyVueLocale',
      '@opentiny/vue-common': 'TinyVueCommon',
      '@opentiny/vue-icon': 'TinyVueIcon',
      'echarts': 'Echarts'
    }
  }

  async function batchBuild({ vueVersion, tasks, message, emptyOutDir, npmScope, min, isVisualizer }) {
    if (tasks.length === 0) return
    logGreen(`====== 开始构建 ${message} ======`)

    const entry = toEntry(tasks)
    const baseConfig = getBaseConfig({
      vueVersion,
      dtsInclude: [] as string[],
      dts: false,
      npmScope,
      isRuntime: true
    } as BaseConfig) as UserConfig

    baseConfig.define = Object.assign(baseConfig.define || {}, {
      'process.env.BUILD_TARGET': JSON.stringify(vueVersion !== '3' ? 'runtime' : 'component'),
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.RUNTIME_VERSION': JSON.stringify(requireModules('packages/renderless/package.json').version),
      'process.env.COMPONENT_VERSION': JSON.stringify(requireModules('packages/vue/package.json').version)
    })

    baseConfig.plugins?.push(
      ...([
        commonjs({
          include: /node_modules/,
          requireReturnsDefault: true,
          defaultIsModuleExports: true,
          // echarts模块本身是esmodules格式不需要经过commonjs转换
          exclude: ['node_modules/echarts/**', 'node_modules/echarts']
        }),
        babel({
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
          presets: ['@babel/preset-env']
        }),
        isVisualizer
          ? visualizer({
              filename: `${tasks[0].libPath}.html`,
              open: true
            })
          : null,
        {
          name: 'vite-plugin-transfer-mode',
          enforce: 'pre',
          transform(code, id) {
            if (tasks[0].path.includes('simple') && id.includes('src/index.ts') && code.includes('pc.vue')) {
              // 简易模式，手动排除移动端和多端模版
              const newCode = code.replace('mobile.vue', 'pc.vue').replace('mobile-first.vue', 'pc.vue')
              return {
                code: newCode,
                map: null
              }
            }
          }
        }
      ] as any[])
    )

    await build({
      configFile: false,
      ...baseConfig,
      build: {
        emptyOutDir,
        minify: true,
        sourcemap: min,
        rollupOptions: {
          external: (source, importer, isResolved) => {
            if (isResolved || !importer) return false

            return Object.keys(getExternal()).includes(source)
          },
          output: {
            strict: false,
            globals: {
              ...getExternal()
            },
            assetFileNames: ({ name }) => {
              if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                return 'style/images/[name]-[hash][extname]'
              }

              if (/\.css$/.test(name ?? '')) {
                return `style${min ? '.min' : ''}[extname]`
              }

              return 'style/[name]-[hash][extname]'
            }
          }
        },
        lib: {
          entry,
          formats: ['es'],
          fileName: (format, entryName) => `${entryName}${min ? '.min' : ''}.${format === 'es' ? 'm' : ''}js`,
          name: 'Tiny'
        },
        outDir
      }
    })
  }
}

function getEntryTasks() {
  const entry = [
    {
      path: 'vue-locale/src/index.ts',
      libPath: 'tiny-vue-locale'
    },
    {
      path: 'vue-common/src/index.ts',
      libPath: 'tiny-vue-common'
    },
    {
      path: 'vue-runtime/all.ts',
      libPath: 'tiny-vue-all'
    },
    {
      path: 'vue-runtime/simple.ts',
      libPath: 'tiny-vue-simple'
    },
    {
      path: 'vue-runtime/pc.ts',
      libPath: 'tiny-vue-pc'
    },
    {
      path: 'vue-runtime/mobile.ts',
      libPath: 'tiny-vue-mobile'
    },
    {
      path: 'vue-runtime/mobile-first.ts',
      libPath: 'tiny-vue-mobile-first'
    },
    {
      path: 'vue-icon-saas/index.ts',
      libPath: 'tiny-vue-icon-saas'
    },
    {
      path: 'vue-icon/index.ts',
      libPath: 'tiny-vue-icon'
    }
  ]
  return entry
}

export async function buildRuntime({
  vueVersions = ['2', '3'],
  clean = false,
  scope = 'opentiny',
  min = false,
  isVisualizer = false
}: BuildUiOption) {
  // 是否清空构建目录
  let emptyOutDir = clean

  // 要构建的模块
  let tasks = [...getEntryTasks()]

  // 要构建的vue框架版本
  for (const vueVersion of vueVersions) {
    const message = `TINY for vue${vueVersion}: runtime`

    // 这里注意不能使用多入口打包，rollup多入口打包会抽取公共依赖（再由inlineChunksPlugin插件处理），导致组件库运行时加载失败
    for (let i = 0; i < tasks.length; i++) {
      await batchBuildAll({ vueVersion, tasks: [tasks[i]], message, emptyOutDir, npmScope: scope, min, isVisualizer })
    }
    const rootDir = pathFromPackages('')
    const runtimeDir = `vue-runtime/dist${vueVersion}`
    const outDir = path.resolve(rootDir, runtimeDir)
    const processor = await createProcessor(
      {
        '--output': path.join(outDir, 'tailwind.css'),
        '--content': path.join(outDir, 'tiny-vue.mjs')
      },
      path.resolve(rootDir, 'theme-saas/tailwind.config.js')
    )
    await processor.build()
    // 确保只运行一次
    emptyOutDir = false
  }
}
