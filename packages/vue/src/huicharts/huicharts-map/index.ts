import HuiChartsMap from './src/chart-map.vue'

HuiChartsMap.install = function (Vue: any) {
  Vue.component(HuiChartsMap.name, HuiChartsMap)
}

export { HuiChartsMap }
export default HuiChartsMap
