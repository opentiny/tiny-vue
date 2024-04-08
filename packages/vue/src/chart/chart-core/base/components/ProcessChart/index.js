import init from '../../option/init'
import RectCoordSys from '../../option/RectSys'
import { PROCESSBARTYPE } from './BaseOption'
import handleData from './handleData'
import { event } from '../../util/event'
import { handleGrid, handleYaxis, handleXaxis, handleDataZoom, handleLegend, handleTooltip } from './handleOption'
import handleSeries from './handleSeries'
import cloneDeep from '../../util/cloneDeep'

class ProcessChart {
  constructor(iChartOption, chartInstance) {
    // 保存初始的iChartOption
    this.initIchartOption = cloneDeep(iChartOption)
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
    if (!iChartOption.name) {
      throw new Error('ProcessChart must have a name')
    }
    // 加载默认的直角坐标系
    RectCoordSys(this.baseOption, iChartOption, iChartOption.name)
    // 是否是基础双向进度图
    const doubleSide = iChartOption.type && iChartOption.type === PROCESSBARTYPE
    const dataSet = handleData(iChartOption, doubleSide)
    if (!dataSet) return

    handleGrid(this.baseOption, iChartOption, doubleSide, this.chartInstance)

    handleYaxis(this.baseOption, iChartOption, dataSet, doubleSide)

    handleXaxis(this.baseOption, doubleSide, iChartOption)
    // datazoom和legend会在init配置默认值做特殊处理手动用初始值做混合
    handleDataZoom(this.baseOption, this.initIchartOption)

    handleLegend(this.baseOption, dataSet, doubleSide, this.initIchartOption)

    handleSeries(this.baseOption, iChartOption, dataSet, doubleSide)

    handleTooltip(this.baseOption, iChartOption, dataSet, doubleSide)

    //  加载事件
    event(this.chartInstance, iChartOption.event)
  }

  getOption() {
    return this.baseOption
  }

  setOption(option) {
    this.baseOption = option
  }
}

export default ProcessChart
