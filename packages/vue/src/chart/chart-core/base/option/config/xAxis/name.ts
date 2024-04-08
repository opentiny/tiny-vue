function name(xAxisUnit, xAxisItem, iChartOpt) {
  xAxisUnit.name = iChartOpt.xAxisName || xAxisItem.name
  xAxisUnit.nameLocation = xAxisItem.nameLocation || 'end'
  xAxisUnit.nameTextStyle = Object.assign(xAxisUnit.nameTextStyle, xAxisItem.nameTextStyle)
}

export default name
