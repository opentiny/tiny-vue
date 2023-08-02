import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { checker as checkerPlugin } from 'vite-plugin-checker'
import dynamicImportPlugin from 'vite-plugin-dynamic-import'
import importPlugin from '@opentiny/vue-vite-import'
import inspectPlugin from 'vite-plugin-inspect'
import vue2Plugin from '@vitejs/plugin-vue2'
import vue2JsxPlugin from '@vitejs/plugin-vue2-jsx'
import Markdown from 'vite-plugin-md'
import { createSvgPlugin as vue2SvgPlugin } from 'vite-plugin-vue2-svg'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'
import { getAlias, pathFromWorkspaceRoot, getOptimizeDeps } from '../../internals/cli/src/config/vite'

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
      vue2Plugin({
        include: [/\.vue$/, /\.md$/],
      }),
      vue2JsxPlugin({
        injectH: false,
      }),
      vue2SvgPlugin(),
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
      Markdown({
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
      }),
      inspectPlugin(),
      checkerPlugin({ overlay: { initialIsOpen: false }, terminal: false, typescript: false, vueTsc: false }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        '@vue/composition-api': path.resolve('node_modules/vue/dist/vue.esm.js'),
        'vue': path.resolve('node_modules/vue/dist/vue.esm.js'),
        '@': pathFromWorkspaceRoot('examples/docs/newsrc'),
        '@vue/babel-helper-vue-jsx-merge-props': path.resolve('node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js'),
        ...getAlias(2.7, env.VITE_TINY_THEME),
      },
    },
    define: {
      'process.env': env,
    },
    publicDir: '../public',
    optimizeDeps: getOptimizeDeps(2.7)
  }
})
