// 批量导入vue组件示例文件, 进行vue组件示例的渲染
const vueFiles = import.meta.glob(`@demos/app/**/*.vue`)

// 所有demo组件实例
const vueComponents = Object.create(null)
for (const path in vueFiles) {
  if (Object.prototype.hasOwnProperty.call(vueFiles, path)) {
    const pathArr = path.split('/')
    const cmpId = pathArr[4]
    const key = pathArr.slice(5).join('/')
    vueComponents[`${cmpId}/${key}`] = vueFiles[path]
  }
}

const languageMap = {
  js: 'javascript',
  ts: 'javascript',
  html: 'html',
  vue: 'html',
  css: 'css',
  less: 'css',
  scss: 'css',
  sass: 'css'
}

const getWebdocPath = (path) => {
  if (path?.startsWith('grid-') && path !== 'grid-select' && path !== 'grid-kit') {
    return 'grid'
  } else if (path?.startsWith('chart-')) {
    return 'chart'
  } else if (path?.startsWith('directives-')) {
    return 'directives'
  } else {
    return path
  }
}

const staticDemoPath = '@demos/app'

export { languageMap, vueComponents, getWebdocPath, staticDemoPath }
