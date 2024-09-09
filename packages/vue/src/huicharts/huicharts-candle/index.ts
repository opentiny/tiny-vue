import HuiChartsCandle from './src/chart-candle.vue'

HuiChartsCandle.install = function (Vue: any) {
  Vue.component(HuiChartsCandle.name, HuiChartsCandle)
}

export { HuiChartsCandle }

export default HuiChartsCandle
