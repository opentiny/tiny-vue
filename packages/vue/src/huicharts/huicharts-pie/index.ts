import HuiChartsPie from './src/chart-pie.vue'

HuiChartsPie.install = function (Vue: any) {
  Vue.component(HuiChartsPie.name, HuiChartsPie)
}

export { HuiChartsPie }
export default HuiChartsPie
