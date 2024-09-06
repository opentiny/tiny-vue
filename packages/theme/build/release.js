/**
 * 将 dist 目录生成 TGZ 的压缩包   fs.cp 需要node 18.0+
 */

import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'

// 替换文件内容。 如果不指定target，则原地覆盖
function replaceFile(src, cb, target = null) {
  let content = fs.readFileSync(src, 'utf8')
  content = cb(content)
  fs.writeFileSync(target || src, content, 'utf8')
}

// 1、从 index.css 生成 lowcode.css ------ 提供特殊的前缀名称
replaceFile('dist/index.css', (content) => content.replace(/--ti-/g, '--ti-vue-'), 'dist/lowcode.css')

// 2、复制一份冗余的文件，统一替换 --ti- 前缀为 --tvue- ,避免混用 tiny3时，css变量名冲突。
fs.cpSync('dist', '_dist', { recursive: true, force: true })
fs.cpSync('_dist', 'dist/_dist', { recursive: true, force: true })
fs.rmSync('_dist', { recursive: true, force: true })
// 2.1 处理所有的 index.css
let files = fg.sync(['dist/_dist/**/index.css'])
files.forEach((file) => {
  replaceFile(file, (content) => content.replace(/--ti-/g, '--tvue-'))
})
// 2.2 处理所有的说主题js
files = fg.sync(['dist/_dist/**/{aurora,smb}-theme.js', 'dist/_dist/theme/**/{index,component}.js'])
files.forEach((file) => {
  replaceFile(file, (content) =>
    content
      .replace(/--ti-/g, '--tvue-') //
      .replace(/'ti-/g, `'tvue-`)
  )
})

// 3、复制package.json/README.md到dist目录
fs.copyFileSync('package.json', path.join('dist', 'package.json'))
fs.copyFileSync('README.md', path.join('dist', 'README.md'))
