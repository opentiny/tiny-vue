import HuiChartsGauge from './src/chart-gauge.vue'

HuiChartsGauge.install = function (Vue: any) {
  Vue.component(HuiChartsGauge.name, HuiChartsGauge)
}

export { HuiChartsGauge }
export default HuiChartsGauge
