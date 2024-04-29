import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'node:path'
import inspectPlugin from 'vite-plugin-inspect'
import vueTemplate2jsx from '@opentiny/vue-vite-template2jsx'

export default defineConfig({
  plugins: [inspectPlugin(), vueTemplate2jsx(), solid({ extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue'] })],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@opentiny/solid-common': path.resolve('../../packages/solid/src/common/src/index.ts')
    }
  }
})
