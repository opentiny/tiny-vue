import init from '../../option/init'
import { event } from '../../util/event'
import handleMulti from './handleMulti'
import handleSeries from './handleSeries'
import PolarCoordSys from '../../option/PolarSys'

class PieChart {
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
    const type = iChartOption.type || 'circle'
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, this.iChartOption, 'PieChart')
    // 兼容旧属性chartPosition
    const position = iChartOption.position || iChartOption.chartPosition
    // 处理series数据
    this.baseOption.series = handleSeries(type, iChartOption, chartInstance, position)
    // 针对多重圆环图表需求，图表需要进行特殊处理
    handleMulti(type, this.baseOption, iChartOption.legend, iChartOption.data)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {}
    }
  }

  getOption() {
    return this.baseOption
  }

  setOption() {}
}

export default PieChart
