const HillChart = (aliasToken) => {
  const { colorLabel, colorBorder } = aliasToken
  return {
    label: {
      color: colorLabel
    },
    emphasis: {
      itemStyle: { borderColor: colorBorder }
    }
  }
}

export default HillChart
