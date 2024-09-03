import { itemPoint, itemLabel, itemContent } from '@opentiny/vue-huicharts-core'

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

  return { tooltip, series, topHtml: tooltip.formatter }
}
