import HuiChartsRing from './src/chart-ring.vue'

HuiChartsRing.install = function (Vue: any) {
  Vue.component(HuiChartsRing.name, HuiChartsRing)
}

export { HuiChartsRing }
export default HuiChartsRing
