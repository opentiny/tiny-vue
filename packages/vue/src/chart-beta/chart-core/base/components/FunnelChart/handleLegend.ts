import cloneDeep from '../../util/cloneDeep'

// 设置legend顺序
export function setLegend(baseOption) {
  let dataUnit = cloneDeep(baseOption.series[0].data)
  let data = []
  let sort = []
  if (dataUnit !== undefined) {
    data = dataUnit
    sort = baseOption.series[0].sort
  }
  let legendData = sortData(sort, data)
  return legendData
}

function sortData(sort, data) {
  let legendName = []
  // 升序
  if (sort == 'ascending') {
    const sortedData = [...data].sort((a, b) => {
      return a.value - b.value
    })
    sortedData.forEach((item) => {
      legendName.push(item.name)
    })
  }
  // 降序
  else {
    const sortedData = [...data].sort((a, b) => {
      return b.value - a.value
    })
    sortedData.forEach((item) => {
      legendName.push(item.name)
    })
  }
  return legendName
}
