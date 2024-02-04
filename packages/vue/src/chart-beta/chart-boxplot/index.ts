import ChartBoxplot from './src/chart-boxplot.vue'

ChartBoxplot.install = function (Vue: any) {
  Vue.component(ChartBoxplot.name, ChartBoxplot)
}

export { ChartBoxplot }

export default ChartBoxplot
