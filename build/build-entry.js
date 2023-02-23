/**
 * 生成入口文件，包括 pc.js / mobile.js / index.js
 */
const fs = require('fs-extra')
const endOfLine = require('os').EOL
const utils = require('./utils')
const moduleUtils = require('./module-utils')

const version = utils.getTinyVersion()
const outputDir = 'packages'

const fileNames = {
  all: 'index.js',
  pc: 'pc.js',
  mobile: 'mobile.js'
}

const getMainTemplate = (mode) => {
  const template = `{{include}}
  import { $prefix } from '@opentiny/vue-common'
  const components = [{{components}}]

  export const install = (app, opts = {}) => {
    const regex = new RegExp('^' + $prefix)
    ${
      mode === 'all'
        ? ''
        : `
    if (typeof app.unmount === 'function') {
      app.config.globalProperties.tiny_mode = { value: '${mode}' }
    } else {
      app.prototype.tiny_mode = { value: '${mode}' }
    }
    `
    }
    components.filter(component=> component.name !== 'TinyPicker').forEach((component) => {
      let name = component.name
      let alias = opts.alias || opts.prefix
      if (typeof component.install !== 'function') { return }
      if (name && alias) {
        app.component(name.replace(regex, alias), component)
      } else {
        component.install(app)
      }
    })
  }
  const version = '${version}'
  export {
    version,
    {{components}}
  }
  
  export default {
    version,
    {{components}},
    install
  }
  `
  return template
}

const forEachCompoents = ({ components, componentsTemplate, render, INSTALL_COMPONENT_TEMPLATE, includeTemplate, IMPORT_TEMPLATE }) => {
  components.forEach((item) => {
    let exportsComponents = ''
    const childrenComponents = []

    // 增加组件内部抛出子组件，针对父子组件不能拆分的情况
    if (Array.isArray(item.exports) && item.exports.length > 0) {
      item.exports.indexOf(item.name) === -1 && item.exports.push(item.name)
    } else {
      item.exports = [item.name]
    }

    item.exports.forEach((component) => {
      if (component !== item.name) {
        component = utils.capitalizeKebabCase(component)

        childrenComponents.push(component)
      }

      componentsTemplate.push(
        render(INSTALL_COMPONENT_TEMPLATE, {
          name: component
        })
      )
    })

    if (childrenComponents.length) {
      exportsComponents = `,{${childrenComponents.join(',')}}`
    }

    includeTemplate.push(
      render(IMPORT_TEMPLATE, {
        name: item.name,
        exports: exportsComponents,
        package: item.importName
      })
    )
  })
}

const createEntry = (mode) => {
  const OUTPUT_PATH = utils.pathJoin('..', outputDir, fileNames[mode])
  const IMPORT_TEMPLATE = 'import {{name}} {{exports}} from "{{package}}"'
  const INSTALL_COMPONENT_TEMPLATE = '  {{name}}'

  const MAIN_TEMPLATE = getMainTemplate(mode)

  const includeTemplate = []
  const componentsTemplate = []
  const render = utils.renderTemplate()
  let components

  if (mode === 'pc') {
    components = moduleUtils.getPcComponents()
  } else if (mode === 'mobile') {
    components = moduleUtils.getMobileComponents()
  } else {
    components = moduleUtils.getComponents()
  }

  forEachCompoents({
    components,
    componentsTemplate,
    render,
    INSTALL_COMPONENT_TEMPLATE,
    includeTemplate,
    IMPORT_TEMPLATE
  })

  const template = render(MAIN_TEMPLATE, {
    include: includeTemplate.join(endOfLine),
    components: componentsTemplate.join(`,${endOfLine}`)
  })

  const output = utils.prettierFormat({
    str: template
  })

  fs.writeFileSync(OUTPUT_PATH, output)
};
['all', 'pc', 'mobile'].forEach(createEntry)

utils.logGreen(`npm run build:entry done. [${outputDir}/index.js,${outputDir}/pc.js,${outputDir}/mobile.js]`)
