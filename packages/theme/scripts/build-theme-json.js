/**
 * 将每个组件下的 `vars.less` 中的组件变量转化为统一的 `theme.json`,放到当前的 `scripts` 目录
 * 启动命令：pnpm run build:themejson
 * 检查结果：查看 theme-result.txt ,发现未写注释的变量
 */
const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const allComp = require('./components')
const xlsx = require('node-xlsx')
const themeConfFile = path.resolve(__dirname, './theme.json')

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
  let formated = []
  let lessLines = fs.readFileSync(component.file, 'utf-8').split('\n')
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

      const componentName = allComp[component.name]
      if (componentName) {
        formated.push(formatRule(componentName, key, value, desc))
      }
      desc = '未知变量'
    }
  }
  component.ruleCount = formated.length
  return formated
}

// 抓取全部，开始处理
fg(['**/vars.less']).then((files) => {
  const components = files
    .map((file) => {
      const arr = file.split('/')
      return {
        name: arr.slice(-2)[0],
        file,
        ruleCount: 0, // 规则个数
        noDescCount: 0 // 缺少注释的
      }
    })
    .filter((item) => !ignoreNames.includes(item.name))

  const parsed = components.map((comp) => parseFile(comp)).flat()
  let writedContent = parsed.join('').slice(1, -1) // 去除最后一个逗号
  writedContent = `{\n${writedContent}\n}`
  fs.writeFileSync('scripts/theme.json', writedContent)

  // 记录未注释的组件
  const noDesc = components.filter((c) => c.noDescCount > 0)
  fs.writeFileSync('scripts/theme-result.txt', JSON.stringify(noDesc, null, 2))
  writeThemeExcel()
})

function writeExcel(data, fileName) {
  const excelData = []

  data.forEach(item => {
    let addInfo = {}
    addInfo.name = item.name + '配置化'
    addInfo.data = [
      ['id', 'key', 'variable（可选）', 'value（可选）', 'desc', 'descEn', 'component', 'componentDesc', 'componentDescEn', 'selector', 'type', 'group', 'isImportant', 'ui（所属的框架）', 'show', 'configurable']
    ]
    item.data.forEach((idKey, i) => {
      if (i === 0) {
        idKey.splice(13, 1, '@opentiny/vue')
      }
      const rowData = [...idKey]
      addInfo.data.push(rowData)
    })
    excelData.push(addInfo)
  })
  let buffer = xlsx.build(excelData)
  fs.writeFile(`scripts/${fileName}.xlsx`, buffer, (err) => {
    if (err) {
      return console.warn(`写入${fileName}失败`)
    }
  })
}

function writeThemeExcel() {
  // 将theme.json文件生成excel
  let themeData = fs.readFileSync(themeConfFile, 'utf-8').toString()
  themeData = JSON.parse(themeData)
  const openXlsxObj = {}
  Object.values(themeData).forEach(item => {
    // 过滤掉非开源的
    if (item.isOpen) {
      delete item.isOpen
      openXlsxObj[item.component] = openXlsxObj[item.component] ? [...openXlsxObj[item.component], Object.values(item)] : [Object.values(item)]
    }
  })

  const openXlsxArr = []
  Object.entries(openXlsxObj).forEach(item => {
    openXlsxArr.push({ name: item[0], data: item[1] })
  })
  writeExcel(openXlsxArr, 'themeExcel')
}
