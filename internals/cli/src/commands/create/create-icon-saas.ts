/**
 * 根据 @opentiny/vue-icon 组件生成 @opentiny/vue-icon-saas 组件
 */
import path from 'node:path'
import fs from 'fs-extra'
import { searchForWorkspaceRoot } from 'vite'
import { filesFragmentReplace } from '../../shared/utils.js'

const ROOT_PATH = searchForWorkspaceRoot(process.cwd())
const packages = path.join(ROOT_PATH, 'packages')
const iconDir = path.join(packages, 'vue-icon')
const iconSaasDir = path.join(packages, 'vue-icon-saas')

export function createIconSaas() {
  const targets = ['src', 'index.ts']

  targets.forEach((item) =>
    fs.copySync(path.resolve(iconDir, item), path.resolve(iconSaasDir, item), { overwrite: true })
  )

  filesFragmentReplace(
    path.resolve(iconSaasDir, 'src'),
    [/@opentiny\/vue-theme\/svgs\//g],
    ['@opentiny/vue-theme-saas/svgs/']
  )
}
