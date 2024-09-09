import HuiChartsWaterfall from './src/chart-waterfall.vue'

HuiChartsWaterfall.install = function (Vue: any) {
  Vue.component(HuiChartsWaterfall.name, HuiChartsWaterfall)
}

export { HuiChartsWaterfall }
export default HuiChartsWaterfall
