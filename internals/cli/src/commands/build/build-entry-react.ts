/**
 * 生成入口文件，包括 pc.js / mobile.js / mobile-first.js / index.js
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
import { getAllModules } from './build-ui-react'
import handlebarsRender from './handlebars.render'

const version = (({ key }) => {
  const packageJSON = fs.readJSONSync(pathFromWorkspaceRoot('packages/react/package.json'))
  const packageJsonOption = packageJSON[key] || packageJSON

  return packageJsonOption
})({ key: 'version' })

const outputDir = 'packages/react'

const fileNames = {
  all: 'index.ts',
  pc: 'pc.ts',
  mobile: 'mobile.ts',
  'mobile-first': 'mobile-first.ts'
}

function getMainTemplate({ mode }) {
  return `{{{include}}}
  import { $prefix } from '@opentiny/react-common'

  const components = [{{{components}}}]

  export const version = '${version}'
  
  export {
    {{{components}}}
  }
  
  export default {
    {{{components}}}
  } as any
  `
}

function getComponents(mode) {
  const modules = getAllModules()

  const components = modules
    .filter((item) => item.type === 'component')
    .filter((item) => mode === 'all' || !item.mode || item.mode.includes(mode))

  return components
}

function createEntry(mode) {
  const OUTPUT_PATH = pathFromWorkspaceRoot(outputDir, fileNames[mode]);
  const MAIN_TEMPLATE = getMainTemplate({ mode })
  const includeTemplate: string[] = []
  const componentsTemplate: string[] = []
  const components = getComponents(mode)
  const PKG_PATH = pathFromWorkspaceRoot(outputDir, 'package.json')
  const PKGContent = fs.readJSONSync(PKG_PATH)
  const PKGDeps = {
    '@opentiny/react-common': 'workspace:~'
  }

  components.forEach((item) => {
    const component = capitalizeKebabCase(item.name)
    PKGDeps[item.importName] = 'workspace:~'
    componentsTemplate.push(` ${component}`)
    const importName = mode === 'all' ? item.importName : `${item.importName}/src/${mode}`
    includeTemplate.push(`import ${item.name} from '${importName}'`)
  })

  if (mode === 'all') {
    PKGContent.dependencies = PKGDeps
    fs.writeFileSync(PKG_PATH, JSON.stringify(PKGContent, null, 2))
  }

  const template = handlebarsRender({
    template: MAIN_TEMPLATE,
    data: {
      include: includeTemplate.join(endOfLine),
      components: componentsTemplate.join(',' + endOfLine)
    }
  })

  const output = prettierFormat({ str: template })

  fs.writeFileSync(OUTPUT_PATH, output)
}

export function buildEntryReact() {
  ['all', 'pc', 'mobile', 'mobile-first'].forEach(createEntry)

  logGreen(
    `npm run build:entry done. [${outputDir}/index.ts,${outputDir}/pc.ts,${outputDir}/mobile.ts,${outputDir}/mobile-first.ts]`
  )
}
