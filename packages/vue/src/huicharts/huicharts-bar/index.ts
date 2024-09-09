import HuiChartsBar from './src/chart-bar.vue'

HuiChartsBar.install = function (Vue: any) {
  Vue.component(HuiChartsBar.name, HuiChartsBar)
}

export { HuiChartsBar }

export default HuiChartsBar
