import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('./')

// 1、复制 theme-tool.js /README.md 到dist目录
fs.copyFileSync('README.md', path.join('dist', 'README.md'))
fs.copyFileSync('src/theme-tool.js', path.join('dist', 'theme-tool.js'))
fs.copyFileSync('src/theme-tool.d.ts', path.join('dist', 'theme-tool.d.ts'))

// 2、读取 old-theme-index.js , dist/old-theme-index.less， 合并后写入 dist/ old-theme-index.js
let jsStr = `
export default {
  id: 'tiny-old-theme',
  name: 'OldTheme',
  cnName: '旧的主题',
  css: \`#CSS#\`
}
`
let cssStr = fs.readFileSync(path.resolve(root, 'dist/old-theme-index.css'), 'utf8')

jsStr = jsStr.replace('#CSS#', cssStr)
fs.writeFileSync(path.resolve(root, 'src/old-theme-index.js'), jsStr) // 供开发时(pnpm site)， 可以访问到最新的定制主题变量
fs.writeFileSync(path.resolve(root, 'dist/old-theme-index.js'), jsStr) // 打包发布用

// 3、复制 package.json
const content = fs.readFileSync(path.resolve(root, 'package.json'), 'utf8')
const packageJson = JSON.parse(content)
delete packageJson.exports
delete packageJson.private
fs.writeFileSync(path.resolve(root, 'dist/package.json'), JSON.stringify(packageJson, null, 2))
