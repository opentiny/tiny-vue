/**
 * Dimension	维度	string	默认 columns[0]
 * metrics	指标	array	默认 [columns[0], columns[1]]
 * dataType	数据类型	object	-
 * xAxisType	x 轴类型	string	可选值: category, value, time, log
 * xAxisName	x 轴标题	string	-
 * yAxisName	y 轴标题	string	-
 * digit	设置数据类型为 percent 时保留的位数	number	默认为 2
 * labelMap	设置指标的别名	object	-
 * legendName	设置图表上方图例的别名	object	-
 * tooltipTrigger	提示框的触发方式	string	可选值: item, axis
 * axisVisible	是否显示坐标轴	boolean	-
 * symbolSizeMax	气泡最大值	number	默认为 50
 * symbol	标记的图形	string	内容参考文档
 * symbolSize	标记的大小	number, array, Function	内容参考文档
 * symbolRotate	标记的旋转角度	number	内容参考文档
 * symbolOffset	标记相对于原本位置的偏移	array	内容参考文档
 * cursor	鼠标悬浮时在图形元素上时鼠标的样式	string	内容参考文档
 * scale	是否是脱离 0 值比例	boolean	-
 * min	y轴最小值	number	-
 * max	y轴最大值	number	-
 * label 图形上的文本标签，series-scatter. label
 * itemStyle 图形样式。series-scatter. itemStyle
 */

import { getFormatted, itemLabel, itemPoint, itemContent, isDefined } from '@opentiny/vue-huicharts-core'

const getLegend = (args) => {
  const { legendVisible, legendName } = args
  const formatter = (name) => (isDefined(legendName[name]) ? legendName[name] : name)

  return { show: legendVisible, formatter }
}

const getXAxis = (args) => {
  const { xAxisName, xAxisType } = args
  return {
    name: xAxisName,
    type: xAxisType
  }
}

const getYAxis = (args) => {
  const { min, max, scale, yAxisName, dataType, metrics, digit } = args
  function formatter(val) {
    return getFormatted(val, dataType[metrics[0]], digit)
  }

  return {
    name: yAxisName,
    type: 'value',
    scale,
    min,
    max,
    axisTick: { show: false },
    axisLabel: { show: true, formatter }
  }
}

const getDataFromArray = (args) => {
  const { dimension, metrics, columns, rows, symbolSize, symbolSizeMax } = args
  const extraMetrics = columns.filter((col) => col !== dimension && metrics.findIndex((m) => m === col) < 0)
  const newMetrics = [...metrics, ...extraMetrics]
  const result = {}
  const numbers = {} // 记录同类型最大的数值
  newMetrics.forEach((keyname) => {
    result[keyname] = []
    numbers[keyname] = 0
  })
  rows.forEach((item) => {
    newMetrics.forEach((keyname) => {
      if (numbers[keyname] < item[keyname]) {
        numbers[keyname] = item[keyname]
      }

      result[keyname].push([item[dimension], item[keyname], symbolSize, keyname, keyname])
    })
  })
  if (!symbolSize) {
    // 根据最大值计算气泡半径
    newMetrics.forEach((keyname) => {
      result[keyname].forEach((item) => {
        item[2] = Math.ceil((item[1] / numbers[keyname]) * symbolSizeMax)
      })
    })
  }

  return result
}

const getData = (args) => {
  const { dimension, metrics, columns, rows, symbolSize, symbolSizeMax } = args
  const extraMetrics = columns.filter((col) => col !== dimension && metrics.findIndex((m) => m === col) < 0)
  // [维度:X轴数据，指标1:Y轴数据，气泡半径维度(symbolSize或者指标2转换), 数据名称, 数据分组, 指标2，...其他指标]
  const newColumns = [dimension, metrics[0], 'size', 'name', 'group', metrics[1], ...extraMetrics]
  const result = {}
  let maxNumber = 0
  for (const [key, value] of Object.entries(rows)) {
    result[key] = []
    value.forEach((item, index) => {
      if (maxNumber < item[metrics[1]]) {
        // 获取半径最大值
        maxNumber = item[metrics[1]]
      }

      const itemArr = []
      newColumns.forEach((col, colIdx) => {
        if (colIdx === 2) {
          // 气泡半径维度
          itemArr.push(symbolSize)
        } else if (colIdx === 3) {
          // 数据名称
          itemArr.push(metrics[0])
        } else if (colIdx === 4) {
          // 数据分组
          itemArr.push(key)
        } else {
          itemArr.push(item[col])
        }
      })
      result[key][index] = itemArr
    })
  }

  if (!symbolSize) {
    // 气泡没有指定半径时，根据metrics[1]数据转换
    Object.values(result).forEach((group) => {
      group.forEach((item) => {
        item[2] = Math.ceil((item[5] / maxNumber) * symbolSizeMax)
      })
    })
  }

  return result
}

const getTooltip = (args) => {
  const { tooltipTrigger } = args
  const { labelMap, columns, dataType, digit } = args

  const getTipContent = (item) => {
    const { color, seriesName, data } = item
    const template = []
    template.push(`${itemPoint(color)} ${seriesName}<br>`)
    const tipData = [...data]
    tipData.splice(2, 3) // 移除数据中的气泡半径, 数据名称, 数据分组
    tipData.forEach((d, i) => {
      const name = labelMap[columns[i]] || columns[i]
      const num = isNaN(d) ? d : getFormatted(d, dataType[columns[i]], digit)
      template.push(`${itemLabel(name)}${itemContent(num)}<br>`)
    })
    return template.join('')
  }

  const formatter = (params) =>
    Array.isArray(params) ? params.map((i) => getTipContent(i)).join('') : getTipContent(params)

  return { trigger: tooltipTrigger, formatter }
}

export const scatter = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = [columns[1], columns[2]], dataType = {} } = settings
  const { xAxisType = 'category', xAxisName, yAxisName, digit = 2, legendName = {} } = settings
  const { labelMap = {}, tooltipTrigger = 'item', axisVisible = true, symbolSizeMax = 50, symbol } = settings
  const { symbolSize, symbolRotate, symbolOffset, cursor, min, max, scale, label, itemStyle } = settings
  const { tooltipVisible, legendVisible, color } = extra

  const baseObj = { dimension, metrics, columns, rows, symbolSize, symbolSizeMax }
  let data = []
  let tooltipGroup = []
  if (Array.isArray(rows)) {
    data = getDataFromArray(baseObj)
  } else {
    data = getData(baseObj)
    tooltipGroup = []
  }

  const legend = getLegend({ legendVisible, legendName })

  const ichartOption = {
    data,
    bubbleSize: [10, symbolSizeMax],
    emphasis: {
      label: {
        show: false
      }
    },
    legend,
    xAxisType,
    symbol,
    symbolRotate,
    symbolOffset,
    cursor,
    label,
    itemStyle
  }

  if (tooltipVisible) {
    ichartOption.tooltip = getTooltip({ tooltipTrigger, labelMap, columns, dataType, digit })
  } else {
    ichartOption.tooltip = { show: false }
  }

  // 是否显示坐标轴
  if (axisVisible) {
    const xAxis = getXAxis({ xAxisName, axisVisible, xAxisType, dimension, rows })
    const yAxis = getYAxis({ min, max, scale, yAxisName, dataType, metrics, digit })
    Object.assign(ichartOption, { xAxis, yAxis })
  } else {
    Object.assign(ichartOption, {
      xAxis: { show: false },
      yAxis: { show: false }
    })
  }

  return ichartOption
}
