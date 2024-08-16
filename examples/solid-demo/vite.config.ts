import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import inspectPlugin from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [inspectPlugin(), solid()],
  define: {
    'process.env': {}
  }
})
