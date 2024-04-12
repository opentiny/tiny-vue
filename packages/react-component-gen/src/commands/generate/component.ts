import {Args, Command, Flags} from '@oclif/core'
import {pascalCase} from 'change-case'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import {chatLLM, extractCode} from '../../utils/fetch-llm.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const VUE_SRC_DIR = 'packages/vue/src'
const REACT_SRC_DIR = 'packages/react/src'

export default class GenerateComponent extends Command {
  static description = 'generate component from the vue site'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    repoDir: Flags.string({char: 'r', description: 'tiny-vue directory', required: true}),
  }

  static args = {
    component: Args.string({description: 'the component to generate', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateComponent)

    const vueSrcDir = path.join(flags.repoDir, VUE_SRC_DIR, args.component)
    assert(fs.existsSync(vueSrcDir), `the component "${args.component}" does not exist in the vue src: ${vueSrcDir}`)

    const reactSrcDir = path.join(flags.repoDir, REACT_SRC_DIR, args.component)
    assert(
      !fs.existsSync(reactSrcDir),
      `the component "${args.component}" already exists in the react site: ${reactSrcDir}, we currently only support generate component in empty folder`,
    )

    fs.mkdirSync(reactSrcDir)

    fs.writeFileSync(path.resolve(reactSrcDir, 'package.json'), generatePkg(args.component))

    fs.writeFileSync(path.resolve(reactSrcDir, 'index.ts'), generateEntry(args.component))

    const reactSrcCodeDir = path.join(reactSrcDir, 'src')
    fs.mkdirSync(reactSrcCodeDir)

    fs.writeFileSync(path.resolve(reactSrcCodeDir, 'index.ts'), generateCodeEntry())

    this.log(`"${args.component}/pc" generating...`)
    fs.writeFileSync(
      path.resolve(reactSrcCodeDir, 'pc.jsx'),
      await generatePcJsx(path.resolve(vueSrcDir, 'src/pc.vue')),
    )
    this.log(`"${args.component}/pc" generated`)

    appendModules(path.resolve(flags.repoDir, REACT_SRC_DIR, '../modules.json'), args.component)

    this.log(`"${args.component}" generated`)
  }
}

function generatePkg(component: string) {
  return JSON.stringify(
    {
      name: `@opentiny/react-${component}`,
      version: '1.0.0',
      description: '',
      main: 'index.ts',
      scripts: {},
      keywords: [],
      author: '',
      license: 'ISC',
      dependencies: {
        '@opentiny/vue-renderless': 'workspace:~',
        '@opentiny/react-common': 'workspace:~',
        '@opentiny/vue-theme': 'workspace:~',
        '@opentiny/vue-theme-mobile': 'workspace:~',
      },
    },
    null,
    2,
  )
}

function generateEntry(component: string) {
  const componentName = pascalCase(component)
  return `import ${componentName} from './src'
import '@opentiny/vue-theme/${component}/index.less'

export default ${componentName}
`
}

function generateCodeEntry() {
  return `import pc from './pc'
// import mobile from './mobile'
// import mobileFirst from './mobile-first'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc,
    // mobile,
    // 'mobile-first': mobileFirst
  }[tiny_mode]

  return S(props)
}
`
}

async function generatePcJsx(vueFilePath: string) {
  const systemPrompt = fs.readFileSync(path.resolve(__dirname, '../../prompts/generate-component.system.md'), 'utf8')

  const vueCode = fs.readFileSync(vueFilePath, 'utf8')

  const choices = await chatLLM(
    [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: `Vue 文件内容如下：\n${vueCode}`,
      },
    ],
    'gpt-4-turbo-preview',
  )

  return extractCode(choices)
}

function appendModules(modulesFilePath: string, component: string) {
  const componentName = pascalCase(component)
  const original = JSON.parse(fs.readFileSync(modulesFilePath, 'utf8'))
  original[componentName] = {
    path: `react/src/${component}/index.ts`,
    type: 'component',
    exclude: false,
    mode: ['pc'],
  }
  fs.writeFileSync(modulesFilePath, JSON.stringify(original, null, 2))
}
