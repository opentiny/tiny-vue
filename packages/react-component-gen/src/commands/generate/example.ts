import {Args, Command, Flags} from '@oclif/core'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import {chatLLM, extractCode} from '../../utils/fetch-llm.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const VUE_WEBDOC_DIR = 'examples/sites/demos/pc/app/'
const REACT_WEBDOC_DIR = 'examples/react-site/demos/app/'

export default class GenerateExample extends Command {
  static description = 'generate example from the vue site'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    repoDir: Flags.string({char: 'r', description: 'tiny-vue directory', required: true}),
    force: Flags.boolean({char: 'f', description: 'force overwrite the react site example'}),
  }

  static args = {
    component: Args.string({description: 'the component to generate example', required: true}),
    examples: Args.string({description: 'the examples to generate, split by ",", default to all'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateExample)

    const vueExamplesDir = path.join(flags.repoDir, VUE_WEBDOC_DIR, args.component)
    assert(
      fs.existsSync(vueExamplesDir),
      `the component "${args.component}" examples does not exist in the vue site: ${vueExamplesDir}`,
    )

    const reactExamplesDir = path.join(flags.repoDir, REACT_WEBDOC_DIR, args.component)
    assert(
      fs.existsSync(reactExamplesDir),
      `the component "${args.component}" examples does not exist in the react site: ${reactExamplesDir}`,
    )

    const examples = args.examples
      ? args.examples.split(',')
      : fs
          .readdirSync(vueExamplesDir)
          .filter((v) => v.endsWith('.vue') && !v.includes('-composition-api'))
          .map((v) => v.replace('.vue', ''))

    for (const v of examples) {
      const dstExist =
        fs.existsSync(path.resolve(reactExamplesDir, `${v}.jsx`)) ||
        fs.existsSync(path.resolve(reactExamplesDir, `${v}.vue`))
      assert(
        flags.force || !dstExist,
        `the component "${args.component}" example "${v}" already exists in the react site, you can pass -f/--force to overwrite`,
      )
    }

    for (const v of examples) {
      this.log(`"${args.component}/${v}" generating...`)

      fs.writeFileSync(path.resolve(reactExamplesDir, `${v}.vue`), generateVueEntry(args.component, v))

      const jsx = await generateJsx(path.resolve(vueExamplesDir, `${v}.vue`))
      fs.writeFileSync(path.resolve(reactExamplesDir, `${v}.jsx`), jsx)

      this.log(`"${args.component}/${v}" generated`)
    }

    this.log(`"${args.component}" examples generated`)
  }
}

function generateVueEntry(component: string, example: string) {
  const componentName = `${component}-${example}-demo`

  return `<template>
  <${componentName} />
</template>

<script lang="jsx">
import Component from '@/webcomps/${component}/${example}.js';

customElements.define('${componentName}', Component);
export default {};
</script>
`
}

async function generateJsx(vueFilePath: string) {
  const systemPrompt = fs.readFileSync(path.resolve(__dirname, '../../prompts/generate-example.system.md'), 'utf8')

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
