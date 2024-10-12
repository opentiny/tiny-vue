import HuiChartsGraph from './src/chart-graph.vue'

HuiChartsGraph.install = function (Vue: any) {
  Vue.component(HuiChartsGraph.name, HuiChartsGraph)
}

export { HuiChartsGraph }

export default HuiChartsGraph
