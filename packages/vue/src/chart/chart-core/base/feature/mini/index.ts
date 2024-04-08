import { isArray } from '../../util/type'

// 微型场景下，隐藏许多不必要的图元
function mini(iChartOption, baseOption) {
  if (iChartOption.mini) {
    baseOption.grid.forEach((item) => {
      Object.assign(item, {
        top: 2,
        left: 0,
        right: 0,
        bottom: 1,
        containLabel: false
      })
    })
    baseOption.legend = Object.assign(baseOption.legend, {
      show: false
    })
    baseOption.title = Object.assign(baseOption.title, {
      show: false
    })
    baseOption.tooltip = Object.assign(baseOption.tooltip, {
      show: false
    })
    if (!isArray(baseOption.xAxis)) {
      baseOption.xAxis = [baseOption.xAxis]
    }
    if (!isArray(baseOption.yAxis)) {
      baseOption.yAxis = [baseOption.yAxis]
    }
    baseOption.xAxis.forEach((item) => {
      Object.assign(item, {
        show: false,
        boundaryGap: false
      })
    })
    baseOption.yAxis.forEach((item) => {
      Object.assign(item, {
        show: false,
        max: 'dataMax',
        min: 'dataMin'
      })
    })
  }
}

export default mini
