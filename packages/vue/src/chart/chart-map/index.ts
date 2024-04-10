import ChartMap from './src/chart-map.vue'

ChartMap.install = function (Vue: any) {
  Vue.component(ChartMap.name, ChartMap)
}

export { ChartMap }
export default ChartMap
