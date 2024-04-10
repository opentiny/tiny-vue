import tooltip from '../../option/config/tooltip'

/**
 * 配置鼠标悬浮提示框
 */
export function setTooltip(iChartOpt) {
  const basicTip = tooltip(iChartOpt)
  basicTip.trigger = 'item'
  return basicTip
}
