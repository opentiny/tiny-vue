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
  'highlight.js',
  'lowlight'
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@originjs|@tiptap|echarts|cropperjs|@better-scroll/.test(deps)
}

export { external }
