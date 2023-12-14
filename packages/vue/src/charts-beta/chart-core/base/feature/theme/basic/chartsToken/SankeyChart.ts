const SankeyChart = (basicToken, mapToken) => {
  const { fontSizeSM, space } = basicToken

  return {
    label: {
      fontSize: fontSizeSM,
      distance: space
    }
  }
}

export default SankeyChart
