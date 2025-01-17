import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import replace from '@rollup/plugin-replace'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts(),
    replace({
      '.less': '.css'
    })
  ],
  build: {
    lib: {
      entry: './index.ts'
    },
    rollupOptions: {
      external: [/@opentiny\/vue/, /@better-scroll/, 'vue', 'xss'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true
        }
      ]
    }
  },
  resolve: {
    alias: {
      '@mobile-root': path.resolve(__dirname, '')
    }
  }
})
