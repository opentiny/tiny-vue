const WaveChart = (aliasToken) => {
  const { colorAxisLine, colorTextSecondary, colorAxisSplitLine } = aliasToken

  return {
    axisLineColor: colorAxisLine,
    axisLabelColor: colorTextSecondary,
    axisNameColor: colorTextSecondary,
    splitLineColor: colorAxisSplitLine
  }
}
export default WaveChart
