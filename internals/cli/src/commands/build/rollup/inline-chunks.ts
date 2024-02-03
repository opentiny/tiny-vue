import type { Plugin, NormalizedOutputOptions, OutputBundle, OutputChunk } from 'rollup'
import chalk from 'chalk'

export default function ({ deleteInlinedFiles = true }): Plugin {
  return {
    name: 'opentiny-vue:inline-chunks',
    generateBundle: ({ format }: NormalizedOutputOptions, bundle: OutputBundle) => {
      const bundlesToDelete = new Set<string>()
      const cache = {}

      const jsAssets = Object.keys(bundle).filter((i) => /\.[mc]?js$/.test(i))
      for (const jsName of jsAssets) {
        const jsChunk = bundle[jsName]

        if (jsChunk.type === 'asset') continue
        if (!jsChunk.code) continue

        if (format === 'es') {
          jsChunk.code = jsChunk.code.replace(
            // import { _ as _export_sfc } from "../../../../_plugin-vue_export-helper-1faf6727.mjs"
            /^import\s*.+\s*from\s+"[./]+(.+-[a-f0-9]{8}.+)".*$/gim,
            (_, chunkName) => {
              if (!cache[chunkName]) {
                cache[chunkName] = (bundle[chunkName] as OutputChunk).code
                  .replace(/export {[\s\S]+$/, '')
                  .replace(/_extends/g, '_extends_tiny')
                  .replace(/_createForOfIteratorHelperLoose/g, '_createForOfIteratorHelperLoose_tiny')
                  .replace(/_unsupportedIterableToArray/g, '_unsupportedIterableToArray_tiny')
                  .replace(/_arrayLikeToArray/g, '_arrayLikeToArray_tiny')
                bundlesToDelete.add(chunkName)
              }

              return cache[chunkName]
            }
          )
        }

        if (format === 'cjs') {
          jsChunk.code = jsChunk.code.replace(
            // var _pluginVue_exportHelper = require("../../../../_plugin-vue_export-helper-65c7de93.js");
            /^var\s+(.+)\s+=\s+require\("[./]+(.+-[a-f0-9]{8}.+)".*$/gim,
            (_, localVarName, chunkName) => {
              if (!cache[chunkName]) {
                cache[chunkName] =
                  'var _pluginVue_exportHelper = {};\n' +
                  (bundle[chunkName] as OutputChunk).code.replace(/exports\./g, `${localVarName}.`)
                bundlesToDelete.add(chunkName)
              }

              return cache[chunkName]
            }
          )
        }
      }

      if (deleteInlinedFiles) {
        // 删除 chunks
        bundlesToDelete.forEach((name) => {
          delete bundle[name]
          // eslint-disable-next-line no-console
          console.log(`\n${chalk.red(name)} 已经被内联并删除`)
        })
      }
    }
  }
}
