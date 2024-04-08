import { CHARTTYPENAME, DOUBLEBASICOPTION, BASICSERIES, BASICDATASERIES, BASICUNIT, BASICBARWIDTH } from './BaseOption'
import cloneDeep from '../../util/cloneDeep'
import { getColor } from '../../util/color'
import merge from '../../util/merge'
import { getTextWidth } from '../../util/dom'
import chartToken from './chartToken'
import Theme from '../../feature/token'

function setStateBarColor(data, stateColorGroup, successColor, stateList) {
  const min = stateList[0]
  const max = stateList[stateList.length - 1]
  // 最大值和最小值相等代表就一个值
  if (min.value === max.value) {
    const resState = min.state
    return data < min.value ? successColor : stateColorGroup[resState]
  } else {
    if (data < min.value) {
      return successColor
    }
    if (data > max.value) {
      const resState = max.state
      return stateColorGroup[resState]
    }
    const len = stateList.length
    let color
    for (let i = 0; i < len; i++) {
      if (stateList[i].value >= data) {
        const index = i > 0 ? i - 1 : 0
        const resState = stateList[index].state
        color = stateColorGroup[resState]
        break
      }
    }
    return color
  }
}

function handleBarColor(params, iChartOpt, dataSet, doubleSide, isTip = false) {
  const { state, color } = iChartOpt
  // 是否传了阈值设置
  if (state) {
    const { colorState } = Theme.config
    const stateColorGroup = {
      error: colorState.colorError,
      warning: colorState.colorAlert,
      subwarning: colorState.colorWarning,
      success: colorState.colorSuccess
    }
    const successColor = stateColorGroup.success
    // 值与状态对应数组
    const stateList = []
    for (const k in state) {
      if (Object.hasOwnProperty.call(state, k)) {
        const stateItem = {
          state: k,
          value: state[k]
        }
        stateList.push(stateItem)
      }
    }
    stateList.sort((a, b) => a.value - b.value)
    return setStateBarColor(
      isTip ? dataSet.barData[params.dataIndex].value : params.data.value,
      stateColorGroup,
      successColor,
      stateList
    )
  } else {
    return getColor(color, doubleSide ? Math.floor(params.seriesIndex / 2) : params.dataIndex)
  }
}

function handleBasicProcessSeries(baseOpt, iChartOpt, dataSet, doubleSide) {
  baseOpt.series = doubleSide ? cloneDeep(DOUBLEBASICOPTION.series) : cloneDeep(BASICSERIES)
  if (doubleSide) {
    // 数据
    baseOpt.series[0].data = dataSet.barData[0]
    baseOpt.series[2].data = dataSet.barData[1]
    baseOpt.series[0].name = dataSet.seriesName[0]
    baseOpt.series[2].name = dataSet.seriesName[1]
    baseOpt.series[0].itemStyle.color = getColor(iChartOpt.color, 0)
    baseOpt.series[2].itemStyle.color = getColor(iChartOpt.color, 1)
    // 背景
    baseOpt.series[1].data = new Array(dataSet.barData[0].length).fill(dataSet.maxValue)
    baseOpt.series[3].data = new Array(dataSet.barData[1].length).fill(dataSet.maxValue)
  } else {
    baseOpt.series[0].data = new Array(dataSet.barData.length).fill(0)
    baseOpt.series[1].data = new Array(dataSet.barData.length).fill(dataSet.maxValue)
    const dataSreies = cloneDeep(BASICDATASERIES)
    dataSreies.name = 'data'
    dataSreies.data = dataSet.barData
    dataSreies.itemStyle.color = (params) => {
      return handleBarColor(params, iChartOpt, dataSet, doubleSide)
    }
    baseOpt.series.push(dataSreies)
  }
}

function setBarBordRadius(barData, seriesName) {
  // 每行的总数据
  const total = []
  for (let rowIndex = 0; rowIndex < seriesName.length; rowIndex++) {
    const rowData = []
    barData.forEach((item, columnIndex) => {
      if (item[rowIndex].value) {
        const dataInfo = {
          columnIndex,
          rowIndex,
          value: item[rowIndex].value
        }
        rowData.push(dataInfo)
      }
    })
    total.push(rowData)
  }
  total.forEach((to) => {
    const tolen = to.length
    if (tolen !== 0) {
      // 每行只有一个有效数据
      if (tolen === 1) {
        barData[to[0].columnIndex][to[0].rowIndex] = {
          ...barData[to[0].columnIndex][to[0].rowIndex],
          value: barData[to[0].columnIndex][to[0].rowIndex].value,
          itemStyle: {
            borderRadius: [4, 4, 4, 4]
          }
        }
      } else {
        barData[to[0].columnIndex][to[0].rowIndex] = {
          ...barData[to[0].columnIndex][to[0].rowIndex],
          value: barData[to[0].columnIndex][to[0].rowIndex].value,
          itemStyle: {
            borderRadius: [4, 0, 0, 4]
          }
        }
        barData[to[to.length - 1].columnIndex][to[to.length - 1].rowIndex] = {
          ...barData[to[to.length - 1].columnIndex][to[to.length - 1].rowIndex],
          value: barData[to[to.length - 1].columnIndex][to[to.length - 1].rowIndex].value,
          itemStyle: {
            borderRadius: [0, 4, 4, 0]
          }
        }
      }
    }
  })
}

function handleStackProcessSeries(baseOpt, iChartOpt, dataSet) {
  // 处理堆叠情况下图表的两端圆角情况,在数据项中加入圆角的配置
  setBarBordRadius(dataSet.barData, dataSet.seriesName)
  baseOpt.series = cloneDeep(BASICSERIES)
  baseOpt.series[0].data = new Array(dataSet.seriesName.length).fill(0)
  baseOpt.series[1].data = new Array(dataSet.seriesName.length).fill(dataSet.maxValue)
  dataSet.barData.forEach((item, index) => {
    const unitSeries = cloneDeep(BASICDATASERIES)
    unitSeries.data = item
    unitSeries.itemStyle.borderRadius = undefined
    unitSeries.name = dataSet.barName[index]
    unitSeries.stack = 'total'
    baseOpt.series.push(unitSeries)
  })
}

function handleBasicProcessTheme(baseOpt, doubleSide) {
  const { itemBgEmpty, axisLabelColor } = chartToken
  if (doubleSide) {
    baseOpt.series.forEach((ser, serIndex) => {
      if (serIndex % 2 !== 0) {
        ser.itemStyle.color = itemBgEmpty
        // 右侧label颜色
        ser.label.color = axisLabelColor
      }
    })
  } else {
    baseOpt.series[0].label.color = axisLabelColor
    baseOpt.series[1].label.color = axisLabelColor
    baseOpt.series[1].itemStyle.color = itemBgEmpty
  }
}

function handleStackProcessTheme(baseOpt, iChartOpt) {
  const { itemBgEmpty, axisLabelColor, labeColor } = chartToken
  // 背景柱条颜色
  baseOpt.series[1].itemStyle.color = itemBgEmpty
  // 右侧label颜色
  baseOpt.series[1].label.color = axisLabelColor
  // 左侧label颜色
  baseOpt.series[0].label.color = axisLabelColor
  // 柱条和文本的颜色
  baseOpt.series.forEach((serie, index) => {
    if (index > 1) {
      serie.itemStyle.color = (params) => {
        return getColor(iChartOpt.color, params.seriesIndex - 2)
      }
      serie.label.show = true
      serie.label.color = labeColor
    }
  })
}

function handleDoubleLabel(params, iChartOpt, dataSet, position, index = 0) {
  const { name, dataIndex } = params
  const innerVal = dataSet.barData[index][dataIndex]._initValue || dataSet.barData[index][dataIndex].value
  if (innerVal === null || innerVal === undefined) return ''
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT
  const val = `${innerVal}${innerUnit}`
  return `{name${position}|${name}}\n{value${position}|${val}}`
}

function getMaxValLength(dataSet, iChartOpt, index) {
  let maxLength = 0
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT
  dataSet.barData[index].forEach((item) => {
    const val = `${item._initValue || item.value}${innerUnit}`
    const len = getTextWidth(val, 14)
    if (len >= maxLength) maxLength = len
  })
  return maxLength
}

function setTitle(baseOpt, iChartOpt) {
  if (iChartOpt.title) merge(baseOpt.series[0].label, iChartOpt.title)
}

function setText(baseOpt, iChartOpt, dataSet) {
  if (iChartOpt.text) {
    merge(baseOpt.series[1].label, iChartOpt.text)
    const { formatter } = iChartOpt.text
    // 右侧为背景的lable为了让用户自定义的formatter获取的params获得中间数据的value去做了内部覆盖处理
    if (formatter) {
      baseOpt.series[1].label.formatter = (params) => {
        const { dataIndex } = params
        const value = dataSet.barData[dataIndex]._initValue || dataSet.barData[dataIndex].value
        const inerParams = {
          ...params,
          value,
          data: value
        }
        return formatter(inerParams)
      }
    }
  }
}

function setBarLabel(baseOpt, iChartOpt, dataSet) {
  // 左侧label
  baseOpt.series[0].label.formatter = (params) => {
    return params.name === 'null' || params.name === 'undefined' ? '' : params.name
  }
  // 右侧label
  baseOpt.series[1].label.formatter = (params) => {
    const innerVal = dataSet.barData[params.dataIndex]._initValue || dataSet.barData[params.dataIndex].value
    if (innerVal === null || innerVal === undefined) return ''
    const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT
    return `${innerVal}${innerUnit}`
  }
}

function handleBasicProcessLabel(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (doubleSide) {
    const { labeColor, disabledColor } = chartToken
    // 左侧label
    baseOpt.series[1].label.formatter = function (params) {
      return handleDoubleLabel(params, iChartOpt, dataSet, 'Left')
    }
    baseOpt.series[3].label.formatter = function (params) {
      return handleDoubleLabel(params, iChartOpt, dataSet, 'Right', 1)
    }
    const valWidthL = getMaxValLength(dataSet, iChartOpt, 0)
    const valWidthR = getMaxValLength(dataSet, iChartOpt, 1)
    baseOpt.series[1].label.rich.nameLeft.color = disabledColor
    baseOpt.series[1].label.rich.valueLeft.color = labeColor
    baseOpt.series[1].label.offset = [-valWidthL - 10, 9]
    baseOpt.series[3].label.rich.nameRight.color = disabledColor
    baseOpt.series[3].label.rich.valueRight.color = labeColor
    baseOpt.series[3].label.offset = [valWidthR + 10, 9]
  } else {
    setBarLabel(baseOpt, iChartOpt, dataSet)
    // 标题文本显示省略
    setTitle(baseOpt, iChartOpt)
    // 右侧数据文本显示省略
    setText(baseOpt, iChartOpt, dataSet)
  }
}

function handleStackProcessLabel(baseOpt, iChartOpt, dataSet) {
  // 处理左侧的文本显示
  baseOpt.series[0].label.formatter = (params) => {
    return params.name === 'null' || params.name === 'undefined' ? '' : params.name
  }
  if (iChartOpt.title) {
    merge(baseOpt.series[0].label, iChartOpt.title)
  }
  // 处理右侧的文本显示
  baseOpt.series[1].label.formatter = (params) => {
    // 系列名称为null不显示文本(数据缺省功能)
    const name = dataSet.seriesName[params.dataIndex]
    if (name === null || name === undefined) return ''
    // 兼容之前暴露的自定义右侧文本显示的功能，计划后期去除
    if (iChartOpt.text && iChartOpt.text.labelText) return iChartOpt.text.labelText[params.dataIndex]
    if (iChartOpt.unit) return `${dataSet.sumValue[params.dataIndex]}${iChartOpt.unit}`
    return `${dataSet.sumValue[params.dataIndex]}`
  }
  // 右侧数据文本样式
  if (iChartOpt.text) {
    merge(baseOpt.series[1].label, iChartOpt.text)
  }
  // 处理数据的文本显示,只有值为有效值的时候才显示label
  baseOpt.series.forEach((serie, index) => {
    if (index > 1)
      serie.label.formatter = (params) => {
        const value = params.data._initValue || params.data.value
        return value || ''
      }
  })
  // 中间的图元的文本样式
  if (iChartOpt.label) {
    baseOpt.series.forEach((serie, serieIndex) => {
      if (serieIndex > 1) merge(serie.label, iChartOpt.label)
    })
  }
}

function handleLabel(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (iChartOpt.name === CHARTTYPENAME.ProcessBarChart) {
    handleBasicProcessLabel(baseOpt, iChartOpt, dataSet, doubleSide)
  } else {
    handleStackProcessLabel(baseOpt, iChartOpt, dataSet)
  }
}

function handleTheme(baseOpt, iChartOpt, doubleSide) {
  if (iChartOpt.name === CHARTTYPENAME.ProcessBarChart) {
    handleBasicProcessTheme(baseOpt, doubleSide)
  } else {
    handleStackProcessTheme(baseOpt, iChartOpt)
  }
}

function handleBarWidth(baseOpt, iChartOpt) {
  const { name } = iChartOpt
  const barWidth = iChartOpt.barWidth || BASICBARWIDTH[name]
  baseOpt.series.forEach((serie) => {
    serie.barWidth = barWidth
  })
}

function handleSeries(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (iChartOpt.name === CHARTTYPENAME.ProcessBarChart) {
    handleBasicProcessSeries(baseOpt, iChartOpt, dataSet, doubleSide)
  } else {
    handleStackProcessSeries(baseOpt, iChartOpt, dataSet)
  }
  //   处理默认的图表主题
  handleTheme(baseOpt, iChartOpt, doubleSide)

  handleLabel(baseOpt, iChartOpt, dataSet, doubleSide)

  handleBarWidth(baseOpt, iChartOpt)
}
export { handleBarColor }
export default handleSeries
