import vue from '@vitejs/plugin-vue'
import importPlugin from '../../dist/index.js'

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
          customName: (name) => {
            return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc'
    )
  ],
  define: {
    'process.env': Object.assign({}, process.env)
  }
}
