/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { getFormated, setArrayValue, cloneDeep } from '../chart-core/deps/utils'
import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'
import { isNull } from '../common/type'

const pieRadius = 100
const ringRadius = [90, 100]
const roseRingRadius = [20, 100]
const pieOffsetY = '50%'

const modifySeries = ({ series, limitShowNum, t }) => {
  let firstSerie = series[0]

  if (limitShowNum && limitShowNum < firstSerie.data.length) {
    let firstSerieData = firstSerie.data
    let remainArr = firstSerieData.slice(limitShowNum, firstSerieData.length)
    let sum = 0

    remainArr.forEach((item) => (sum += item.value))

    firstSerie.data = firstSerieData.slice(0, limitShowNum)
    firstSerie.data.push({ name: t('ui.chart.other'), value: sum })
  }
}

const getPieSeries = (args) => {
  const { dataType, digit, dimension, emphasis, innerRows, isRing, itemStyle, label, labelLine } = args
  const { level, limitShowNum, metrics, offsetY, percentShow, radius, roseType, selectedMode, t } = args

  let { series = [], levelTemp = {}, rowsTemp = [] } = {}

  if (!level) {
    rowsTemp.push(innerRows)
  } else {
    level.forEach((levelItems, index) => levelItems.forEach((item) => setArrayValue(levelTemp, item, index)))

    innerRows.forEach((row) => {
      let itemLevel = levelTemp[row[dimension]]

      if (itemLevel && itemLevel.length) {
        itemLevel.forEach((levelItem) => setArrayValue(rowsTemp, levelItem, row))
      }
    })
  }

  let serieBase = { type: 'pie', selectedMode, emphasis, roseType, center: ['50%', offsetY] }
  let rowsCount = rowsTemp.length
  let centerWidth = radius / rowsCount

  rowsTemp.forEach((dataRows, index) => {
    let serie = { data: [], ...serieBase }

    if (!index) {
      serie.radius = isRing ? radius : centerWidth
    } else {
      let outerWidth = centerWidth + (radius / (2 * rowsCount)) * (2 * index - 1)
      let innerWidth = outerWidth + radius / (2 * rowsCount)

      serie.radius = [outerWidth, innerWidth]
    }

    rowsCount > 1 && index === 0 && (serie.label = { position: 'inner' })
    serie.label = { color: '#191919', ...label }

    serie.labelLine = { smooth: true, lineStyle: { color: '#bbb' }, ...labelLine }

    serie.itemStyle = { borderWidth: 2, borderColor: '#fff', ...itemStyle }

    if (percentShow) {
      let position = rowsCount > 1 && index === 0 ? 'inner' : 'outside'
      let formatter = function (item) {
        let tplt = []

        tplt.push(`${item.name}:`)
        tplt.push(getFormated(item.value, dataType, digit))
        tplt.push(`(${item.percent}%)`)

        return tplt.join('')
      }

      serie.label = { normal: { show: true, position, formatter } }
    }

    serie.data = dataRows.map((row) => ({ name: row[dimension], value: row[metrics] }))

    series.push(serie)
  })

  modifySeries({ series, limitShowNum, t })

  return series
}

const getPieLegend = (args) => {
  const { dimension, innerRows, legendLimit, legendName, level, limitShowNum, t } = args
  let { legend = [], levelTemp = [] } = {}

  if (level) {
    level.forEach((levelItem) => levelItem.forEach((item) => levelTemp.push(item)))

    legend = levelTemp
  } else if (limitShowNum && limitShowNum < innerRows.length) {
    for (let i = limitShowNum - 1; i >= 0; i--) {
      legend.unshift(innerRows[i][dimension])
    }

    legend.push(t('ui.chart.other'))
  } else {
    legend = innerRows.map((row) => row[dimension])
  }

  if (legend.length) {
    let show = legend.length < legendLimit
    let formatter = function (name) {
      return !isNull(legendName[name]) ? legendName[name] : name
    }

    return { data: legend, show, formatter }
  } else {
    return false
  }
}

const getPieTooltip = (args) => {
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
      tplt.push(itemContent(getFormated(item.value, dataType, digit)))
      tplt.push(itemContent(`(${item.percent}%)`))
    } else {
      tplt.push(localeOther + ':')

      remainArr.forEach(({ name, value }) => {
        percent = getFormated(value / sum, 'percent')

        tplt.push(`<br>${itemLabel(name)}`)
        tplt.push(itemContent(getFormated(value, dataType, digit)))
        tplt.push(itemContent(percent))
      })
    }

    return tplt.join('')
  }

  return { formatter }
}

export const pie = (columns, rows, settings, extra, isRing) => {
  const innerRows = cloneDeep(rows)
  const { dataType = 'normal', digit = 2, dimension = columns[0], emphasis = { scale: true } } = settings
  const { itemStyle, label = false, labelLine, legendLimit = 30, legendName = {}, level = false } = settings
  const { limitShowNum = 0, metrics = columns[1], offsetY = pieOffsetY, percentShow } = settings
  const { roseType = false, selectedMode = false } = settings
  const { radius = isRing ? (roseType ? roseRingRadius : ringRadius) : pieRadius } = settings
  const { legendVisible, t, tooltipVisible } = extra

  limitShowNum && innerRows.sort((a, b) => b[metrics] - a[metrics])

  const seriesParams = { dataType, digit, dimension, emphasis, innerRows, isRing, itemStyle }

  Object.assign(seriesParams, { label, labelLine, legendName, level, limitShowNum, metrics, offsetY })
  Object.assign(seriesParams, { percentShow, radius, roseType, selectedMode, t })

  const series = getPieSeries(seriesParams)
  const legendParams = { dimension, innerRows, legendLimit, legendName, level, limitShowNum, t }
  const legend = legendVisible && getPieLegend(legendParams)
  const pieTooltip = getPieTooltip({ dataType, innerRows, limitShowNum, digit, metrics, dimension, t })
  const tooltip = tooltipVisible && pieTooltip
  const options = { legend, series, tooltip }

  return options
}

export const ring = (columns, rows, settings, extra) => pie(columns, rows, settings, extra, true)
