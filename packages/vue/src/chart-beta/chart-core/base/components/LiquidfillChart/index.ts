import init from '../../option/init'
import { event } from '../../util/event'
import { setSeries } from './handleSeries.js'
import PolarCoordSys from '../../option/PolarSys'

const CHART_NAME = 'LiquidfillChart'
export default class LiquidfillChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {}
    this.iChartOption = {}
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption)
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance)
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, iChartOption, CHART_NAME)
    // 组装series
    this.baseOption.series = setSeries(iChartOption)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
  }

  getOption() {
    return this.baseOption
  }
}
