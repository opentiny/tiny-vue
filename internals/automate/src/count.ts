import path from 'node:path'
import fs from 'fs-extra'

const demo = path.resolve('../../examples/sites/demos/pc/app')

let apiSize = 0
let apiLength = 0
let compNumber = 0

// 递归遍历所有的组件，然后依次修改文件内容和修改文件格式
const findAllpage = (packagesPath) => {
  if (fs.statSync(packagesPath).isDirectory()) {
    fs.readdirSync(packagesPath).forEach((childPatch) => {
      findAllpage(path.join(packagesPath, childPatch))
    })
  } else {
    if (packagesPath.includes('webdoc') && packagesPath.endsWith('.js')) {
      const stats = fs.statSync(packagesPath)
      const string = fs.readFileSync(packagesPath, 'utf8').replace(/\s/g, '')
      compNumber++
      apiLength += string.length
      apiSize += stats.size
    }
  }
}

export const statistics = () => {
  findAllpage(demo)
  return {
    apiSize,
    apiLength,
    compNumber
  }
}
