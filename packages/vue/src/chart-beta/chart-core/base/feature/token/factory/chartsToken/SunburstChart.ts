const SunburstChart = (aliasToken) => {
  const { colorBorder, colorLabel } = aliasToken

  return {
    itemStyle: {
      borderColor: colorBorder
    },
    label: {
      color: colorLabel
    }
  }
}

export default SunburstChart
