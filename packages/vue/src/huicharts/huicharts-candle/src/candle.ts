/**
 * Dimension	维度	string	默认为 columns[0]
 * metrics	指标	array	默认为 [columns[1] ~ columns[5]]
 * digit	设置数据类型为 percent 时保留的位数	number	默认为 2
 * itemStyle	图形样式	object	内容参考文档
 * labelMap	设置指标的别名	object	-
 * legendName	设置图表上方图例的别名	object	-
 * showMA	是否展示移动平均线指标	boolean	默认 为 false
 * MA	移动平均线指标周期	array	默认 [5, 10, 20, 30]
 * showVol	是否展示成交量	boolean	默认为 false
 * downColor	下降颜色	string	默认为 #ec0000
 * upColor	上升颜色	string	默认为 #00da3c
 * showDataZoom	是否展示 dataZoom 控件	boolean	默认为 false
 * start	dataZoom 控件的起始位置	number	默认为 50，即中间位置
 * end	dataZoom 控件的结束位置	number	默认为 100，即末尾位置
 * dataType	数据展示格式	string	可选值: KMB, normal, percent
 */

import { getFormatted, itemPoint, itemLabel, itemContent } from '@opentiny/vue-huicharts-core'

const isNull = (x) => x === null || x === undefined
let defaultKName = ''

const getLegend = (args) => {
  const { legendVisible } = args
  if (!legendVisible) {
    return {
      show: false
    }
  }

  const { MA, labelMap, legendName, showMA } = args
  let data = [defaultKName]

  showMA && (data = data.concat(MA.map((v) => `MA${v}`)))
  data = data.map((v) => ({
    name: v
  }))
  const formatter = (name) => {
    const temp = labelMap[name] // 别名替换
    return isNull(legendName[name]) ? (isNull(temp) ? name : temp) : legendName[name]
  }

  return { show: true, data, formatter }
}

const getTooltip = (args) => {
  const { dataType, digit, labelMap, metrics } = args

  const position = (pos, params, dom, rect, size) => {
    const result = { top: 10 }
    const side = pos[0] < size.viewSize[0] / 2 ? 'right' : 'left'
    result[side] = 60
    return result
  }

  const formatter = (options) => {
    const tplt = []

    tplt.push(`${itemContent(options[0].axisValue)}<br>`)

    options.forEach((opt) => {
      const { color, componentSubType, data, seriesName } = opt

      const name = isNull(labelMap[seriesName]) ? seriesName : labelMap[seriesName]

      tplt.push(`${itemPoint(color)}${itemLabel(name)}: `)

      if (componentSubType === 'candlestick') {
        tplt.push('<br>')

        metrics.slice(0, 4).forEach((m, i) => {
          const name = isNull(labelMap[m]) ? m : labelMap[m]
          const value = getFormatted(data[i + 1], dataType, digit)

          tplt.push(`${itemLabel(`- ${name}`)}${itemContent(value)}<br>`)
        })
      } else if (componentSubType === 'line') {
        const value = getFormatted(data, dataType, digit)
        tplt.push(`${itemContent(value)}<br>`)
      } else if (componentSubType === 'bar') {
        const value = getFormatted(data[1], dataType, digit)
        tplt.push(`${itemContent(value)}<br>`)
      }
    })
    return tplt.join('')
  }

  return { axisPointer: { type: 'cross' }, formatter, position, trigger: 'axis' }
}

const getData = (args) => {
  const { rows, dimension, metrics } = args

  return rows.map((item) => {
    if (Array.isArray(item)) {
      const newKeys = metrics.map((keyname) => (keyname === 'vol' ? 'volume' : keyname))
      newKeys.unshift(dimension)
      return {
        [newKeys[0]]: item[0],
        [newKeys[1]]: item[1],
        [newKeys[2]]: item[2],
        [newKeys[3]]: item[3],
        [newKeys[4]]: item[4],
        [newKeys[5]]: item[5]
      }
    }

    return {
      [dimension]: item[dimension],
      open: item[metrics[0]],
      close: item[metrics[1]],
      lowest: item[metrics[2]],
      highest: item[metrics[3]],
      volume: item[metrics[4]]
    }
  })
}

export const candle = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns.slice(1, 6), digit = 2, itemStyle } = settings
  const { labelMap = {}, legendName = {}, MA = [5, 10, 20, 30], showMA = false, showVol = false } = settings
  const { showDataZoom = false, downColor = '#eb171f', upColor = '#00a874' } = settings
  const { start = 50, end = 100, dataType } = settings
  const { tooltipVisible, legendVisible, t } = extra

  defaultKName = t('ui.chart.kName')

  const data = getData({ dimension, metrics, rows })

  const legend = getLegend({ legendVisible, MA, labelMap, legendName, showMA })

  const ichartOption = {
    legend,
    MA: showMA ? MA : [],
    volume: showVol,
    data,
    upColor,
    downColor
  }

  if (tooltipVisible) {
    ichartOption.tooltip = getTooltip({ dataType, digit, labelMap, metrics })
  }

  if (showDataZoom) {
    ichartOption.dataZoom = {
      show: true,
      start,
      end
    }
  }

  return ichartOption
}
