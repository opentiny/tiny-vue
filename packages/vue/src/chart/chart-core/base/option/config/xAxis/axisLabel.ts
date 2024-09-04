// 坐标轴刻度
function axisLabel(xAxisUnit, xAxisItem, iChartOption) {
  // 自定义formatter
  xAxisUnit.axisLabel.formatter = xAxisItem.formatter || undefined
  // 显示间隔
  xAxisUnit.axisLabel.interval = iChartOption.xAxisInterval || xAxisItem.interval
  // 旋转角度
  xAxisUnit.axisLabel.rotate = iChartOption.xAxisLabelRotate || xAxisItem.labelRotate
  // 超出省略
  if (iChartOption.xAxisEllipsis || xAxisItem.ellipsis) {
    const xEllipsis = iChartOption.xAxisEllipsis || xAxisItem.ellipsis
    xAxisUnit.axisLabel.overflow = xEllipsis.overflow || 'none'
    xAxisUnit.axisLabel.width = xEllipsis.labelWidth
  }
}

export default axisLabel
