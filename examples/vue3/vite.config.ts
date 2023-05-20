import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { checker as checkerPlugin } from 'vite-plugin-checker'
import dynamicImportPlugin from 'vite-plugin-dynamic-import'
import importPlugin from '@opentiny/vue-vite-import'
import inspectPlugin from 'vite-plugin-inspect'

import vue3Plugin from '@vitejs/plugin-vue'
import vue3JsxPlugin from '@vitejs/plugin-vue-jsx'

import { getAlias, pathFromWorkspaceRoot, getOptimizeDeps } from '../../internals/cli/src/config/vite'
import vue3SvgPlugin from 'vite-svg-loader'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'

// 增加Unocss
import Unocss from 'unocss/vite'
import { rules, shortcuts, variants } from '../docs/vite-plugins/vite-plugin-uno-preset.js'

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), '')

  return {
    server: {
      host: 'localhost',
      open: false,
    },
    plugins: [
      virtualTemplatePlugin({ include: ['**/packages/vue/**/src/index.ts'], env }),
      vue3Plugin({
        include: [/\.vue$/, /\.md$/],
      }),
      vue3JsxPlugin(),
      vue3SvgPlugin(),
      importPlugin([
        {
          libraryName: '@opentiny/vue'
        },
        {
          libraryName: '@opentiny/vue-icon',
          customName: (name) => {
            return name === 'default' ? '@opentiny/vue-icon$' : `@opentiny/vue-icon/${name.replace(/^icon-/, '')}`
          }
        }
      ]),
      dynamicImportPlugin(),
      Unocss({
        include: [/\.js$/, /\.ts$/, /\.vue$/, /\.html$/, /\.jsx$/, /\.tsx$/], // 增加js ,ts扫描
        presets: [],
        rules,
        shortcuts,
        variants,
        safelist: [...Array.from({ length: 24 }, (_, i) => `c-rand${i + 1}`), ...Array.from({ length: 24 }, (_, i) => `bg-rand${i + 1}`)]
      }),
      inspectPlugin(),
      checkerPlugin({ overlay: { initialIsOpen: false }, terminal: false, typescript: false, vueTsc: false }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        'vue': path.resolve('node_modules/vue/dist/vue.esm-bundler.js'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': pathFromWorkspaceRoot('examples/docs/newsrc'),
        ...getAlias(3, env.VITE_TINY_THEME),
      },
    },
    define: {
      'process.env': env,
    },
    publicDir: '../public',
    optimizeDeps: getOptimizeDeps(3),
  }
})
