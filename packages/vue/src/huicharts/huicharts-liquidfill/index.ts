import ChartLiquidfill from './src/chart-liquidfill.vue'

ChartLiquidfill.install = function (Vue: any) {
  Vue.component(ChartLiquidfill.name, ChartLiquidfill)
}

export { ChartLiquidfill }
export default ChartLiquidfill
