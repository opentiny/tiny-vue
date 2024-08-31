const LineChart = (aliasToken) => {
  const { colorBorder, borderWidthLG, borderWidthNone, symbolSizeLG, symbolSizeSM, lineWidth, colorLineTransparent } =
    aliasToken

  return {
    symbolSize: {
      symbolSizeSM,
      symbolSizeLG
    },
    lineStyle: {
      lineWidth
    },
    itemStyle: {
      borderZero: borderWidthNone,
      border: borderWidthLG,
      borderColor: colorBorder
    },
    markLine: {
      lineStyle: {
        color: colorLineTransparent
      }
    }
  }
}

export default LineChart
