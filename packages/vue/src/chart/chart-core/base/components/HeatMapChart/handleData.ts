/**
 * 从数据中拿出key
 */
function getDataKeys(data) {
  return Object.keys(data)
}

/**
 * 处理矩阵热力图data
 */
function handleRectData(data) {
  return data
}

/**
 * 处理日历热力图类目data
 */
function handleCategoryName(data) {
  const defaultArr = []
  data.forEach((item) => {
    if (!defaultArr.includes(item)) {
      defaultArr.push(item)
    }
  })
  return defaultArr
}

/**
 * 处理日历热力图类目SeriesData
 */
function handlecalendarSeriesData(xAxisData, yAxisData, data, keyName) {
  return data.map((item) => {
    return [xAxisData.indexOf(item[keyName[0]]), yAxisData.indexOf(item[keyName[1]]), item[keyName[2]]]
  })
}

/**
 * 处理日历热力图data
 */
function handleCalendarData(data) {
  const calendarData = []
  const keyName = getDataKeys(data[0])
  // x轴类目数据
  const xCategoryName = data.map((item) => {
    return item[keyName[0]]
  })
  // y轴类目数据
  const yCategoryName = data.map((item) => {
    return item[keyName[1]]
  })
  // 最终x轴数据
  const xAxisData = handleCategoryName(xCategoryName)
  // 最终x轴数据
  const yAxisData = handleCategoryName(yCategoryName)
  // 最终Series数据
  const calendarSeriesData = handlecalendarSeriesData(xAxisData, yAxisData, data, keyName)
  calendarData.push(xAxisData)
  calendarData.push(yAxisData)
  calendarData.push(calendarSeriesData)
  return calendarData
}

// 计算六边形的具体中心坐标
function computeCoordinates(arr, number, halfWidth, r) {
  return arr.map((item, index) => {
    // 一组六边形的个数，根据规范第一行的数量和第二行的数量相差1，即(number-1)+number为一组
    const groupNumber = number * 2 - 1
    // 将索引与index取余，用来判断在组的第一行
    const remainder = index % groupNumber
    // 判断所在的分组
    const group = index / groupNumber
    // 当前数据所在的组数
    const lineNumber = Math.floor(group)
    if (remainder < number - 1) {
      return [(remainder + 1) * 2 * halfWidth, (1 + 3 * lineNumber) * r, item.value, r, item]
    } else {
      return [((remainder - number + 1) * 2 + 1) * halfWidth, (1 + 1.5 * (2 * lineNumber + 1)) * r, item.value, r, item]
    }
  })
}

/**
 * 处理蜂窝热力图data
 */
function handleHexagonData(data, iChartOption, chartInstance) {
  // 获取chart容器的宽高
  const containerWidth = chartInstance.getWidth()
  const containerHeight = chartInstance.getHeight()
  // 处理的数据
  const hexagonData = []
  // 每行的图形个数
  const number = iChartOption.quantity || 40
  // x轴最大刻度
  const xValue = containerWidth
  // y轴最大刻度
  const yValue = containerHeight
  const initialData = data
  const x = xValue / (2 * number)
  // r为蜂窝的半径，圆的半径，正方形的边长的一半
  const r = x / Math.sqrt(0.75)
  // 圆心的半径
  const coordinatesArr = computeCoordinates(initialData, number, x, r)
  hexagonData.push(coordinatesArr)
  hexagonData.push(xValue)
  hexagonData.push(yValue)
  hexagonData.push(r)
  return hexagonData
}

// 数据的处理函数
const dataHandler = {
  RectangularHeatMapChart: handleRectData,
  CalendarHeatMapChart: handleCalendarData,
  HexagonHeatMapChart: handleHexagonData
}

/**
 * 从数据中拿出chart需要的数据
 */
export function getData(type, iChartOption, chartInstance) {
  // 蜂窝热力图数据特殊处理
  if (iChartOption.data && iChartOption.data.length > 0) {
    const chartData = dataHandler[type](iChartOption.data, iChartOption, chartInstance)
    return chartData
  }
  return null
}
