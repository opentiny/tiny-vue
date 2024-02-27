const AssembleBubbleChart = (aliasToken) => {
  const { colorLabel, colorLabelDisabled, colorBorderDisabled, colorInactive } = aliasToken
  //    此图为自定义echarts不知道怎么排布数据结构，todo
  return {
    label: {
      color: colorLabel,
      disabledColor: colorLabelDisabled
    },
    disabledBorderColor: colorBorderDisabled,
    itemStyle: {
      disabledColor: colorInactive
    }
  }
}

export default AssembleBubbleChart
