/**
 * 生成全量运行时入口文件
 */
const fs = require('fs-extra')
const endOfLine = require('os').EOL
const utils = require('./utils')
const runtimeUtils = require('./runtime-utils')

const version = utils.getTinyVersion()
const outputDir = 'packages'
const IMPORT_TEMPLATE = 'import {{name}} from "@opentiny/vue-{{package}}"'
const MAIN_TEMPLATE = `{{include}}

const version = '${version}'

export {
  version,
  {{components}}
}
`

const buildFullRuntime = (buildType) => {
  const outputPath = utils.pathJoin('..', outputDir, buildType + '.js')
  const includeTemplate = []
  const componentsTemplate = []
  const render = utils.renderTemplate()
  let coreLibs = []

  coreLibs = runtimeUtils.getFullRuntime(buildType === 'base' ? ['base', 'business'] : buildType)

  coreLibs.forEach((name) => {
    includeTemplate.push(
      render(IMPORT_TEMPLATE, {
        name,
        package: utils.kebabCase({ str: name })
      })
    )
    componentsTemplate.push(name)
  })

  const template = render(MAIN_TEMPLATE, {
    include: includeTemplate.join(endOfLine),
    components: componentsTemplate.join(',' + endOfLine)
  })

  const output = utils.prettierFormat({
    str: template
  })

  fs.writeFileSync(outputPath, output)

  utils.logGreen(`npm run build:entry done. [${outputDir}/${buildType}.js]`)
};
['core', 'base', 'chart'].forEach(buildFullRuntime)
