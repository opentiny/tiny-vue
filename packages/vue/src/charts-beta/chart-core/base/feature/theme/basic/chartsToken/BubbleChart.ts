const BubbleChart = (basicToken, mapToken) => {
  const { colorGray0, fontSize, borderSM } = basicToken

  return {
    emphasis: {
      label: {
        color: colorGray0,
        fontSize
      }
    },
    itemStyle: {
      borderWidth: borderSM
    },
    label: {
      fontSize
    }
  }
}

export default BubbleChart
