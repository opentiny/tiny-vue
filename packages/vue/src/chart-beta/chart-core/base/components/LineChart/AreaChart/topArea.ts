import * as echarts from 'echarts'
import max from '../../../util/sort/max'
import { isNumber } from '../../../util/type'
import { getColor, codeToRGB } from '../../../util/color'
import chartToken from './chartToken'

/**
 * 为series添加areaStyle
 */
function topArea(baseOption, iChartOption, YAxiMin) {
  // 添加默认areaStyle
  defaultArea(baseOption, iChartOption, YAxiMin)
  // 添加markLine的areaStyle
  markLineArea(baseOption, iChartOption, YAxiMin)
  // 添加split的areaStyle
  splitArea(baseOption, iChartOption, YAxiMin)
}

function splitArea(baseOption, iChartOption, YAxiMin) {
  if (iChartOption.area && iChartOption.splitLine) {
    const colors = baseOption.color
    const splitLine = iChartOption.splitLine
    baseOption.series.forEach((item, index) => {
      const maxValue = max(item.data)
      const color = getColor(colors, index)
      const colorTo = codeToRGB(color, 0.15)
      const colorFrom = codeToRGB(color, 0.15)
      const percent = (maxValue - splitLine) / (maxValue - YAxiMin)
      item.areaStyle = {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: colorFrom },
            { offset: percent, color: colorTo },
            { offset: percent + 0.00001, color: chartToken.colorAreaTP },
            { offset: 1, color: chartToken.colorAreaTP }
          ]
        }
      }
    })
  }
}

function markLineArea(baseOption, iChartOption, YAxiMin) {
  if (
    iChartOption.area &&
    iChartOption.markLine &&
    iChartOption.markLine.top &&
    isNumber(iChartOption.markLine.top) &&
    iChartOption.markLine.topChangeColor !== false
  ) {
    const colors = baseOption.color
    const markLine = iChartOption.markLine
    const topColor = codeToRGB(markLine.topColor, 0.15) || chartToken.errorColor
    baseOption.series.forEach((item, index) => {
      const maxValue = max(item.data)
      const color = getColor(colors, index)
      const colorTo = codeToRGB(color, 0)
      const colorFrom = codeToRGB(color, 0.15)
      const percent = (maxValue - markLine.top) / (maxValue - YAxiMin)
      if (maxValue > markLine.top) {
        item.areaStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: topColor
              },
              {
                offset: percent,
                color: topColor
              },
              {
                offset: percent + 0.00001,
                color: colorFrom
              },
              {
                offset: 1,
                color: colorTo
              }
            ]
          }
        }
      }
    })
  }
}

function defaultArea(baseOption, iChartOption, YAxiMin) {
  if (iChartOption.area) {
    const colors = baseOption.color
    baseOption.series.forEach((item, index) => {
      const color = getColor(colors, index)
      const colorTo = codeToRGB(color, 0)
      const colorFrom = codeToRGB(color, 0.15)
      item.areaStyle = {
        opacity: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: colorFrom
          },
          {
            offset: 1,
            color: colorTo
          }
        ])
      }
    })
  }
}

export default topArea
