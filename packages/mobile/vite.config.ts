import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts(), svgLoader()],
  build: {
    lib: {
      entry: './index.ts'
    },
    minify: true,
    rollupOptions: {
      external: [/@better-scroll/, /@opentiny/],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true
        }
      ]
    }
  }
})
