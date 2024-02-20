import BaseOption from './BaseOption'
import cloneDeep from '../../util/cloneDeep'
import { setTooltip } from './handleOptipn'
import handleSeries from './handleSeries'
import init from '../../option/init'

class WordCloudChart {
  constructor(iChartOption) {
    this.baseOption = {}
    this.iChartOption = {}
    this.baseOption = cloneDeep(BaseOption)
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption)
    // 根据 iChartOption 组装 baseOption
    this.updateOption()
  }

  updateOption() {
    const iChartOption = this.iChartOption
    const theme = iChartOption.theme
    // 图表基础颜色
    this.baseOption.color = iChartOption.color
    // 图表鼠标悬浮提示框
    this.baseOption.tooltip = setTooltip(iChartOption)
    // 数据
    this.baseOption.series = handleSeries({
      theme,
      data: iChartOption.data,
      width: iChartOption.width,
      height: iChartOption.height,
      gridSize: iChartOption.gridSize,
      sizeRang: iChartOption.sizeRange,
      rotationRange: iChartOption.rotationRange,
      rotationStep: iChartOption.rotationStep,
      shape: iChartOption.shape,
      maskImage: iChartOption.maskImage,
      textColor: iChartOption.textColor,
      colors: this.baseOption.color
    })
    // 图表位置
    this.baseOption.grid.top = iChartOption.padding[0]
    this.baseOption.grid.right = iChartOption.padding[1]
    this.baseOption.grid.bottom = iChartOption.padding[2]
    this.baseOption.grid.left = iChartOption.padding[3]
  }

  // 根据渲染出的结果，二次计算option
  // secondaryUpdateOption(YAxiMax, YAxiMin) {
  // }

  getOption() {
    return this.baseOption
  }

  setOption() {}
}

export default WordCloudChart
