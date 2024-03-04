const JadeJueChart = (aliasToken) => {
  const { barWidth, colorBorder, colorBgEmpty } = aliasToken

  return {
    barWidth,
    itemStyle: {
      borderColor: colorBorder,
      // 做背景特殊
      color: colorBgEmpty
    }
  }
}
export default JadeJueChart
