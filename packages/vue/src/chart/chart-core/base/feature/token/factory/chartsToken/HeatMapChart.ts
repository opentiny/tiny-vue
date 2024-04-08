const HeatMapChart = (aliasToken) => {
  const { colorAxisLine, colorTextPrimary, colorLabel, colorBorder } = aliasToken

  return {
    axisLine: {
      lineStyle: {
        color: colorAxisLine
      }
    },
    visualMap: {
      text: {
        color: colorTextPrimary
      }
    },
    label: {
      color: colorLabel
    },
    custom: {
      style: {
        stroke: colorBorder
      }
    }
  }
}

export default HeatMapChart
