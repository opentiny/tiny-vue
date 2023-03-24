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
  'shepherd.js'
]
const external = (deps) => {
  return (
    EXTENERAL.includes(deps) ||
    /^@opentiny[\\/]|@originjs|echarts|cropperjs|crypto-js/.test(deps)
  )
}

export { external }
