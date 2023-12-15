import core from './core'
import Register from './register'
import Theme from './feature/theme'
import { isFunction } from './util/type'
import { mergeExtend } from './util/merge'
import readScreen from './feature/readScreen'
import mediaScreen from './feature/mediaScreen'

// 图表核心对象，通过 Register 全量引入图表给 HuiCharts 渲染，打包容量较大
export default class HuiCharts extends core {
  constructor() {
    super()
    // 图表名称
    this.chartName
  }

  // 传入简化后的icharts-option
  setSimpleOption(chartName, iChartOption, plugins = {}, isInit = true) {
    if (isInit) {
      Theme.setDefaultTheme(iChartOption.theme)
      this.mediaScreenObserver && this.mediaScreenObserver.setInitOption(iChartOption)
    }
    if (iChartOption.readScreen) {
      readScreen(this.dom, iChartOption.readScreen)
    }
    if (isFunction(chartName)) {
      this.redirectSelfChart(chartName, iChartOption)
      return
    }
    this.plugins = plugins
    this.chartName = chartName
    this.iChartOption = iChartOption
    const ChartClass = this.getChartClass(chartName)
    this.ichartsIns = new ChartClass(iChartOption, this.echartsIns, this.plugins)
    this.eChartOption = this.ichartsIns.getOption()
    mergeExtend(this.iChartOption, this.eChartOption)
  }

  // 获取图表类
  getChartClass(name) {
    return Register.getRegisteredComp(name)
  }

  // 开启响应式布局（类媒体查询效果）
  mediaScreen(dom, screenOption) {
    this.mediaScreenObserver = new mediaScreen(dom, screenOption, (option) => {
      this.setSimpleOption(this.chartName, option, this.plugins, false)
      this.render()
    })
  }

  // 图表刷新，包括刷新配置和数据
  refresh(iChartOption) {
    this.iChartOption = iChartOption
    this.setSimpleOption(this.chartName, iChartOption, this.plugins)
    this.render()
  }
}
