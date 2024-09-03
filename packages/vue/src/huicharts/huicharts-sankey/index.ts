import ChartSankey from './src/chart-sankey.vue'

ChartSankey.install = function (Vue: any) {
  Vue.component(ChartSankey.name, ChartSankey)
}

export { ChartSankey }
export default ChartSankey
