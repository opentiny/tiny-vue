import path from 'node:path'
import { checker as checkerPlugin } from 'vite-plugin-checker'
import dynamicImportPlugin from 'vite-plugin-dynamic-import'
import importPlugin from '@opentiny/vue-vite-import'
import { getAlias, pathFromWorkspaceRoot, getOptimizeDeps } from '../../../internals/cli/src/config/vite'
import vue3SvgPlugin from 'vite-svg-loader'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['../src/module'],
  vite: {
    plugins: [
      virtualTemplatePlugin({ include: ['**/packages/vue/**/src/index.ts'], env: 'develop' }),
      // vue3JsxPlugin(),
      vue3SvgPlugin(),
      importPlugin([
        {
          libraryName: '@opentiny/vue'
        },
        ...['icon', 'icon-saas'].map((lib) => ({
          libraryName: `@opentiny/vue-${lib}`,
          customName: (name: string) => {
            return name === 'default' ? `@opentiny/vue-${lib}$` : `@opentiny/vue-${lib}/${name.replace(/^icon-/, '')}`
          }
        }))
      ]),
      dynamicImportPlugin(),
      checkerPlugin({ overlay: { initialIsOpen: false }, terminal: false, typescript: false, vueTsc: false })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        'vue': path.resolve('node_modules/vue/dist/vue.esm-bundler.js'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': pathFromWorkspaceRoot('examples/docs/newsrc'),
        '@opentiny/vue-renderless/types': pathFromWorkspaceRoot('packages/renderless/types'),
        '@tiptap/vue': '@tiptap/vue-3',
        ...getAlias(3, '')
      }
    },
    define: {
      'process.env': {}
    },
    optimizeDeps: getOptimizeDeps(3)
  }
})
