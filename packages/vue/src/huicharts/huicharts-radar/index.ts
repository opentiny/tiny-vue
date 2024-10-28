import HuiChartsRadar from './src/chart-radar.vue'

HuiChartsRadar.install = function (Vue: any) {
  Vue.component(HuiChartsRadar.name, HuiChartsRadar)
}

export { HuiChartsRadar }
export default HuiChartsRadar
