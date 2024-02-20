import ChartCandle from './src/chart-candle.vue'

ChartCandle.install = function (Vue: any) {
  Vue.component(ChartCandle.name, ChartCandle)
}

export { ChartCandle }

export default ChartCandle
