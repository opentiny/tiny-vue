import ChartRadar from './src/chart-radar.vue'


ChartRadar.install = function (Vue:any) {
  Vue.component(ChartRadar.name, ChartRadar)
}


export {ChartRadar}
export default ChartRadar
