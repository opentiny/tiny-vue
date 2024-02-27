import board from './board'
import { getThemeColor, getColorGroup } from '../util'

const gray = {
  ...board.gray,
  ...board.transparent
}

const colorState = {
  // 错误色
  colorError: board.red.colorRed50,
  // 告警色
  colorAlert: board.orange.colorOrange50,
  // 提醒色
  colorWarning: board.yellow.colorYellow50,
  // 成功色
  colorSuccess: board.mint.colorMint50,
  // 信息色
  colorInfo: board.blue.colorBlue50,
  // 失效色
  colorNone: board.gray.colorGray30
}

// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue50,
  colorChart2: board.green.colorGreen40,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4: board.mint.colorMint40,
  colorChart5: board.brand.colorBrand50,
  colorChart6: board.pink.colorPink40,
  colorChart7: board.cyan.colorCyan50,
  colorChart8: board.orange.colorOrange40,
  colorChart9: board.rose.colorRose50,
  colorChart10: board.yellow.colorYellow40,
  colorChart11: board.purple.colorPurple50
}

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart)

const light = getThemeColor(gray, colorState, colorGroup)

export default light
