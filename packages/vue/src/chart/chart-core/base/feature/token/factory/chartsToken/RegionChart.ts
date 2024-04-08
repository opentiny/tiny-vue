const RegionChart = (aliasToken) => {
  const { colorTextPrimary } = aliasToken

  return {
    visualMap: {
      textStyle: {
        color: colorTextPrimary
      }
    }
  }
}

export default RegionChart
