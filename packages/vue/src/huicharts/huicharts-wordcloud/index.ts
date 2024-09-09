import HuiChartsWordcloud from './src/chart-wordcloud.vue'

HuiChartsWordcloud.install = function (Vue: any) {
  Vue.component(HuiChartsWordcloud.name, HuiChartsWordcloud)
}

export { HuiChartsWordcloud }
export default HuiChartsWordcloud
