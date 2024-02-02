import ChartTree from './src/chart-tree.vue'

ChartTree.install = function (Vue: any) {
  Vue.component(ChartTree.name, ChartTree)
}

export { ChartTree }

export default ChartTree
