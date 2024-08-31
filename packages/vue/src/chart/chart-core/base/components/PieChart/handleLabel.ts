import merge from '../../util/merge'
import chartToken from './chartToken'

function handleLabel(hasLabel, seriesUnit) {
  if (hasLabel) {
    seriesUnit.label = merge({ color: chartToken.labelColor, fontSize: chartToken.fontSize }, seriesUnit.label)
  } else {
    seriesUnit.label = { show: false }
  }
}

function handleLabelLine(hasLabelLine, seriesUnit, label) {
  const lineColor = label?.lineColor
  const lineLength = label?.distance ?? chartToken.distance
  if (hasLabelLine) {
    seriesUnit.labelLine = merge(
      {
        show: true,
        lineStyle: {
          color: lineColor || chartToken.labelLineColor
        },
        smooth: 0.3,
        length: lineLength,
        length2: lineLength
      },
      seriesUnit.labelLine
    )
  } else {
    seriesUnit.labelLine = {
      show: false,
      length: lineLength,
      length2: lineLength
    }
  }
}

function hasLabelFormatterFun(labelFormatterType, seriesUnit, sum) {
  switch (labelFormatterType) {
    case 'percent':
      seriesUnit.label.formatter = (params) => {
        if (params.value === 0) {
          return '0(0 %)'
        } else {
          return `${params.value}(${Math.round(((params.value * 100) / sum) * 100) / 100} %)`
        }
      }
      break
    case 'value':
      seriesUnit.label.formatter = (params) => {
        return `${params.value}`
      }
      break
    default:
      break
  }
}

function handleLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum) {
  if (hasLabel && hasLabelFormatter) {
    seriesUnit.label.formatter = hasLabelFormatter
  } else {
    hasLabelFormatterFun(labelFormatterType, seriesUnit, sum)
  }
}

/**
 * 配置圆盘图的label
 */
function setLabel(seriesUnit, label, data) {
  const hasLabel = !(label && label.show === false)
  const hasLabelLine = !(label && label.line === false)
  const hasLabelFormatter = label && label.labelHtml
  const labelFormatterType = (label && label.type) || ''
  let sum = data.reduce((x, y) => ({ value: x.value + y.value }), { value: 0 })
  sum = sum.value
  handleLabel(hasLabel, seriesUnit, label)
  handleLabelLine(hasLabelLine, seriesUnit, label)
  handleLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum)
  // 合并label其他属性
  merge(seriesUnit.label, label)
}

export default setLabel
