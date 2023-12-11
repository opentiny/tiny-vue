import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const alias = {
  react: 'openinula',
  'react-dom': 'openinula',
  'react/jsx-dev-runtime': 'openinula/jsx-dev-runtime'
}

export default defineConfig({
  plugins: [svgr(), react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
  resolve: {
    alias
  }
})
