/*
 * yarn create:ui 新建组件，支持格式如下：
 *
 * yarn create:ui img-preview
 * yarn create:ui img-preview -single 输出纯净模板（没有 pc 等模板/单层组件）
 * yarn create:ui img-preview -mobile 创建纯移动组件
 */
import path from 'path'
import fs from 'fs-extra'
import semver from 'semver'
import * as utils from '../../shared/utils'
import { createModuleMapping } from '../../shared/module-utils'
import handlebarsRender from '../build/handlebars.render'

const args = utils.getInputCmd()

if (args.length > 0) {
  const commands: string[] = []
  const components: string[] = []
  const templateDir = utils.pathJoin('../../public/template/component')
  const componetDir = utils.pathJoin('../../../../packages/vue/src')
  const { version } = fs.readJSONSync(utils.pathJoin('../../../../packages/vue/package.json'))

  args.forEach((item) => {
    if (item.indexOf('-') === 0) {
      commands.push(item.replace(/-/g, '').toLowerCase())
    } else {
      components.push(item)
    }
  })

  const isSingle = commands.includes('single')
  const isMobile = commands.includes('mobile')

  components.forEach((componentName) => {
    let componentPath = path.join(componetDir, componentName)

    if (fs.existsSync(componentPath)) {
      utils.logYellow(`The component name : ${componentName} is exist , please enter other name.`)
      return
    }

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
            if (!isSingleTemplate) return

            fileName = 'index.vue'
          } else {
            if (isSingleTemplate) return
          }
        }

        if (!fs.existsSync(componentPath)) {
          fs.mkdirSync(componentPath)
        }

        componentPath = path.join(componentPath, fileName)

        let fileContent = fs.readFileSync(subPath, { encoding: 'utf8' })
        const upperComponentName = utils.capitalizeKebabCase(componentName)

        // 编译模板
        fileContent = handlebarsRender({
          template: fileContent,
          data: {
            NAME: componentName,
            UNAME: upperComponentName,
            MINOR: semver.minor(version),
            SUFFIX: isSingle ? '.vue' : '',
            THEME: isMobile ? 'theme-mobile' : 'theme'
          },
          delimiter: ['\\[\\[', '\\]\\]']
        })

        fs.writeFileSync(componentPath, fileContent)
      }
    })

    createModuleMapping(componentName, isMobile)
  })

  utils.logGreen('npm run create:ui done.')
} else {
  utils.logYellow('please enter the component name after command.')
}
