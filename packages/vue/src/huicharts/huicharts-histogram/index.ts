import HuiChartsHistogram from './src/chart-histogram.vue'

HuiChartsHistogram.install = function (Vue: any) {
  Vue.component(HuiChartsHistogram.name, HuiChartsHistogram)
}

export { HuiChartsHistogram }
export default HuiChartsHistogram
