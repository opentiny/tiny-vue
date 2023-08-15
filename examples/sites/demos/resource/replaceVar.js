// 实现新老变量替换
const fs = require('fs')
const originRootPath = './src' // 根路径
const path = require('path') // 读取json文件需引入path模块
const newVars = path.resolve(__dirname, 'newVars.json') // 引入newVars.json文件

const readFile = (statPath) => {
  fs.readFile(`${statPath}`, 'utf8', (err, dataStr) => {
    if (err) {
      throw new Error(err)
    }
    let idStr = dataStr
    // 进行主题变量替换
    let newTheme = fs.readFileSync(newVars, 'utf-8').toString()
    newTheme = JSON.parse(newTheme)
    for (let key in newTheme) {
      if (idStr.includes(key)) {
        if (Array.isArray(newTheme[key])) {
          // '需要手动替换的文件路径是', statPath, '需要手动替换的变量是', key
        } else {
          idStr = idStr.replace(new RegExp(key, 'g'), newTheme[key])
        }
      }
    }
    // 覆盖原来的less文件
    fs.writeFile(`${statPath}`, idStr, 'utf8', (err) => {
      if (err) {
        throw new Error(err)
      }
    })
  })
}

const mkStat = (upperPath, fileDir) => {
  const statPath = `${upperPath}/${fileDir}`
  fs.stat(statPath, (err, data) => {
    if (err) {
      throw new Error(err)
    }
    if (data.isDirectory()) {
      // 如果是目录，继续遍历
      traversalDir(statPath)
    } else {
      // 如果是文件直接进行替换操作
      readFile(statPath)
    }
  })
}

const traversalDir = (upperPath) => {
  // 读取目录
  fs.readdir(upperPath, (err, data) => {
    if (err) {
      throw new Error(err)
    }
    data.forEach((fileDir) => {
      // 判断是文件还是目录
      mkStat(upperPath, fileDir)
    })
  })
}

// 读取并遍历目录
traversalDir(originRootPath)
