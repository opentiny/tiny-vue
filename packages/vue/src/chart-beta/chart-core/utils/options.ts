import { getFormatted } from '../common/util'
import { itemPoint, itemLabel, itemContent, SAAS_DEFAULT_COLORS } from '../common/constants'
export const getRows = (args) => {
  const { columns, metrics, labelMap, rows, dimension = columns[0] } = args

  let rowData = []

  const data = labelMap ? metrics.map((item) => (!(labelMap[item]) ? item : labelMap[item])) : metrics


  dimension.forEach((item) => {
    data.unshift(item)
  })


  rows.forEach(item => {

    let obj = {};
    for (var i = 0; i < data.length; i++) {
      obj[data[i]] = item[data[i]];
    }
    rowData.push(obj)

  })


  return rowData
}

export const getYAxis = (args) => {
  const { yAxisType, yAxisName, scale = [false, false], axisVisible, max, min, metrics, axisSite, digit = 2 } = args
  let yAxis = []
  const yAxisBase = {
    scale
  }
  for (let k = 0; k < 2; k++) {
    yAxis[k] = {
      ...yAxisBase,
    }
    if (yAxisType[k]) {
      yAxis[k] = {
        ...yAxisBase,
        axisLabel: {
          formatter(val) {
            return getFormatted(val, yAxisType[k], digit)
          }
        },
      }
    } else {
      yAxis[k] = { ...yAxisBase }
    }
    yAxis[k].name = yAxisName[k]
    yAxis[k].min = min[k] || null
    yAxis[k].max = max[k] || null
  }

  metrics.forEach((item) => {
    if (axisSite.right && axisSite.right.indexOf(item) !== -1) {
      yAxis[1].dataName = [...axisSite.right]
    } else {
      yAxis[0].dataName = item
    }
  })


  return yAxis
}

export const getTooltip = (args) => {
  const { axisSite, yAxisType, labelMap, digit = 2 } = args
  const rightItemsArr = axisSite?.right || []

  const rightListArr = labelMap
    ? rightItemsArr.map((item) => (labelMap[item] === undefined ? item : labelMap[item]))
    : rightItemsArr

  let formatter = function (items) {

    let template = []
    const { name, axisValueLabel } = items[0]
    const title = name || axisValueLabel

    template.push(`${title}<br>`)

    items.forEach(({ seriesName, data, color }) => {
      if (color === 'transparent' && items.length === 1) {
        color = '#6d8ff0'
      }
      let showData = null
      const type = ~rightListArr.indexOf(seriesName) ? yAxisType[1] : yAxisType[0]
      const itemData = Array.isArray(data) ? data[1] : data
      showData = getFormatted(itemData, type, digit)
      template.push(itemPoint(color))
      template.push(`${itemLabel(seriesName)}${itemContent(showData)}`)
      template.push('<br>')
    })
    return template.join('')
  }

  return { trigger: 'axis', formatter }
}