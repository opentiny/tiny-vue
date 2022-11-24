/**
 *  yarn create:ui 新建组件，支持格式如下：
 *  yarn create:ui img-preview
 *  yarn create:ui img-preview -single 输出纯净模板（没有 pc 等模板/单层组件）
 *  yarn create:ui img-preview -mobile 创建纯移动组件
 */
const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')
const utils = require('./utils')
const { createModuleMapping } = require('./module-utils')

const args = utils.getInputCmd()

const getTemplate = (upperComponentName) => `<template>
<div>
  <tiny-[[NAME]] _mode="mobile"></tiny-[[NAME]]>
</div>
</template>

<script>
import { [[UNAME]] } from '@opentiny/vue'

export default {
name: '[[UNAME]]',
components: {
  Tiny${upperComponentName}:${upperComponentName}
}
}
</script>`

const getDcoTemplate = () => `<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-[[NAME]]"/>
</p>

## [[UNAME]]

<mobile-uxlink widget-name="[[UNAME]]"></mobile-uxlink>

</div>

### [[UNAME]]

<mobile-view link="[[NAME]]/base"></mobile-view>`

const getTemp = (componentName) => `const router = [
  {
    path: '${componentName}',
    meta: {
      title: 'test',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () =>
      import(
        /* webpackChunkName: 'v3-${componentName}' */ './docs/mobile/${componentName}/base.md'
      )
  },`

const doWorkTreeFn = ({ templateDir, componentPath, componetDir, componentName, isSingle, render, version, isMobile }) => {
  utils.walkFileTree({
    isDeep: true,
    dirPath: templateDir,
    callback({ file, subPath }) {
      let fileName = file
      const isSingleTemplate = file === 'single.vue'
      const isSrcDir = path.basename(path.dirname(subPath)) === 'src'

      componentPath = path.join(componetDir, componentName)

      // 单层组件处理逻辑
      if (isSrcDir) {
        componentPath = path.join(componentPath, 'src')

        if (isSingle) {
          if (!isSingleTemplate) {
            return
          }

          fileName = 'index.vue'
        } else {
          if (isSingleTemplate) {
            return
          }
        }
      }

      if (!fs.existsSync(componentPath)) {
        fs.mkdirSync(componentPath)
      }

      componentPath = path.join(componentPath, fileName)

      let fileContent = fs.readFileSync(subPath, { encoding: 'utf8' })
      const upperComponentName = utils.capitalizeKebabCase(componentName)

      // 编译模板
      fileContent = render(fileContent, {
        NAME: componentName,
        UNAME: upperComponentName,
        MINOR: semver.minor(version),
        SUFFIX: isSingle ? '.vue' : '',
        THEME: isMobile ? 'theme-mobile' : 'theme'
      })

      fs.writeFileSync(componentPath, fileContent)
    }
  })
}

const createRouter = (json, componentName, navPath, router) => {
  const Navs = JSON.parse(json)
  Navs.component.push({
    name: 'New Component',
    children: [
      {
        path: `/${componentName}`,
        name: `${componentName}`
      }
    ]
  })

  fs.writeFileSync(path.join(navPath, 'nav.config.comp.mobile.json'), JSON.stringify(Navs, null, 2), { encoding: 'utf-8' })

  fs.writeFileSync(path.join(navPath, 'route.config.comp.mobile.js'), router, {
    encoding: 'utf8'
  })
}

if (args.length > 0) {
  const commands = []
  const components = []
  const render = utils.renderTemplate({ leftChar: '[[', rightChar: ']]' })
  const templateDir = utils.pathJoin('..', 'template', 'component')
  const componetDir = utils.pathJoin('..', 'packages')
  const demoDir = utils.pathJoin('..', 'example', 'src', 'demo', 'mobile')
  const docDir = utils.pathJoin('..', 'example', 'src', 'docs', 'mobile')
  const { version } = fs.readJSONSync(utils.pathJoin('..', 'package.json'))
  const navPath = utils.pathJoin('..', 'example', 'src')

  args.forEach((item) => {
    if (item.indexOf('-') === 0) {
      commands.push(item.replace(/-/g, '').toLowerCase())
    } else {
      components.push(item)
    }
  })

  const isSingle = commands.includes('single')
  const isMobile = commands.includes('mobile')

  const createDemo = (filePath, componentName, fileName, template) => {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath)
    }

    const upperComponentName = utils.capitalizeKebabCase(componentName)

    // 生成测试demo
    filePath = path.join(filePath, fileName)

    const outString = render(template, {
      NAME: componentName,
      UNAME: upperComponentName
    })

    const outputDemo = require('prettier').format(outString, {
      printWidth: 160,
      jsxBracketSameLine: false,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      semi: false,
      trailingComma: 'none',
      bracketSpacing: true,
      parser: 'vue'
    })

    fs.writeFileSync(filePath, outputDemo)
  }

  components.forEach((componentName) => {
    let componentPath = path.join(componetDir, componentName)
    let demoPath = path.join(demoDir, componentName)
    let docPath = path.join(docDir, componentName)
    const upperComponentName = utils.capitalizeKebabCase(componentName)

    if (fs.existsSync(componentPath)) {
      utils.logYellow(`The component name : ${componentName} is exist , please enter other name.`)
      return
    }

    const json = fs.readFileSync(path.join(navPath, 'nav.config.comp.mobile.json'), { encoding: 'utf8' })

    let router = fs.readFileSync(path.join(navPath, 'route.config.comp.mobile.js'), { encoding: 'utf8' })

    const templ = getTemp(componentName)
    router = router.replace('const router = [', templ)

    createRouter(json, componentName, navPath, router)

    doWorkTreeFn({
      templateDir,
      componentPath,
      componetDir,
      componentName,
      isSingle,
      render,
      version,
      isMobile
    })

    // 生成测试demo
    const template = getTemplate(upperComponentName)
    createDemo(demoPath, componentName, 'base.vue', template)

    // 生成doc
    const dcoTemplate = getDcoTemplate()

    createDemo(docPath, componentName, 'base.md', dcoTemplate)

    componentName && createModuleMapping(componentName, componentPath, isMobile)
  })

  utils.logYellow('npm run create:ui done.')
} else {
  utils.logYellow('please enter the component name after command.')
}
