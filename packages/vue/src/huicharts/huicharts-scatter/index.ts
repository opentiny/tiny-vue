import HuiChartsScatter from './src/chart-scatter.vue'

HuiChartsScatter.install = function (Vue: any) {
  Vue.component(HuiChartsScatter.name, HuiChartsScatter)
}

export { HuiChartsScatter }
export default HuiChartsScatter
