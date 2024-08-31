/** settings:
 * dimension	string		维度,默认 columns 第一项为维度
 * metrics	string		指标,默认 columns 第二项为指标
 * dataType	string		数据类型,可选值: KMB, normal, percent
 * legendLimit	number		legend 显示数量限制,legend 数量过多会导致饼图样式错误，限制 legend 最大值并且当超过此值时，隐藏 legend 可以解决这个问题
 * selectedMode	string		选中模式,可选值：single, multiple，默认为 false
 * hoverAnimation hover 	是否开启,在扇区上的放大动画效果	boolean	默认值为 true // aui有tiny没有
 * radius	number / string		饼图半径,支持数值和百分比
 * offsetY	number / string		纵向偏移量,支持数值和百分比
 * digit	number		设置数据类型为 percent 时保留的位数,默认为 2
 * roseType	string		显示为南丁格尔玫瑰图,默认不展示为南丁格尔玫瑰图，可设置为'radius', 'area'
 * label	object		饼图图形上的文本标签,内容参考文档
 * labelLine	object		标签的视觉引导线样式,内容参考文档
 * itemStyle	object		图形样式,内容参考文档
 * level	array		多圆饼图时设置,level 的值接受二维数组，例如：[['a', 'b'], ['c', 'd']], 表示的含义是内层展示的是维度中的'a', 'b'的指标加在一起组成的饼图，外层为'c', 'd'的指标加在一起组成的环图
 * limitShowNum	number		设置超过此数字时使用‘其他’代替,此时数据会按照由大到小顺序显示
 *
 * emphasis 高亮的扇区和标签样式。
 * percentShow label引导线边的文本显示百分比数据
 */

/** extra:
 * legendVisible  boolean 是否显示图例,true
 * tooltipVisible boolean 是否显示提示框,true
 */

import { deepCopy, getFormatted, itemPoint, itemLabel, itemContent, isDefined } from '@opentiny/vue-chart-core'

const PIE_RADIUS = 100
const RING_RADIUS = [90, 100]
const ROSE_RING_RADIUS = [20, 100]
const PIE_OFFSET = '50%'

const getTooltip = (args) => {
  const { dataType, digit, dimension, innerRows, limitShowNum, metrics, t } = args
  let { localeOther = t('ui.chart.other'), remainArr, sum = 0 } = {}
  let mapHandler = (row) => {
    sum += row[metrics]
    return { name: row[dimension], value: row[metrics] }
  }

  remainArr = innerRows.map(mapHandler).slice(limitShowNum, innerRows.length)

  let formatter = function (item) {
    let tplt = [itemPoint(item.color)]
    let percent

    if (!limitShowNum || item.name !== localeOther) {
      tplt.push(itemLabel(item.name))
      tplt.push(itemContent(getFormatted(item.value, dataType, digit)))
      tplt.push(itemContent(`(${item.percent}%)`))
    } else {
      tplt.push(localeOther + ':')

      remainArr.forEach(({ name, value }) => {
        percent = '(' + getFormatted(value / sum, 'percent') + ')'
        tplt.push(`<br>${itemLabel(name)}`)
        tplt.push(itemContent(getFormatted(value, dataType, digit)))
        tplt.push(itemContent(percent))
      })
    }

    return tplt.join('')
  }

  return formatter
}

const getLabel = (args) => {
  const { label, labelLine, percentShow, dataType, digit } = args
  let labelObj = {}

  if (label) {
    if (isDefined(label.show)) {
      labelObj.show = label.show
    }
    if (isDefined(label.formatter)) {
      labelObj.labelHtml = label.formatter
    }
  }
  if (percentShow) {
    labelObj.labelHtml = (params) => {
      let tplt = []
      tplt.push(`${params.name}:`)
      tplt.push(getFormatted(params.value, dataType, digit))
      tplt.push(`(${params.percent}%)`)
      return tplt.join('')
    }
  }

  if (labelLine) {
    if (isDefined(labelLine.show)) {
      labelObj.line = labelLine.show
    }
    let color
    if (labelLine && labelLine.lineStyle) {
      color = labelLine.lineStyle.color
    }
    if (isDefined(color)) {
      labelObj.lineColor = color
    }
    if (isDefined(labelLine.length)) {
      labelObj.distance = labelLine.length
    }
  }
  return labelObj
}

const getPosition = (args) => {
  const { radius, offsetY, level } = args
  const position = {}
  if (isDefined(offsetY)) {
    position.center = [PIE_OFFSET, offsetY]
  }
  if (Array.isArray(radius)) {
    position.radius = radius
  } else if (!level || level.length === 0) {
    position.radius = [0, radius]
  }
  return position
}

// 数据先转成{name,value}格式
const getInnerData = (args) => {
  const { dimension, metrics, innerRows } = args
  return innerRows.map((row) => {
    return {
      name: row[dimension],
      value: row[metrics]
    }
  })
}

const getDataOrSeries = (args) => {
  const { innerData, isRing, radius, level, limitShowNum, t } = args
  let series

  const getLimitData = (data) => {
    let tempData = data
    if (limitShowNum && limitShowNum < tempData.length) {
      // 多出数据合并为其他
      const remainArr = tempData.slice(limitShowNum, innerData.length)
      const sum = remainArr.reduce((a, c) => a + c.value, 0)
      tempData.splice(limitShowNum, Infinity, { name: t('ui.chart.other'), value: sum })
    }
    return tempData
  }

  const levelFlag = level && level.length
  if (levelFlag) {
    // level是个二维数组
    const levelObj = {}
    let maxLevel = 0
    let levelData = []
    level.forEach((levelItems, index) => {
      levelItems.forEach((item) => {
        if (levelObj[item] === undefined) {
          levelObj[item] = [index]
        } else {
          levelObj[item].push(index)
        }
        if (maxLevel < index + 1) {
          maxLevel = index + 1
        }
      })
    })
    levelData = Array.from({ length: maxLevel }, () => [])
    innerData.forEach((data) => {
      Array.isArray(levelObj[data.name]) &&
        levelObj[data.name].forEach((levelIdx) => {
          levelData[levelIdx].push({ ...data })
        })
    })

    let rowsCount = levelData.length
    let centerWidth = radius / rowsCount
    series = levelData.map((data, index) => {
      let itemRadius
      if (index === 0) {
        itemRadius = isRing ? radius : centerWidth
      } else {
        let outerWidth = centerWidth + (radius / (2 * rowsCount)) * (2 * index - 1)
        let innerWidth = outerWidth + radius / (2 * rowsCount)
        itemRadius = [outerWidth, innerWidth]
      }
      return {
        name: `PIE-${index}`,
        type: 'pie',
        radius: itemRadius,
        data: getLimitData(data)
      }
    })
  }

  return levelFlag ? { series } : { data: getLimitData(innerData) }
}

const getLegend = (args) => {
  const { dimension, innerRows, legendVisible, legendLimit, level, limitShowNum, innerData } = args
  if (!legendVisible) {
    return {
      show: false
    }
  }
  let { legend = [], levelTemp = [] } = {}
  if (level) {
    level.forEach((levelItem) => levelItem.forEach((item) => levelTemp.push(item)))
    legend = levelTemp
  } else if (limitShowNum && limitShowNum < innerRows.length) {
    for (let i = limitShowNum - 1; i >= 0; i--) {
      legend.unshift(innerRows[i][dimension])
    }
  } else {
    legend = innerRows.map((row) => row[dimension])
  }
  let show = false
  if (legend.length) {
    show = legend.length < legendLimit
  }

  if (level && level.length) {
    return {
      show,
      data: innerData
    }
  }

  return {
    show
  }
}

// ichart配置项
export const pie = (columns, rows, settings, extra, isRing) => {
  const innerRows = deepCopy(rows)

  const { dataType = 'normal', digit = 2, dimension = columns[0], emphasis } = settings

  const { itemStyle, label = false, labelLine, legendLimit = 30, legendName = {}, level = false } = settings

  const { limitShowNum = 0, metrics = columns[1], offsetY = PIE_OFFSET, percentShow } = settings

  const { roseType = false, selectedMode = false, hoverAnimation } = settings

  const { radius = isRing ? (roseType ? ROSE_RING_RADIUS : RING_RADIUS) : PIE_RADIUS } = settings

  const { legendVisible, tooltipVisible, t } = extra

  // 设置 limitShowNum 时，数据会按照由大到小顺序显示
  limitShowNum && innerRows.sort((a, b) => b[metrics] - a[metrics])

  // 数据先转成{name,value}格式
  const innerData = getInnerData({ dimension, metrics, innerRows })

  // 圆盘图类型
  const type = isRing ? 'circle' : 'pie'

  // 图表位置及大小
  const position = getPosition({ radius, offsetY, level })

  // 外侧文本配置
  const ichartLabel = getLabel({ label, labelLine, percentShow, dataType, digit })

  // 图例配置
  const ichartLegend = getLegend({ legendVisible, dimension, innerRows, legendLimit, level, limitShowNum })

  // 图表数据(必填)
  const dataOrSeries = getDataOrSeries({ innerData, isRing, radius, level, limitShowNum, t })

  // ichart 配置项
  let ichartOption = {
    legend: ichartLegend,
    type,
    position,
    label: ichartLabel,
    itemStyle,
    emphasis: emphasis || { scale: hoverAnimation === undefined ? true : hoverAnimation },
    roseType,
    selectedMode,
    ...dataOrSeries
  }

  // 悬浮提示框内容配置
  if (tooltipVisible) {
    const tipHtml = getTooltip({ dataType, innerRows, limitShowNum, digit, metrics, dimension, t })
    ichartOption.tipHtml = tipHtml
  } else {
    ichartOption.tooltip = {
      show: false
    }
  }

  let ichartExtend = {}
  if (label) {
    ichartExtend.label = label
  }
  if (labelLine) {
    ichartExtend.labelLine = labelLine
  }
  ichartOption.extend = { ...ichartExtend }

  return ichartOption
}
