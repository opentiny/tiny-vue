import fs from 'node:fs'

const originFilePath = 'vars.less'
const originRootPath = '../src/'
const outputPath1 = '../src'
const outputPath2 = '../dist'
const tokenList = {}
// 写入文件
export default () => {
  const writeFile = () => {
    // 生成文件内容（包含默认导出）
    const fileContent = `const list = ${JSON.stringify(tokenList, null, 2)};
  export default list;
  `

    // 写入文件
    fs.writeFileSync(`${outputPath1}/token.js`, fileContent, 'utf8')
    fs.writeFileSync(`${outputPath2}/token.js`, fileContent, 'utf8')
  }
  const parseVarsFile = (content) => {
    const lines = content.split('\n')
    const result = []
    let desc = ''
    let skipNext = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // 跳过分隔行
      if (line.startsWith('//-------') || line.startsWith('// -------')) {
        skipNext = true
      }

      // 处理描述行
      if (line.startsWith('//') && !skipNext) {
        desc = line.replace(/^\/\/\s*/, '')
      }

      // 处理变量行
      if (line.startsWith('--tv-')) {
        if (!desc) {
          desc = ''
          // eslint-disable-next-line no-console
          console.log(`Missing description for variable at line ${i + 1}: ${line}`)
        }

        // 分割变量名和值
        const [token, valuePart] = line.split(':').map((s) => s.trim())

        // 提取默认值
        let tokenValue = ''
        const tokenValueMatch = valuePart.match(/,\s*([^)]+)\)?/)

        if (tokenValueMatch) {
          // 处理带var()函数的情况
          tokenValue = tokenValueMatch[1]
        } else {
          // 处理直接赋值的情况
          tokenValue = valuePart.replace(/;.*$/, '')
        }

        // 清理默认值中的注释和分号
        tokenValue = tokenValue.split(';')[0].split('//')[0].trim()
        if (tokenValue.includes('rgba') || tokenValue.includes('rgb')) {
          tokenValue += ')'
        }

        // 添加到结果数组
        result.push({
          desc,
          token,
          tokenValue
        })

        // 重置描述
        desc = ''
      }

      // 重置跳过标志
      skipNext = false
    }

    return result
  }
  // 读取文件
  const readFile = (fileDir) => {
    const varsPath = `${originRootPath}/${fileDir}/${originFilePath}`
    try {
      const content = fs.readFileSync(varsPath, { encoding: 'utf-8' })
      return parseVarsFile(content)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.console.log(error)
      return []
    }
  }

  // 判断某目录下某文件是否存在
  const isFileExist = (fileDir) => {
    const path = `${originRootPath}/${fileDir}/${originFilePath}`
    try {
      const exist = fs.existsSync(path)
      if (exist) {
        return readFile(fileDir)
      }
      return []
    } catch (error) {
      // eslint-disable-next-line no-console
      console.console.log(error)
      return []
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
      return isFileExist(fileDir)
    }
  }

  // 读取目录
  const data = fs.readdirSync(originRootPath)
  data.forEach((fileDir) => {
    const fileTokens = mkStat(fileDir)
    if (fileTokens && fileTokens.length) {
      tokenList[fileDir] = fileTokens
    }
  })

  writeFile()
}
