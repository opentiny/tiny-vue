/**
 * 生成全量运行时入口文件
 */
import fs from 'fs-extra'
import { EOL as endOfLine } from 'os'
import * as utils from '../../shared/utils.js'
import * as moduleUtils from '../../shared/module-utils.js'
import handlebarsRender from './handlebars.render.js'

const version = utils.getopentinyVersion({})
const outputDir = 'packages/vue'
const iconDir = 'packages/vue-icon'
const MAIN_TEMPLATE = `{{{include}}}
 
 export const version = '${version}'
 
 export {
   {{{components}}}
 }

 export default {
  {{{components}}}
 }
 `

const buildFullRuntime = () => {
  const outputPath = utils.pathFromWorkspaceRoot(outputDir, 'app.ts')
  const components = moduleUtils.getComponents('pc')
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []

  // 导出公共模块
  components.push(
    {
      name: 'Icon',
      importName: '@opentiny/vue-icon',
      path: 'packages/vue-icon'
    },
    {
      name: 'Locale',
      importName: '@opentiny/vue-locale',
      path: 'packages/vue-locale'
    },
    {
      name: 'Renderless',
      importName: '@opentiny/vue-renderless/common/runtime',
      path: 'packages/renderless'
    },
    {
      name: 'Common',
      importName: '@opentiny/vue-common',
      path: 'packages/vue-common'
    }
  )

  components.forEach((item) => {
    // 暂时排除 chart 类组件
    if (item.inEntry !== false && !item.path.includes('chart') && !item.path.includes('river')) {
      const component = utils.capitalizeKebabCase(item.name)

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

  const output = utils.prettierFormat({ str: template })

  fs.writeFileSync(outputPath, output)

  utils.logGreen(`npm run build:entry done. [${outputDir}/app.ts]`)
}

// 重新创建 icon 入口
const buildIconEntry = () => {
  const inputPath = utils.pathFromWorkspaceRoot(iconDir, 'index.ts')
  const outputPath = utils.pathFromWorkspaceRoot(iconDir, 'src', 'index.ts')
  let iconEntryContent = fs.readFileSync(inputPath).toString('utf-8')

  iconEntryContent = iconEntryContent.replace(/.\/src\//g, './')
  iconEntryContent = iconEntryContent.replace('export * from \'./lowercase\'', 'export * from \'../lowercase\'')

  fs.writeFileSync(outputPath, iconEntryContent)
}

buildIconEntry()
buildFullRuntime()
