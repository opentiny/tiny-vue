import HuiChartsTree from './src/chart-tree.vue'

HuiChartsTree.install = function (Vue: any) {
  Vue.component(HuiChartsTree.name, HuiChartsTree)
}

export { HuiChartsTree }

export default HuiChartsTree
