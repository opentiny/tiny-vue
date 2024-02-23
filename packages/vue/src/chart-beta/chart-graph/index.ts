import ChartGraph from './src/chart-graph.vue'

ChartGraph.install = function (Vue: any) {
  Vue.component(ChartGraph.name, ChartGraph)
}

export { ChartGraph }

export default ChartGraph
