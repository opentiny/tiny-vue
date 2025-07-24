import HuiChartsSankey from './src/chart-sankey.vue'

HuiChartsSankey.install = function (Vue: any) {
  Vue.component(HuiChartsSankey.name, HuiChartsSankey)
}

export { HuiChartsSankey }
export default HuiChartsSankey
