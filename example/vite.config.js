import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown from 'vite-plugin-markdown-vue'
import vueSvgPlugin from './vite-plugins/vite-plugin-vue-svg'
const { getAllModules } = require('../build/module-utils')

const pathJoin = (...args) => path.join(__dirname, ...args)
const components = getAllModules(false)
const doComponents = (alias = {}) => {
  components.forEach((item) => {
    alias[item.libName] = pathJoin('../', item.path)
    alias[item.importName] = pathJoin('../', item.path)
    if (item.type === 'component') {
      alias[`@opentiny/vue-theme/${item.LowerName}/index.css`] = pathJoin(`../../tiny-vue-theme/src/${item.LowerName}/index.less`)
      alias[`@opentiny/vue-theme-mobile/${item.LowerName}/index.css`] = pathJoin(`../../tiny-vue-theme-mobile/src/${item.LowerName}/index.less`)
    }
  })
  return alias
}
const config = {
  base: './',
  server: {
    host: '127.0.0.1',
    open: true
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.jsx$/]
    }
  },
  plugins: [
    markdown(),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    vueSvgPlugin({
      defaultExport: 'component',
      svgoConfig: {}
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      '@': pathJoin('./src'),
      vue: pathJoin('./node_modules/vue/dist/vue.runtime.esm-bundler.js'),
      '@opentiny/vue': pathJoin('../../tiny-vue/packages'),
      '@opentiny/vue-locale/vue2': pathJoin('../../tiny-vue/packages/locale/vue3'),
      '@opentiny/vue-locale': pathJoin('../../tiny-vue/packages/locale'),
      '@opentiny/vue-common/adapter/vue2': pathJoin('../../tiny-vue/packages/common/adapter/vue3'),
      '@opentiny/vue-common': pathJoin('../../tiny-vue/packages/common'),
      '@opentiny/vue-renderless': pathJoin('../../tiny-vue-renderless/src'),
      '@opentiny/vue-icon': pathJoin('../../tiny-vue/packages/icon/index.js'),
      ...doComponents(),
      '@opentiny/vue-theme/base/index.css': pathJoin('../../tiny-vue-theme/src/base/index.less'),
      '@opentiny/vue-theme/svg/index.css': pathJoin('../../tiny-vue-theme/src/svg/index.less'),
      '@opentiny/vue-theme/tall-storage/index.css': pathJoin('../../tiny-vue-theme/src/tall-storage/index.less'),
      '@opentiny/vue-theme': pathJoin('../../tiny-vue-theme/src'),
      '@opentiny/vue-theme-mobile/base/index.css': pathJoin('../../tiny-vue-theme-mobile/src/base/index.less')
    }
  },
  define: {
    'process.env': process.env
  },
  build: {
    sourcemap: false,
    copyPublicDir: false,
    outDir: path.resolve(__dirname, '../dist/vue/runtime/'),
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue']
    }
  }
}

export default defineConfig(({ command, mode }) => {
  if (mode === 'pc') {
    config.build.lib = {
      entry: path.resolve(__dirname, './entry/pc.js'),
      formats: ['es'],
      fileName: (format) => `tiny-vue.${format}.js`
    }
  } else {
    config.build.lib = {
      entry: path.resolve(__dirname, './entry/icon.js'),
      formats: ['es'],
      fileName: (format) => `tiny-vue-icon.${format}.js`
    }
  }
  return config
})
