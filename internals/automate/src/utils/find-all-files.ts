import fs from 'fs-extra'
import path from 'node:path'

/**
 * @param packagesPath {String} 文件夹或者文件路径
 * @param callback {Function} 处理目标文件的回调函数
 */
export const findAllFiles = (packagesPath: string, callback: (path: string) => void) => {
  const findAllpage = (packagesPath) => {
    try {
      if (fs.statSync(packagesPath).isDirectory()) {
        fs.readdirSync(packagesPath).forEach((childPatch) => {
          findAllpage(path.join(packagesPath, childPatch))
        })
      } else {
        if (packagesPath.includes('webdoc') && packagesPath.endsWith('.js')) {
          callback(packagesPath)
        }
      }
    } catch (error) {
      console.error(`Error processing ${packagesPath}: ${error.message}`)
    }
  }
  findAllpage(packagesPath)
}
