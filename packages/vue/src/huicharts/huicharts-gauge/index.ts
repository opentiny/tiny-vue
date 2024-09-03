import ChartGauge from './src/chart-gauge.vue'

ChartGauge.install = function (Vue: any) {
  Vue.component(ChartGauge.name, ChartGauge)
}

export { ChartGauge }
export default ChartGauge
