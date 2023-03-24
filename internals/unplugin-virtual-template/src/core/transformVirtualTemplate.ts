export function transformVirtualTemplate(code: string) {
  return code.replace(/import\s+(\w+)\s+from\s+'virtual-template\?(.+)'/, (all, localName, url) => {
    const params = url.split('|').map((item: string) => item.split('=')).reduce((result: Record<string, string>, [key, value]: [string, string]) => {
      result[key] = value || key
      return result
    }, {})

    const getTemplate = (params: Record<string, string>) => {
      return Object.entries(params).map(([key, value]) => {
        return `  
  // #v-ifdef VITE_TINY_MODE=${key}
  result = import.meta.glob('./${value}.vue', { eager: true })
  // #v-endif
        `
      }).join('')
    }

    const result = `
const ${localName} = (mode) => {
  let result

  // #v-ifndef VITE_TINY_MODE
  result = import.meta.glob('./{pc,mobile}.vue', { eager: true })
  // #v-endif

  ${getTemplate(params)}

  const finalMode = ${JSON.stringify(params)}[mode?.value || mode]

  return result[\`./\${finalMode}.vue\`].default
}
  `

    return result
  })
}
