/**
 * 获取用于token的颜色对象
 * @param {object} gray 灰阶包含透明色
 * @param {object} colorState 状态色
 * @param {Array} colorGroup 颜色组
 */
function getThemeColor(gray, colorState, colorGroup) {
  return {
    grayScale: {
      ...gray
    },
    colorSet: {
      colorState,
      colorGroup
    }
  }
}

/**
 * 将图表的配色对象拉平为数组
 * @param {object} colorChart 图表的配色对象
 */

function getColorGroup(colorChart) {
  return Object.values(colorChart)
}

export { getThemeColor, getColorGroup }
