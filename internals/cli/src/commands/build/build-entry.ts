/**
 * 生成入口文件，包括 pc.js / mobile.js / mobile-first.js / index.js
 */
import fs from 'fs-extra'
import { EOL as endOfLine } from 'os'
import * as utils from '../../shared/utils.js'
import * as moduleUtils from '../../shared/module-utils.js'
import handlebarsRender from './handlebars.render.js'

const version = utils.getopentinyVersion({})
const outputDir = 'packages/vue'

const fileNames = {
  all: 'index.ts',
  pc: 'pc.ts',
  mobile: 'mobile.ts'
}

function getMainTemplate({ mode }) {
  let tpl = ''
  if (mode !== 'all') {
    tpl = `
      const appProperties = app.config?.globalProperties || app.prototype
      appProperties.tiny_mode = { value: '${mode}' }
    `
  }
  return `{{{include}}}
  import { $prefix } from '@opentiny/vue-common'
  
  const components = [{{{components}}}]
  
  export const install = (app, opts = {}) => {
    const regex = new RegExp('^' + $prefix)
  
    ${tpl}
  
    components.forEach((component) => {
      const name = component.name
      const alias = opts.alias || opts.prefix
  
      if (typeof component.install !== 'function') return
  
      if (name && alias) {
        app.component(name.replace(regex, alias), component)
      } else {
        component.install(app)
      }
    })
  }
  
  export const version = '${version}'
  
  export {
    {{{components}}}
  }
  
  export default {
    {{{components}}},
    install
  }
  `
}

const createEntry = (mode) => {
  const OUTPUT_PATH = utils.pathFromWorkspaceRoot(outputDir, fileNames[mode])
  const MAIN_TEMPLATE = getMainTemplate({ mode })
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []
  let components

  if (mode === 'pc') {
    components = moduleUtils.getPcComponents()
  } else if (mode === 'mobile') {
    components = moduleUtils.getMobileComponents()
  } else {
    components = moduleUtils.getComponents()
  }

  components.forEach((item) => {
    if (item.inEntry !== false) {
      const component = utils.capitalizeKebabCase(item.name)

      componentsTemplate.push(`  ${component}`)
      includeTemplate.push(`import ${item.name} from '${item.importName}'`)
    }
  })

  const template = handlebarsRender({
    template: MAIN_TEMPLATE,
    data: {
      include: includeTemplate.join(endOfLine),
      components: componentsTemplate.join(',' + endOfLine),
    }
  })

  const output = utils.prettierFormat({ str: template })

  fs.writeFileSync(OUTPUT_PATH, output)
}

export function buildEntry() {
  ['all', 'pc', 'mobile'].forEach(createEntry)

  utils.logGreen(
    `npm run build:entry done. [${outputDir}/index.ts,${outputDir}/pc.ts,${outputDir}/mobile.ts]`
  )
}
