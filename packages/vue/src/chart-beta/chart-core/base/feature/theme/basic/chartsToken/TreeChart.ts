const TreeChart = (basicToken, mapToken) => {
  const { fontSizeSM, lineWidthSM } = basicToken
  const { symbolSize, labelDistance } = mapToken

  return {
    label: {
      distance: labelDistance,
      fontSize: fontSizeSM
    },
    lineStyle: {
      width: lineWidthSM
    },
    symbolSize
  }
}
export default TreeChart
