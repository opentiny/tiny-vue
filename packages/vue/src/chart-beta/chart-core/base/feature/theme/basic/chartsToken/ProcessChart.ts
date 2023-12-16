const ProcessChart = (basicToken, mapToken) => {
  const { fontSize, borderRadiusSM } = basicToken
  const { barWidth, barWidthStack } = mapToken

  return {
    barWidth: {
      barWidthNorm: barWidth,
      barWidthStack
    },
    label: {
      fontSize,
      lineHeight: fontSize
    },
    itemStyle: {
      borderRadius: borderRadiusSM
    }
  }
}

export default ProcessChart
