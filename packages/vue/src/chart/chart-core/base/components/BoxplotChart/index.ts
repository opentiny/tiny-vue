import init from '../../option/init'
import { event } from '../../util/event'
import { setDataset, setSeries } from './handleSeries'
import { setDirection, setTooltip } from './handleOption'
import RectCoordSys from '../../option/RectSys'
import chartToken from './chartToken'

const CHART_NAME = 'BoxplotChart'
export default class BoxplotChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {}
    this.iChartOption = {}
    this.iChartOption = init(iChartOption)
    this.updateOption(chartInstance)
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, CHART_NAME)
    // 箱形图data必须设为undefined
    this.baseOption.xAxis[0].data = undefined
    // 提示框trigger设为item
    this.baseOption.tooltip.trigger = 'item'
    // 配置默认dataset
    if (iChartOption.data && !iChartOption.dataset) {
      this.baseOption.dataset = setDataset(iChartOption.data)
      this.baseOption.series = setSeries()
    }
    // 自定义dataset和series
    if (iChartOption.dataset && iChartOption.series) {
      this.baseOption.dataset = iChartOption.dataset
      this.baseOption.series = iChartOption.series
      this.baseOption.series.forEach((item) => {
        item.itemStyle = {}
        item.itemStyle.color = chartToken.itemColor
      })
    }
    // 横向
    setDirection(this.baseOption, iChartOption.direction)
    // 提示框
    setTooltip(this.baseOption)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
  }

  getOption() {
    return this.baseOption
  }
}
