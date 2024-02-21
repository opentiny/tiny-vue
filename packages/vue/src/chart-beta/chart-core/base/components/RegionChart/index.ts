import init from '../../option/init'
import merge from '../../util/merge'
import { event } from '../../util/event'
import { setOption } from './handleOption'
import tooltip from '../../option/config/tooltip'

export default class RegionChart {
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
    // 装载除series以外的一级属性
    setOption(this.iChartOption)
    // 配置悬浮提示框
    this.baseOption.tooltip = tooltip(iChartOption)
    // 兼容echarts属性
    merge(this.baseOption, iChartOption)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
    // 删除部分不需要的默认值

    // delete this.baseOption.legend
    delete this.baseOption.dataZoom
    delete this.baseOption.xAxis
  }

  getOption() {
    return this.baseOption
  }
}
