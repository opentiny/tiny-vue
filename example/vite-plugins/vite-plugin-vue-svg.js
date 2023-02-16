const { readFileSync } = require('fs')
const SVGO = require('svgo')
const { compileTemplate } = require('@vue/compiler-sfc')

async function compileSvgIcons(svg, id) {
  let { code } = compileTemplate({ source: svg, id, transformAssetUrls: false })

  let codeStr = code.replace('export function render', 'function render')
  codeStr += '\nexport default { render };'

  return codeStr
}

async function optimizeSvgIcons(svgIcon, content, path) {
  const { data } = await svgIcon.optimize(content, {
    path
  })

  return data
}

export default (options = {}) => {
  const { svgoConfig, defaultExport = 'url' } = options
  const svgIcon = new SVGO(svgoConfig)
  const svgRegexp = /\.svg(?:\?(component|url))?$/
  const svgCache = new Map()

  return {
    name: 'vue-svg',
    async transform(sourceSvg, id, isBuild) {
      const svgMatch = id.match(svgRegexp)

      if (svgMatch) {
        const type = svgMatch[1]

        if ((defaultExport === 'url' && typeof type === 'undefined') || type === 'url') {
          return sourceSvg
        }

        if ((defaultExport === 'component' && typeof type === 'undefined') || type === 'component') {
          const idWithoutQuery = id.replace('.svg?component', '.svg')
          let resultCache = svgCache.get(idWithoutQuery)

          if (!resultCache) {
            const code = readFileSync(idWithoutQuery)
            const svg = await optimizeSvgIcons(svgIcon, code, idWithoutQuery)
            resultCache = await compileSvgIcons(svg, idWithoutQuery)

            if (isBuild) {
              svgCache.set(idWithoutQuery, resultCache)
            }
          }

          return resultCache
        }
      }
    }
  }
}
