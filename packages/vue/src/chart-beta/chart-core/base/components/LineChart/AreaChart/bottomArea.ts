import min from '../../../util/sort/min'
import { isNumber } from '../../../util/type'
import { defaultFormatter } from '../handleOptipn'
import { getColor, codeToRGB } from '../../../util/color'
import chartToken from './chartToken'

/**
 * 为series添加areaStyle
 */
function bottomArea(baseOption, iChartOption, YAxiMax) {
  // 添加markLine的areaStyle
  markLineArea(baseOption, iChartOption, YAxiMax)
  // 添加split的areaStyle
  splitArea(baseOption, iChartOption, YAxiMax)
  // tooltip屏蔽假的同名Series
  formatter(baseOption, iChartOption)
}

function markLineArea(baseOption, iChartOption, YAxiMax) {
  if (
    iChartOption.area &&
    iChartOption.markLine &&
    iChartOption.markLine.bottom &&
    isNumber(iChartOption.markLine.bottom)
  ) {
    const temp = []
    baseOption.series.forEach((item) => {
      const bottomColor = codeToRGB(iChartOption.markLine.bottomColor, 0.15) || chartToken.colorError
      const minValue = min(item.data)
      const percent = (iChartOption.markLine.bottom - minValue) / (YAxiMax - minValue)
      if (iChartOption.markLine.bottom >= minValue) {
        // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
        const newSeries = pureBottomArea(item, percent, bottomColor)
        temp.push(newSeries)
      }
    })
    baseOption.series = baseOption.series.concat(temp)
  }
}

/**
 * 为series添加split分割区域的底部areaStyle,
 */
function splitArea(baseOption, iChartOption, YAxiMax) {
  if (iChartOption.area && iChartOption.splitLine) {
    const temp = []
    const colors = baseOption.color
    baseOption.series.forEach((item, index) => {
      const minValue = min(item.data)
      const percent = (iChartOption.splitLine - minValue) / (YAxiMax - minValue)
      const color = getColor(colors, index)
      const colorTo = codeToRGB(color, 0.15)
      const colorFrom = codeToRGB(color, 0.15)
      // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
      const newSeries = gradientBottomArea(item, percent, colorTo, colorFrom)
      temp.push(newSeries)
    })
    baseOption.series = baseOption.series.concat(temp)
  }
}

// 创建一个渐变色-同名的Series，用来显示分割渐变区域
function gradientBottomArea(item, percent, colorTo, colorFrom) {
  const newSeries = {
    type: item.type,
    name: item.name,
    data: item.data,
    smooth: item.smooth,
    step: item.step,
    lineStyle: {
      width: 0
    },
    symbol: 'none',
    areaStyle: {
      origin: 'end',
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: chartToken.colorAreaTP
          },
          {
            offset: 1 - percent - 0.00001,
            color: chartToken.colorAreaTP
          },
          {
            offset: 1 - percent,
            color: colorTo
          },
          {
            offset: 1,
            color: colorFrom
          }
        ]
      }
    }
  }
  return newSeries
}

// 创建一个纯色-同名Series，用来显示红色阈值区域
function pureBottomArea(itemx, percentx, bottomColorx) {
  const seriesObj = {
    type: itemx.type,
    name: itemx.name,
    data: itemx.data,
    smooth: itemx.smooth,
    step: itemx.step,
    symbol: 'none',
    areaStyle: {
      color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: chartToken.colorAreaTP
          },
          {
            offset: 1 - percentx - 0.00001,
            color: chartToken.colorAreaTP
          },
          {
            offset: 1 - percentx,
            color: bottomColorx
          },
          {
            offset: 1,
            color: bottomColorx
          }
        ],
        type: 'linear'
      },
      origin: 'end'
    },
    lineStyle: {
      width: 0
    }
  }
  return seriesObj
}

/**
 * 面积图的bottom阈值区域功能是使用植入假的同名Series来实现的
 * 因此在 tooltip 中应该被屏蔽这些假的同名Series
 */
function formatter(baseOption, iChartOption) {
  if (iChartOption.area) {
    if (
      iChartOption.splitLine ||
      (iChartOption.markLine && iChartOption.markLine.bottom && isNumber(iChartOption.markLine.bottom))
    ) {
      const dataLength = baseOption.legend.data.length
      const tipFormatter = baseOption.tooltip.formatter
      baseOption.tooltip.formatter = (params, ticket, callback) => {
        if (tipFormatter) {
          return tipFormatter(params.slice(0, dataLength), ticket, callback)
        } else {
          return defaultFormatter(params, dataLength)
        }
      }
    }
  }
}

export default bottomArea
