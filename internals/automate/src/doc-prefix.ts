import fg from 'fast-glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from '@vue/compiler-sfc'
import { parse as babelParse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import * as prettier from 'prettier'
import { writeFile } from 'node:fs/promises'
import { safeReadFile } from './utils/files'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const docPath = path.join(__dirname, '../../../examples/sites/demos')

const generateTraverse = traverse.default

const addPrefix = async (code) => {
  const ast = babelParse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx']
  })

  const renameVar = {}
  generateTraverse(
    ast,
    {
      ImportDeclaration(path) {
        // 解析@opentiny/vue的引入
        const depName = path.node?.source?.value
        if (depName === '@opentiny/vue') {
          const specifiers = path.node.specifiers
          specifiers?.forEach((importSpecifier) => {
            const { local, imported } = importSpecifier
            if (local.name.startsWith('Tiny')) {
              if (!imported.name.startsWith('Tiny')) {
                imported.name = 'Tiny' + imported.name
              }
            } else {
              renameVar[local.name] = 'Tiny' + local.name
              local.name = 'Tiny' + local.name
              imported.name = 'Tiny' + imported.name
            }
          })
        }
      },
      Identifier(path) {
        const name = path.node.name
        // 不能用renameVar[name]代替，否则代码中包含原型链上方法会报错
        /* eslint-disable no-prototype-builtins */
        if (renameVar.hasOwnProperty(name)) {
          path.node.name = renameVar[name]
        }
        const parent = path.parentPath?.node
        if (parent.type === 'ObjectProperty') {
          const { key, value } = parent
          if (key.name === value.name) {
            parent.shorthand = true
          }
        }
      },
      ObjectProperty(path) {
        const node = path.node
        const { key, value } = node
        if (key.name === value.name) {
          node.shorthand = true
        }
      }
    },
    {}
  )
  let newCode

  newCode = generate.default(ast, { retainLines: true }).code || ''
  const formatCode = await prettier.format(newCode, {
    semi: false,
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'none',
    'printWidth': 120,
    'endOfLine': 'auto',
    'bracketSpacing': true,
    'jsxBracketSameLine': true
  })
  return formatCode
}

const getAttrsString = (attrs) => {
  let attrStr = ''
  if (!attrs) {
    return attrStr
  }

  Object.keys(attrs).forEach((key) => {
    const val = attrs[key]
    if (val === true) {
      attrStr += ` ${key}`
    } else {
      attrStr += ` ${key}="${val}"`
    }
  })
  return attrStr
}

const generateTagContent = (tagDescriptor) => {
  if (!tagDescriptor) {
    return ''
  }
  const { attrs, content, type } = tagDescriptor
  return `<${type}${getAttrsString(attrs)}>${content}</${type}>`
}

// 拼接完整的SFC文件
const generateSFC = (descriptor) => {
  const { script, scriptSetup, styles = [], template } = descriptor
  const contentArr = [
    generateTagContent(template),
    generateTagContent(script),
    generateTagContent(scriptSetup),
    ...styles.map(generateTagContent)
  ]
  return contentArr.filter((i) => i).join('\n\n') + '\n'
}

// 解析SFC文件，获取其中的script标签内容后转换
const transformSFC = async (code) => {
  const { descriptor } = parse(code)
  const { script, scriptSetup } = descriptor
  if (script) {
    script.content = '\n' + (await addPrefix(script.content)) || script.content
  }
  if (scriptSetup) {
    scriptSetup.content = '\n' + (await addPrefix(scriptSetup.content)) || scriptSetup.content
  }
  return generateSFC(descriptor)
}

const transformDemos = async () => {
  const demoFiles = await fg(['**/*.vue'], {
    dot: true,
    cwd: docPath,
    ignore: ['**/node_modules', '__test__']
  })

  let handelResolve

  const len = demoFiles.length
  let finishNum = 0
  const promise = new Promise((resolve) => {
    handelResolve = resolve
  })

  demoFiles.forEach(async (filename, index) => {
    if (index >= len) return
    const filePath = path.join(docPath, filename)
    const fileContent = await safeReadFile(filePath)
    const newContent = await transformSFC(fileContent)
    await writeFile(filePath, newContent)
    ++finishNum
    if (finishNum === len) {
      handelResolve(finishNum)
    }
  })
  return promise
}

transformDemos().then((finishNum) => {
  /* eslint-disable no-console */
  console.log(`${finishNum}个demos组件添加Tiny前缀任务完成`)
})
