const BubbleChart = (aliasToken) => {
  const { colorLabel } = aliasToken
  return {
    emphasis: {
      label: {
        color: colorLabel
      }
    }
  }
}

export default BubbleChart
