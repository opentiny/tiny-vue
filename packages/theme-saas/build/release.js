/**
 * 将 dist 目录生成 TGZ 的压缩包
 */

const fs = require('node:fs')
const path = require('node:path')
const { execSync } = require('node:child_process')

const source = 'dist'

fs.copyFileSync('package.json', path.join(source, 'package.json'))
