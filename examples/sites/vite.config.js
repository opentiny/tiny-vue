import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'node:path'
import UnoCssConfig from './uno.config'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dynamicImportPlugin from 'vite-plugin-dynamic-import'
import Markdown from 'vite-plugin-md'
import { MdExt, mdInstall } from './md.extend.config'
import importPlugin from '@opentiny/vue-vite-import'
import vue3SvgPlugin from 'vite-svg-loader'
import { getAlias, getOptimizeDeps } from '../../internals/cli/src/config/vite'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd() + '/env', '')
  return {
    envDir: './env',
    base: env.VITE_APP_BUILD_BASE_URL || '/tiny-vue/',
    plugins: [
      virtualTemplatePlugin({ include: ['**/packages/vue/**/src/index.ts'], env }),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      vueJsx(),
      vue3SvgPlugin(),
      importPlugin([
        {
          libraryName: '@opentiny/vue'
        },
        ...['icon', 'icon-saas'].map((lib) => ({
          libraryName: `@opentiny/vue-${lib}`,
          customName: (name) => {
            return name === 'default' ? `@opentiny/vue-${lib}$` : `@opentiny/vue-${lib}/${name.replace(/^icon-/, '')}`
          }
        }))
      ]),
      dynamicImportPlugin(),
      // 支持md转为vue组件：   https://github.com/antfu/vite-plugin-md#configuration--options
      Markdown({
        headEnabled: true,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true
        },
        markdownItSetup(md) {
          mdInstall(md)
        },
        markdownItUses: MdExt
      }),
      Unocss(UnoCssConfig)
    ],
    define: {
      'process.env': {}
    },
    optimizeDeps: getOptimizeDeps(3),
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, './index.html')
          // 未来还是要在design-server中添加一个专门路由。下面入口暂时保留
          // playground: path.resolve(__dirname, './playground.html')
        }
      }
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        '@': path.resolve('src'),
        '@demos': path.resolve('./demos'),
        '@tiptap/vue': '@tiptap/vue-3',
        ...getAlias(3, env.VITE_TINY_THEME)
      }
    },
    server: {
      host: '0.0.0.0',
      port: 3101,
      fs: {
        strict: false,
        allow: ['..']
      }
    }
  }
})
