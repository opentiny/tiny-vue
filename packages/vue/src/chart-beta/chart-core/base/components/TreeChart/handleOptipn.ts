import tooltip from '../../option/config/tooltip'

/**
 * 配置鼠标悬浮提示框
 */
export function setTooltip(iChartOpt) {
  const basicTip = tooltip(iChartOpt)
  basicTip.trigger = 'item'
  return basicTip
}

/**
 * 配置主题
 */
export function setTheme(iChartOption) {
  iChartOption.theme = iChartOption.theme || 'light'
  return iChartOption.theme
}

/**
 * 设置ChartPadding
 */
export function setChartPadding(type, iChartOption) {
  // 默认图表padding
  let defaultPadding
  // 实际图表position
  const position = { left: undefined, right: undefined, top: undefined, bottom: undefined }
  switch (type) {
    case 'LineTreeChart':
      if (!iChartOption.direction) {
        defaultPadding = [20, 150, 20, 150]
      } else if (iChartOption.direction === 'top') {
        defaultPadding = [80, 20, 150, 20]
      } else if (iChartOption.direction === 'bottom') {
        defaultPadding = [150, 20, 80, 20]
      } else if (iChartOption.direction === 'right') {
        defaultPadding = [20, 150, 20, 150]
      } else {
        defaultPadding = [20, 150, 20, 150]
      }
      break
    case 'RingTreeChart':
      defaultPadding = [100, 150, 100, 150]
      break
  }
  if (!iChartOption.padding) {
    position.top = defaultPadding[0]
    position.right = defaultPadding[1]
    position.bottom = defaultPadding[2]
    position.left = defaultPadding[3]
  } else if (iChartOption.padding.length === 1) {
    position.top = iChartOption.padding[0]
    position.right = iChartOption.padding[0]
    position.bottom = iChartOption.padding[0]
    position.left = iChartOption.padding[0]
  } else if (iChartOption.padding.length === 2) {
    position.top = iChartOption.padding[0]
    position.right = iChartOption.padding[1]
    position.bottom = iChartOption.padding[0]
    position.left = iChartOption.padding[1]
  } else if (iChartOption.padding.length === 3) {
    position.top = iChartOption.padding[0]
    position.right = iChartOption.padding[1]
    position.bottom = iChartOption.padding[2]
    position.left = iChartOption.padding[1]
  } else {
    position.top = iChartOption.padding[0]
    position.right = iChartOption.padding[1]
    position.bottom = iChartOption.padding[2]
    position.left = iChartOption.padding[3]
  }
  return position
}
