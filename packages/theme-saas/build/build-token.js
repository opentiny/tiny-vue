/**
 * 主题构建预处理：将设计 token 中的圆角变量注入到 reset.less。
 *
 * 流程：
 * 1. 从 theme/theme.json 读取 baseLayout.radius（基础圆角 + aliasToken 语义别名）
 * 2. 经 loadCssVar 转为 CSS 变量映射（别名转为 var(...) 引用）
 * 3. 拼成挂在 html 上的 CSS 变量块
 * 4. 将原始 reset.less 备份为 reset-copy.less，再把变量块追加到 reset.less
 *
 * 在构建链路中的位置：clean → build-token.js → build:theme → replace-img.js
 * 后续由 replace-reset.js 用备份还原 reset.less，避免源文件被永久改脏。
 * 注意：本脚本只处理 radius（圆角），不处理颜色、间距等其它 token。
 */
const fs = require('node:fs')
const path = require('node:path')

const { loadCssVar } = require('../plugins/loadTheme.js')
const designToken = require('../theme/theme.json')

const borderRadiusToken = loadCssVar(designToken.baseLayout.radius)

const sourceFile = path.resolve(__dirname, '../src/base/reset.less')
const destFile = path.resolve(__dirname, '../src/base/reset-copy.less')
let additions = '\nhtml {\n'

for (let key in borderRadiusToken) {
  additions += `${key}: ${borderRadiusToken[key]};\n`
}

additions += '}'

try {
  fs.copyFileSync(sourceFile, destFile)

  const data = fs.readFileSync(sourceFile, 'utf8')
  fs.writeFileSync(sourceFile, data + additions, 'utf8')
} catch (err) {
  console.error('Failed to process file:', err)
  process.exit(1)
}
