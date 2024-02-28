import merge from '../../util/merge'
import chartToken from './chartToken'

/**
 * 装载除series以外的一级属性
 * @param {传入数据} iChartOption
 * @returns
 */
export function setOption(iChartOption) {
  const { visualMap } = iChartOption
  // 处理visualMap字体颜色随主题变化
  const defaultVisualMap = {
    textStyle: {
      color: chartToken.visualMapTextColor
    }
  }
  visualMap && merge(visualMap, defaultVisualMap)
}
