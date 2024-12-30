import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TinyVueResolver } from '../dist/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Components({
      resolvers: [TinyVueResolver]
    }),
    AutoImport({
      resolvers: [TinyVueResolver]
    })
  ],
  define: {
    'process.env': { ...process.env, TINY_MODE: 'pc' }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts']
  }
})
