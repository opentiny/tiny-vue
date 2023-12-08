import defendXSS from '../../util/defendXSS'
import chartToken from './chartToken'

/**
 * 给堆叠图的柱子中间加上空白缝隙, 处理柱子圆角的递进关系
 */
export function setStack(baseOption, iChartOption, legendData, seriesData) {
  const type = iChartOption.type
  if (type && type === 'stack') {
    // 添加堆叠图空白缝隙
    baseOption.series.forEach((item) => {
      item.itemStyle.borderWidth = chartToken.borderWidth
      item.itemStyle.borderColor = chartToken.borderColor
    })
    // 柱子圆角，上层数值为空时，圆角递进到下层
    const direction = iChartOption.direction
    iChartOption.data.forEach((item, i) => {
      for (let j = legendData.length - 1; j >= 0; j--) {
        const name = legendData[j]
        if (item[name]) {
          seriesData[name][i] = {
            value: seriesData[name][i],
            itemStyle: {
              borderRadius:
                direction === 'horizontal'
                  ? [0, chartToken.borderRadius, chartToken.borderRadius, 0]
                  : [chartToken.borderRadius, chartToken.borderRadius, 0, 0]
            }
          }
          break
        }
      }
    })
  }
}

/**
 * 将所有y轴的label都转为正数
 * 内置好转为正数的tooltip
 */
export function setDoubleSides(baseOption, iChartOption) {
  const type = iChartOption.type
  if (type && type === 'double-sides') {
    const yAxis = baseOption.yAxis
    yAxis.forEach((item) => {
      item.axisLabel.formatter = (value) => {
        return Math.abs(value)
      }
    })
    if (!baseOption.tooltip.formatter) {
      baseOption.tooltip.formatter = (params, ticket, callback) => {
        let html = ''
        params.forEach((item, index) => {
          if (index === 0) {
            html += `<div style="margin-bottom:4px;">${defendXSS(item.name)}</div>`
          }
          html += `<div>
                      <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
                        item.color
                      )};"></span>
                      <span style="margin-left:5px;color:#000000">
                          <span style="display:inline-block; margin-right:8px;min-width:48px;">${defendXSS(
                            item.seriesName
                          )}</span> 
                          <span style="font-weight:bold">${defendXSS(item.value ? Math.abs(item.value) : '-')}</span>
                      </span>
                  </div>`
        })
        return html
      }
    }
  }
}

/**
 * 设置柱状图的方向
 */
export function setDirection(baseOption, direction) {
  if (direction && direction === 'horizontal') {
    const temp = baseOption.xAxis
    baseOption.xAxis = baseOption.yAxis
    baseOption.yAxis = temp
  }
}
