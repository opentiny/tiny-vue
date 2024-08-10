import path from 'node:path'
import { fileURLToPath } from 'node:url'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.join(__dirname, '../../../')
import vue3SvgPlugin from 'vite-svg-loader'
import vue3JsxPlugin from '@vitejs/plugin-vue-jsx'

export default defineNuxtConfig({
  // modules: ['../src/module'],
  devtools: { enabled: false },

  build: {
    transpile: ['xss']
  },
  vite: {
    plugins: [
      virtualTemplatePlugin({ include: ['**/packages/vue/**/src/index.ts'], env:'develop' }),
      vue3JsxPlugin(),
      vue3SvgPlugin()
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        "virtual:common/adapter/vue": path.join(root, '/packages/vue-common/src/adapter/vue3/index.ts'),
        "virtual:locale/vue": path.join(root, '/packages/vue-locale/src/vue3/index.ts'),
      }
    },
    define: {
      'process.env': {}
    }
  },
  compatibilityDate: '2024-07-18',
})