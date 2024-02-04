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

import { getFormated, isObject } from '../chart-core/deps/utils'
import { isNull } from '../common/type'
import { itemLabel, itemContent } from '../chart-core/deps/constants'

const getTooltip = (args) => {
  const { dataType, digit, tooltipFormatter } = args

  return {
    formatter(options) {
      if (tooltipFormatter) {
        // eslint-disable-next-line prefer-spread, prefer-rest-params
        return tooltipFormatter.apply(null, arguments)
      }

      const tpl = []
      const { seriesName, data } = options
      const { value, name } = data

      tpl.push(`${itemLabel(seriesName)}`)
      tpl.push(`${itemContent(getFormated(value, dataType[seriesName], digit))} ${name}`)

      return tpl.join('')
    }
  }
}

const getPoint = () => ({
  show: false,
  width: 10,
  length: 10,
  icon: 'path://M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
  offsetCenter: [0, '-106%'],
  itemStyle: { color: 'auto' }
})

function getSeries(args) {
  const { dataName, dataType, digit, dimension, labelMap, metrics, rows, seriesMap } = args

  const series = rows.map((row) => {
    const label = row[dimension]
    const seriesItem = seriesMap[label]

    const formatter2 = function (value) {
      return getFormated(value, dataType[label], digit)
    }

    const result = {
      type: 'gauge',
      name: !isNull(labelMap[label]) ? labelMap[label] : label,
      data: [{ name: dataName[label] || '', value: row[metrics] }],
      detail: {
        fontSize: 60,
        color: '#191919',
        offsetCenter: [0, 0],
        valueAnimation: true,
        formatter: !dataType
          ? '{value}'
          : (value) => {
              const res = getFormated(value, dataType[label], digit)
              return dataType[label] === 'percent' ? res.split('%')[0] + '{percent|%}' : res
            },
        rich: { percent: { fontSize: 12, color: '#4e4e4e', padding: [0, 0, -20, 0] } }
      },
      axisLabel: { formatter: formatter2 },
      itemStyle: { color: '#6D8FF0' },
      pointer: getPoint(),
      axisLine: { roundCap: true, lineStyle: { width: 8, color: [[1, 'rgba(25,25,25,0.1)']] } },
      progress: { show: true, roundCap: true, width: 8, color: '#6D8FF0' },
      axisTick: { show: false },
      splitLine: { length: 8, distance: 0, lineStyle: { width: 1, color: 'rgba(25,25,25,0.1)' } },
      title: { offsetCenter: [0, '25%'], color: '#191919', fontSize: 14 }
    }

    if (seriesItem) {
      Object.keys(seriesItem).forEach((key) =>
        isObject(result[key]) ? Object.assign(result[key], seriesItem[key]) : (result[key] = seriesItem[key])
      )
    }

    return result
  })

  return series
}

export const gauge = (columns, rows, settings, extra) => {
  const { dataName = {}, dataType = {}, digit = 2, labelMap = {} } = settings
  const { dimension = columns[0], metrics = columns[1], seriesMap = {} } = settings
  const { tooltipFormatter, tooltipVisible } = extra
  const tooltip = tooltipVisible && getTooltip({ tooltipFormatter, dataType })
  const seriesParams = { rows, dimension, metrics, digit, dataType, labelMap, seriesMap, dataName }
  const series = getSeries(seriesParams)

  return { tooltip, series }
}
