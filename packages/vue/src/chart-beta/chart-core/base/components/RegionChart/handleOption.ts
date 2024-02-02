import merge from '../../util/merge'
import Theme from '../../feature/theme'

/**
 * 装载除series以外的一级属性
 * @param {传入数据} iChartOption
 * @returns
 */
export function setOption(iChartOption) {
  const { visualMap } = iChartOption
  // 处理visualMap字体颜色随主题变化
  let defaultVisualMap = {
    textStyle: {
      color: Theme.color.base.font
    }
  }
  visualMap && merge(visualMap, defaultVisualMap)
}
