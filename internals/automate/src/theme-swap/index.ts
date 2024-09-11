/* eslint-disable no-console */
import path from 'node:path'
import fs from 'node:fs'

interface Exception {
  name: string
  reason: string
}

const ignoreFolds = ['base', 'theme', 'images', 'mixins', 'svgs', 'transitions', 'vars.less']
const srcFold = path.join(process.cwd(), '../../packages/theme/src')
const exceptions = [] as Exception[]
const $smb = (name: string) => path.join(srcFold, name, 'smb-theme.js')
const $vars = (name: string) => path.join(srcFold, name, 'vars.less')
const $old = (name: string) => path.join(srcFold, name, 'old-theme.js')
const kebab = (name: string) =>
  name
    .split('-')
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join('')

// 1、vars.less的所有文件夹， 类似  [ 'action-menu/vars.less',  'alert/vars.less',.........]
fg.sync(['**/vars.less'], { cwd: srcFold, ignore: ignoreFolds })
  .map((file) => file.split('/')[0]) // 取出组件名
  .filter((name) => fs.existsSync($smb(name))) // 过滤掉不存在在 smb-theme.js的
  .forEach(async (name) => {
    const varsFile = fs.readFileSync($vars(name), 'utf8')

    const smbThemeJsObj = await import('file://' + $smb(name))
    const smbJs = Object.values(smbThemeJsObj)[0]

    if (!smbJs) {
      exceptions.push({ name, reason: 'smb-theme.js 异常，未读取到变量值' })
      return
    }

    try {
      processComponent(name, varsFile, smbJs)
    } catch (error: any) {
      exceptions.push({ name, reason: '替换组件变量，写入2个文件时出错！' + error.toString() })
    }
  })

// 2、 替换 base/basic-var.less 与 theme/smb-theme/index.js 中的变量
const varsFile = fs.readFileSync(path.join(srcFold, 'base/basic-var.less'), 'utf8')
const smbThemeJsObj = await import('file://' + path.join(srcFold, 'theme/smb-theme/index.js'))
const smbJs = Object.values(smbThemeJsObj)[0]

processComponent('base', varsFile, smbJs, true)

console.log('/////执行完毕/////')
console.table(exceptions)

interface QueryInfo {
  key: string
  smbValue: string
  varsValue: string
  varsStart: number
  varsEnd: number
  varsLost: boolean
}
// 处理一个组件的交换
function processComponent(name: string, varsFile: string, smbJs: any, isBase = false) {
  const smbKeys = Object.keys(smbJs)
  // 记录所有替换信息
  const result: QueryInfo[] = []
  // 1、遍历 smbKeys 去 vars.less中查找。 生成信息记录在result中
  smbKeys.forEach((key) => {
    const info: QueryInfo = { key, smbValue: smbJs[key], varsLost: false } as QueryInfo
    const query = `--${key}:`
    const start = varsFile.indexOf(query)

    if (start === -1) {
      info.varsLost = true
      exceptions.push({ name, reason: 'smb-theme中定义的变量错误， vars.less中找不到:' + key })
      return
    }

    info.varsStart = start + query.length
    info.varsEnd = varsFile.indexOf(';', info.varsStart)
    info.varsValue = varsFile.substring(info.varsStart, info.varsEnd).trim()
    result.push(info)
  })

  // 2、根据result 倒排序后, 将smbValue 写入 varsValue的位置
  result.sort((a, b) => (a.varsStart > b.varsStart ? -1 : 1))

  result.forEach((info) => {
    const start = varsFile.substring(0, info.varsStart)
    const end = varsFile.substring(info.varsEnd)
    varsFile = `${start} ${info.smbValue}${end}`
  })

  fs.writeFileSync(isBase ? path.join(srcFold, 'base/basic-var.less') : $vars(name), varsFile)

  // 3、 根据result, 生成old-theme.js
  const oldObj = result.reduce((pre, curr) => {
    pre[curr.key] = curr.varsValue
    return pre
  }, {})

  if (!isBase) {
    fs.writeFileSync($old(name), `export const tiny${kebab(name)}OldTheme = ${JSON.stringify(oldObj, null, 2)}`)
  } else {
    // old-theme.js 似乎不太能用
    fs.writeFileSync(
      path.join(srcFold, 'base/old-theme.js'),
      `export const tiny${kebab(name)}OldTheme = ${JSON.stringify(oldObj, null, 2)}`
    )
  }

  // 4、 删除smb-theme.js
  if (!isBase) {
    fs.rmSync($smb(name))
  }
}
