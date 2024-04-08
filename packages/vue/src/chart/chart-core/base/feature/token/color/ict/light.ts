import board from './board'
import { getThemeColor, getColorGroup } from '../util'

const gray = {
  ...board.gray,
  ...board.transparent
}

// 图表的状态颜色
const colorState = {
  // 紧急色
  colorError: '#F43146',
  // 重要告警色
  colorAlert: '#EC6F1A',
  // 次要告警色
  colorWarning: '#EEBA18',
  // 成功色
  colorSuccess: '#2DA769',
  // 提示色
  colorInfo: '#5990FD',
  // 失效
  colorNone: board.gray.colorGray30
}

// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue40,
  colorChart2: board.mint.colorMint40,
  colorChart3: board.purple.colorPurple40,
  colorChart4: board.cyan.colorCyan30,
  colorChart5: board.yellow.colorYellow20,
  colorChart6: board.indigo.colorIndigo40,
  colorChart7: board.cyan.colorCyan40
}

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart)

const light = getThemeColor(gray, colorState, colorGroup)

export default light
