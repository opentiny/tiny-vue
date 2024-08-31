import { CHARTTYPENAME } from './BaseOption'
import max from '../../util/sort/max'

// 处理有minWidth极限值的情况下给echarts渲染的数据
function handleLimitVal(data, iChartOpt, demarcatedValue) {
  const dataItem = { ...data, _initValue: undefined }
  const { minWidth } = iChartOpt
  // 数据的最小宽度是一个百分比，用于控制数据之间差距过大导致部分数据显示不明显，导致无法交互的情况
  if (minWidth) {
    const limitValue = demarcatedValue * (parseInt(minWidth) / 100)
    if (data.value && data.value < limitValue) {
      dataItem.value = limitValue
      dataItem._initValue = data.value
    }
  }
  return dataItem
}

function handleDoubleSideData(dataSet, data, iChartOpt, demarcatedValue) {
  data.forEach((item) => {
    dataSet.seriesName.push(item.name)
    const childBarName = []
    const childBarData = []
    if (item.children && item.children.length !== 0) {
      item.children.forEach((el) => {
        childBarName.push(el.name)
        const innerDataItem = handleLimitVal(el, iChartOpt, demarcatedValue)
        childBarData.push(innerDataItem)
      })
      dataSet.barName.push(childBarName)
      dataSet.barData.push(childBarData)
    }
  })
}

function handleBasicProcessData(iChartOpt, dataSet, data, doubleSide, dataMax) {
  // 内部显示进度的最大值
  const demarcatedValue = dataMax || 100
  dataSet.maxValue = demarcatedValue
  if (doubleSide) {
    handleDoubleSideData(dataSet, data, iChartOpt, demarcatedValue)
    return
  }
  data.forEach((dataItem) => {
    dataSet.barName.push(dataItem.name)
    const innerDataItem = handleLimitVal(dataItem, iChartOpt, demarcatedValue)
    dataSet.barData.push(innerDataItem)
  })
}

function getSerirsDataMax(dataSet, data, dataMax) {
  let sumValueMax
  const sumValue = []
  data.forEach((el) => {
    let _sumValue = 0
    el.children.forEach((child) => {
      if (child.value) {
        _sumValue += child.value
      }
    })
    sumValue.push(_sumValue)
  })
  sumValueMax = max(sumValue)
  if (dataMax && dataMax > sumValueMax) {
    sumValueMax = dataMax
  }
  dataSet.maxValue = sumValueMax
  dataSet.sumValue = sumValue
}

function setMaxValueAgain(dataSet, dataMax) {
  const sum = []
  const len = dataSet.seriesName.length
  for (let i = 0; i < len; i++) {
    let sumValue = 0
    dataSet.barData.forEach((item) => {
      if (item[i].value) {
        sumValue += item[i].value
      }
    })
    sum.push(sumValue)
  }
  let maxValue = max(sum)
  if (dataMax && dataMax > maxValue) {
    maxValue = dataMax
  }
  dataSet.maxValue = maxValue
}

function handleStackProcessData(iChartOpt, dataSet, data, dataMax) {
  // 获取系列名称
  data.forEach((element) => {
    dataSet.seriesName.push(element.name)
  })
  // 单独系列名称
  data[0].children.forEach((el) => {
    dataSet.barName.push(el.type)
  })
  // 单一系列各项数据用来获取数据的标定值
  getSerirsDataMax(dataSet, data, dataMax)
  // 对各系列数据进行组装分类
  dataSet.barName.forEach((type) => {
    // 每个系列单独的数据
    const seriesData = []
    data.forEach((child) => {
      const childItem = child.children.find((el) => el.type === type)
      const innerChidItem = handleLimitVal(childItem, iChartOpt, dataSet.maxValue)
      seriesData.push(innerChidItem)
    })

    dataSet.barData.push(seriesData)
  })
  // 在有minwidth的情景下重新去计算所有系列求和的最大值
  if (iChartOpt.minWidth) {
    setMaxValueAgain(dataSet, dataMax)
  }
}

function handleData(iChartOpt, doubleSide) {
  const { data, name } = iChartOpt
  if (!data) return null
  if (data && data.length > 0) {
    // 数据集合
    const dataSet = {
      // 图表子项数据
      barData: [],
      // 图表的标题数据
      barName: [],
      // 图表的最大值
      maxValue: undefined,
      // 图表的系列名称
      seriesName: []
    }
    // 当前图表单个系列数据的最大值，用来做数据占比
    const dataMax = iChartOpt.calibrationValue || iChartOpt.max
    if (name === CHARTTYPENAME.ProcessBarChart) {
      handleBasicProcessData(iChartOpt, dataSet, data, doubleSide, dataMax)
    } else {
      handleStackProcessData(iChartOpt, dataSet, data, dataMax)
    }
    return dataSet
  }
}
export default handleData
