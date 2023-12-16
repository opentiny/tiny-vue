const BarChart = (modelToken) => {
  const {
    itemBorderWidthSM,
    itemBorderRadiusSM,
    labelColor,
    labelFontSizeSM,
    itemColorTP,
    barWidth,
    itemBorderColorTP
  } = modelToken

  return {
    itemStyle: {
      borderWidth: itemBorderWidthSM,
      borderColor: itemBorderColorTP,
      borderRadius: itemBorderRadiusSM,
      color: itemColorTP
    },
    label: {
      color: labelColor,
      fontSize: labelFontSizeSM
    },
    barWidth
  }
}

export default BarChart
