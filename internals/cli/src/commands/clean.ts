import path from 'node:path'
import { removeSync } from 'fs-extra'
import {
  walkFileTree,
  logGreen,
  logRed,
  pathJoinFromCLI
} from '../shared/utils'

/**
 * 删除 packages 项目包下插件内部的 dist、runtime、node_modules 文件
 */
const deleteDistFile = () => {
  walkFileTree({
    isDeep: true,
    fileFilter({ file, subPath, isDirectory }) {
      let flag = true

      if (isDirectory && ['dist', 'runtime', 'node_modules', 'dist-vue2', 'dist-vue3', 'icon-saas'].includes(file)) {
        removeSync(subPath)
        flag = false
      }

      if (file === 'package-lock.json') {
        removeSync(subPath)
      }

      return flag
    },
    dirPath: pathJoinFromCLI('../../packages'),
    callback() {
      // empty
    }
  })
}

try {
  deleteDistFile()

  // 删除打包产物
  ;['dist-vue2', 'dist-vue3', 'tgzs', 'typings-vue2', 'typings-vue3'].forEach((name) => {
    removeSync(path.join(__dirname, '..', name))
  })

  // 删除打包生成入口
  ;['index', 'pc', 'mobile', 'mobile-first', 'core', 'chart', 'base'].forEach((name) => {
    removeSync(path.join(__dirname, '..', 'packages', name + '.js'))
  })

  logGreen('npm run clean:build done.')
} catch (e) {
  logRed('npm run clean:build failed.')
}
