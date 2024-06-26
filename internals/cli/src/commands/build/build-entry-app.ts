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
const outputDir = 'packages/vue-runtime'
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
   {{{exportComponents}}}
 }
 export default {
  {{{defaultComponents}}},
  install
 }
 `

/**
 * all 包含所有组件的所有模版
 * simple 简易模式runtime，只包含常用通用pc组件
 * pc 包含所有pc组件组件
 * mobile 包含素有mobile组件
 * mobile-first 包含所有多端组件
 */
type RunTimeModeType = 'all' | 'pc' | 'mobile' | 'mobile-first' | 'simple'
const runtimeModeList: Array<RunTimeModeType> = ['all', 'pc', 'mobile', 'mobile-first', 'simple']

// 简易模式下需要排除的组件列表，包括chart、业务组件、冷门组件等
const notSimpleComponents = [
  'Amount',
  'Area',
  'AsyncFlowchart',
  'AutonaviMap',
  'BaiduMap',
  'BaseSelect',
  'BulletinBoard',
  'CascaderMobile',
  'Chart',
  'ChartBar',
  'ChartBoxplot',
  'ChartCandle',
  'ChartCore',
  'ChartFunnel',
  'ChartGauge',
  'ChartGraph',
  'ChartHeatmap',
  'ChartHistogram',
  'ChartLine',
  'ChartLiquidfill',
  'ChartMap',
  'ChartPie',
  'ChartProcess',
  'ChartRadar',
  'ChartRing',
  'ChartSankey',
  'ChartScatter',
  'ChartSunburst',
  'ChartTree',
  'ChartWaterfall',
  'ChartWordcloud',
  'Company',
  'Country',
  'Crop',
  'Currency',
  'DatePickerMobile',
  'DatePickerMobileFirst',
  'Dept',
  'DropRoles',
  'Espace',
  'Flowchart',
  'FluentEditor',
  'GridManager',
  'Guide',
  'Hrapprover',
  'LinkMenu',
  'Locales',
  'LogonUser',
  'Logout',
  'MindMap',
  'QrCode',
  'QueryBuilder',
  'RichText',
  'RichTextEditor',
  'River',
  'SvgIcon',
  'TextPopup',
  'ToggleMenu',
  'User',
  'UserAccount',
  'UserContact',
  'UserLink'
]

const buildFullRuntime = (mode: RunTimeModeType) => {
  const outputPath = pathFromWorkspaceRoot(outputDir, `${mode}.ts`)
  const components = getComponents(mode === 'simple' ? 'pc' : mode)
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []

  components.forEach((item) => {
    if (item.inEntry !== false) {
      const component = capitalizeKebabCase(item.name)
      if (
        (mode !== 'simple' && !excludeComponents.includes(item.name)) ||
        (mode === 'simple' && !notSimpleComponents.includes(item.name))
      ) {
        componentsTemplate.push(`  ${component}`)
        includeTemplate.push(`import ${item.name} from '${item.importName}'`)
      }
    }
  })

  const joinStr = ',' + endOfLine
  const template = handlebarsRender({
    template: MAIN_TEMPLATE,
    data: {
      include: includeTemplate.join(endOfLine),
      components: componentsTemplate.join(',' + endOfLine),
      exportComponents: componentsTemplate
        .map((component) => `${component}${joinStr}${component} as Tiny${component.trim()}`)
        .join(joinStr),
      defaultComponents: componentsTemplate
        .map((component) => `${component}${joinStr}Tiny${component.trim()}: ${component}`)
        .join(joinStr)
    }
  })

  const output = prettierFormat({ str: template })

  fs.writeFileSync(outputPath, output)

  logGreen(`npm run build:entry done. [${outputDir}/${mode}.ts]`)
}

runtimeModeList.forEach((item: RunTimeModeType) => {
  buildFullRuntime(item)
})
