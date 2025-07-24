import HuiChartsLine from './src/chart-line.vue'

HuiChartsLine.install = function (Vue: any) {
  Vue.component(HuiChartsLine.name, HuiChartsLine)
}

export { HuiChartsLine }
export default HuiChartsLine
