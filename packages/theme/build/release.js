/**
 * 将 dist 目录生成 TGZ 的压缩包   fs.cp 需要node 18.0+
 */

import fs from 'node:fs'
import path from 'node:path'

// 3、复制package.json/README.md到dist目录
fs.copyFileSync('package.json', path.join('dist', 'package.json'))
fs.copyFileSync('README.md', path.join('dist', 'README.md'))
