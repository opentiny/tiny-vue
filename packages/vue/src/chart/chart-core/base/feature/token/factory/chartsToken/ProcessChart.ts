const ProcessChart = (aliasToken) => {
  const { colorAxisLine, colorLabel, colorTextDisabled, colorBgEmpty, colorTextSecondary } = aliasToken

  return {
    axisLine: {
      lineStyle: {
        color: colorAxisLine
      },
      label: {
        color: colorTextSecondary
      }
    },
    label: {
      color: colorLabel,
      disabledColor: colorTextDisabled
    },
    itemStyle: {
      color: colorBgEmpty
    }
  }
}

export default ProcessChart
