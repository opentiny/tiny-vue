function axisMargin(xAxisUnit, xAxisItem, iChartOption) {
  if (xAxisItem && xAxisItem.axisMargin) {
    let axisMargin = xAxisItem.axisMargin
    let min = axisMargin.left
    let max = axisMargin.right
    if (min) {
      xAxisUnit.min = function (value) {
        return value.min - min
      }
    }
    if (max) {
      xAxisUnit.max = function (value) {
        return value.max + max
      }
    }
  }
}

export default axisMargin
