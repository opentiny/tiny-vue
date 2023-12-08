import ChartRing from './src/chart-ring.vue'


ChartRing.install = function (Vue:any) {
  Vue.component(ChartRing.name, ChartRing)
}


export {ChartRing}
export default ChartRing
