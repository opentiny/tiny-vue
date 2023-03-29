import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { UserOptions } from './types'
import { transformVirtualTemplate, transformConditionalTemplate, transformVirtualTemplateForBuild } from './core'

export default createUnplugin<UserOptions>((options = {}) => {
  const filter = createFilter(
    options.include || ['**/*'],
    options.exclude || [],
  )

  return {
    name: '@opentiny/unplugin-virtual-template',
    enforce: 'pre',
    resolveId(id: string) {
      if (id.startsWith('virtual-template')) {
        // 返回 id 表明命中，vite不再询问其他插件处理该 id 请求
        return id
      }
      return null
    },
    transformInclude(id) {
      return filter(id)
    },
    transform(code, id) {
      if (process.env.NODE_ENV === 'production') {
        return transformVirtualTemplateForBuild(code)
      }

      code = transformVirtualTemplate(code)
      return transformConditionalTemplate(code, id, options.env)
    },
  }
})
