const GaugeChart = (aliasToken) => {
  const { colorAxisLine, colorBgEmpty, colorTextSecondary, colorTextPrimary } = aliasToken
  return {
    // 用于轨道，特殊使用空数据颜色
    splitLine: {
      lineStyle: {
        color: colorBgEmpty
      }
    },
    axisLine: {
      lineStyle: {
        color: colorAxisLine
      }
    },
    axisLabel: {
      color: colorTextSecondary
    },
    detail: {
      rich: {
        color: colorTextPrimary
      }
    }
  }
}

export default GaugeChart
