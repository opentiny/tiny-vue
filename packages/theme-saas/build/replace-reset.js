const fs = require('node:fs')
const path = require('node:path')

const resetFile = path.resolve(__dirname, '../src/base/reset.less')
const resetCopyFile = path.resolve(__dirname, '../src/base/reset-copy.less')

try {
  const resetCopyContent = fs.readFileSync(resetCopyFile, 'utf-8')

  fs.writeFileSync(resetFile, resetCopyContent)

  fs.unlinkSync(resetCopyFile)

  console.error('File replaced and copied successfully!')
} catch (err) {
  console.error('Error:', err)
}
