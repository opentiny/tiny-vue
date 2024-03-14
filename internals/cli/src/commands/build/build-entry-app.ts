/**
 * 生成全量运行时入口文件
 */
import fs from 'fs-extra'
import { EOL as endOfLine } from 'node:os'
import {
  getopentinyVersion,
  pathFromWorkspaceRoot,
  capitalizeKebabCase,
  prettierFormat,
  logGreen
} from '../../shared/utils'
import { getComponents, excludeComponents } from '../../shared/module-utils'
import handlebarsRender from './handlebars.render'

const version = getopentinyVersion({ key: 'version' })
const outputDir = 'packages/vue'
const MAIN_TEMPLATE = `{{{include}}}
import { $prefix } from '@opentiny/vue-common'
const components = [{{{components}}}]
  
export const install = (app, opts = {}) => {
  const regex = new RegExp('^' + $prefix)

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

const buildFullRuntime = () => {
  const outputPath = pathFromWorkspaceRoot(outputDir, 'app.ts')
  const components = getComponents('all')
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []

  // 导出公共模块
  components.push({
    name: 'Renderless',
    importName: '@opentiny/vue-renderless/common/runtime',
    path: 'packages/renderless'
  })

  components.forEach((item) => {
    if (
      item.inEntry !== false &&
      !item.path.includes('river') &&
      !item.path.includes('chart-beta') &&
      !excludeComponents.includes(item.name)
    ) {
      const component = capitalizeKebabCase(item.name)

      componentsTemplate.push(`  ${component}`)
      includeTemplate.push(`import ${item.name} from '${item.importName}'`)
    }
  })

  const template = handlebarsRender({
    template: MAIN_TEMPLATE,
    data: {
      include: includeTemplate.join(endOfLine),
      components: componentsTemplate.join(',' + endOfLine)
    }
  })

  const output = prettierFormat({ str: template })

  fs.writeFileSync(outputPath, output)

  logGreen(`npm run build:entry done. [${outputDir}/app.ts]`)
}

buildFullRuntime()
