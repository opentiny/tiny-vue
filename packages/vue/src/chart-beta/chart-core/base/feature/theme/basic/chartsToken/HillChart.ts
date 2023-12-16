const HillChart = (basicToken, mapToken) => {
  const { lineWidthSM, fontSizeSM } = basicToken

  return {
    markLine: {
      lineStyle: {
        width: lineWidthSM
      },
      emphasis: {
        lineStyle: {
          width: lineWidthSM
        }
      }
    },
    textStyle: {
      fontSize: fontSizeSM
    }
  }
}

export default HillChart
