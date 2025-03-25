import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { UserOptions } from './types'

export default createUnplugin<UserOptions>((options = {}) => {
  const filter = createFilter(options.include || ['**/*'], options.exclude || [])

  return {
    name: '@opentiny/unplugin-hoc-plugin',
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    transform(code, id) {
      const [filename, query] = id.split('?', 2)
      // console.log(filename, query)
      if (filename.endsWith('.vue') && query) {
        // console.log(id)
        const params = new URLSearchParams(query)
        if (params.has('withPropsHOC')) {
          // console.log('enter')
          // 替换 import 语句
          const newCode = code.replace(
            /import\s*{([^}]+)}\s*from\s*['"]\@opentiny\/vue-common['"]/g,
            (match, imports) => {
              const processedImports = imports
                .split(',')
                .map((specifier) => {
                  const trimmed = specifier.trim()
                  return trimmed === 'defineComponent'
                    ? 'WithDesignConfigPropsDefineComponent as defineComponent'
                    : trimmed
                })
                .join(', ')

              return `import { ${processedImports} } from '@opentiny/vue-common';`
            }
          )

          return {
            code: newCode,
            map: null // 可选 source map
          }
        }
      }
      return null
    }
  }
})
