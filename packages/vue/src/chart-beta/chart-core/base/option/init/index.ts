import { isArray, isString } from '../../util/type'
import Theme, { THEMES } from '../../feature/token'

/**
 * 设置默认主题
 * @param {外部传入的配置} iChartOption
 */
function setDefaultTheme(iChartOption) {
  iChartOption.theme = iChartOption.theme || Theme.themeName || THEMES.LIGHT
}

/**
 * 设置默认颜色集合
 * @param {外部传入的配置} iChartOption
 */
function setDefaultColor(iChartOption) {
  if (!iChartOption.color) {
    iChartOption.color = Theme.config.colorGroup
  }
}

/**
 * 线性图/条形图专用，设置默认x轴Key值,默认取第一个数据的第一个Key
 * @param {外部传入的配置} iChartOption
 */
function setDefaultXAxis(iChartOption) {
  const data = iChartOption.data
  let keyName
  if (data && data.length > 0) {
    const keys = Object.keys(data[0])
    if (keys.length > 0) {
      keyName = keys[0]
    }
  }
  if (isArray(iChartOption.xAxis)) {
    iChartOption.xAxis.forEach((xAxisItem) => {
      setXAxisKeyName(xAxisItem, keyName)
    })
  } else if (typeof iChartOption.xAxis == 'object') {
    setXAxisKeyName(iChartOption.xAxis, keyName)
    iChartOption.xAxis = [iChartOption.xAxis]
  } else {
    iChartOption.xAxis = [{ keyName }]
  }
}

/**
 * 给x轴赋值key，兼容旧版本属性
 */
function setXAxisKeyName(xAxisItem, defaultKey) {
  let keyName = defaultKey
  if (isString(xAxisItem.data)) {
    keyName = xAxisItem.data
    delete xAxisItem.data
  }
  if (xAxisItem.keyName) {
    keyName = xAxisItem.keyName
  }
  xAxisItem.keyName = keyName
}

/**
 * 线性图/条形图专用---设置图表的四周padding值
 * @param {外部传入的配置} iChartOption
 */
function setChartPadding(iChartOption) {
  const defaultPadding = [50, 20, 50, 20]
  const padding = iChartOption.padding || iChartOption.chartPadding
  if (!padding) {
    iChartOption.padding = defaultPadding
  } else if (padding.length === 1) {
    iChartOption.padding = [padding[0], 20, padding[0], 20]
  } else if (padding.length === 2) {
    iChartOption.padding = [padding[0], padding[1], padding[0], padding[1]]
  } else if (padding.length === 3) {
    iChartOption.padding = [padding[0], padding[1], padding[2], padding[1]]
  } else {
    iChartOption.padding = padding
  }
  delete iChartOption.chartPadding
}

/**
 * 设置图表的Legend属性
 * @param {外部传入的配置} iChartOption
 */
function setDefaultLegend(iChartOption) {
  if (!iChartOption.legend) {
    iChartOption.legend = {
      show: true,
      position: {
        left: 'center',
        bottom: 14
      },
      orient: 'horizontal'
    }
  }
  if (iChartOption.legend.show === undefined) {
    iChartOption.legend.show = false
  }
  if (!iChartOption.legend.orient) {
    iChartOption.legend.orient = 'horizontal'
  }
  if (!iChartOption.legend.position) {
    iChartOption.legend.position = {
      left: 'center',
      bottom: 15
    }
  }
}

/**
 * 设置图表区域缩放功能
 * @param {外部传入的配置} iChartOption
 */
function setDefaultDataZoom(iChartOption) {
  if (!iChartOption.dataZoom) {
    iChartOption.dataZoom = {
      show: false,
      position: {
        left: 40,
        bottom: 18
      }
    }
  }
  if (iChartOption.dataZoom.show === undefined) {
    iChartOption.dataZoom.show = false
  }
  if (!iChartOption.dataZoom.position) {
    iChartOption.dataZoom.position = {
      left: 'center',
      bottom: 20
    }
  }
}

// 初始化 iChartOption 的默认配置
function init(iChartOption) {
  setDefaultTheme(iChartOption)
  setDefaultColor(iChartOption)
  setDefaultXAxis(iChartOption)
  setChartPadding(iChartOption)
  setDefaultLegend(iChartOption)
  setDefaultDataZoom(iChartOption)
  return iChartOption
}

export default init
