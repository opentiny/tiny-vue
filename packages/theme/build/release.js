import fs from 'node:fs'
import path from 'node:path'

// 复制package.json/README.md到dist目录
fs.copyFileSync('README.md', path.join('dist', 'README.md'))

const root = path.resolve('./')
const content = await fs.promises.readFile(path.resolve(root, 'package.json'), 'utf8')
const packageJson = JSON.parse(content)
delete packageJson.exports
delete packageJson.private
await fs.promises.writeFile(path.resolve(root, 'dist/package.json'), JSON.stringify(packageJson, null, 2))
