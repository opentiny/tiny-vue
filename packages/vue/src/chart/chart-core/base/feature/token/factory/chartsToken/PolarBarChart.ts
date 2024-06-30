const PolarBarChart = (aliasToken) => {
  const { colorTextSecondary } = aliasToken

  return {
    // 坐标轴label
    label: {
      color: colorTextSecondary
    }
  }
}

export default PolarBarChart
