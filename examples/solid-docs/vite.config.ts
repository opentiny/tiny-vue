import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [solid(), svgr()]
})
