import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    sourcemap: true,
  },
  server: {
    host: 'localhost', //ip地址
    port: 8080, //端口号
    open: true //启动后是否自动打开浏览器
  }
})
