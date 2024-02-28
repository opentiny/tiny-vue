const WordCloudChart = (aliasToken) => {
  const { colorShadow } = aliasToken

  return {
    emphasis: {
      textStyle: {
        textShadowColor: colorShadow
      }
    }
  }
}

export default WordCloudChart
