import min from '../../util/sort/min'
import max from '../../util/sort/max'
import { getColor } from '../../util/color'
import chartToken from './chartToken'

export function setVisualMap(legendData, seriesData, markLine, colors) {
  const visualMap = []
  if (markLine) {
    const topValue = markLine.top
    const bottomValue = markLine.bottom
    legendData.forEach((legendName, index) => {
      const data = seriesData[legendName]
      const minData = min(data)
      const maxData = max(data)
      const bottom = bottomValue || minData - 1
      const top = topValue || maxData + 1
      // 根据数据大小映射颜色
      visualMap.push({
        show: false,
        type: 'piecewise',
        dimension: 1,
        seriesIndex: index,
        pieces: [
          {
            gt: bottom,
            lt: top,
            color: getColor(colors, index)
          }
        ],
        outOfRange: {
          color: chartToken.colorError
        }
      })
    })
  }
  return visualMap
}
