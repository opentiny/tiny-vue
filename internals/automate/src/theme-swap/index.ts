import fg from 'fast-glob'
import path from 'node:path'

const ignoreFolds = ['base', 'theme', 'images', 'mixins', 'svgs', 'transitions', 'vars.less']
const srcFold = path.join(process.cwd(), '../../packages/theme/src')

// vars.less的所有文件夹， 类似  [ 'action-menu/vars.less',  'alert/vars.less',.........]
const varsFiles = fg.sync(['**/vars.less'], { cwd: srcFold, ignore: ignoreFolds })
// console.log(varsFiles)

const _folds = varsFiles.map((file) => file.split('/')[0])
