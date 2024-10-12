/**
 * 将 dist 目录 index.css 图片资源路径 ../images/ 改为 images
 */

import fs from 'node:fs'
import path from 'node:path'

const source = 'dist'

const entryFile = path.join(source, 'index.css')
let file = fs.readFileSync(entryFile, 'utf8')
file = file.replace(/url\(\.\.\/images\//g, 'url(images/')
fs.writeFileSync(entryFile, file, 'utf8')
