const PolarBarChart = (basicToken, mapToken) => {
  const { borderRadiusLG, fontSizeSM, colorTP } = basicToken

  return {
    itemStyle: {
      borderRadius: borderRadiusLG,
      color: colorTP
    },
    label: {
      fontSize: fontSizeSM
    }
  }
}

export default PolarBarChart
