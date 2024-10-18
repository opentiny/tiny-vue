import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImportPlugin from '@opentiny/unplugin-tiny-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), autoImportPlugin('vite')],
  resolve: {
    alias: [
      // XDesign 主题
      {
        find: /\@opentiny\/vue-theme\/(?!(smb))/,
        replacement: '@opentiny/vue-theme/smb-theme/'
      }
    ]
  }
})
