/**
 * 将 dist 目录生成 TGZ 的压缩包
 */

const fs = require('node:fs')
const path = require('node:path')

const source = 'dist'

fs.copyFileSync('package.json', path.join(source, 'package.json'))

// 生成dark-theme-index.js文件，将CSS内容嵌入到JS中
let jsStr = `
export default {
  id: 'tiny-dark-theme',
  name: 'DarkTheme',
  cnName: '暗黑主题',
  css: \`#CSS#\`
}
`
let cssStr = fs.readFileSync(path.resolve('./', 'dist/dark-theme-index.css'), 'utf8')

// 把 :root.dark 替换为 :root，:host(.dark) 替换为 :host
cssStr = cssStr.replace(/:root\.dark/g, ':root').replace(/:host\(\.dark\)/g, ':host')

jsStr = jsStr.replace('#CSS#', cssStr)
fs.writeFileSync(path.resolve('./', 'src/dark-theme-index.js'), jsStr) // 供开发时访问最新的主题变量
fs.writeFileSync(path.resolve('./', 'dist/dark-theme-index.js'), jsStr) // 打包发布用
