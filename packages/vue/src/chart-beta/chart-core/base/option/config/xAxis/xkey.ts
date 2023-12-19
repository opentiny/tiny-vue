function xkey(iChartOption) {
  let xAxisKey
  iChartOption.xAxis.forEach((xAxisItem) => {
    xAxisKey = xAxisItem.keyName
  })
  return xAxisKey
}

export default xkey
