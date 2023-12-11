const RadarChart = (modelToken) => {
  const {
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    areaColorTP,
    richFontSizeSM,
    richLineHeight,
    richLineHeightSM,
    itemBorderWidth,
    itemBorderWidthSM,
    lineStyleWidth,
    lineStyleWidthLG,
    lineStyleWidthZero,
    itemBorderColor
  } = modelToken

  return {
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    areaStyle: {
      color: areaColorTP
    },
    rich: {
      fontSize: richFontSizeSM,
      lineHeight: richLineHeight,
      lineHeightSM: richLineHeightSM
    },
    itemStyle: {
      borderWidth: {
        border: itemBorderWidth,
        borderSM: itemBorderWidthSM
      },
      borderColor: itemBorderColor
    },
    lineStyle: {
      width: {
        lineWidth: lineStyleWidth,
        lineWidthLG: lineStyleWidthLG,
        lineWidthZero: lineStyleWidthZero
      }
    }
  }
}
export default RadarChart
