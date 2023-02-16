const rollup = require('rollup')
const utils = require('./utils')
const replace = require('@rollup/plugin-replace')
const moduleUtils = require('./module-utils')
const fs = require('fs-extra')
const isSingle = process.env.BUILD_TARGET === 'single'
const config = require('./config')

const outputOptions = {
  format: 'es',
  globals: config.globals,
  exports: 'named'
}

const inputOptions = {
  plugins: config.plugins,
  external: config.external
}

const replaceConstant = {
  'process.env.BUILD_TARGET': JSON.stringify(process.env.BUILD_TARGET),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}

if (process.env.tiny_mode === 'pc') {
  outputOptions.format = 'umd'
  replaceConstant['process.env.TINY_MODE'] = JSON.stringify(process.env.tiny_mode)
}

/**
 * 编译单个组件
 * @param {Object} component 组件 module 信息 （modules.json）
 * @param {Function} 回调函数
 */
const build = ({ component, callback }) => {
  inputOptions.input = utils.pathJoin('..', component.path)

  inputOptions.plugins.push(replace(replaceConstant))
  rollup
    .rollup(inputOptions)
    .then((bundle) => {
      outputOptions.file = utils.pathJoin('..', component.libPath)
      if (outputOptions.format === 'umd') {
        outputOptions.name = component.global
      }
      bundle.write(outputOptions).finally(() => {
        const filePath = utils.pathJoin('..', component.libPath)
        if (filePath.endsWith('index.js')) {
          const indexStr = fs.readFileSync(filePath).toString('UTF-8')
          const resStr = indexStr.replace('./src/pc', './pc').replace('./src/mobile', './mobile')
          fs.writeFileSync(filePath, resStr)
        }
        callback()
      })
    })
    .catch((e) => {
      utils.logRed(e)
      callback()
    })
}

let components = []

/**
 * 递归执行 Rollup 编译
 * @param {Number} count 起始索引
 */
const buildAll = (count = 0) => {
  let component = components[count++]
  if (component) {
    if (!isSingle) {
      component.libPath = 'dist/' + component.libName.replace('@opentiny/vue/', '')
      component.libPath += (component.type === 'component' ? '/index' : '') + '.js'
    }
    build({
      component,
      callback() {
        buildAll(count)
      }
    })
  } else {
    utils.logGreen(`npm run build:ui${isSingle ? '-single' : ''} done.`)
  }
}

if (isSingle) {
  const inputName = utils.getInputCmd()
  if (inputName.length > 0) {
    inputName.forEach((input) => {
      const activeComponentName = utils.kebabCase({ str: input })

      if (activeComponentName) {
        components.push(
          ...moduleUtils.getByName({
            name: activeComponentName,
            isSort: false
          })
        )
      }
    })
  } else {
    const activeComponentName = utils.getComponentName()
    components = moduleUtils.getByName({
      name: activeComponentName,
      isSort: false
    })
  }
} else {
  components = moduleUtils.getAllModules(false)
}
if (components.length > 0) {
  buildAll()
} else {
  utils.logYellow('please enter the component name after command.')
}
