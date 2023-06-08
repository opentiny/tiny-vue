import path from 'node:path'
import { searchForWorkspaceRoot } from 'vite'
import { getAllModules } from '../shared/module-utils'

const workspaceRoot = searchForWorkspaceRoot(process.cwd())
const pathFromWorkspaceRoot = (...args) => path.resolve(workspaceRoot, ...args)

const getComponentAlias = (alias = {}) => {
  getAllModules(false).forEach((item) => {
    if (item.type === 'component')
      alias[item.importName] = pathFromWorkspaceRoot('packages', item.path)
  })
  return alias
}

const getAlias = (vueVersion: string | number, theme = '') => {
  const ns = (t: string) => t ? '-' + t : ''

  return {
    // 主模块映射
    // vite 4 不支持 exports 语法自动拼接 index 文件 https://github.com/vitejs/vite/issues/7267
    '@opentiny/vue-icon$': pathFromWorkspaceRoot(`packages/vue-icon${ns(theme)}/index.ts`),
    '@opentiny/vue-icon': pathFromWorkspaceRoot(`packages/vue-icon${ns(theme)}/src`),
    '@opentiny/vue-renderless': pathFromWorkspaceRoot('packages/renderless/src'),
    '@opentiny/vue-theme-mobile': pathFromWorkspaceRoot('packages/theme-mobile/src'),
    '@opentiny/vue-theme': pathFromWorkspaceRoot(`packages/theme${ns(theme)}/src`),
    '@opentiny/vue-common': pathFromWorkspaceRoot('packages/vue-common/src'),
    '@opentiny/vue-locale': pathFromWorkspaceRoot('packages/vue-locale/src'),

    // 虚拟映射
    'virtual:locale/vue': pathFromWorkspaceRoot(`packages/vue-locale/src/vue${vueVersion}/index`),
    'virtual:common/adapter/vue': pathFromWorkspaceRoot(`packages/vue-common/src/adapter/vue${vueVersion}/index`),
    // examples 映射
    '@opentiny/vue-mobile-first-example/docs': pathFromWorkspaceRoot('examples/docs/components/mobile-first'),
    '@opentiny/vue-mobile-example/docs': pathFromWorkspaceRoot('examples/docs/components/mobile'),
    '@opentiny/vue-example/docs': pathFromWorkspaceRoot('examples/docs/components/pc'),
    ...getComponentAlias(),
  }
}

const createContainer = (klass, defaultTitle) => {
  return [
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()

        if (token.nesting === 1)
          return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`

        return '</div>\n'
      },
    },
  ]
}

const getOptimizeDeps = (vueVersion: string | number) => {
  return {
    include: [
      'shepherd.js',
      'echarts/core',
      'echarts/components',
      'echarts/charts',
      'echarts/extension/bmap/bmap',
      'echarts/features',
      'echarts/renderers',
      'echarts-wordcloud',
      'echarts',
      'crypto-js/core',
      'crypto-js/sha256.js',
      'crypto-js/lib-typedarrays.js',
      'streamsaver',
      vueVersion === 2 ? '@vue/babel-helper-vue-jsx-merge-props' : ''
    ].filter(item => !!item)
  }
}

export {
  pathFromWorkspaceRoot,
  getAlias,
  createContainer,
  getOptimizeDeps,
}
