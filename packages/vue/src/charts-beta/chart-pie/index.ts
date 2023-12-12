import ChartPie from './src/chart-pie.vue'


ChartPie.install = function (Vue:any) {
  Vue.component(ChartPie.name, ChartPie)
}



export {ChartPie}
export default ChartPie
