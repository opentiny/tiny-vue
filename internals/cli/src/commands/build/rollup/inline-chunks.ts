import type { Plugin, NormalizedOutputOptions, OutputBundle } from 'rollup'
import path from 'node:path'
import fs from 'node:fs'
import { rollup } from 'rollup'
import chalk from 'chalk'
import commonjs from '@rollup/plugin-commonjs'
import { external } from '../../../shared/config'

let bundlesToMerge
let commonChunk
let buildFormat
let isDelete

export default function ({ deleteInlinedFiles = true }): Plugin {
  return {
    name: 'opentiny-vue:inline-chunks',
    generateBundle: async ({ format, dir }: NormalizedOutputOptions, bundle: OutputBundle) => {
      buildFormat = format
      isDelete = deleteInlinedFiles
      bundlesToMerge = new Set<string>()
      commonChunk = new Set<string>()
      const jsAssets = Object.keys(bundle).filter((i) => /\.[mc]?js$/.test(i))
      for (const jsName of jsAssets) {
        const jsChunk = bundle[jsName]

        if (jsChunk.type === 'asset') continue
        if (!jsChunk.code) continue

        if (format === 'es') {
          const reg = /^import(\s*.+\s*from)?\s+"[./]+(.+-[a-f0-9]{8}.+)".*$/gim
          const matchArr = jsChunk.code.match(reg)
          if (matchArr) {
            const filePath = path.join(dir, jsName)
            bundlesToMerge.add(filePath)
            matchArr.forEach((matchImport) => {
              const sourceName = matchImport.match(/"(.+)"/)[1]
              commonChunk.add(path.join(filePath, '../', sourceName))
            })
          }
        }

        if (format === 'cjs') {
          const reg = /require\("[./]+(.+-[a-f0-9]{8}.+)".*$/gim
          const matchArr = jsChunk.code.match(reg)
          if (matchArr) {
            const filePath = path.join(dir, jsName)
            bundlesToMerge.add(filePath)
            matchArr.forEach((matchRequire) => {
              const sourceName = matchRequire.match(/"(.+)"/)[1]
              commonChunk.add(path.join(filePath, '../', sourceName))
            })
          }
        }
      }
    },
    closeBundle: async () =>
      new Promise((resolve) => {
        // eslint-disable-next-line no-console
        console.log(`\n${chalk.green('开始内联公共依赖')}`)
        let i = 0
        if (bundlesToMerge?.size > 0) {
          bundlesToMerge.forEach(async (filePath) => {
            if (commonChunk.has(filePath)) {
              ++i
            } else {
              const bundle = await rollup({
                input: filePath,
                external: (source) => external(source),
                plugins: buildFormat === 'cjs' ? [commonjs()] : []
              })
              await bundle.write({ dir: path.join(filePath, '../'), format: buildFormat })
              await bundle.close()
              ++i
            }
            if (i === bundlesToMerge.size) {
              resolve()
            }
          })
        } else {
          resolve()
        }
      }).then(async () => {
        if (isDelete && commonChunk?.size > 0) {
          commonChunk.forEach((filePath) => {
            fs.unlinkSync(filePath)
            // eslint-disable-next-line no-console
            console.log(`\n${chalk.red(filePath)} 已经被内联并删除`)
          })
        }
      })
  }
}
