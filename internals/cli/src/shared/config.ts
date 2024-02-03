const EXTENERAL = [
  'vue',
  'axios',
  'echarts',
  'echarts-liquidfill',
  'echarts-wordcloud',
  '@vue/composition-api',
  '@opentiny/vue-renderless',
  '@originjs/fluent-editor',
  'streamsaver',
  'shepherd.js',
  './label-wrap',
  './tall-storage.vue'
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@originjs|echarts|cropperjs|@better-scroll|crypto-js/.test(deps)
}

export { external }