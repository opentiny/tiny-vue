import gulp from 'gulp'
import fs from 'fs-extra'
import transform from 'gulp-transform'
import xlsx from 'node-xlsx'
import aliasCompName from './themeJson.alias.mjs'

const build = gulp.series(parseVars, writeJson, buildExcel)
build.description = '生成theme.json 和 themeExcel文件'

export default build

// 指定哪些目录的`vars.less`不需要处理
const ignoreNames = ['src', 'base']
// css规则的正则: '--color: var(--color);'  =>  [str, --color,  var(--color)]
const ruleReg = /([\w|\-|_]*): *([\w|\-|\_|(|)]*);/

function formatRule(name, key, value, desc) {
  const hasHide = desc.includes('(hide)')
  desc = desc.replace('(hide)', '')

  return `
    "${key}": {
      "id": "${key}",
      "key": "${key}",
      "variable": "${value}",
      "value": "${value}",
      "desc": "${desc}",
      "descEn": "${desc}",
      "component": "${name}",
      "componentDesc": "",
      "componentDescEn": "",
      "selector": ".tiny-${name}",
      "type": "",
      "group": "",
      "isImportant": "false",
      "ui": "",
      "show": 1,
      "configurable": ${hasHide ? 0 : 1},
      "isOpen": true
    },`
}

// 处理一个vars.less文件
function parseFile(component) {
  const name = aliasCompName[component.name] || component.name
  let formated = []
  let lessLines = component.content.split('\n')
  lessLines = lessLines.map((line) => line.trim())

  // 以 .component-css.........为起点行搜索。没找到，则跳出
  let startRow = 0
  while (startRow < lessLines.length && !lessLines[startRow].startsWith('.')) {
    startRow++
  }
  if (startRow === lessLines.length) {
    return []
  }
  let desc = '未知变量'

  for (let row = startRow + 1; row < lessLines.length; row++) {
    const line = lessLines[row]
    // 跳过空行
    if (line.length === 0) continue
    // 注释行
    if (line.startsWith('//')) {
      desc = line.slice(2).trim()
      continue
    }
    // 规则行
    const matches = line.match(ruleReg)
    if (matches) {
      if (desc === '未知变量') component.noDescCount++

      let [_, key, value] = matches
      formated.push(formatRule(name, key, value, desc))
      desc = '未知变量'
    }
  }
  component.ruleCount = formated.length
  return formated
}

const components = []
// 解析每个文件，将结果保存到 components 数据
function parseVars() {
  return gulp.src('packages/theme/src/**/vars.less').pipe(
    transform('utf8', (content, fileObj) => {
      const path = fileObj.path
      const name = path.split('\\').slice(-2)[0]
      if (!ignoreNames.includes(name)) {
        components.push({
          name,
          content: parseFile({ name, content, ruleCount: 0, noDescCount: 0 })
        })
      }
      return '' // 不写文件
    })
  )
}

// 将 components 数据写入文件
function writeJson(cb) {
  // 此处应用使用reduce插件来合并结果。 但gulp的reduce不好用。
  const parsed = components.map((comp) => comp.content).flat()
  let writedContent = parsed.join('').slice(1, -1) // 去除最后一个逗号
  writedContent = `{\n${writedContent}\n}`
  fs.writeFileSync('packages/theme/scripts/theme.json', writedContent)
  cb()
}

const titleArr = (
  'id,key,variable（可选）,value（可选）,desc,descEn,component,componentDesc,componentDescEn,' +
  'selector,type,group,isImportant,ui（所属的框架）,show,configurable'
).split(',')
const fileName = 'themeExcel'

export function buildExcel(cb) {
  let themeData = fs.readFileSync('packages/theme/scripts/theme.json', 'utf-8').toString()
  themeData = JSON.parse(themeData)
  const openXlsxObj = {} // 输出： {button:[ [标题行],  [每一个变量的一行值] ]}
  Object.values(themeData)
    .filter((item) => item.isOpen)
    .forEach((item) => {
      delete item.isOpen
      item.ui = '@opentiny/vue'
      openXlsxObj[item.component] = openXlsxObj[item.component]
        ? [...openXlsxObj[item.component], Object.values(item)]
        : [titleArr, Object.values(item)]
    })
  // 输出： [ {name:button, data:[ [],[] ]}]
  const excelData = Object.entries(openXlsxObj).map(([key, value]) => {
    return { name: key + '配置化', data: value }
  })

  // 写excel
  const buffer = xlsx.build(excelData)
  fs.writeFile(`packages/theme/scripts/${fileName}.xlsx`, buffer, (err) => {
    if (err) {
      return console.warn(`写入${fileName}失败`)
    }
  })

  cb()
}
