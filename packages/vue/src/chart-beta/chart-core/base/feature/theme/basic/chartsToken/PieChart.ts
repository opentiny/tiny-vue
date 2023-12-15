const PieChart = (modelToken) => {
  const {
    itemBorderWidth,
    itemBorderWidthZero,
    itemBorderColor,
    labelDistanceLG,
    labelColor,
    lineColor,
    circleColor,
    labelFontSizeSM,
    itemBorderRadiusZero
  } = modelToken

  return {
    itemStyle: {
      borderWidth: itemBorderWidth,
      borderColor: itemBorderColor,
      borderWidthZero: itemBorderWidthZero,
      borderRadius: itemBorderRadiusZero
    },
    label: {
      distance: labelDistanceLG,
      color: labelColor,
      fontSize: labelFontSizeSM
    },
    lineStyle: {
      color: lineColor
    },
    emptyCircleStyle: {
      color: circleColor
    }
  }
}

export default PieChart
