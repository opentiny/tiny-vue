import ChartHeatmap from './src/chart-heatmap.vue'

ChartHeatmap.install = function (Vue: any) {
  Vue.component(ChartHeatmap.name, ChartHeatmap)
}

export { ChartHeatmap }

export default ChartHeatmap
