const toCamelCase = (str = '') => {
  const s =
    str &&
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}

export function transformVirtualTemplateForBuild(code: string) {
  return code.replace(/import\s+(\w+)\s+from\s+'virtual-template\?(.+)'/, (all, localName, url) => {
    const params = url.split('|').map((item: string) => item.split('=')).reduce((result: Record<string, string>, [key, value]: [string, string]) => {
      result[toCamelCase(`${key}-template`)] = value || key
      return result
    }, {})

    const getImports = (params: Record<string, string>) => {
      return Object.entries(params).map(([key, value]) => {
        return `import ${key} from './${value}.vue'`
      }).join('\n')
    }

    const getTemplateFunction = (params: Record<string, string>) => {
      const templateArr = Object.entries(params)
      let defaultReturnStr = ''

      const templateStr = templateArr.map(([key, value], index) => {
        // 当模板个数等于1时，不需要默认return 语句
        if (!index && templateArr.length > 1) {
          defaultReturnStr = `return ${key}`
        }

        // 当模板数等于1则直接return该模板
        if (templateArr.length === 1) {
          return `return ${key}`
        } else {
          return `if ('${value}' === (process.env.TINY_MODE || mode)) {return ${key}}`
        }
      }).join('\n')

      return `${templateStr}${defaultReturnStr}`
    }

    const result = `
${getImports(params)}

const ${localName} = (mode) => {
  ${getTemplateFunction(params)}
}
  `
    return result
  })
}
