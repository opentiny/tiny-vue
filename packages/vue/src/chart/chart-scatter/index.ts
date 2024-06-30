import ChartScatter from './src/chart-scatter.vue'

ChartScatter.install = function (Vue: any) {
  Vue.component(ChartScatter.name, ChartScatter)
}

export { ChartScatter }
export default ChartScatter
