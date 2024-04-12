import tooltip from '../../option/config/tooltip'

/**
 * 配置鼠标悬浮提示框
 */
export function handleTooltip(iChartOpt, chartName) {
  const basicTip = tooltip(iChartOpt, chartName)
  return basicTip
}
