import board from './board'
import { getThemeColor, getColorGroup } from '../util'

const gray = {
  ...board.gray,
  ...board.transparent
}

// 图表的状态颜色
const colorState = {
  // 紧急色
  colorError: board.red.colorRed60,
  // 重要告警色
  colorAlert: board.orange.colorOrange60,
  // 次要告警色
  colorWarning: board.yellow.colorYellow60,
  // 成功色
  colorSuccess: board.kelly.colorKelly60,
  // 提示色
  colorInfo: board.blue.colorBlue60,
  // 失效
  colorNone: board.gray.colorGray50
}

// 图表配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue60,
  colorChart2: board.mint.colorMint70,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4: board.kelly.colorKelly60,
  colorChart5: board.yellow.colorYellow60,
  colorChart6: board.sky.colorSky60,
  colorChart7: board.purple.colorPurple50,
  colorChart8: board.rose.colorRose50 // (原色 '#EB4696')
}

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart)

const light = getThemeColor(gray, colorState, colorGroup)

export default light
