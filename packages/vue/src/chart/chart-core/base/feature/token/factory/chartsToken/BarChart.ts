const BarChart = (aliasToken) => {
  const { borderWidth, barWidth, colorLabel, labelFontSize, colorBorderTransparent, borderRadius, colorBgTransparent } =
    aliasToken

  return {
    itemStyle: {
      borderWidth,
      borderColor: colorBorderTransparent,
      borderRadius,
      color: colorBgTransparent
    },
    label: {
      color: colorLabel,
      fontSize: labelFontSize
    },
    barWidth
  }
}

export default BarChart
