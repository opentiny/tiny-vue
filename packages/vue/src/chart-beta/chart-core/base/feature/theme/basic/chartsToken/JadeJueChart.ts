const JadeJueChart = (basicToken, mapToken) => {
  const { barWidth } = mapToken
  const { border } = basicToken
  return {
    barWidth,
    itemStyle: {
      borderWidth: border
    }
  }
}
export default JadeJueChart
