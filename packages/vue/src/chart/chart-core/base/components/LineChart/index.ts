import init from '../../option/init'
import mini from '../../feature/mini'
import { event } from '../../util/event'
import { setSeries } from './handleSeries'
import cloneDeep from '../../util/cloneDeep'
import BaseOption from '../../option/base'
import { setVisualMap } from './handleVisualMap'
import { handlePredict } from './handlePredict'
import { topArea, bottomArea } from './AreaChart'
import { mergeVisualMap, mergeSeries } from '../../util/merge'
import { handleData, onlyOnePoint, discrete } from './handleOptipn'
import RectCoordSys from '../../option/RectSys'
import { xkey, xdata, ldata, ydata } from '../../option/RectSys'

class LineChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {}
    this.baseOption = cloneDeep(BaseOption)
    this.iChartOption = {}
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption)
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance)
  }

  updateOption(chartInstance) {
    const theme = this.iChartOption.theme
    const iChartOption = this.iChartOption
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, 'LineChart')
    // x轴key值
    const xAxisKey = xkey(iChartOption)
    // x轴数据
    const xAxisData = xdata(iChartOption.data, xAxisKey)
    // 图例数据
    const legendData = ldata(iChartOption.data, xAxisKey)
    // 连线的数据
    const seriesData = ydata(iChartOption.data, legendData)
    // 给图例和x轴赋值
    handleData(this.baseOption, legendData, xAxisData)
    // 组装series
    this.baseOption.series = setSeries({
      theme,
      seriesData,
      legendData,
      yAxis: iChartOption.yAxis,
      focus: iChartOption.focus,
      stack: iChartOption.stack,
      isStep: iChartOption.step,
      isArea: iChartOption.area,
      colors: this.baseOption.color,
      isSmooth: iChartOption.smooth,
      markLine: iChartOption.markLine,
      markPoint: iChartOption.markPoint,
      splitLine: iChartOption.splitLine,
      labelHtml: iChartOption.labelHtml,
      itemStyle: iChartOption.itemStyle
    })
    // 设置VisualMap，通过数值映射颜色
    this.baseOption.visualMap = setVisualMap(
      legendData,
      seriesData,
      iChartOption.markLine,
      iChartOption.color,
      iChartOption.theme
    )
    // 针对预测值图表需求，图表需要进行特殊处理
    handlePredict(this.baseOption, iChartOption.predict, iChartOption.tipHtml, iChartOption.lineStyle)
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event)
    }
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {}
    }
    // 动效时长
    this.baseOption.animationDuration = this.iChartOption.animationDuration || 1000
    // 当数据只有一条时，显示数据点
    onlyOnePoint(this.baseOption)
    // 针对离散数据, 创建同名Series, 显示离散数据的单个点
    discrete(iChartOption, this.baseOption)
    // 合并用户自定义series
    mergeSeries(iChartOption, this.baseOption)
    // 合并用户自定义visualMap
    mergeVisualMap(iChartOption, this.baseOption)
    // 处理特性
    mini(iChartOption, this.baseOption)
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain(YAxiMax, YAxiMin) {
    // 面积图上部红色阈值区域需要在二次计算中实现 -- 在原有Series上添加areaStyle
    topArea(this.baseOption, this.iChartOption, YAxiMin)
    // 面积图下部红色阈值区域需要在二次计算中实现 -- 植入假的同名Series
    bottomArea(this.baseOption, this.iChartOption, YAxiMax)
  }

  getOption() {
    return this.baseOption
  }
}

export default LineChart
