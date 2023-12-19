const LineChart = (modelToken) => {
  const {
    symbolSize,
    symbolSizeXS,
    lineStyleWidthLG,
    lineStyleWidth,
    itemBorderWidthLG,
    itemBorderWidthZero,
    itemBorderWidth,
    itemBorderColor,
    markLineColorTP
  } = modelToken

  return {
    symbolSize: {
      symbolSizeXS,
      symbolSize
    },
    lineStyle: {
      lineWidthLG: lineStyleWidthLG,
      lineWidth: lineStyleWidth
    },
    itemStyle: {
      borderZero: itemBorderWidthZero,
      borderLG: itemBorderWidthLG,
      border: itemBorderWidth,
      borderColor: itemBorderColor
    },
    markLine: {
      lineStyle: {
        color: markLineColorTP
      }
    }
  }
}

export default LineChart
