import vue from '@vitejs/plugin-vue'
import importPlugin from '../../dist/index.js'
import inspectPlugin from 'vite-plugin-inspect'

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
            return name === 'default' ? '@opentiny/vue-icon' : `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc'
    ),
    inspectPlugin()
  ],
  define: {
    'process.env': { ...process.env }
  }
}
