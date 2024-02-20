import { getColor } from '../../util/color'
import Theme from '../../feature/theme'

// 为每个节点矩形块配置颜色组，循环使用
export function setColor(color, baseOpt) {
  let colorGroup = color
  if (!color || color.length === 0) {
    colorGroup = Theme.color.colorGroup
  }
  const data = baseOpt.series[0].data
  // 配置节点及边框颜色
  data.forEach((item, index) => {
    item.itemStyle = {
      color: Array.isArray(colorGroup) ? getColor(colorGroup, index) : colorGroup
      // borderColor: Array.isArray(colorGroup) ? getColor(colorGroup, index) : colorGroup,
    }
  })
}

// 配置显示文本颜色
export function setTextColor(baseOpt) {
  const colorBase = Theme.color.base
  baseOpt.series[0].label.color = colorBase.font
}
