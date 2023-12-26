import path from 'node:path'
import fs from 'node:fs'

const demoPath = path.resolve('../../examples/sites/demos/pc/app')

// 解析文档中的内容
function resolveDocInfo(name) {
  let demoFiles: string[] = []
  let useDemoFiles: string[] = []
  let demoMap = {}
  let apiConfig = {}

  const componentPath = path.join(demoPath, name)
  const docJsPath = path.join(componentPath, `webdoc/${name}.js`)
  const content = fs.readFileSync(docJsPath, { encoding: 'utf8' })
  // eslint-disable-next-line no-eval
  const rawConfig = eval('(' + content.slice(15) + ')')
  apiConfig = rawConfig.apis

  // grid和chart需要特殊处理
  if (['grid', 'chart'].includes(name)) {
    let demos = []
    const dirArr = scanDir(componentPath, 'dir')
    dirArr.forEach((dirName) => {
      const filenameArr: string[] = scanDir(path.join(componentPath, dirName))
        .filter((name: string) => name.endsWith('.vue'))
        .map((i) => `${dirName}/${i}`)
      demoFiles = demoFiles.concat(filenameArr)
    })
    const docsArr = scanDir(path.join(componentPath, 'webdoc')).filter((i: string) => i.endsWith('.js'))
    docsArr.forEach((docName: string) => {
      const docPath = path.join(componentPath, 'webdoc', docName)
      const docContent = fs.readFileSync(docPath, { encoding: 'utf8' })
      // eslint-disable-next-line no-eval
      const docConfig = eval('(' + docContent.slice(15) + ')')
      demos = demos.concat(
        docConfig.demos.map((item) => ({
          ...item,
          demoId: `${docName.replace('.js', '')}#${item.demoId}`
        }))
      )
      demos.forEach((item) => {
        const { codeFiles, demoId } = item
        const filename = codeFiles[0]
        demoMap[demoId] = filename
        useDemoFiles.push(filename)
      })
    })
  } else {
    const { demos } = rawConfig
    demos.forEach((item) => {
      const { codeFiles, demoId } = item
      const filename = codeFiles[0]
      demoMap[demoId] = filename
      useDemoFiles.push(filename)
    })

    demoFiles = scanDir(componentPath).filter((name) => name.endsWith('.vue'))
  }
  return { demoFiles, useDemoFiles, demoMap, apiConfig }
}

// 遍历demo文件夹
function scanDir(dirPath, getTarget = 'file') {
  const dirArr: string[] = []
  const dirs = fs.readdirSync(dirPath)
  dirs.forEach((name: string) => {
    const info = fs.statSync(path.join(dirPath, name))
    const isDir = info.isDirectory()
    if (getTarget === 'all') {
      dirArr.push(name)
    } else if (isDir && getTarget === 'dir') {
      dirArr.push(name)
    } else if (!isDir && getTarget === 'file') {
      dirArr.push(name)
    }
  })
  return dirArr
}

// 统计没有被使用到demo
function statNotUseFile(docInfo) {
  const { demoFiles, useDemoFiles } = docInfo
  return demoFiles
    .filter((name) => !name.endsWith('composition-api.vue'))
    .filter((filename) => !useDemoFiles.includes(filename))
}

function hasAttribute(attr, content, key) {
  if (attr === 'props') {
    if (key.includes('/')) {
      const arr = key.split('/')
      return content.includes(`${arr[0]}`) || content.includes(`${arr[1]}`)
    }
    return content.includes(`${key}`)
  } else if (attr === 'events') {
    return content.includes(`@${key}`)
  } else if (attr === 'methods') {
    return content.includes(`.${key}`)
  } else if (attr === 'slots') {
    if (key === 'default') {
      return true
    } else {
      return content.includes(`#${key}`) || content.includes(`v-slot:${key}`)
    }
  }
}

// 检测对应属性
function checkAttribute({ docInfo, componentName, apiItem, attr, resultArr }) {
  apiItem[attr].forEach((item) => {
    const { name, demoId } = item
    if (!demoId) {
      return
    }
    const { demoMap } = docInfo
    const filename = demoMap[demoId]
    if (!filename) {
      return resultArr.push(`${attr}：\`${name}\` 对应的demoId：\`${demoId}\`未在文档中定义`)
    }
    const demoFile = path.join(demoPath, componentName, filename)
    const compositionFile = demoFile.replace('.vue', '-composition-api.vue')
    if (!fs.existsSync(demoFile)) {
      return resultArr.push(`${attr}：\`${name}\` 对应的demoId：\`${demoId}\`未找到对应demo文件：\`${filename}\``)
    }
    if (!fs.existsSync(compositionFile)) {
      return resultArr.push(
        `\`${attr}：${name}\`demoId：\`${demoId}\`未找到对应demo文件：\`${filename.replace(
          '.vue',
          '-composition-api.vue'
        )}\``
      )
    }
    const content = fs.readFileSync(demoFile, { encoding: 'utf-8' })
    if (!hasAttribute(attr, content, name)) {
      resultArr.push(`\`${filename}\` 文件中没有对应${attr}: \`${name}\``)
    }
    const compositionContent = fs.readFileSync(compositionFile, { encoding: 'utf-8' })
    if (!hasAttribute(attr, compositionContent, name)) {
      resultArr.push(`\`${filename.replace('.vue', '-composition-api.vue')}\` 文件中没有对应${attr}: \`${name}\``)
    }
  })
}

// 统计demo中没有对应的api描述
function statNotMatchDemo(docInfo, componentName) {
  const result: any = {
    invalidField: [],
    notMatchPropsDemos: [],
    notMatchEventsDemos: [],
    notMatchMethodsDemos: [],
    notMatchSlotsDemos: []
  }
  const validField = ['name', 'type', 'props', 'events', 'methods', 'slots']
  const { apiConfig } = docInfo

  apiConfig.forEach((apiItem) => {
    Object.keys(apiItem).forEach((key) => {
      if (!validField.includes(key)) {
        result.invalidField.push(key)
      }
    })
    const { props, events, methods, slots } = apiItem
    if (props) {
      checkAttribute({ docInfo, componentName, apiItem, attr: 'props', resultArr: result.notMatchPropsDemos })
    }
    if (events) {
      checkAttribute({ docInfo, componentName, apiItem, attr: 'events', resultArr: result.notMatchEventsDemos })
    }
    if (methods) {
      checkAttribute({ docInfo, componentName, apiItem, attr: 'methods', resultArr: result.notMatchMethodsDemos })
    }
    if (slots) {
      checkAttribute({ docInfo, componentName, apiItem, attr: 'slots', resultArr: result.notMatchSlotsDemos })
    }
  })

  // 清空空数据
  Object.keys(result).forEach((key) => {
    if (result[key].length === 0) {
      delete result[key]
    }
  })
  return result
}

// 输出结果
function writeResult(statResult) {
  const writeItem = (item) => {
    let str = ''
    const {
      notUseFile,
      invalidField,
      notMatchPropsDemos,
      notMatchEventsDemos,
      notMatchMethodsDemos,
      notMatchSlotsDemos
    } = item
    if (notUseFile) {
      str += `- 未使用的demo文件：\`${notUseFile.join('` 、`')}\`\n`
    }
    if (invalidField) {
      str += `- 文档中存在不合法字段：\`${invalidField.join('` 、`')}\`\n`
    }
    if (notMatchPropsDemos) {
      notMatchPropsDemos.forEach((i) => (str += `- ${i} \n`))
    }
    if (notMatchEventsDemos) {
      notMatchEventsDemos.forEach((i) => (str += `- ${i} \n`))
    }
    if (notMatchMethodsDemos) {
      notMatchMethodsDemos.forEach((i) => (str += `- ${i} \n`))
    }
    if (notMatchSlotsDemos) {
      notMatchSlotsDemos.forEach((i) => (str += `- ${i} \n`))
    }
    return str
  }

  const resultStr = Object.keys(statResult)
    .map((key) => {
      const item = statResult[key]
      return `## ${key} 组件\n
${writeItem(item)}`
    })
    .join('\n')
  fs.writeFileSync(
    './scan-result.md',
    `# 文档整改\n
${resultStr}`
  )
}

// 统计信息
function statistic() {
  const statResult = {}
  const dirArr = scanDir(demoPath, 'dir')

  dirArr.forEach((componentName) => {
    const docInfo = resolveDocInfo(componentName)
    const notUseFile = statNotUseFile(docInfo)
    if (notUseFile.length > 0) {
      statResult[componentName] = {
        notUseFile
      }
    }

    const notMatch = statNotMatchDemo(docInfo, componentName)
    if (Object.keys(notMatch).length > 0) {
      statResult[componentName] = {
        ...statResult[componentName],
        ...notMatch
      }
    }
  })

  writeResult(statResult)
}

statistic()
