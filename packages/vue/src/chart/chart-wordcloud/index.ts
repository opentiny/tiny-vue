import ChartWordcloud from './src/chart-wordcloud.vue'

ChartWordcloud.install = function (Vue: any) {
  Vue.component(ChartWordcloud.name, ChartWordcloud)
}

export { ChartWordcloud }
export default ChartWordcloud
