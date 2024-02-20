import base from './base'
import merge from '../../../util/merge'

function datazoom(iChartOption) {
  const theme = iChartOption.theme
  const self = iChartOption.dataZoom
  const dataZoom = base(theme)
  const { show, position, start, end, startValue, endValue, style, zoomOnMouseWheel, height } = self
  if (show) {
    end && (dataZoom[0].end = end)
    start && (dataZoom[0].start = start)
    if (startValue !== undefined) {
      delete dataZoom[0].start
      dataZoom[0].startValue = startValue
    }
    if (endValue !== undefined) {
      delete dataZoom[0].end
      dataZoom[0].endValue = endValue
    }
    height && (dataZoom[0].height = height)
    dataZoom[0].show = true
    dataZoom[0].top = position.top || 'auto'
    dataZoom[0].left = position.left || 'auto'
    dataZoom[0].right = position.right || 'auto'
    dataZoom[0].bottom = position.bottom || 'auto'
    // 用户自定义样式
    if (style) {
      const { backgroundColor, dataBackground, selectedDataBackground, fillerColor } = dataZoom[0]
      dataZoom[0].backgroundColor = style.backgroundColor || backgroundColor
      dataZoom[0].dataBackground.areaStyle.color = style.unSelectDataColor || dataBackground.areaStyle.color
      dataZoom[0].selectedDataBackground.areaStyle.color =
        style.selectDataColor || selectedDataBackground.areaStyle.color
      dataZoom[0].fillerColor = style.middleFillerColor || fillerColor
      // 用户自定义手柄样式
      if (style.handleStyle) {
        dataZoom[0].handleStyle = Object.assign(dataZoom[0].handleStyle, style.handleStyle)
      }
    }
    merge(dataZoom[0], self)
  }
  return dataZoom
}

export default datazoom
