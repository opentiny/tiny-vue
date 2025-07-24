import HuiChartsHeatmap from './src/chart-heatmap.vue'

HuiChartsHeatmap.install = function (Vue: any) {
  Vue.component(HuiChartsHeatmap.name, HuiChartsHeatmap)
}

export { HuiChartsHeatmap }

export default HuiChartsHeatmap
