import init from '../../option/init'
import { event } from '../../util/event'
import RectCoordSys from '../../option/RectSys'
import {
  handleData,
  handleAxis,
  handleDataZoom,
  handleTooltip,
  handleLegend,
  handleGrid,
  handleAxisPointer
} from './hanleOption'
import { handleSeries } from './hanleSeries'
import { mergeSeries } from '../../util/merge'

class CandlestickChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {}
    this.iChartOption = {}
    this.chartInstance = chartInstance
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption)
    // 根据 iChartOption 组装 baseOption
    this.updateOption()
  }

  updateOption() {
    const iChartOption = this.iChartOption
    const volume = this.iChartOption.volume
    const data = handleData(iChartOption)
    if (!data) return
    handleSeries(this.baseOption, iChartOption, data, this.chartInstance)
    RectCoordSys(this.baseOption, iChartOption)
    // 装载除series之外的其他配置
    handleGrid(this.baseOption, iChartOption)
    // 平均线和成交量,在这部分对ma和vol的图表进行处理
    handleAxis(this.baseOption, data, volume)
    handleTooltip(this.baseOption, iChartOption)
    handleDataZoom(this.baseOption, iChartOption)
    handleLegend(this.baseOption, iChartOption)
    handleAxisPointer(this.baseOption)
    event(this.chartInstance, iChartOption.event)
    mergeSeries(iChartOption, this.baseOption)
  }

  getOption() {
    return this.baseOption
  }

  setOption(option) {
    this.baseOption = option
  }
}

export default CandlestickChart
