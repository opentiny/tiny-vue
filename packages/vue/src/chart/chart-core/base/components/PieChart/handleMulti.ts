import { getColor, codeToRGB, changeRgbaOpacity } from '../../util/color'
import cloneDeep from '../../util/cloneDeep'

function handleResObj(item, colors, index) {
  const resObj = cloneDeep(item)
  resObj.color = {
    rgba: codeToRGB(getColor(colors, index), 1),
    from: 1,
    to: 0.2
  }
  return resObj
}

function handleTempLegend(tempLegend, legendOffset, index) {
  if (tempLegend.orient === 'horizontal') {
    const offset = legendOffset || 30
    const bottom = parseFloat(tempLegend.bottom) - index * parseFloat(offset)
    if (tempLegend.bottom.toString().includes('%')) {
      tempLegend.bottom = `${bottom}%`
    } else {
      tempLegend.bottom = bottom
    }
  } else {
    const offset = legendOffset || 120
    const left = parseFloat(tempLegend.left) + index * parseFloat(offset)
    if (tempLegend.left.toString().includes('%')) {
      tempLegend.left = `${left}%`
    } else {
      tempLegend.left = left
    }
  }
}

function handleTempSeriesObj(item) {
  const tempSeriesObj = cloneDeep(item)
  tempSeriesObj.itemStyle = {
    color: item.color.rgba
  }
  return tempSeriesObj
}

/**
 * 递归遍历数据
 * @param {*} data
 * @param {*} innerData
 * @param {*} innerIndex
 */
function installInnerData(data, innerData, innerIndex) {
  data.children &&
    data.children.forEach((citem, cindex) => {
      if (!innerData[innerIndex]) {
        innerData[innerIndex] = []
      }
      const colorFrom =
        data.color.from - ((data.color.from - data.color.to) / (data.children.length + 1)) * (cindex + 1)
      const colorTo = data.color.from - ((data.color.from - data.color.to) / (data.children.length + 1)) * (cindex + 2)
      citem.color = {
        rgba: changeRgbaOpacity(data.color.rgba, colorFrom),
        from: colorFrom,
        to: colorTo
      }
      innerData[innerIndex].push(citem)
      // 如果还有子层，则继续递归遍历
      if (citem.children) {
        installInnerData(citem, innerData, innerIndex + 1)
      }
    })
}

// 针对多重圆环图表需求，图表需要进行特殊处理
function handleMulti(type, baseOption, legend, data) {
  if (type === 'multi-circle') {
    const colors = baseOption.color
    // 给源数据添加颜色属性
    const outer = data.map((item, index) => {
      const resObj = handleResObj(item, colors, index)
      return resObj
    })
    // 组装子层数据，给每个子数据赋值颜色
    const inner = []
    const innerDiff = 6
    const innerIndex = 0
    outer.forEach((data) => {
      installInnerData(data, inner, innerIndex)
    })
    // 组装series
    inner.forEach((innerData, innerIndex) => {
      const tempSeries = cloneDeep(baseOption.series[0])
      tempSeries.data = innerData.map((item) => {
        const tempSeriesObj = handleTempSeriesObj(item)
        return tempSeriesObj
      })
      tempSeries.radius = tempSeries.radius.map((item) => {
        return `${parseFloat(item) + innerDiff * (innerIndex + 1)}%`
      })
      baseOption.series.push(tempSeries)
    })
    baseOption.series.forEach((i) => {
      i.label = { show: false }
      i.labelLine = { show: false }
    })
    // 组装legend
    const dataArray = [outer].concat(inner)
    const originLegend = baseOption.legend
    const legendOffset = legend.offset
    baseOption.legend = []
    dataArray.forEach((array, index) => {
      const tempLegend = cloneDeep(originLegend)
      const tempLegendData = array.map((item) => {
        return item.name
      })
      tempLegend.data = tempLegendData
      handleTempLegend(tempLegend, legendOffset, index)
      baseOption.legend.push(tempLegend)
    })
  }
}

export default handleMulti
