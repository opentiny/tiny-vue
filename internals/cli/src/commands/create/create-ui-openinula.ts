/*
 * pnpm create:ui-openinula 新建组件，支持格式如下：
 *
 * pnpm create:ui-openinula alert  新建组件后，请及时测试，如果报错请根据报错内容做局部修改
 */
import path from 'node:path'
import fs from 'fs-extra'
import semver from 'semver'
import {
  walkFileTree,
  capitalizeKebabCase,
  logGreen,
  logYellow,
  templatePath,
  pathJoinFromCLI
} from '../../shared/utils'
import handlebarsRender from '../build/handlebars.render'
import { parse } from '@vue/compiler-sfc'
import { requireModules } from '../build/build-ui'

// 从renderless中获取组件API
function getApi(name) {
  const { api } = requireModules(`packages/renderless/src/${name}/vue`)
  let apiStr = JSON.stringify(api)
  apiStr = apiStr.replaceAll('"', '').replace('[', '').replace(']', '')
  return apiStr
}
// vue index中获取组件Props,该部分待完成
// function getProps(name) {
//     let path = pathJoinFromCLI('../../packages/vue/src/alert/src/index.ts')
//     let fileContent = fs.readFileSync(path, { encoding: 'utf8' })
//     // return props
// }
// 解析vue template部分
function vueToJSX(templateSource) {
  const { descriptor } = parse(templateSource)
  if (descriptor.template) {
    const ast = descriptor.template.ast
    const jsx = JSXFromAST(ast)
    return jsx
  } else {
    throw new Error('No template found in the source.')
  }
}
// 遍历Vue AST解析成符合openInula规范的组件模板 E:\tinyvue\tsconfig.vue3.json
function JSXFromAST(node) {
  let jsx = ''
  // If和For标记
  let tagName = ''
  let tagAttr = ''
  switch (node.type) {
    case 1: // Element
      if (node.props) {
        node.props.forEach((attr) => {
          if (attr.name === 'if') {
            tagName = 'If'
            tagAttr = ' v-if ={' + attr.exp.content + '}'
          }
          if (attr.name === 'for') {
            tagName = 'For'
            let list = attr.exp.content
            list = list.slice(list.indexOf('in ') + 3)
            tagAttr = ' list ={' + list + '}'
          }
          // class转换成className
          if (attr.name === 'class') {
            jsx += ' className="' + attr.value.content + '"'
          }
          // 含有:的动态属性添加大括号{},其中:class需要转换成className
          if (attr.name === 'bind') {
            if (attr.arg) {
              if (attr.arg.content === 'class') {
                jsx += ' className={vc(' + attr.exp.content + ')}'
              } else {
                jsx += ' ' + attr.arg.content + '={' + attr.exp.content + '}'
              }
            }
          }
          // 含有@的动态方法转添加on前缀
          if (attr.name === 'on') {
            // 有修饰符的exp可能为undefiend，修饰符待处理
            if (attr.exp) {
              jsx += ' on' + capitalizeKebabCase(attr.arg.content) + '={' + attr.exp.content + '}'
            }
          }
          // 含有model的处理
          // if (attr.name === 'model') {
          // }
        })
      }
      jsx = '<' + node.tag + jsx + '>'

      // 添加If和For外层包裹,前后添加换行符更好看
      if (tagName) {
        jsx = '\n<' + tagName + tagAttr + '>\n' + jsx
      }
      if (node.children) {
        node.children.forEach((child) => {
          jsx += JSXFromAST(child)
        })
      }
      jsx += '</' + node.tag + '>'
      // 添加If和For外层包裹
      if (tagName) {
        jsx += '\n</' + tagName + '>'
      }
      break
    case 2: // Text，此处多数是换行符
      jsx += node.content
      break
    case 3: // 注释
      jsx += node.loc.source
      break

    case 5: // 插值或组件内变量
      jsx += `{${node.content.content}}`
      break

    // 其他节点类型...
    default:
      // 处理其他节点类型或抛出错误
      logYellow(`======================node.type=${node.type}====================`)
      logYellow(node)
    // throw new Error('Unsupported node type: ' + node.type);
  }
  // 单独处理slot
  jsx = jsx.replace('<slot', '<Slot slots={props.slots}').replace('</slot>', '</Slot>')
  // 单独处理transition
  jsx = jsx.replace('transition', 'Transition')
  // 单独处理component组件
  jsx = jsx.replace('component', 'Component')

  // 最外层template标签替换成div并添加ref
  jsx = jsx.replace('<template>', '<div ref={ref}>').replace('</template>', '</div>')
  // windows下调整换行符
  jsx = jsx.replace('\n', '\r\n')
  return jsx
}

export async function createUi(names = []) {
  const templateDir = path.join(templatePath, './openinula')
  const componetDir = pathJoinFromCLI('../../packages/openinula/src')
  const vueComponetDir = pathJoinFromCLI('../../packages/vue/src')

  const { version } = fs.readJSONSync(pathJoinFromCLI('../../packages/openinula/package.json'))

  names.forEach((componentName) => {
    let componentPath = path.join(componetDir, componentName)
    let vueComponentPath = path.join(vueComponetDir, componentName, 'src')

    if (fs.existsSync(componentPath)) {
      logYellow(`The component name : ${componentName} is exist , please enter other name.`)
      return
    }
    // 获取API
    let api = getApi(componentName)
    // 定义不同模板内容
    let pcTemplate = ``
    let mobileTemplate = ``
    let mobileFirstTemplate = ``

    walkFileTree({
      isDeep: true,
      dirPath: vueComponentPath,
      callback({ file, subPath }) {
        // 判断是否是.vue文件，否则会出错
        if (file.split('.')[1] === 'vue') {
          let fileContent = fs.readFileSync(subPath, { encoding: 'utf8' })
          let content = vueToJSX(fileContent)

          if (file === 'pc.vue') {
            pcTemplate = content
          }
          if (file === 'mobile.vue') {
            mobileTemplate = content
          }
          if (file === 'mobile-first.vue') {
            mobileFirstTemplate = content
          }
        }
      }
    })

    walkFileTree({
      isDeep: true,
      dirPath: templateDir,
      callback({ file, subPath }) {
        let fileName = file
        // 每次遍历需要重置组件目录，否则会报错
        componentPath = path.join(componetDir, componentName)
        const isSrcDir = path.basename(path.dirname(subPath)) === 'src'
        if (isSrcDir) {
          componentPath = path.join(componentPath, 'src')
        }

        if (!fs.existsSync(componentPath)) {
          fs.mkdirSync(componentPath)
        }

        let template = ''
        if (file === 'pc.jsx') {
          template = pcTemplate
        }
        if (file === 'mobile.jsx') {
          template = mobileTemplate
        }
        if (file === 'mobile-first.jsx') {
          template = mobileFirstTemplate
        }

        let fileContent = fs.readFileSync(subPath, { encoding: 'utf8' })
        const upperComponentName = capitalizeKebabCase(componentName)

        // 编译模板
        fileContent = handlebarsRender({
          template: fileContent,
          data: {
            NAME: componentName,
            UNAME: upperComponentName,
            MINOR: semver.minor(version),
            SUFFIX: '',
            THEME: 'theme',
            TEMPLATE: template,
            API: api
          },
          delimiter: ['\\[\\[', '\\]\\]'],
          options: { noEscape: true }
        })
        componentPath = path.join(componentPath, fileName)
        fs.writeFileSync(componentPath, fileContent)
      }
    })

    logGreen('Create ui openinula done for ' + componentName)
  })
}
