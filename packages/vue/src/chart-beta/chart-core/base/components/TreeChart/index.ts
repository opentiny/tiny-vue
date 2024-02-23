import BaseOption from './BaseOption'
import cloneDeep from '../../util/cloneDeep'
import { setTooltip, setTheme } from './handleOptipn'
import { setSeries } from './handleSeries'
import { mergeSeries } from '../../util/merge'

class TreeChart {
  constructor(iChartOption) {
    this.baseOption = {}
    this.iChartOption = {}
    this.baseOption = cloneDeep(BaseOption)
    this.iChartOption = iChartOption
    // 根据 iChartOption 组装 baseOption
    this.updateOption()
  }

  updateOption() {
    const iChartOption = this.iChartOption
    const type = iChartOption.type
    if (!type) {
      throw new Error('TreeChart must have a name')
    }
    // 设置主题
    const theme = setTheme(iChartOption)
    // 图表的series
    this.baseOption.series = setSeries(type, theme, iChartOption)
    //  图表鼠标悬浮提示框
    this.baseOption.tooltip = setTooltip(iChartOption)
    mergeSeries(iChartOption, this.baseOption)
  }

  getOption() {
    return this.baseOption
  }

  setOption() {}
}

export default TreeChart
