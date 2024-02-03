import importPlugin from '../../dist/index.js'
import vue from '@vitejs/plugin-vue'

export default {
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    vue(),
    importPlugin(
      [
        {
          libraryName: '@opentiny/vue',
          split: '-'
        },
        {
          libraryName: '@opentiny/vue-icon',
          libraryDirectory: 'lib',
          customName: (name) => {
            return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc' // 此配置非必选，按需配置(pc|mobile)
    )
  ],
  define: {
    'process.env': { ...process.env }
  }
}
