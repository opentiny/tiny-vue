import { getColor } from '../../util/color'
import chartToken from './chartToken'

// 为每个节点矩形块配置颜色组，循环使用
export function setColor(color, baseOpt) {
  const data = baseOpt.series[0].data
  // 配置节点及边框颜色
  data.forEach((item, index) => {
    item.itemStyle = {
      color: Array.isArray(color) ? getColor(color, index) : color
      // borderColor: Array.isArray(colorGroup) ? getColor(colorGroup, index) : colorGroup,
    }
  })
}

// 配置显示文本颜色
export function setTextColor(baseOpt) {
  baseOpt.series[0].label.color = chartToken.labelColor
}
