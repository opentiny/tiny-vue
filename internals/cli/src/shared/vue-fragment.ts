const fs = require('fs-extra')
const path = require('path')
const { filesFragmentReplace, logYellow, isBuildForVue2, logGreen } = require('./utils')

const replaceVue3Type = process.env.REPLACE_VUE3_TYPE

const pathFromWorkspaceRoot = (...args) => path.join(__dirname, '../..', ...args)

if (replaceVue3Type === 'typings') {
  if (isBuildForVue2()) {
    const vue2Dir = pathFromWorkspaceRoot('packages/vue/dist-vue2')

    if (fs.existsSync(vue2Dir)) {
      filesFragmentReplace(vue2Dir, [/"vue2/g], ['"vue'])
    }

    const vue2demiDir = pathFromWorkspaceRoot('packages/vue/dist-vue2/vue-demi')

    if (fs.existsSync(vue2demiDir)) {
      filesFragmentReplace(
        vue2demiDir,
        [
          /'virtual:common\/adapter\/vue'/g,
          /'virtual:common\/types\/vue'/g,
          /'virtual:locale\/vue'/g
        ],
        [
          "'./vue2'",
          "'./types/vue2'",
          "'./vue2'"
        ]
      )
    } else {
      logYellow(`${vue2demiDir} does not exist.`)
    }

    logGreen('[vue2] pnpm run dts-replace done.')
  } else {
    const vue3Dir = pathFromWorkspaceRoot('packages/vue/dist-vue3')

    if (fs.existsSync(vue3Dir)) {
      filesFragmentReplace(vue3Dir, [/"vue3/g, /@opentiny\/vue-/g], ['"vue', '@opentiny/vue3-'])
    }

    // 处理 Vue3-common TS
    const vue3demiDir = path.resolve(vue3Dir, 'vue-demi')

    if (fs.existsSync(vue3demiDir)) {
      filesFragmentReplace(
        vue3demiDir,
        [
          /'virtual:common\/adapter\/vue'/g,
          /'virtual:common\/types\/vue'/g,
          /'virtual:locale\/vue'/g
        ],
        [
          "'./vue3'",
          "'./types/vue3'",
          "'./vue3'"
        ]
      )
    } else {
      logYellow(`${vue3demiDir} directory does not exist.`)
    }

    logGreen('[vue3] pnpm run dts-replace done.')
  }
} else {
  filesFragmentReplace(pathFromWorkspaceRoot('packages/vue/dist-vue3'), /@opentiny\/vue(?!3)/g, '@opentiny/vue3')
}
