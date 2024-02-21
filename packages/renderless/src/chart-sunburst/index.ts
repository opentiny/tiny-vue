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
    const { name, value, color } = item

    if (name) {
      color && tpl.push(itemPoint(color))
      tpl.push(`${itemLabel('label')}${itemContent(name)}`)
      tpl.push('<br>')
    }

    color && tpl.push(itemPoint(color))
    tpl.push(`${itemLabel('sum')}${itemContent(value)}`)

    return tpl.join('')
  }
})

export const sunburst = (columns, rows, settings, extra) => {
  const defaultItemStyle = { borderWidth: 2 }

  const series = { type: 'sunburst', itemStyle: defaultItemStyle }

  const { tooltipVisible } = extra

  const tooltip = tooltipVisible && getTooltip({})

  let options = { series, tooltip }

  return options
}
