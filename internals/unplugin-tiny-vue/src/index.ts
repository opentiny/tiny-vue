import MagicString from 'magic-string'
import type { Plugin } from 'vite'

function pascalCase(str: string) {
  const camelCaseStr = str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
  return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1)
}

const resolveVue = (code: string, s: MagicString) => {
  const results: any = []

  for (const match of code.matchAll(/_resolveComponent[0-9]*\("(.+?)"\)/g)) {
    const matchedName = match[1]
    if (match.index != null && matchedName && !matchedName.startsWith('_')) {
      const start = match.index
      const end = start + match[0].length
      results.push({
        rawName: matchedName,
        replace: (resolved: string) => s.overwrite(start, end, resolved)
      })
    }
  }

  return results
}

const findComponent = (rawName: string, name: string, s: MagicString) => {
  if (!name.match(/^Tiny[a-zA-Z]/)) {
    return
  }
  s.prepend(`import ${name} from '@opentiny/vue-${rawName.slice(5)}';\n`)
}

const transformCode = (code) => {
  const s = new MagicString(code)
  const results = resolveVue(code, s)

  for (const { rawName, replace } of results) {
    const name = pascalCase(rawName)
    findComponent(rawName, name, s)
    replace(name)
  }

  const result = s.toString()
  return result
}

export default function vitePluginAutoImport(): Plugin {
  return {
    name: '@opentiny/auto-import',

    transform(code, id) {
      // 不处理node_modules内的依赖
      if (/\.(?:vue)$/.test(id) && !/(node_modules)/.test(id)) {
        return {
          code: transformCode(code),
          map: null
        }
      }
    }
  }
}
