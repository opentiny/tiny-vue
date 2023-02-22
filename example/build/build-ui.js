const rollup = require('rollup')
const replace = require('@rollup/plugin-replace')
const { readJSONSync } = require('fs-extra')
const utils = require('../../build/utils')
const config = require('./config')
const moduleUtils = require('../../build/module-utils')
const fs = require('fs-extra')
const isSingle = process.env.BUILD_TARGET === 'single'

const inputOptions = {
  plugins: config.plugins,
  external: config.external
}

const outputOptions = {
  format: 'es',
  globals: config.globals,
  exports: 'named'
}

const replaceConstant = {
  'process.env.BUILD_TARGET': JSON.stringify(process.env.BUILD_TARGET),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}

if (process.env.TINY_MODE === 'pc') {
  outputOptions.format = 'umd'
  replaceConstant['process.env.TINY_MODE'] = JSON.stringify(process.env.TINY_MODE)
}

const build = ({ comp, callbackFn }) => {
  inputOptions.input = utils.pathJoin('..', comp.path)

  inputOptions.plugins.push(replace(replaceConstant))
  rollup
    .rollup(inputOptions)
    .then((bundle) => {
      outputOptions.file = utils.pathJoin('..', comp.libPath)
      if (outputOptions.format === 'umd') {
        outputOptions.name = comp.global
      }
      bundle.write(outputOptions).finally(() => {
        const filePath = utils.pathJoin('..', comp.libPath)
        if (filePath.endsWith('index.js')) {
          const indexStr = fs.readFileSync(filePath).toString('UTF-8')
          const resStr = indexStr.replace('./src/pc', './pc').replace('./src/mobile', './mobile')
          fs.writeFileSync(filePath, resStr)
        }
        callbackFn()
      })
    })
    .catch((e) => {
      utils.logRed(e)
      callbackFn()
    })
}

let componentsArr = []

const buildAll = (count = 0) => {
  let comp = componentsArr[count++]
  if (comp) {
    if (!isSingle) {
      comp.libPath = 'dist/' + comp.libName.replace('@opentiny/vue/', '')
      comp.libPath += (comp.type === 'component' ? '/index' : '') + '.js'
    }
    build({
      comp,
      callbackFn() {
        buildAll(count)
      }
    })
  } else {
    utils.logGreen(`npm run build:ui${isSingle ? '-single' : ''} done.`)
  }
}

if (isSingle) {
  const inputNameArr = utils.getInputCmd()
  if (inputNameArr.length > 0) {
    inputNameArr.forEach((input) => {
      const activeComName = utils.kebabCase({ str: input })

      if (activeComName) {
        componentsArr.push(
          ...moduleUtils.getByName({
            name: activeComName,
            isSort: false
          })
        )
      }
    })
  } else {
    const activeCompName = utils.getComponentName()
    componentsArr = moduleUtils.getByName({
      name: activeCompName,
      isSort: false
    })
  }
} else {
  componentsArr = moduleUtils.getAllModules(false)
}
if (componentsArr.length > 0) {
  buildAll()
} else {
  utils.logYellow('please enter the component name after command.')
}
