import { createRequire } from 'node:module'
import { readFileSync, existsSync } from 'node:fs'
import { transformVueTemplateToSolid } from './src/plugin.js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const require = createRequire(import.meta.url)

const indexTemplatePath = path.resolve(__dirname, './template/src/index.tss')
const pcTemplatePath = path.resolve(__dirname, './template/src/pc.jsxs')

// 多模板入口模板
const indexTemplate = readFileSync(indexTemplatePath, { encoding: 'utf-8' })

// PC模板入口
const pcTemplate = readFileSync(pcTemplatePath, { encoding: 'utf-8' })

const matchComponentRegx = /vue\/src\/([a-z]+)\/src/

const fundProps = (code, findStr) => {
  let findIndex = code.indexOf(findStr)
  let props = ''

  if (~findIndex) {
    const endStr = 'export '
    let constantsPart = code.substring(findIndex + findStr.length, code.length)
    props = constantsPart.substring(0, constantsPart.indexOf(endStr))
  }

  return props
}

const getSvgContent = (svg) => {
  return svg.substring(svg.indexOf('>') + 1, svg.length)
}

const getDefaultValueFromEntry = (id) => {
  const componentMatchs = id.match(matchComponentRegx)
  const entryPath = id.replace('pc.vue', 'index.ts')
  if (existsSync(entryPath)) {
    if (componentMatchs?.[1]) {
      const code = readFileSync(entryPath, { encoding: 'utf-8' })
      let constants = fundProps(code, '$constants =') || '{}'
      let propsContent = fundProps(code, 'Props =') || fundProps(code, 'props :')
      let props = {}

      if (propsContent) {
        const propsContentParts = propsContent.split(/\n/)
        propsContentParts.forEach((item, index) => {
          if (item.indexOf('type:') && ['Boolean', 'String', 'Number'].some((type) => item.includes(type))) {
            const name = propsContentParts[index - 1].replace(/\W/g, '')
            let value = propsContentParts[index + 1]

            if (name && value.includes('default:')) {
              const type = /['"]/.test(value) ? 'Char' : 'Other'
              value = value.replace('default:', '').replace(/["|'|\s,]/g, '')
              props[name] = { type, value }
            }
          }
        })
      }

      return {
        $constants: constants,
        $props: props
      }
    }
  }

  return {
    $constants: '{}',
    $props: {}
  }
}

export default function vueTemplate2Jsx() {
  return {
    name: '@opentiny/vue-vite-template2jsx',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('vue-icon/src')) {
        const svgName = code.match(/([a-z1-9-]+)\.svg/)

        if (svgName && svgName[0]) {
          const svgPath = require.resolve(`@opentiny/vue-theme/svgs/${svgName[0]}`)
          if (existsSync(svgPath)) {
            let svgContent = readFileSync(svgPath, { encoding: 'utf-8' })

            if (svgContent.includes('<!--')) {
              svgContent = svgContent.replace(/<!--[\s\S]+-->/, '')
            }

            if (svgContent.includes('<?xml')) {
              svgContent = getSvgContent(svgContent)
            }

            if (svgContent.includes('<!DOCTYPE')) {
              svgContent = getSvgContent(svgContent)
            }

            if (svgContent.includes('<style')) {
              svgContent = svgContent.replace(/<style[\s\S]+<\/style>/, '')
            }

            const viewBox = svgContent.match(/viewBox="[\d|\s]+"/)?.[0] || `viewBox="0 0 24 24"`

            return `export default function(props) {
              return (<svg style={props.style} xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} ${viewBox} xml:space="preserve" class={'tiny-svg svgs-icon ' + props.class}>
                ${getSvgContent(svgContent)}  
              )
            }`
          }
        }

        return code
      }

      if (id.includes(`src/index.ts`) && !id.includes(`common/src/index.ts`)) {
        return indexTemplate
      }

      if (id.includes('pc.vue')) {
        const componentMatchs = id.match(matchComponentRegx)
        if (componentMatchs?.[1]) {
          const mapData = getDefaultValueFromEntry(id)
          const pcComponent = transformVueTemplateToSolid(pcTemplate, code, componentMatchs[1], mapData)
          return pcComponent
        }
      }
    }
  }
}
