import AutoVite from 'unplugin-vue-components/vite'
import AutoWebpack from 'unplugin-vue-components/webpack'
import AutoRollup from 'unplugin-vue-components/rollup'
import AutoEsbuild from 'unplugin-vue-components/esbuild'
import AutoRspack from 'unplugin-vue-components/rspack'

const supportMap = {
  'vite': AutoVite,
  'webpack': AutoWebpack,
  'rollup': AutoRollup,
  'esbuild': AutoEsbuild,
  'rspack': AutoRspack
}

/** TinyVue 自动导入组件的插件，支持Vite,Webpack,Rollup 等常见的构建工具。
 * 目前不支持Tiny Icon的自动导入
 * @example
 * import autoImportPlugin from '@opentiny/unplugin-tiny-vue'
 * plugins: [autoImportPlugin('vite')]
 */
export default (name) =>
  supportMap[name]({
    resolvers: [
      (componentName) => {
        if (componentName.startsWith('Tiny') && !componentName.startsWith('TinyIcon')) {
          return {
            name: componentName.slice(4),
            from: '@opentiny/vue'
          }
        }
      }
    ]
  })
