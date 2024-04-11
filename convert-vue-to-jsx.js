const fs = require('node:fs')
const path = require('node:path')
const { parse } = require('@vue/compiler-sfc')
const fse = require('fs-extra')

// Vue文件都在这个目录下
const vueFilesDir = './packages/vue/src'
// 转换后的JSX文件将保存在这个目录下
const jsxFilesDir = './packages/react-components'
function convertWord(str, first) {
  if (!str) return str
  const arr = str.split('-')
  let result = str
  if (arr[1]) {
    result = arr[0] + String(arr[1][0]).toLocaleUpperCase() + arr[1].slice(1)
  }
  if (first) result = String(result[0]).toLocaleUpperCase() + result.slice(1)
  return result
}
function uniqueArray(arr) {
  return Array.from(new Set(arr))
}

function extractPropNames(str) {
  const lines = str.split('\n')
  let inProps = false
  const symbolTable = []
  const props = []
  let returnObj = null
  for (const line of lines) {
    const trimmedLine = line.trim()
    if (!trimmedLine) continue
    if (trimmedLine === 'props: {') {
      symbolTable.push('{')
      inProps = true
    } else if (inProps) {
      if (!trimmedLine.includes('{') && !trimmedLine.includes('}') && symbolTable.length === 1) {
        if (trimmedLine.includes('...props') || trimmedLine.includes('...$props') || trimmedLine.includes('//')) {
          continue
        }
        // console.log(trimmedLine, symbolTable, str, 'str')
        const exec = /([a-z_][a-zA-Z0-9]*)[/:]/.exec(trimmedLine)
        props.push(exec[1])
      } else {
        if (trimmedLine.includes('{') && !trimmedLine.includes('}')) {
          symbolTable.push('{')
          if (returnObj) {
            continue
          }
          if (trimmedLine.includes('return')) {
            returnObj = { index: symbolTable.length }
          }
          if (trimmedLine.includes('validator(') || !trimmedLine.includes(':')) {
            continue
          }
          console.log(trimmedLine, symbolTable, str, 'str')
          const exec = /([a-z_][a-zA-Z0-9]*)[/:]/.exec(trimmedLine)
          props.push(exec[1])
        }
        if (trimmedLine.includes('}') && !trimmedLine.includes('{')) {
          if (symbolTable.length > 0 && symbolTable.slice(-1)[0] === '{') {
            symbolTable.pop()
            if (returnObj && symbolTable.length === returnObj.index) {
              returnObj = null
            }
            if (symbolTable.length === 0) {
              inProps = false
              break
            }
          } else {
            inProps = false
            break
          }
        }
      }
    }
  }
  return props
}

// 将Vue组件转换为JSX的函数
function convertVueToJSX(vueFilePath, reactFilePath, componentName) {
  const vueContent = fs.readFileSync(vueFilePath, 'utf-8')
  const { template, script } = parse(vueContent).descriptor
  let code = ''
  let refs = []
  let events = []
  if (template) {
    code = astToJSX(template.ast, refs, events)
    refs = uniqueArray(refs)
    events = uniqueArray(events)
  }
  const regex = /props:\s*\[([^\]]*)\]/

  const match = script?.content.match(regex)
  let props = []
  if (match) {
    props = match[1]
      .trim()
      .replace(/'/g, '')
      .replace(/,/g, '')
      .replace(/\n/g, '')
      .split(' ')
      .filter((item) => item && item !== '...props')
  }
  if (script) {
    if (props.length === 0) {
      if (!script?.content.includes('props')) {
        props = []
      } else {
        props = extractPropNames(script.content)
      }
    }
  }

  const str = refs.length > 0 ? refs.map((item) => `const ${item}=useRef()`).join('\n') : ''

  // 构造React组件的基本结构
  const reactComponent = `
    import { renderless, api } from '@opentiny/vue-renderless/${componentName}/vue'
    import '@opentiny/vue-theme/${componentName}/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function ${convertWord(path.basename(componentName, '.vue'))}(props) {
      const {${props.join(',')}} = props
      const defaultProps = {
        ...$props,
        ...props,
        ${props.join(',')}
      }
      const { ref, current: vm, parent } = useVm()
      ${str}
      const { state,${events.join(',')} } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[${refs.join(',')}]
      })
      return (
        ${code}
      );
    }
    `

  // 写入JSX文件
  fs.writeFileSync(reactFilePath, reactComponent)
}

// 定义一个函数，用于将AST节点转换成JSX代码
function astToJSX(node, refs = [], events = [], ifArr = []) {
  // 如果节点类型为文本节点，则直接返回文本内容
  if (node.type === 2) {
    return node.content
  }
  if (node.type === 5) {
    return `{${node.content.content}}`
  }
  // 如果节点为元素节点
  if (node.type === 1) {
    let forAStr = ''
    let className = ''
    // 生成标签的属性代码
    let props = node.props
      .map((prop) => {
        if (prop.name === 'bind') {
          const exp = prop.exp
          const arg = prop.arg
          if (exp.isStatic && arg.isStatic) return `${arg.content}="${exp.content}"`
          else if (!exp.isStatic) {
            if (arg?.content === 'class') {
              if (exp.content.startsWith('[') || exp.content.startsWith('{')) {
                if (className) className = `vc(${exp.content},'${className}'`
                else className = `vc(${exp.content}`

                return ''
              } else {
                if (className) className = `vc([${exp.content},'${className}]'`
                else className = `vc([${exp.content}`

                // className = handleClass(className, exp.content)
                return ''
              }
            } else if (!arg) {
              return exp.content
            }
            return `${arg.content}={${exp.content}}`
          }
        } else if (prop.name === 'class') {
          className = handleClass(className, prop.value.content)

          return ''
        } else if (prop.name === 'if' || prop.name === 'show') {
          const exp = prop.exp
          if (!exp) return ''
          if (prop.name === 'if') {
            ifArr.push(exp.content)
          }
          return `style={{display:${exp.content}?'block':'none'}}`
        } else if (prop.name === 'else' || prop.name === 'else-if') {
          let content = ifArr.slice(-1)?.[0]
          ifArr.push(`!(${content})`)
          return `style={{display:!(${content})?'block':'none'}}`
        } else if (prop.name === 'model') {
          const exp = prop.exp
          return `value={${exp.content}} onChange={(e)=>${exp.content} = e.value}`
        } else if (prop.name === 'on') {
          const exp = prop.exp
          const arg = prop.arg
          if (!exp) return ''
          if (!exp.content.includes('=') && !exp.content.includes('$emit')) {
            let index = exp.content.indexOf('(')
            if (index > -1) {
              events.push(exp.content.slice(0, index))
            } else events.push(exp.content)
          }
          if (!arg) {
            return `{...${exp.content}}`
          }
          return `${convertWord('on-' + arg.content)}={${exp.content}}`
        } else if (prop.name === 'for') {
          if (!prop.exp?.content) {
            return prop.loc.source
          }
          forAStr = prop.exp.content
          return ''
        } else {
          if (prop.name === 'ref') {
            refs.push(prop.value?.content)
            return `ref={${prop.value?.content}} v-ref="${prop.value?.content}"`
          }
          if (prop.value) return `${prop.name}="${prop.value.content}"`
          return prop.name
        }
        return ''
      })
      .join(' ')
    // 递归处理子节点
    const children = node.children.map((child) => astToJSX(child, refs, events, ifArr)).join('\n')
    let tag = node.tag
    if (tag === 'template' && !props.trim()) {
      return children
    }
    if (node.tag === 'slot') {
      props += ` parent_children={props.children} slots={props.slots}`
      tag = 'Slot'
    } else if (node.tag === 'component') {
      tag = 'Component'
    } else {
      tag = convertWord(tag)
    }
    if (className && className.includes('vc')) {
      className = `className={${className})}`
      props += ' '
      props += className
    } else if (className) {
      className = `className="${className}"`
      props += ' '
      props += className
    }
    if (forAStr) {
      const arr = forAStr.split(' in ')
      return `
  {
    ${arr[1]}.map(${arr[0]}=>(
      <${tag} ${props}>${children}</${tag}>
    ))
  }
  `
    }
    // 生成包含属性和子节点的标签代码
    return `<${tag} ${props}>${children}</${tag}>`
  }
}
function handleClass(className, content) {
  if (className) {
    if (className.includes('vc')) {
      className = `${className},'${content}'`
    } else {
      className += ` ${content}`
    }
  } else {
    className = content
  }
  return className
}

// 更新package.json
function updatePackageJson(componentName) {
  const vuePackageJsonPath = path.join(vueFilesDir, componentName, 'package.json')
  const reactPackageJsonPath = path.join(jsxFilesDir, componentName, 'package.json')

  if (fs.existsSync(vuePackageJsonPath)) {
    const vuePackageJson = JSON.parse(fs.readFileSync(vuePackageJsonPath, 'utf-8'))
    const reactPackageJson = {
      name: vuePackageJson.name.replace('vue', 'react'),
      devDependencies: {},
      scripts: {},
      dependencies: Object.entries(vuePackageJson.dependencies).reduce((acc, [depName, depVersion]) => {
        let arr = ['@opentiny/vue-renderless', '@opentiny/vue-theme', '@opentiny/vue-theme-mobile']
        if (depName.startsWith('@opentiny/vue-') && !arr.includes(depName)) {
          acc[`@opentiny/react${depName.slice(13)}`] = depVersion
        } else {
          acc[depName] = depVersion
        }
        return acc
      }, {})
    }

    fs.writeFileSync(reactPackageJsonPath, JSON.stringify(reactPackageJson, null, 2))
  }
}

// 更新index.ts文件的函数
function updateIndexTs(componentName) {
  const reactIndexTsPath = path.join(jsxFilesDir, componentName, 'index.ts')

  const reactIndexTsContent = `import ${convertWord(componentName, true)} from './src/index'\nimport '@opentiny/vue-theme/${componentName}/index.less'\n\nexport default ${convertWord(componentName, true)}`

  fs.writeFileSync(reactIndexTsPath, reactIndexTsContent)
}
// 主函数：处理转换逻辑
function convertVueComponentsToReact(componentName) {
  // 确保react组件目录存在
  if (!fs.existsSync(jsxFilesDir)) {
    fs.mkdirSync(jsxFilesDir, { recursive: true })
  }
  // 获取Vue组件目录列表
  const vueComponentDirs = fs.readdirSync(vueFilesDir)

  // 如果指定了组件名称，则只转换该组件
  if (componentName) {
    // 目前先不处理图表和表格
    if (componentName.includes('chart') || componentName.includes('gird')) {
      return
    }
    const vueComponentDir = path.join(vueFilesDir, componentName)
    const reactComponentDir = path.join(jsxFilesDir, componentName)
    if (!fs.existsSync(reactComponentDir)) fs.mkdirSync(reactComponentDir, { recursive: true })

    // 确保Vue组件目录存在
    if (fs.existsSync(vueComponentDir)) {
      // 处理非.vue文件到目标目录
      updatePackageJson(componentName)

      // 获取src目录路径
      const vueSrcDir = path.join(vueComponentDir, 'src')
      const reactSrcDir = path.join(reactComponentDir, 'src')

      // 确保src目录存在
      if (!fs.existsSync(reactSrcDir)) {
        fs.mkdirSync(reactSrcDir, { recursive: true })
      }
      updateIndexTs(componentName)
      if (!fs.existsSync(vueSrcDir)) return
      // 遍历Vue文件并生成JSX文件
      const vueFiles = fs.readdirSync(vueSrcDir)
      const vueFilesName = []
      vueFiles.forEach((vueFile) => {
        const vueFilePath = path.join(vueSrcDir, vueFile)
        const reactFilePath = path.join(reactSrcDir, vueFile)
        if (vueFile.endsWith('.vue')) {
          if (['mobile.vue', 'mobile-first.vue', 'pc.vue'].includes(vueFile)) vueFilesName.push(vueFile.split('.')[0])
          const jsxFilePath = path.join(reactSrcDir, vueFile.replace(/\.vue$/, '.jsx'))
          convertVueToJSX(vueFilePath, jsxFilePath, componentName)
        } else if (vueFile === 'index.ts') {
          // 处理index.ts文件
        } else {
          copyNonVueFiles(vueFilePath, reactFilePath)
        }
      })
      const code = `
      ${vueFilesName.map((item) => `import ${convertWord(item)} from './${item}'`).join('\n')}
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          ${vueFilesName.map((item) => `'${item}':${convertWord(item)}`).join(',')}
        }[tiny_mode]
      
        return S(props)
      }
      
      `
      fs.writeFileSync(path.join(reactSrcDir, 'index.ts'), code)
    }
  } else {
    // 如果没有指定组件名称，则转换所有组件
    vueComponentDirs.forEach((vueComponent) => {
      convertVueComponentsToReact(vueComponent)
    })
  }
}
async function copyNonVueFiles(sourceDir, targetDir) {
  // 确保sourceDir是字符串类型
  if (typeof sourceDir !== 'string') {
    throw new TypeError('sourceDir must be a string')
  }
  // 确保targetDir是字符串类型
  if (typeof targetDir !== 'string') {
    throw new TypeError('targetDir must be a string')
  }

  // 读取sourceDir的stats信息
  const stats = await fse.stat(sourceDir)

  // 如果sourceDir是文件，则直接复制（排除.vue文件）
  if (stats.isFile()) {
    const extname = path.extname(sourceDir)
    if (extname !== '.vue') {
      await fse.copy(sourceDir, targetDir)
    }
  }
  // 如果sourceDir是文件夹，则递归复制其中的非.vue文件
  else if (stats.isDirectory()) {
    const files = await fse.readdir(sourceDir)
    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file)
      const targetFilePath = path.join(targetDir, file)

      // 如果是文件夹，递归调用copyNonVueFiles
      const fileStats = await fse.stat(sourceFilePath)
      if (fileStats.isDirectory()) {
        // 如果目标文件夹不存在，则创建
        await fse.mkdirp(targetFilePath)
        // 递归复制子文件夹
        await copyNonVueFiles(sourceFilePath, targetFilePath)
      }
      // 如果是文件，并且不是.vue文件，则复制
      else if (fileStats.isFile() && path.extname(file) !== '.vue') {
        await fse.copy(sourceFilePath, targetFilePath)
      }
    }
  } else {
    throw new Error('sourceDir is not a file or directory')
  }
}
// 运行脚本
if (process.argv.length > 2) {
  const componentName = process.argv[2]
  convertVueComponentsToReact(componentName)
} else {
  convertVueComponentsToReact()
}
