import merge from '../../util/merge'

class GraphChart {
  constructor(iChartOption) {
    this.rootData = {}
    this.baseOption = {}
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption)
  }

  updateOption(iChartOption) {
    // 兼容echarts属性
    merge(this.baseOption, iChartOption)
  }

  getOption() {
    return this.baseOption
  }

  setOption() {}
}

export default GraphChart
