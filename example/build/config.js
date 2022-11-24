const fs = require('fs-extra')
const { babel } = require('@rollup/plugin-babel')
const vue = require('rollup-plugin-vue')
const alias = require('@rollup/plugin-alias')
const commonjs = require('@rollup/plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { pathJoin } = require('../../build/utils')
const { getAllModules } = require('../../build/module-utils')

const external = ['vue', './pc', './mobile', '@opentiny/vue-common', '@opentiny/vue-locale', '@vue/composition-api', '@opentiny/vue-renderless']

const globals = {
  vue: 'Vue',
  '@vue/composition-api': 'vueCompositionApi',
  '@opentiny/vue-locale': 'TinyVueLocale',
  '@opentiny/vue-common': 'TinyVueCommon',
  '@opentiny/vue-renderless': 'TinyRenderLess'
}

const aliasList = {}
const components = getAllModules(false)

components.forEach((itemComponent) => {
  aliasList[itemComponent.libName] = pathJoin(`../${itemComponent.path}`)

  if (itemComponent.private) {
    return
  }

  const isComponent = itemComponent.type === 'component'

  external.push(itemComponent.importName)
  external.push(itemComponent.libName)
  globals[itemComponent.libName] = itemComponent.global // TinyTodo

  if (isComponent) {
    if (fs.existsSync(pathJoin('../../tiny-vue-theme'))) {
      aliasList[`@opentiny/vue-theme/${itemComponent.LowerName}/index.css`] = pathJoin(`../../tiny-vue-theme/src/${itemComponent.LowerName}/index.css`)
      aliasList[`@opentiny/vue-theme/${itemComponent.LowerName}/index.js`] = pathJoin(`../../tiny-vue-theme/src/${itemComponent.LowerName}/index.js`)
    }
    external.push(`${itemComponent.libName}/index.js`)
  } else {
    external.push(`${itemComponent.libName}.js`)
  }
})

exports.aliasList = aliasList

exports.external = (deps) => external.includes(deps) || /^@opentiny[\\/](vue-common|vue-renderless|vue-theme|vue-icon|cropperjs)/.test(deps)

exports.globalsMap = globals

const op = {
  resolve: ['.js', '.vue', '.css'],
  extract: false,
  css: true,
  extensions: ['.js', '.jsx', '.vue', '.css']
}

exports.plugins = [
  alias({
    resolve: op.resolve,
    '@opentiny/vue-locale': pathJoin('../packages/locale/index'),
    '@opentiny/vue-common': pathJoin('../packages/common/index'),
    ...aliasList
  }),
  postcss({
    extract: op.extract
  }),
  vue({
    css: op.css
  }),
  nodeResolve({
    extensions: op.extensions
  }),
  babel({
    configFile: false,
    babelrc: false,
    exclude: /node_modules/,
    comments: false,
    presets: ['@babel/preset-env'],
    babelHelpers: 'bundled',
    extensions: ['.js', '.vue', '.jsx'],
    plugins: ['@babel/plugin-syntax-dynamic-import', '@vue/babel-plugin-jsx']
  }),
  commonjs()
]
