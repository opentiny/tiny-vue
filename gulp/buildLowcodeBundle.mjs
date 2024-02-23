import gulp from 'gulp'
import minimist from 'minimist'
import shell from 'shelljs'
import path from 'path'
import { generateKey } from 'crypto'

const build = gulp.series(init, read, write, clean)
build.description = '将本地文档的组件api, 转换为低代码需要的bundle.json 格式'
build.flags = {
  '--apiPath': '设置api文档路径，默认为： examples/sites/demos/pc',
  '--tinyVer': '设置生成中，tinyVer的版本号，默认为 3.11.0'
}
export default build

const rootPath = process.cwd()
let apiPath = 'examples/sites/demos/pc'
let tinyVer = '3.11.0'
let guid = 1
let menus = []

const ignoreKeys = ['color', 'font', 'icon']
const mixinKeys = {
  'form': [{ key: 'form-item', nameCn: '表单项', desc: '表单中的一行表单域对象' }],
  'layout': [
    { key: 'row', nameCn: '行元素', desc: '行元素' },
    { key: 'col', nameCn: '列元素', desc: '列元素' }
  ],
  'breadcrumb': [{ key: 'breadcrumb-item', nameCn: '面包屑项', desc: '面包屑的层级对象' }],
  'timeline': [{ key: 'timeline-item', nameCn: '时间线数据项', desc: '时间线数据项' }],
  'dropdown': [
    { key: 'dropdown-menu', nameCn: '下拉菜单', desc: '下拉菜单' },
    { key: 'dropdown-item', nameCn: '下拉菜单项', desc: '下拉菜单项' }
  ],
  'carousel': [{ key: 'carousel-item', nameCn: '走马灯数据项', desc: '走马灯数据项' }],
  'checkbox': [
    { key: 'checkbox-group', nameCn: '复选框组', desc: '复选框组' },
    { key: 'checkbox-button', nameCn: '复选框按钮', desc: '复选框按钮' }
  ],
  'radio': [
    { key: 'radio-group', nameCn: '单选框组', desc: '单选框组' },
    { key: 'radio-button', nameCn: '单选框按钮', desc: '单选框按钮' }
  ],
  'grid': [
    { key: 'grid-column', nameCn: '表格列对象', desc: '表格列对象' },
    { key: 'grid-toolbar', nameCn: '表格工具栏', desc: '表格工具栏' }
  ]
}

const result = {
  'data': {
    'framework': 'Vue',
    'materials': {
      'components': [],
      'snippets': [],
      'blocks': []
    }
  }
}

// 1. 初始化
function init(cb) {
  const argv = minimist(process.argv.slice(2))
  if (argv.apiPath) {
    apiPath = argv.apiPath
  }
  if (argv.tinyVer) {
    tinyVer = argv.tinyVer
  }

  // 读菜单
  shell.cp(path.join(apiPath, '/menus.js'), 'gulp/menus.mjs')
  shell.sed('-i', 'import.meta.env.VITE_BUILD_TARGET', 'false', 'gulp/menus.mjs')
  import('./menus.mjs').then((res) => {
    menus = res.cmpMenus
    cb()
  })
}

// 2. 遍历菜单，处理每一个组件
function read(cb) {
  menus.forEach((group) => {
    const snippetItem = {
      'group': group.label,
      'children': []
    }
    group.children.forEach((component) => {
      if (ignoreKeys.includes(component.key)) {
        return
      }
      if (component.key.startsWith('grid-') || component.key.startsWith('chart-')) {
        return
      }

      const componentInfo = _readOneComp(component)
      const componentItem = genComp(componentInfo)
      const snipItem = genSnip(componentInfo)

      result.data.materials.components.push(componentItem)
      snippetItem.children.push(snipItem)

      // 特殊的混合组件判断, 比如遍历到form时，要插入 form-item的定义
      if (mixinKeys[component.key]) {
        mixinKeys[component.key].forEach((mixin) => {
          const componentInfo = _readOneComp(component, mixin)
          const componentItem = genComp(componentInfo)
          const snipItem = genSnip(componentInfo)

          result.data.materials.components.push(componentItem)
          snippetItem.children.push(snipItem)
        })
      }
    })
    result.data.materials.snippets.push(snippetItem)
  })
  cb()
}

function _readOneComp(component, mixin = '') {
  if (!mixin) {
    shell.echo('---正在读取组件', component.key)
    const key = component.key
    const camelizeKey = camelize(key)
    const cmpName = component.nameCn
    const desc = readMdDesc(key)
    const jsStr = shell.cat(`${apiPath}/app/${key}/webdoc/${key}.js`).replace('export default', '(') + ')'
    const api = eval(jsStr).apis.filter((item) => item.name === key)[0]
    const props = api?.props || api?.properties || []
    const events = api?.events || []
    const slots = api?.slots || []
    guid++
    const componentInfo = { id: guid, version: tinyVer, key, camelizeKey, cmpName, desc, props, events, slots }

    return componentInfo
  } else {
    shell.echo('---正在读取混入的组件', component.key, mixin.key)
    const key = mixin.key
    const camelizeKey = camelize(key)
    const cmpName = mixin.nameCn
    const desc = mixin.desc
    const jsStr =
      shell.cat(`${apiPath}/app/${component.key}/webdoc/${component.key}.js`).replace('export default', '(') + ')'
    const api = eval(jsStr).apis.filter((item) => item.name === mixin.key)[0]
    const props = api?.props || api?.properties || []
    const events = api?.events || []
    const slots = api?.slots || []
    guid++
    const componentInfo = { id: guid, version: tinyVer, key, camelizeKey, cmpName, desc, props, events, slots }

    return componentInfo
  }
}
// 3. 将结果写bundle.json
function write(cb) {
  shell.ShellString(JSON.stringify(result, null, '  ')).to('gulp/bundle.json')
  cb()
}

// 4. 清除
function clean(cb) {
  shell.rm('gulp/menus.mjs')
  cb()
}

// 以下辅助方法

// 转换：button-group ==> ButtonGroup
const camelize = (str) => {
  return str
    .replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}
// 从标签中，提取文字。 <div>常用的操作按钮。</div> ==> 常用的操作按钮。
const readMdDesc = (key) => {
  const mdStr = shell.cat(`${apiPath}/app/${key}/webdoc/${key}.cn.md`)
  const matched = mdStr.match(/<div>([\w|\s|\u4e00-\u9fa5]*)<\/div>/i)
  return matched ? matched[1] || '' : ''
}
const genComp = ({ id, version, key, camelizeKey, cmpName, desc, props, events, slots }) => {
  const item = {
    'id': id,
    'version': version,
    'name': {
      'zh_CN': cmpName
    },
    'component': 'Tiny' + camelizeKey,
    'icon': '',
    'description': desc,
    'doc_url': '',
    'screenshot': '',
    'tags': '',
    'keywords': '',
    'dev_mode': 'proCode',
    'npm': {
      'package': '@opentiny/vue',
      'exportName': camelizeKey,
      'version': version,
      'destructuring': true
    },
    'group': 'component',
    'configure': {
      'loop': true,
      'condition': true,
      'styles': true,
      'isContainer': false,
      'isModal': false,
      'nestingRule': {
        'childWhitelist': '',
        'parentWhitelist': '',
        'descendantBlacklist': '',
        'ancestorWhitelist': ''
      },
      'isNullNode': false,
      'isLayout': false,
      'rootSelector': '',
      'shortcuts': {
        'properties': []
      },
      'contextMenu': {
        'actions': [],
        'disable': []
      },
      'framework': 'Vue'
    },
    'schema': {
      'properties': [
        {
          'label': {
            'zh_CN': '基础信息'
          },
          'description': {
            'zh_CN': '基础信息'
          },
          'collapse': {
            'number': 6,
            'text': {
              'zh_CN': '显示更多'
            }
          },
          'content': props.map((prop) => genProp(prop))
        }
      ],
      'events': {
        ...events.map((event) => genEvent(event)).reduce((pre, curr) => ({ ...pre, ...curr }), {})
      },
      'slots': {
        ...slots.map((slot) => genSlot(slot)).reduce((pre, curr) => ({ ...pre, ...curr }), {})
      }
    }
  }

  return item
}

const genProp = ({ name, type, defaultValue, desc }) => {
  const typeMap = {
    string: {
      component: 'MetaInput',
      props: {}
    },
    boolean: {
      component: 'MetaSwitch',
      props: {}
    },
    number: {
      component: 'MetaNumberic',
      props: {}
    },
    object: {
      component: 'MetaCodeEditor',
      props: {
        language: 'json'
      }
    },
    array: {
      component: 'MetaCodeEditor',
      props: {
        language: 'json'
      }
    },
    function: {
      component: 'MetaCodeEditor',
      props: {
        language: 'javascript'
      }
    }
  }
  const normalizeType = type.trim().toLowerCase()

  return {
    'property': name,
    'type': type,
    'defaultValue': defaultValue == '--' ? '' : defaultValue,
    'label': {
      'text': {
        'zh_CN': desc['zh-CN']
      }
    },
    'cols': 12,
    'rules': [],
    'hidden': false,
    'required': true,
    'readOnly': true,
    'disabled': true,
    'widget': typeMap[normalizeType]
      ? typeMap[normalizeType] //
      : { 'component': '', 'props': {} },
    'description': {
      'zh_CN': desc['zh-CN']
    }
  }
}
const genEvent = ({ name, type, defaultValue, desc }) => {
  return {
    ['on' + camelize(name)]: {
      'label': {
        'zh_CN': desc['zh-CN']
      },
      'description': {
        'zh_CN': desc['zh-CN']
      },
      'type': 'event',
      'functionInfo': {
        'params': [],
        'returns': {}
      },
      'defaultValue': ''
    }
  }
}
const genSlot = ({ name, type, defaultValue, desc }) => {
  return {
    [name]: {
      'label': {
        'zh_CN': desc['zh-CN']
      },
      'description': {
        'zh_CN': desc['zh-CN']
      }
    }
  }
}

const genSnip = ({ id, version, key, camelizeKey, cmpName, desc, props, events, slots }) => {
  return {
    'name': {
      'zh_CN': cmpName
    },
    'icon': key,
    'screenshot': '',
    'snippetName': 'Tiny' + camelizeKey,
    'schema': {}
  }
}
