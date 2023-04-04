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
  './bar.vue',
  './custom-select.vue',
  './custom.vue',
  './custom-switch.vue'
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@originjs|echarts|cropperjs|@better-scroll|crypto-js/.test(deps)
}

export { external }
