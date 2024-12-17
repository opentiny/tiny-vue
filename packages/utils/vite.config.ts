import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
      fileName: (format) => `opentiny-utils.${format}.js`
    }
  }
})
