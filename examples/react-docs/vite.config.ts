import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.vue'],
    alias: {
      '@': path.resolve('src'),
      '@demos': path.resolve(`./demos`)
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1DA57A'
          // 其他Less变量
        }
      }
    }
  }
})
