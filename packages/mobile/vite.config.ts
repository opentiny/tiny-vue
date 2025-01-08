import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), vueJsx(), svgLoader()],
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
  }
})
