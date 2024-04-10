import init from '../../option/init'
import { event } from '../../util/event'
import { setSeries } from './handleSeries'
import merge from '../../util/merge'
import PolarCoordSys from '../../option/PolarSys'

const CHART_NAME = 'SunburstChart'
export default class SunburstChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {}
    this.iChartOption = {}
    this.iChartOption = init(iChartOption)
    this.updateOption(chartInstance)
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, iChartOption, CHART_NAME)
    this.baseOption.color = ['', ...iChartOption.color]
    this.baseOption.series = setSeries(iChartOption)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
    // 合并用户自定义series
    merge(this.baseOption.series, iChartOption.series)
  }

  getOption() {
    return this.baseOption
  }
}
