import ChartHistogram from './src/chart-histogram.vue'

ChartHistogram.install = function (Vue: any) {
  Vue.component(ChartHistogram.name, ChartHistogram)
}

export { ChartHistogram }
export default ChartHistogram
