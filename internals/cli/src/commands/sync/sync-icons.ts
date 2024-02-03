/**
 * 初始化/创建 ICON 组件，从 @opentiny/vue-theme/svgs 中提取 SVG 图标创建对应的 ICON 组件
 */
import path from 'node:path'
import fs from 'fs-extra'
import semver from 'semver'
import { EOL } from 'node:os'
import handlebarsRender from '../build/handlebars.render'
import {
  pathJoin,
  logYellow,
  getopentinyVersion,
  capitalizeKebabCase,
  prettierFormat,
  logGreen,
  logRed,
  templatePath
} from '../../shared/utils'

const svgRE = /\.svg$/
const svgDir = pathJoin('..', 'node_modules', '@opentiny', 'theme', 'svgs')
const iconDir = pathJoin('..', 'packages', 'icon')
const packageJson = 'package.json'

// 检查是否安装依赖包
if (!fs.existsSync(svgDir)) {
  logYellow('The @opentiny/vue-theme is not exist , please npm install @opentiny/vue-theme.')
}

// 是否包含 package/icon 目录
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir)

  const version = getopentinyVersion({ key: 'version' })
  const iconTemplate = fs.readJSONSync(path.join(templatePath, 'component', packageJson))

  // 删除多余的依赖
  if (iconTemplate.dependencies) {
    delete iconTemplate.dependencies['@opentiny/vue-renderless']
  }

  const packageContent = handlebarsRender({
    template: JSON.stringify(iconTemplate),
    data: {
      NAME: 'icon',
      MINOR: semver.minor(version)
    },
    delimiter: ['\\[\\[', '\\]\\]']
  })

  fs.writeFileSync(path.join(iconDir, packageJson), packageContent)
}

const exportComponents: string[] = []
const exportIcons: string[] = []
const componentTemplate = fs.readFileSync(path.join(templatePath, 'icon', 'index.ts'), { encoding: 'utf8' })

// 根据 @opentiny/vue-theme/svgs 中的 svg 图片创建对应的 icon 组件
fs.readdirSync(svgDir).forEach((fileName) => {
  if (svgRE.test(fileName)) {
    const svgName = fileName.replace(svgRE, '')
    const iconPath = path.join(iconDir, svgName)

    if (!fs.existsSync(iconPath)) {
      fs.mkdirSync(iconPath)

      const iconName = capitalizeKebabCase(svgName)
      const fullIconName = `Icon${iconName}`
      const iconEntryContent = handlebarsRender({
        template: componentTemplate,
        data: {
          CNAME: iconName,
          SNAME: fileName
        },
        delimiter: ['\\[\\[', '\\]\\]']
      })

      fs.writeFileSync(path.join(iconPath, 'index.ts'), prettierFormat({ str: iconEntryContent }))

      exportComponents.push(`import ${fullIconName} from './${svgName}'`)
      exportIcons.push(fullIconName)
    }
  }
})

if (exportComponents.length) {
  fs.writeFileSync(
    path.join(iconDir, 'index.ts'),
    prettierFormat({
      str: `${exportComponents.join(EOL)}

  export {
    ${exportIcons.join(',' + EOL)}
  }

  export default {
    ${exportIcons.join(',' + EOL)}
  }
  `
    })
  )

  logGreen('npm run create:icon done.')
} else {
  logRed('npm run create:icon fail.')
}
