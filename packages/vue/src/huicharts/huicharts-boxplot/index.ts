import HuiChartsBoxplot from './src/chart-boxplot.vue'

HuiChartsBoxplot.install = function (Vue: any) {
  Vue.component(HuiChartsBoxplot.name, HuiChartsBoxplot)
}

export { HuiChartsBoxplot }

export default HuiChartsBoxplot
