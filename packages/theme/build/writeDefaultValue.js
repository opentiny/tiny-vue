import fs from 'node:fs'
import { mapVar } from './mapVar.js'

const originFilePath = 'vars.less'
const originRootPath = '../src/'

export default () => {
  // 写入文件
  const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, data)
  }

  const findTrueValue = (defaultValue) => {
    if (defaultValue.includes('var(')) {
      let subVar = defaultValue.replace(/var\((\S+)\)/g, (subOldVar, subBaseVar) => {
        let subDefaultValue = mapVar[subBaseVar]
        if (!subDefaultValue) {
          return subOldVar
        }

        return findTrueValue(subDefaultValue)
      })

      if (subVar.includes('calc(')) {
        subVar = subVar.replace('calc(', '').replace(')', '').replace('px', '')
        subVar = eval(subVar) + 'px'
      }

      return subVar
    }
    return defaultValue
  }

  // 读取文件
  const readFile = (fileDir) => {
    const varsPath = `${originRootPath}/${fileDir}/${originFilePath}`

    const dataStr = fs.readFileSync(varsPath, { encoding: 'utf-8' })

    const newDataStr = dataStr.replace(/var\(([\w\-]+\s?\w*)\)/g, (oldVar, baseVar1, numLine) => {
      const baseVar = baseVar1.split(',')[0]
      let defaultValue = mapVar[baseVar]
      if (!defaultValue) {
        return oldVar
      }

      defaultValue = findTrueValue(defaultValue)
      const newVar = oldVar.replace(baseVar1, `${baseVar}, ${defaultValue}`)
      return newVar
    })
    writeFile(varsPath, newDataStr)
  }

  // 判断某目录下某文件是否存在
  const isFileExist = (fileDir) => {
    const path = `${originRootPath}/${fileDir}/${originFilePath}`
    const exist = fs.existsSync(path)
    if (exist) {
      readFile(fileDir)
    }
  }

  // 判断是文件还是目录
  const mkStat = (fileDir) => {
    if (fileDir === 'base') {
      return
    }
    const statPath = `${originRootPath}/${fileDir}`
    const data = fs.statSync(statPath)
    // 如果是目录
    // 则判断是否存在某文件
    if (data.isDirectory()) {
      isFileExist(fileDir)
    }
  }

  // 读取目录
  const data = fs.readdirSync(originRootPath)
  data.forEach((fileDir) => {
    mkStat(fileDir)
  })
}
