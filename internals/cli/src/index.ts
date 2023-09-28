#!/usr/bin/env node
import { Command, Option } from 'commander'
import { createIconSaas } from './commands/create/index.js'
import { buildUi, buildEntry, buildRuntime, buildReact, buildEntryReact } from './commands/build'
import { releaseAurora } from './commands/release/releaseAurora'

const program = new Command()

program.command('release:aurora').description('转换为aurora的包').action(releaseAurora)

program.command('create:icon-saas').description('同步生成 icon-saas').action(createIconSaas)

program.command('build:entry-react').description('生成 react 组件库入口').action(buildEntryReact)

program.command('build:entry').description('生成组件库入口').action(buildEntry)

program
  .command('build:ui')
  .description('打包组件库')
  .argument('[names...]', '构建指定组件，如 button alert；不指定则构建全量组件')
  .addOption(new Option('-v --vue-versions <vueVersions...>', '目标框架，默认所有').choices(['2', '2.7', '3']))
  .addOption(new Option('-f --formats <formats...>', '目标格式，默认 ["es"]').choices(['es', 'cjs']))
  .addOption(new Option('-t --build-target <buildTarget>', '组件的目标版本'))
  .option('-s, --scope <scope>', 'npm scope，默认是 opentiny，会以 @opentiny 发布到 npm')
  .option('-c, --clean', '清空构建目录')
  .option('--no-dts', '不生成 dts')
  .action(buildUi)

program
  .command('build:runtime')
  .description('打包组件 runtime 包')
  .addOption(new Option('-v --vue-versions <vueVersions...>', '目标框架，默认所有').choices(['2', '2.7', '3']))
  .option('-m, --min', '是否压缩输出文件', false)
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
