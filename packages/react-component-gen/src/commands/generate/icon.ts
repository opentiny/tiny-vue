import {Command, Flags} from '@oclif/core'
import {pascalCase} from 'change-case'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'

const VUE_ICON_DIR = 'packages/vue-icon/src'
const REACT_ICON_DIR = 'packages/react/src/icon/src'

export default class GenerateIcon extends Command {
  static description = 'generate icon from the vue icons'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    repoDir: Flags.string({char: 'r', description: 'tiny-vue directory', required: true}),
  }

  static args = {}

  public async run(): Promise<void> {
    const {flags} = await this.parse(GenerateIcon)

    const vueIconDir = path.join(flags.repoDir, VUE_ICON_DIR)
    assert(fs.existsSync(vueIconDir), `vue icon directory not found`)

    const reactIconDir = path.join(flags.repoDir, REACT_ICON_DIR)
    assert(fs.existsSync(vueIconDir), `react icon directory not found`)

    const vueIcons = fs.readdirSync(vueIconDir).map((v) =>
      // :( some hack to fix the naming issue
      ({
        original: v,
        new: v.replace(/h([1-6])$/, 'h-$1'),
      }),
    )
    const reactIconSet = new Set(fs.readdirSync(reactIconDir))

    for (const v of vueIcons) {
      if (!reactIconSet.has(v.new)) {
        const svgFile = fs
          .readFileSync(path.resolve(vueIconDir, v.original, 'index.ts'), 'utf8')
          .match(/opentiny\/vue-theme\/svgs\/(\S+).svg/)?.[1]
        assert(svgFile, `failed to extract svg file from "${v.original}"`)

        const dir = path.join(reactIconDir, v.new)
        fs.mkdirSync(dir)
        fs.writeFileSync(path.resolve(dir, 'index.ts'), generateIconJsx(v.new, svgFile))
      }
    }

    fs.writeFileSync(path.resolve(reactIconDir, '../index.ts'), generateEntryJsx(vueIcons.map((v) => v.new)))

    this.log(`icons generated`)
  }
}

function generateIconJsx(icon: string, svgFile: string) {
  return `/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { Svg } from '@opentiny/react-common'
import { ReactComponent as ${pascalCase(icon)} } from '@opentiny/vue-theme/svgs/${svgFile}.svg'

export default Svg({ name: '${pascalCase('icon-' + icon)}', component: ${pascalCase(icon)} })
`
}

function generateEntryJsx(icons: string[]) {
  let importStr = ''
  let exportStr = ''

  for (const v of icons) {
    // :( hack naming issues again
    const pv = pascalCase('icon-' + v).replace('_', '')
    importStr += `import ${pv} from './src/${v}'\n`
    exportStr += `  ${pv},\n`
  }

  return `${importStr}
export {
${exportStr}
}

export default {
${exportStr}
}
`
}
