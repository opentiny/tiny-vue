/**
 * 将 dist 目录生成 TGZ 的压缩包
 */

const fs = require('node:fs')
const path = require('node:path')
const { execSync } = require('node:child_process')

const source = 'dist'
const content = fs.readFileSync(path.join(source, 'index.css')).toString('UTF-8')
// 提供特殊的前缀名称
const result = content.replace(/--ti-/g, '--ti-vue-')
const packagesPath = path.join(source, 'lowcode.css')

fs.writeFileSync(packagesPath, result)

fs.copyFileSync('package.json', path.join(source, 'package.json'))
