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
  logGreen,
} from '../../shared/utils'
import { getComponents } from '../../shared/module-utils'
import handlebarsRender from './handlebars.render'

const version = getopentinyVersion({})
const outputDir = 'packages/vue'
const MAIN_TEMPLATE = `{{{include}}}
 
 export const version = '${version}'
 
 export {
   {{{components}}}
 }
 export default {
  {{{components}}}
 }
 `

function buildFullRuntime() {
  const outputPath = pathFromWorkspaceRoot(outputDir, 'app.ts')
  const components = getComponents('pc')
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []

  // 导出公共模块
  components.push(
    {
      name: 'Renderless',
      importName: '@opentiny/vue-renderless/common/runtime',
      path: 'packages/renderless'
    }
  )

  components.forEach((item) => {
    // 暂时排除 chart 类组件
    if (item.inEntry !== false && !item.path.includes('chart') && !item.path.includes('river')) {
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
