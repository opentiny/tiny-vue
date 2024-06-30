import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import autoImportPlugin from '../dist/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Inspect(), autoImportPlugin()],
  define: {
    'process.env': { ...process.env, TINY_MODE: 'pc' }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts']
  }
})
