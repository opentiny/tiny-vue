import ChartWaterfall from './src/chart-waterfall.vue'

ChartWaterfall.install = function (Vue: any) {
  Vue.component(ChartWaterfall.name, ChartWaterfall)
}

export { ChartWaterfall }
export default ChartWaterfall
