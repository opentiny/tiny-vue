const SunburstChart = (basicToken, mapToken) => {
  const { borderRadiusSM, border } = basicToken

  return {
    itemStyle: {
      borderRadius: borderRadiusSM,
      borderWidth: border
    }
  }
}

export default SunburstChart
