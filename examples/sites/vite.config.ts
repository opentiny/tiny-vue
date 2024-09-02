import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'node:path'
import UnoCssConfig from './uno.config'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dynamicImportPlugin from 'vite-plugin-dynamic-import'
import Markdown from 'vite-plugin-md'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { MdExt, mdInstall } from './md.extend.config'
import importPlugin from '@opentiny/vue-vite-import'
import vue3SvgPlugin from 'vite-svg-loader'
import { getAlias, pathFromWorkspaceRoot, getOptimizeDeps } from '../../internals/cli/src/config/vite'
import virtualTemplatePlugin from '@opentiny-internal/unplugin-virtual-template/vite'
import tailwindCss from 'tailwindcss'
import fg from 'fast-glob'
import fs from 'fs-extra'

const delStatic = () => {
  let config
  return {
    name: 'inline-plugin-del-static',
    apply: 'build',
    configResolved(_config) {
      config = _config
    },
    async closeBundle() {
      const targetPath = path.join(config.build.outDir, '@demos')
      const files = await fg(['**/*.spec.js', '**/*.spec.ts'], {
        dot: true,
        cwd: targetPath
      })
      files.forEach((filename) => {
        const filePath = path.join(targetPath, filename)
        fs.unlink(filePath)
      })
    }
  }
}

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd() + '/env', '')
  const isSaas = env.VITE_TINY_THEME === 'saas'
  const isPlus = env.VITE_APP_MODE === 'plus'
  const demosPath = isPlus ? '../plusdocs/pc' : `./demos/${env.VITE_APP_MODE}`
  const apisPath = isPlus ? '../plusdocs/apis' : './demos/apis'
  const menuPath = isSaas ? path.resolve('./demos/saas') : path.resolve(demosPath)
  const copyTarget = [
    {
      src: `${demosPath}/*`,
      dest: '@demos'
    },
    {
      src: `${apisPath}/*`,
      dest: '@demos/apis'
    }
  ]
  if (isSaas) {
    copyTarget.push({
      src: `./demos/mobile-first/*`,
      dest: '@demos/mobile-first'
    })
  }
  const viteConfig = {
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
      Unocss(UnoCssConfig),
      viteStaticCopy({
        targets: copyTarget
      }),
      delStatic()
    ],
    optimizeDeps: getOptimizeDeps(3),
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, './index.html'),
          // design-server中添加一个专门路由指向 playground.html
          playground: path.resolve(__dirname, './playground.html')
        }
      }
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        '@': path.resolve('src'),
        '@demos': path.resolve(`${demosPath}`),
        '@menu': menuPath,
        '@opentiny/vue-renderless/types': pathFromWorkspaceRoot('packages/renderless/types'),
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
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: true,
      __INTLIFY_PROD_DEVTOOLS__: false,
      __INTLIFY_JIT_COMPILATION__: false,
      __INTLIFY_DROP_MESSAGE_COMPILER__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    }
  }

  if (env.VITE_TINY_THEME === 'saas') {
    viteConfig.css = {
      postcss: {
        plugins: [tailwindCss]
      }
    }
    // 这里逻辑是兼容saas官网工程的alias写法
    if (!viteConfig.resolve.alias['@opentiny/vue-theme']) {
      viteConfig.resolve.alias['@opentiny/vue-theme'] = '@opentiny/vue-theme-saas'
      viteConfig.resolve.alias['@opentiny/vue-icon'] = '@opentiny/vue-icon-saas'
    }
  }

  if (env.NODE_ENV === 'development') {
    viteConfig.define['process.env'] = {}
  }

  return viteConfig
})
