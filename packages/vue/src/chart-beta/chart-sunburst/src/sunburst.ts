import { itemPoint, itemLabel, itemContent } from '@opentiny/vue-chart-core-beta'

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

  let options = { series, tooltip, topHtml: tooltip.formatter }

  return options
}
