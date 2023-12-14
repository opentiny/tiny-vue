import ChartLine from './src/chart-line.vue'

ChartLine.install = function (Vue: any) {
  Vue.component(ChartLine.name, ChartLine)
}

export { ChartLine }
export default ChartLine
