/**
 * Dimension	维度	String	默认 columns[0]
 * metrics	指标	String	默认 columns[1]
 * sizeMin	最小字体大小	Number	默认为 12
 * sizeMax	最大字体大小	Number	默认为 60
 * shape	词云图的形状	String	默认为 circle，可选值有 cardioid、 diamond、triangle-forward、triangle、pentagon、star 等
 * color	词云图字体颜色	Array[String], String, Function	默认为 "rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"
 */

import { itemLabel, itemContent } from '@opentiny/vue-chart-core'

const getTooltip = (args) => {
  const { tooltipFormatter } = args
  function formatter(params) {
    const { data } = params
    const { name, value } = data
    if (tooltipFormatter) {
      return tooltipFormatter(...params)
    }

    return `${itemLabel(name)}${itemContent(value)}`
  }

  return formatter
}

const shapeSquare = (theta) => Math.min(1 / Math.abs(Math.cos(theta)), 1 / Math.abs(Math.sin(theta)))

const getData = (args) => {
  const { dimension, metrics, rows } = args
  return rows.slice().map((row) => ({
    name: row[dimension],
    value: row[metrics]
  }))
}

const getWordColor = (args) => {
  const { color, colors } = args
  const tempColor = color || colors

  if (Array.isArray(tempColor) && tempColor.length) {
    const textColor = (word) => tempColor[word.dataIndex % tempColor.length]
    return { textColor }
  }

  if (!Array.isArray(tempColor) && Boolean(tempColor)) {
    return { color: tempColor }
  }

  return `rgb(${Math.round(Math.random() * 160)},${Math.round(Math.random() * 160)},${Math.round(Math.random() * 160)})`
}

export const wordcloud = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns[1] } = settings
  const { sizeMax = 60, sizeMin = 12, shape, color = '' } = settings
  const { tooltipVisible, tooltipFormatter, color: colors } = extra

  const data = getData({ dimension, metrics, rows })
  const wordColors = getWordColor({ color, colors })

  const ichartOptions = {
    sizeRange: [sizeMin, sizeMax],
    shape: shape || shapeSquare,
    data,
    ...wordColors
  }

  if (tooltipVisible) {
    ichartOptions.tipHtml = getTooltip({ tooltipFormatter })
  }

  return ichartOptions
}
