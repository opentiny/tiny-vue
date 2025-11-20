/** 打包 svgs 到 图标组件库
 * 1、将 theme/src/svgs/**  等文件，编译为 vue-icon/src/** /*.js 文件，并生成总的 index.js导出文件
 * 2、将 theme-saas/src/svgs/**  等文件，编译为 vue-icon-saas/src/** /*.js 文件，并生成总的 index.js导出文件
 * 3、识别 svgs/** /xxx.svg, xxx-filled.svg 为同一个文件，需要导出为同一个图标 
 * 4、config.ts 配置文件中，rewriteConfig是指定哪些是重复图标。 重复图标只保留一个导出， 其它名字通过导出变量指向这个唯一名字即可
 *    本次梳理的`双图标`的文件为`标准图标`, 其它历史图标名称，在不废弃的情况下，尽量影射到标准图标中来。
      rewrite的结果，只表现在总导出index.js文件中即可！  
 * 5、即不是双图标，又不在rewrite的图标，同样按原名导出组件，但打印结果到 `theme/svgs-build-report.md` 文件中

@example1 // ---------------- 导出示例
import { svg } from '@opentiny/vue-common'
import Add from '@opentiny/vue-theme/svgs/add.svg'
import AddFilled from '@opentiny/vue-theme/svgs/add-filled.svg'

export default () => svg({ name: 'IconAdd', component: Add, filledComponent:AddFilled  })()

// 总导出  index.js
import IconAdd from './src/add'
export {IconAdd, IconAdd as iconAdd}  // ------》 导出标准名字

export const IconAdd1 = IconAdd, iconAdd1=IconAdd  // -------------》 导出 重定向名字
export default {
    IconAdd,
}

@example2  // ---------------- 配置重复图标名示例
export const rewriteConfig = {
  add1: 'add',
  addO: 'add'
}
* */

import fg from 'fast-glob'
import fs from 'node:fs'
import * as config from './config'
import * as configSaas from './config-saas'

interface FileInfo {
  svgName: string
  hasFill: boolean
  rewriteName: string // hasFill：true时， 不应该有rewriteName
}
const camelize = (str) => str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
const isSaas = process.argv.includes('--icon-saas')
const { svgsPath, iconsPath, rewriteConfig } = isSaas ? configSaas : config
const themePackage = isSaas ? '@opentiny/vue-theme-saas' : '@opentiny/vue-theme'
const iconsSrcPath = `${iconsPath}/src`

// 生成前清理旧的图标产物，避免目录缺失导致写入失败
try {
  fs.rmSync(iconsSrcPath, { recursive: true, force: true })
} catch (error) {
  console.warn(`[build-svg-to-js] 清理目录失败: ${iconsSrcPath}`, error)
}
fs.mkdirSync(iconsSrcPath, { recursive: true })

// 1、统计svgs信息
const svgsMap: Record<string, FileInfo> = {}

const svgsFiles = await fg(['**/*.svg'], { dot: true, cwd: svgsPath })
svgsFiles.forEach((filename) => {
  let item: FileInfo
  let svgName = ''

  if (filename.endsWith('-filled.svg')) {
    svgName = filename.replace('-filled.svg', '')
    item = { svgName, hasFill: true, rewriteName: rewriteConfig[svgName] }
  } else if (filename.endsWith('.svg')) {
    svgName = filename.replace('.svg', '')
    item = { svgName, hasFill: false, rewriteName: rewriteConfig[svgName] }
  } else {
    return
  }

  if (svgsMap[svgName]) {
    svgsMap[svgName].hasFill = svgsMap[svgName].hasFill || item.hasFill
  } else {
    svgsMap[svgName] = item
  }
})

// 2、生成组件的js
const rewriteList: { capName: string; svgName: string; rewriteName: string }[] = []
const fillList: { capName: string; svgName: string }[] = []
const uncheckedList: { capName: string; svgName: string }[] = []

Object.values(svgsMap).forEach((item) => {
  const capName = camelize('-' + item.svgName)

  // 重命名的图标
  if (item.rewriteName) {
    rewriteList.push({ capName, svgName: item.svgName, rewriteName: camelize('-' + item.rewriteName) })
    return
  }
  // 支持线&面的图标
  if (item.hasFill) {
    fillList.push({ capName, svgName: item.svgName })
    const tmplStr = `
import { svg } from '@opentiny/vue-common'
import ${capName} from '${themePackage}/svgs/${item.svgName}.svg'
import ${capName}Filled from '${themePackage}/svgs/${item.svgName + '-filled'}.svg'

export default () => svg({ name: 'Icon${capName}', component: ${capName}, filledComponent: ${capName}Filled })()
`

    fs.writeFileSync(`${iconsPath}/src/${item.svgName}.ts`, tmplStr, 'utf-8')
    return
  }
  // 未梳理到的图标
  uncheckedList.push({ capName, svgName: item.svgName })
  const tmplStr = `
import { svg } from '@opentiny/vue-common'
import ${capName} from '${themePackage}/svgs/${item.svgName}.svg'

export default () => svg({ name: 'Icon${capName}', component: ${capName}, filledComponent: ${capName} })()
`
  fs.writeFileSync(`${iconsPath}/src/${item.svgName}.ts`, tmplStr, 'utf-8')
})

// 3、生成总的导出 index.js
const tmplFillImport = fillList.map((exp) => `import Icon${exp.capName} from './src/${exp.svgName}'`).join('\n')
const tmplUncheckedImport = uncheckedList
  .map((exp) => `import Icon${exp.capName} from './src/${exp.svgName}'`)
  .join('\n')

const tmplFill = fillList
  .map((exp) => `export { Icon${exp.capName}, Icon${exp.capName} as icon${exp.capName} }`)
  .join('\n')
const tmplUnchecked = uncheckedList
  .map((exp) => `export { Icon${exp.capName}, Icon${exp.capName} as icon${exp.capName} }`)
  .join('\n')
const tmplRewrite = rewriteList
  .map(
    (exp) =>
      `export const Icon${exp.capName} = () => ({...Icon${exp.rewriteName}(), name:'Icon${exp.capName}', deprecatedBy: 'Icon${exp.rewriteName}' })
export const icon${exp.capName} = Icon${exp.capName}`
  )
  .join('\n')

const tmplBottom = [...fillList, ...uncheckedList, ...rewriteList].map((exp) => `  Icon${exp.capName},`).join('\n')

const tmplStr = `
${tmplFillImport}
${tmplUncheckedImport}

// 双图标
${tmplFill}

// 非双图标
${tmplUnchecked}

// 重命名导出
${tmplRewrite}

export default {
${tmplBottom}
}
`
fs.writeFileSync(`${iconsPath}/index.ts`, tmplStr, 'utf-8')

// 4、打印日志

// 即是 hasFill, 但配置了 rewriteName, 请从config.ts中移除相应的rewrite。
// 因为要求设计师那边已经去重过了，
const err1 = Object.values(svgsMap)
  .filter((item) => item.hasFill && item.rewriteName)
  .map((item) => item.svgName)

if (err1.length) {
  console.error(`
********即是 hasFill, 但配置了 rewriteName, 请从config.ts中移除相应的rewrite**********
${err1.join(',')}
************************************************************************************
`)
}

// 非 hasFill, 且未配置 rewriteName, 大概是未梳理到的历史图标,tiny图标
const err2 = uncheckedList.map((item) => item.svgName)
if (err2.length) {
  console.error(`
********非 hasFill, 且未配置 rewriteName, 大概是未梳理到的历史图标,tiny图标**********
${err2.join(',')}
************************************************************************************
`)
}
