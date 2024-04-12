import {Args, Command, Flags} from '@oclif/core'
import {ensureDirSync} from 'fs-extra'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'

import {transformApi} from '../../utils/transform-api.js'

const VUE_WEBDOC_DIR = 'examples/sites/demos/pc/app/'
const VUE_API_DIR = 'examples/sites/demos/apis'
const VUE_PACKAGE_JSON = 'examples/sites/package.json'
const VUE_EXAMPLE_PACKAGE_JSON = 'examples/sites/demos/pc/app/package.json'
const REACT_WEBDOC_DIR = 'examples/react-site/demos/app/'

const LANGS = ['cn', 'en']

export default class GenerateWebDoc extends Command {
  static description = 'generate webdoc from the vue site'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    repoDir: Flags.string({char: 'r', description: 'tiny-vue directory', required: true}),
    force: Flags.boolean({char: 'f', description: 'force overwrite the react site webdoc'}),
  }

  static args = {
    component: Args.string({description: 'the component to generate webdoc', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateWebDoc)

    const vueWebDocDir = path.join(flags.repoDir, VUE_WEBDOC_DIR, args.component, 'webdoc')
    assert(
      fs.existsSync(vueWebDocDir),
      `the component "${args.component}" webdoc does not exist in the vue site: ${vueWebDocDir}`,
    )

    const vueApiFile = path.resolve(flags.repoDir, VUE_API_DIR, `${args.component}.js`)
    assert(
      fs.existsSync(vueApiFile),
      `the component "${args.component}" API does not exist in the vue site: ${vueApiFile}`,
    )

    const reactWebDocDir = path.join(flags.repoDir, REACT_WEBDOC_DIR, args.component, 'webdoc')
    assert(
      flags.force || !fs.existsSync(reactWebDocDir),
      `the component "${args.component}" webdoc already exists in the react site: ${reactWebDocDir}, you can pass -f/--force to overwrite`,
    )

    if (!fs.existsSync(reactWebDocDir)) {
      ensureDirSync(reactWebDocDir)
    }

    for (const lang of LANGS) {
      const mdFile = `${args.component}.${lang}.md`
      fs.copyFileSync(path.resolve(vueWebDocDir, mdFile), path.resolve(reactWebDocDir, mdFile))
    }

    // temp modify the vue site's package.json
    const vuePkg = path.resolve(flags.repoDir, VUE_PACKAGE_JSON)
    const originalVuePkg = JSON.parse(fs.readFileSync(vuePkg, 'utf8'))
    originalVuePkg.type = 'module'
    fs.writeFileSync(vuePkg, JSON.stringify(originalVuePkg, null, 2))
    const vueExamplePkg = path.resolve(flags.repoDir, VUE_EXAMPLE_PACKAGE_JSON)
    const originalVueExamplePkg = JSON.parse(fs.readFileSync(vueExamplePkg, 'utf8'))
    originalVueExamplePkg.type = 'module'
    fs.writeFileSync(vueExamplePkg, JSON.stringify(originalVueExamplePkg, null, 2))

    const {
      default: {apis: vueApi},
    } = await import(vueApiFile)
    const {default: vueDoc} = await import(path.resolve(vueWebDocDir, `${args.component}.js`))
    const reactDoc = {
      ...vueDoc,
      apis: vueApi.map(transformApi),
    }

    fs.writeFileSync(path.resolve(reactWebDocDir, `${args.component}.json`), JSON.stringify(reactDoc, null, 2))

    // rollback the vue site's package.json
    delete originalVuePkg.type
    fs.writeFileSync(vuePkg, JSON.stringify(originalVuePkg, null, 2))
    delete originalVueExamplePkg.type
    fs.writeFileSync(vueExamplePkg, JSON.stringify(originalVueExamplePkg, null, 2))

    this.log(`"${args.component}" webdoc generated`)
  }
}
