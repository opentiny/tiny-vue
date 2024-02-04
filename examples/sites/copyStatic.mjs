import fs from 'fs'
import path from 'path'

function copyStatic(srcDir, destDir) {
  fs.mkdirSync(destDir)
  const files = fs.readdirSync(srcDir)

  files.forEach(file => {
    const srcFile = path.join(srcDir, file)
    const destFile = path.join(destDir, file)
    const stats = fs.statSync(srcFile)

    if (stats.isFile()) {
      const fileName = path.basename(srcFile)
      if (!fileName.endsWith('.spec.js') && !fileName.endsWith('.spec.ts')) {
        fs.copyFileSync(srcFile, destFile)
      }
    } else if (stats.isDirectory()) {
      copyStatic(srcFile, destFile)
    }
  })
}

copyStatic('./demos/pc', './dist/@demos')

copyStatic('./demos/apis', './dist/@demos/apis')