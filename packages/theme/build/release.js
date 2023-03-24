/**
 * 将 dist 目录生成 TGZ 的压缩包
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const source = 'dist'
const content = fs.readFileSync(path.join(source, 'index.css')).toString('UTF-8')
// 提供特殊的前缀名称
const result = content.replace(/--ti-/g, '--ti-vue-')
const packagesPath = path.join(source, 'lowcode.css')

fs.writeFileSync(packagesPath, result)

fs.copyFileSync('package.json', path.join(source, 'package.json'))

// execSync('npm pack', { cwd: source })

fs.readdirSync(source).forEach((item) => {
  if (item.endsWith('.tgz')) {
    const tgzPath = path.join(source, item)

    fs.copyFileSync(tgzPath, path.join(item))
    fs.unlinkSync(tgzPath)
  }
})
