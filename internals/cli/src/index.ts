#!/usr/bin/env node
import { Command, Option } from 'commander'
import { createIconSaas } from './commands/create/index.js'
import { buildUi, buildEntry, buildRuntime, buildReact, buildEntryReact, chartTheme } from './commands/build'
import { releaseAurora } from './commands/release/releaseAurora'
import { releaseAlpha } from './commands/release/releaseAlpha'
import { releaseE2EConfig } from './commands/release/releaseE2EConfig'

const program = new Command()

program.command('release:aurora').description('转换为aurora的包').action(releaseAurora)

program
  .command('release:alpha')
  .description('转换为组织名为@opentinyvue的包')
  .option('-u, --updateVersion', '是否自动升级patch版本号', false)
  .action(releaseAlpha)

program
  .command('release:e2eConfig')
  .description('定制E2E测试配置的origin源')
  .addOption(new Option('-o --origin <origin>', 'origin源地址'))
  .action(releaseE2EConfig)

program.command('create:icon-saas').description('同步生成 icon-saas').action(createIconSaas)

program.command('build:entry-react').description('生成 react 组件库入口').action(buildEntryReact)

program.command('build:entry').description('生成组件库入口').action(buildEntry)

program.command('build:chartTheme').description('切换chart主题').action(chartTheme)

program
  .command('build:ui')
  .description('打包组件库')
  .argument('[names...]', '构建指定组件，如 button alert；不指定则构建全量组件')
  .addOption(new Option('-v --vue-versions <vueVersions...>', '目标框架，默认所有').choices(['2', '2.7', '3']))
  .addOption(new Option('-f --formats <formats...>', '目标格式，默认 ["es"]').choices(['es', 'cjs']))
  .addOption(new Option('-t --build-target <buildTarget>', '组件的目标版本'))
  .addOption(new Option('-d --design <design>', '构建的目标设计规范'))
  .option('-s, --scope <scope>', 'npm scope，默认是 opentiny，会以 @opentiny 发布到 npm')
  .option('-c, --clean', '清空构建目录')
  .option('--no-dts', '不生成 dts')
  .action(buildUi)

program
  .command('build:runtime')
  .description('打包组件 runtime 包')
  .addOption(new Option('-v --vue-versions <vueVersions...>', '目标框架，默认所有').choices(['2', '2.7', '3']))
  .option('-m, --min', '是否压缩输出文件', false)
  .option('-vi, --isVisualizer', '是否分析打包产物', false)
  .option('--tiny_mode', '输出的模板类型', 'pc')
  .action(buildRuntime)

program
  .command('build:react')
  .description('打包 react 组件库')
  .argument('[names...]', '构建指定组件，如 button alert；不指定则构建全量组件')
  .addOption(new Option('-f --formats <formats...>', '目标格式，默认 ["es"]').choices(['es', 'cjs']))
  .addOption(new Option('-t --build-target <buildTarget>', '组件的目标版本'))
  .option('-s, --scope <scope>', 'npm scope，默认是 opentiny，会以 @opentiny 发布到 npm')
  .option('-c, --clean', '清空构建目录')
  .option('--no-dts', '不生成 dts')
  .action(buildReact)

program.parse()
