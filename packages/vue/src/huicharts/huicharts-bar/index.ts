import ChartBar from './src/chart-bar.vue'

ChartBar.install = function (Vue: any) {
  Vue.component(ChartBar.name, ChartBar)
}

export { ChartBar }

export default ChartBar
