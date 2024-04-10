const CandlestickChart = (aliasToken) => {
  const { colorTextSecondary } = aliasToken

  return {
    axisPointer: {
      label: {
        color: colorTextSecondary
      }
    }
  }
}

export default CandlestickChart
