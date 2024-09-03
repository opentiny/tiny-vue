import ChartFunnel from './src/chart-funnel.vue'

ChartFunnel.install = function (Vue: any) {
  Vue.component(ChartFunnel.name, ChartFunnel)
}

export { ChartFunnel }
export default ChartFunnel
