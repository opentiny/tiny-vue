const TreeChart = (aliasToken) => {
  const { colorLabel, colorAxisLine } = aliasToken

  return {
    label: {
      color: colorLabel
    },
    lineStyle: {
      color: colorAxisLine
    }
  }
}
export default TreeChart
