/**
 * 初始化/创建 ICON 组件，从 @opentiny/vue-theme/svgs 中提取 SVG 图标创建对应的 ICON 组件
 */
const path = require('path')
const fs = require('fs-extra')
const utils = require('./utils')
const semver = require('semver')
const { EOL } = require('os')

const svgRE = /\.svg$/
const svgDir = utils.pathJoin('../../', 'vue-theme', 'theme', 'svgs')
const iconDir = utils.pathJoin('..', 'packages', 'icon')
const packageJson = 'package.json'
const templatePath = utils.pathJoin('..', 'template')
const render = utils.renderTemplate({ leftChar: '[[', rightChar: ']]' })

// 检查是否按照依赖包
if (!fs.existsSync(svgDir)) {
  utils.logYellow('The @opentiny/vue-theme is not exist , please npm install @opentiny/vue-theme.')
}

// 是否包含 package/icon 目录
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir)

  const version = utils.getTinyVersion()
  const iconTemplate = fs.readJSONSync(path.join(templatePath, 'component', packageJson))

  // 删除多余的依赖
  if (iconTemplate.dependencies) {
    delete iconTemplate.dependencies['@opentiny/vue-renderless']
  }

  const packageContent = render(JSON.stringify(iconTemplate), {
    NAME: 'icon',
    MINOR: semver.minor(version)
  })

  fs.writeFileSync(path.join(iconDir, packageJson), packageContent)
}

const exportComponents = []
const exportIcons = []
const componentTemplate = fs.readFileSync(path.join(templatePath, 'icon', 'index.js'), { encoding: 'utf8' })

// 根据 @opentiny/vue-theme/svgs 中的 svg 图片创建对应的 icon 组件
fs.readdirSync(svgDir).forEach((fileName) => {
  if (svgRE.test(fileName)) {
    const svgName = fileName.replace(svgRE, '')
    const iconPath = path.join(iconDir, svgName)
    const iconName = utils.capitalizeKebabCase(svgName)
    const fullIconName = `Icon${iconName}`

    if (!fs.existsSync(iconPath)) {
      fs.mkdirSync(iconPath)
      const iconEntryContent = render(componentTemplate, {
        CNAME: iconName,
        SNAME: fileName
      })

      fs.writeFileSync(path.join(iconPath, 'index.js'), utils.prettierFormat({ str: iconEntryContent }))
    }
    exportComponents.push(`import ${fullIconName} from './${svgName}'`)
    exportIcons.push(fullIconName)
  }
})

if (exportComponents.length) {
  fs.writeFileSync(
    path.join(iconDir, 'index.js'),
    utils.prettierFormat({
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

  utils.logGreen('npm run create:icon done.')
} else {
  utils.logRed('npm run create:icon fail.')
}
