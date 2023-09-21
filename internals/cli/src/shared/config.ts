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
  './tall-storage.vue',
  'react',
  'react/jsx-runtime',
  './props'
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@pe-3[\\/]|@originjs|echarts|cropperjs|@better-scroll|crypto-js/.test(deps)
}

export { external }
