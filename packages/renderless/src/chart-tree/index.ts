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

import { isObject } from '@opentiny/vue-renderless/chart-core/deps/utils'
import { itemLabel, itemContent, SAAS_DEFAULT_COLORS_10 } from '@opentiny/vue-renderless/chart-core/deps/constants'

const getTreeLegend = (args) => {
  const { dimension, rows } = args
  const result = rows.map((row) => row[dimension])

  return { data: result }
}

const getTreeTooltip = (args) => {
  const { tooltipFormatter } = args

  return {
    trigger: 'item',
    triggerOn: 'mousemove',
    formatter(item) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      let template = []
      const { treeAncestors, value } = item
      let names = []
      treeAncestors.forEach((ancestor, idx) => {
        idx && names.push(ancestor.name)
      })
      template.push(`${itemLabel(names.join('.'))}`)
      template.push(`${itemContent(value)}`)

      return template.join('')
    }
  }
}

const getTreeSeries = (args) => {
  const { dimension, metrics, rows, seriesMap } = args
  const series = []

  rows.forEach((row) => {
    const seriesItem = seriesMap[row[dimension]]
    const label = { position: 'right', fontSize: 12, color: '#191919' }
    const itemStyle = { color: SAAS_DEFAULT_COLORS_10[0] }
    const lineStyle = { color: 'rgba(25 ,25 ,25 , 0.10)' }
    const symbolSize = 16
    const result = { type: 'tree', name: row[dimension], data: row[metrics], itemStyle, label, lineStyle, symbolSize }

    if (seriesItem) {
      Object.keys(seriesItem).forEach((key) => {
        if (!isObject(result[key])) {
          result[key] = seriesItem[key]
        } else {
          Object.assign(result[key], seriesItem[key])
        }
      })
    }

    series.push(result)
  })

  return series
}

export const tree = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns[1], seriesMap = {} } = settings
  const { legendVisible, tooltipFormatter, tooltipVisible } = extra
  const seriesParam = { dimension, metrics, rows, seriesMap }
  const series = getTreeSeries(seriesParam)
  const legendParam = { dimension, rows }
  const legend = legendVisible && rows.length > 1 && getTreeLegend(legendParam)
  const tooltip = tooltipVisible && getTreeTooltip({ tooltipFormatter })

  return { series, legend, tooltip }
}
