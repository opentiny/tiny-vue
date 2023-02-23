const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const { babel } = require('@rollup/plugin-babel')
const { pathJoin, logGreen, logRed } = require('../../build/utils')
const rollup = require('rollup')
const svgVue = require('./rollup-vue3-svg')
const fs = require('fs-extra')
const path = require('path')

const inputOptions = {
  plugins: [
    vue({
      css: true
    }),
    svgVue({}),
    nodeResolve(),
    babel({
      exclude: /node_modules/,
      babelrc: false,
      configFile: false, // 必须为 false 不然会取根文件的 babel.config.js 配置，产生一堆 runtime 代码
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue'],
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-export-default-from', '@babel/plugin-proposal-export-namespace-from']
    }),
    // 如果打包文件中包含 jsx 语法， commonjs 必须放置在 babel 配置下面，否则会报错 PLUGIN_ERROR
    commonjs()
  ]
}

const outputOptions = {
  format: 'es',
  exports: 'named'
}

const build = (icons) => {
  icons.forEach((itconComponent) => {
    const inputs3 = { ...inputOptions }

    inputs3.input = pathJoin('..', 'packages', 'icon', itconComponent.path)

    if (itconComponent.path === 'index.js') {
      inputs3.external = (deps) => !deps.includes('index.js')
    } else if (itconComponent.path === 'lowercase.js') {
      inputs3.external = (deps) => !deps.includes('lowercase.js')
    } else {
      inputs3.external = (deps) => !/@huawei[\\/]tiny-vue-theme/.test(deps) && !deps.includes('index.js')
    }

    rollup
      .rollup(inputs3)
      .then((bundle) => {
        const outs = { ...outputOptions }
        outs.file = pathJoin('..', 'packages', 'icon', itconComponent.libPath)
        bundle.write(outs)
        logGreen(`${itconComponent.path} compile icon done`)
      })
      .catch((e) => {
        logRed(e)
      })
  })
}

function createComponentMap(iconDir) {
  const components = []
  fs.readdirSync(iconDir).forEach((iconFile) => {
    if (['dist', 'runtime'].includes(iconFile)) {
      return
    }

    if (fs.statSync(path.join(iconDir, iconFile)).isDirectory()) {
      components.push({
        path: `${iconFile}/index.js`,
        libPath: `dist/lib/${iconFile}.js`
      })
    } else {
      iconFile.endsWith('.js') &&
        components.push({
          path: `${iconFile}`,
          libPath: `dist/lib/${iconFile}`
        })
    }
  })
  return components
}

build(createComponentMap(pathJoin('..', 'packages', 'icon')))
