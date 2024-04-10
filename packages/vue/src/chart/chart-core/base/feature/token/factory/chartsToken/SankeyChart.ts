const SankeyChart = (aliasToken) => {
  const { colorLabel } = aliasToken

  return {
    label: {
      color: colorLabel
    }
  }
}

export default SankeyChart
