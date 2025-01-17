/* eslint-disable no-console */
import { SVG, cleanupSVG, IconSet, runSVGO, deOptimisePaths } from '@iconify/tools'

import { encodeSvgForCss } from '@iconify/utils/lib/svg/encode-svg-for-css'
import fg from 'fast-glob'
import fs from 'node:fs'
import chalk from 'chalk'

const iconSet = new IconSet({
  prefix: 'ci',
  icons: {},
  info: {
    name: 'CIcons',
    author: { name: 'opentiny' },
    license: { title: 'MIT' }
  }
})
const shareCss = '[class*=ci-] {height:1em;width:1em;display:inline-block;vertical-align:middle;}\n'
const allCss: string[] = []
const categoryCss = {} as Record<string, string[]>
interface NameInfo {
  name: string
  nameCn: string
  order: number
}
const categorys = {} as Record<string, Record<string, NameInfo[]>>

/** 从路径中解析出信息 */
export function parsePath(svgPath: string) {
  // svgPath 格式:    ./svgs/base/1-方向/前进-go.svg
  const pathSegments = svgPath.split('/')
  const filename = pathSegments.pop()!.toLowerCase() // xxx.svg
  const group = pathSegments.pop()! // 1-方向
  const category = pathSegments.pop()! as 'base' | 'svc' | 'ext'

  let name = filename.slice(0, -4)! // 中文-xxx-yyy-zzz
  const orderAndNameCn = name.split('-')[0]
  const [order, nameCn] = orderAndNameCn.split('#') // 取出第一段

  name = name.slice(orderAndNameCn.length + 1) // 取出图标名
  name = category === 'base' ? name : `${category}-${name}` // svc-xxx-yyy
  return { category, group, nameCn, name, order: parseFloat(order) }
}

/** 加载svg文件到 Svg对象中 */
export function loadSvg(svgPath: string) {
  const content = fs.readFileSync(svgPath, 'utf8')
  const svg = new SVG(content)

  try {
    cleanupSVG(svg)
    runSVGO(svg, {
      plugins: [
        'prefixIds',
        {
          name: 'removeDefs',
          fn: () => {
            return {
              element: {
                enter: (node, parentNode) => {
                  // 具有渐变的，则不过滤了
                  if (content.includes('<linearGradient')) return

                  if (node.name === 'defs') {
                    parentNode.children = parentNode.children.filter((child) => child !== node)
                  }
                }
              }
            }
          }
        }
      ]
    })
    deOptimisePaths(svg)
  } catch (error) {
    console.log(chalk.red('处理svg时出错'), svgPath, error)
  }
  return svg
}

export function genClass(name: string, data: string) {
  const mode = data.includes('currentColor') ? 'mask' : 'background-img'

  const uri = `url("data:image/svg+xml;utf8,${encodeSvgForCss(data)}")`

  let rules
  // 单色图标
  if (mode === 'mask') {
    rules = {
      '--v': uri,
      '-webkit-mask': `var(--v) no-repeat`,
      mask: `var(--v) no-repeat`,
      '-webkit-mask-size': '100% 100%',
      'mask-size': '100% 100%',
      'background-color': 'currentColor'
    }
  }
  // 彩色图标
  else {
    rules = {
      background: `${uri} no-repeat`,
      'background-size': '100% 100%',
      'background-color': 'transparent'
    }
  }
  const rulesStr = Object.keys(rules)
    .map((key) => `${key}:${rules[key]};`)
    .join('')
  return `.ci-${name}{${rulesStr}}`
}

/** 收集信息到 iconSet / cssList /categorys  中去 */
const processSvg = (svgPath: string) => {
  const { name, category, group, nameCn, order } = parsePath(svgPath)
  const svg = loadSvg(svgPath)

  iconSet.setIcon(name, svg.getIcon())
  iconSet.toggleCategory(name, category, true)

  const iconCss = genClass(name, svg.toMinifiedString())
  allCss.push(iconCss)

  // 第一次遇到该大类名称时
  if (!categoryCss[category]) {
    categoryCss[category] = []
    categorys[category] = {}
  }
  categoryCss[category].push(iconCss)

  if (categorys[category][group]) {
    categorys[category][group].push({ name, nameCn, order })
  } else {
    categorys[category][group] = [{ name, nameCn, order }]
  }
}

const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

// 0、确保目录存在+
ensureDir('./json')
ensureDir('./style')

// 1、 遍历文件，生成json-data 和 class
let files = await fg(['./svgs/**/*.svg'])
files.map((file) => processSvg(file))
console.log(chalk.blue('> 遍历处理文件成功\n'))

// 2、输出3个产物
const jsonData = JSON.stringify(iconSet.export(), null, '\t')
fs.writeFileSync('./json/icons.json', jsonData)
console.log(chalk.green('输出 ./json/icons.json 成功'))

fs.writeFileSync('./style/all.css', shareCss + allCss.join('\n'))
Object.keys(categoryCss).forEach((key) => {
  fs.writeFileSync(`./style/${key}.css`, shareCss + categoryCss[key].join('\n'))
})
console.log(chalk.green('输出 ./style/all.css 等样式文件成功'))

// categorys.ts: 开发时，便于浏览图标
fs.writeFileSync('./categorys.ts', `export const categorys=${JSON.stringify(categorys, null, 2)}`)
console.log(chalk.green('输出 ./categorys.ts 成功'))

// 3、检查同一个类别中，有没有重名的图标
Object.values(categorys).forEach((cat) => {
  const names = Object.values(cat)
    .flat()
    .map((item) => item.name)

  if (names.length > new Set(names).size) {
    console.log(
      chalk.red(`有重复的名字`),
      names.filter((n) => names.indexOf(n) !== names.lastIndexOf(n))
    )
  }
})

console.log(chalk.blue('\n> 构建结束！'))
