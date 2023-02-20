import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { createSvgPlugin } from 'vite-plugin-vue2-svg'
import md2Vue2Plugin from 'vite-plugin-md2vue2'
const { getAllModules } = require('./build/module-utils')

const pathJoin = (...args) => path.join(__dirname, ...args)
const components = getAllModules(false)

const doComponents = (alias = {}) => {
  components.forEach((item) => {
    alias[item.libName] = pathJoin(item.path)
    alias[item.importName] = pathJoin(item.path)

    if (item.type === 'component') {
      alias[`@opentiny/vue-theme/${item.LowerName}/index.css`] = pathJoin(`../tiny-vue-theme/src/${item.LowerName}/index.less`)
      alias[`@opentiny/vue-theme-mobile/${item.LowerName}/index.css`] = pathJoin(`../tiny-vue-theme-mobile/src/${item.LowerName}/index.less`)
    }
  })
  return alias
}
const config = {
  server: {
    host: '127.0.0.1',
    open: true
  },
  plugins: [md2Vue2Plugin(), createVuePlugin(), vueJsx(), createSvgPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      '@': pathJoin('example/src'),
      '@opentiny/vue': pathJoin('packages'),
      vue: pathJoin('./node_modules/vue/dist/vue.esm.js'),
      'vue-i18n': pathJoin('./node_modules/vue-i18n/dist/vue-i18n.esm.js'),
      'vue-router': pathJoin('./node_modules/vue-router/dist/vue-router.esm.js'),
      '@opentiny/vue-locale': pathJoin('packages/locale'),
      '@opentiny/vue-common': pathJoin('packages/common'),
      '@opentiny/vue-renderless': pathJoin('../tiny-vue-renderless/src'),
      '@opentiny/vue-icon': pathJoin('packages/icon/index.js'),
      ...doComponents(),
      '@opentiny/vue-theme/base/index.css': pathJoin('../tiny-vue-theme/src/base/index.less'),
      '@opentiny/vue-theme/svg/index.css': pathJoin('../tiny-vue-theme/src/svg/index.less'),
      '@opentiny/vue-theme/tall-storage/index.css': pathJoin('../tiny-vue-theme/src/tall-storage/index.less'),
      '@opentiny/vue-theme': pathJoin('../tiny-vue-theme/src'),
      '@opentiny/vue-theme-mobile/base/index.css': pathJoin('../tiny-vue-theme-mobile/src/base/index.less')
    }
  },
  define: {
    'process.env': process.env
  }
}

export default defineConfig(() => config)
