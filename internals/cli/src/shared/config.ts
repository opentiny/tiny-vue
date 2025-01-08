import rich_text_editor_pkg from '../../../../packages/vue/src/rich-text-editor/package.json'

const EXTENERAL = [
  'vue',
  'axios',
  'echarts',
  'echarts-liquidfill',
  'echarts-wordcloud',
  '@vue/composition-api',
  '@opentiny/vue-renderless',
  'streamsaver',
  'shepherd.js',
  './label-wrap',
  './tall-storage.vue',
  ...Object.keys(rich_text_editor_pkg.peerDependencies)
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@originjs|echarts|cropperjs|@better-scroll/.test(deps)
}

export { external }
