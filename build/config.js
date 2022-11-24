const fs = require('fs-extra')
const vue = require('rollup-plugin-vue')
const { babel } = require('@rollup/plugin-babel')
const alias = require('@rollup/plugin-alias')
const commonjs = require('@rollup/plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { pathJoin } = require('./utils')
const { getAllModules } = require('./module-utils')

const external = ['vue', './pc', './mobile', '@vue/composition-api', '@opentiny/vue-common', '@opentiny/vue-locale', '@opentiny/vue-renderless']

const globals = {
  vue: 'Vue',
  '@vue/composition-api': 'vueCompositionApi',
  '@opentiny/vue-common': 'TinyVueCommon',
  '@opentiny/vue-locale': 'TinyVueLocale',
  '@opentiny/vue-renderless': 'TinyRenderLess'
}

const aliasList = {}
const components = getAllModules(false)

components.forEach((item) => {
  aliasList[item.libName] = pathJoin('../' + item.path)

  if (item.private) {
    return
  }

  const isComponent = item.type === 'component'

  external.push(item.importName) // @opentiny/vue-todo
  external.push(item.libName) // @opentiny/vue/todo
  globals[item.libName] = item.global // TinyTodo

  if (isComponent) {
    if (fs.existsSync(pathJoin('../../vue-theme3'))) {
      aliasList[`@opentiny/vue-theme/${item.LowerName}/index.css`] = pathJoin(`../../vue-theme3/style/${item.LowerName}/index.css`)
      aliasList[`@opentiny/vue-theme/${item.LowerName}/index.js`] = pathJoin(`../../vue-theme3/style/${item.LowerName}/index.js`)
    }
    external.push(item.libName + '/index.js')
  } else {
    external.push(item.libName + '.js')
  }
})

exports.aliasList = aliasList

exports.external = (deps) => external.includes(deps) || /^@opentiny[\\/](vue-renderless|vue-theme|vue-common|vue-icon)|cropperjs/.test(deps)

exports.globals = globals

exports.plugins = [
  alias({
    resolve: ['.js', '.vue', '.css'],
    '@opentiny/vue-locale': pathJoin('../packages/locale/index'),
    '@opentiny/vue-common': pathJoin('../packages/common/index'),
    ...aliasList
  }),
  postcss({
    extract: false
  }),
  vue({
    css: true
  }),
  nodeResolve({
    extensions: ['.js', '.jsx', '.vue', '.css']
  }),
  babel({
    exclude: /node_modules/,
    babelrc: false,
    configFile: false, // 必须为 false 不然会取根文件的 babel.config.js 配置，产生一堆 runtime 代码
    babelHelpers: 'bundled',
    comments: false,
    extensions: ['.js', '.vue', '.jsx'],
    presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
    plugins: ['@babel/plugin-syntax-dynamic-import']
  }),
  // 如果打包文件中包含 jsx 语法， commonjs 必须放置在 babel 配置下面，否则会报错 PLUGIN_ERROR
  commonjs()
]
