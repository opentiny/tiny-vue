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

import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'

const getTooltip = () => ({
  trigger: 'item',
  formatter(item) {
    const tpl = []
    const { name, value, color, dataType } = item

    color && tpl.push(itemPoint(color))
    tpl.push(itemLabel(`${name}`, !value))
    if (dataType === 'node') {
      value && tpl.push(`${itemContent(value)}<br />`)
    }

    return tpl.join('')
  }
})

const getGraphSeries = () => [
  { type: 'graph', label: { textBorderWidth: 1, color: '#fff', textBorderColor: 'inherit' } }
]

export const graph = (columns, rows, settings, extra) => {
  const { tooltipVisible } = extra
  const tooltip = tooltipVisible && getTooltip({})
  const series = getGraphSeries()

  return { tooltip, series }
}
