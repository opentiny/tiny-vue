function axisLine(xAxisUnit, xAxisItem, iChartOption) {
  if (iChartOption.xAxisLine || xAxisItem.line) {
    const xAxisLine = iChartOption.xAxisLine || xAxisItem.line
    if (xAxisLine.show === false) {
      xAxisUnit.axisLine.show = false
      xAxisUnit.axisTick.show = false
      xAxisUnit.axisLabel.show = false
    }
    if (xAxisLine.lineStyle) {
      Object.assign(xAxisUnit.axisLine.lineStyle, xAxisLine.lineStyle)
    }
    if (xAxisLine.textStyle) {
      Object.assign(xAxisUnit.axisLabel, xAxisLine.textStyle)
    }
  }
}

export default axisLine
