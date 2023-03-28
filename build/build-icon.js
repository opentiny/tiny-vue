const vue = require('rollup-plugin-vue')
const { babel } = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { pathJoin, logGreen, logRed } = require('./utils')
const rollup = require('rollup')
const svg = require('rollup-plugin-vue-inline-svg')
const fs = require('fs-extra')
const path = require('path')

const inputOptions = {
  plugins: [
    vue({
      css: true
    }),
    svg({
      svgoConfig: {
        plugins: [{ removeDoctype: true }, { removeComments: true }, { removeViewBox: false }],
        removeViewBox: false
      }
    }),
    nodeResolve(),
    babel({
      exclude: /node_modules/,
      configFile: false, // 必须为 false 不然会取根文件的 babel.config.js 配置，产生一堆 runtime 代码
      babelrc: false,
      babelHelpers: 'bundled',
      plugins: ['@babel/plugin-proposal-export-default-from', '@babel/plugin-proposal-export-namespace-from'],
      presets: ['@babel/preset-env'],
      extensions: ['.js', '.vue']
    }),
    // 如果打包文件中包含 jsx 语法， commonjs 必须放置在 babel 配置下面，否则会报错 PLUGIN_ERROR
    commonjs()
  ],
  external: (deps) => /^@opentiny[\\/]vue-common/.test(deps)
}

const outputOptions = {
  format: 'es',
  exports: 'named'
}

const build = (components) => {
  components.forEach((component) => {
    const inputs = { ...inputOptions }

    inputs.input = pathJoin('..', 'packages', 'icon', component.path)

    if (component.path === 'index.js') {
      inputs.external = (deps) => !deps.includes('index.js')
    } else {
      inputs.external = (deps) => /^@opentiny[\\/]vue-common/.test(deps)
    }

    rollup
      .rollup(inputs)
      .then((bundle) => {
        const outs = { ...outputOptions }
        outs.file = pathJoin('..', 'packages', 'icon', component.libPath)
        bundle.write(outs)
        logGreen(`${component.path} compile icon done`)
      })
      .catch((e) => {
        logRed(e)
      })
  })
}

function createComponentMap(dir) {
  const components = []
  fs.readdirSync(dir).forEach((file) => {
    if (['dist', 'runtime'].includes(file)) {
      return
    }

    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      components.push({
        path: `${file}/index.js`,
        libPath: `dist/lib/${file}.js`
      })
    } else {
      file.endsWith('.js') &&
        components.push({
          path: `${file}`,
          libPath: `dist/lib/${file}`
        })
    }
  })
  return components
}

build(createComponentMap(pathJoin('..', 'packages', 'icon')))
