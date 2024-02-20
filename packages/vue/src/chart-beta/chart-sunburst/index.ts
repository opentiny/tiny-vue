import ChartSunburst from './src/chart-sunburst.vue'

ChartSunburst.install = function (Vue: any) {
  Vue.component(ChartSunburst.name, ChartSunburst)
}

export { ChartSunburst }

export default ChartSunburst
