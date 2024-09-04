const FunnelChart = (aliasToken) => {
  const { colorLabel, colorBorder } = aliasToken
  return {
    itemStyle: {
      borderColor: colorBorder
    },
    label: {
      color: colorLabel
    }
  }
}

export default FunnelChart
