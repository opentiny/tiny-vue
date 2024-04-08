const PieChart = (aliasToken) => {
  const {
    colorBorder,
    borderWidthLG,
    borderWidthNone,
    colorLabel,
    labelFontSize,
    labelLineLength,
    colorLabelLine,
    borderRadiusNone,
    colorBgEmpty
  } = aliasToken

  return {
    itemStyle: {
      borderWidth: borderWidthLG,
      borderColor: colorBorder,
      borderWidthNone,
      borderRadius: borderRadiusNone
    },
    label: {
      distance: labelLineLength,
      color: colorLabel,
      fontSize: labelFontSize
    },
    lineStyle: {
      color: colorLabelLine
    },
    emptyCircleStyle: {
      color: colorBgEmpty
    }
  }
}

export default PieChart
