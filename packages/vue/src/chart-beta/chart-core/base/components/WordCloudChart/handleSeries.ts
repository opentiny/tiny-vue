import { getRandom } from '../../util/math'
import { getColor } from '../../util/color'
import cloneDeep from '../../util/cloneDeep'
import Theme from '../../feature/theme'

export const seriesInit = {
  type: 'wordCloud',
  // 网格大小，各项之间间距
  gridSize: 16,
  // 形状支持 circle 圆，cardioid  心， diamond 菱形， triangle-forward 、triangle 三角，star五角星
  shape: 'circle',
  // 字体大小范围
  sizeRange: [16, 64],
  // 文字旋转角度范围
  rotationRange: [0, 0],
  // 旋转步值
  rotationStep: 0,
  // 画布位置
  top: 'center',
  left: 'center',
  right: null,
  bottom: null,
  // 画布宽
  width: '75%',
  // 画布高
  height: '80%',
  // 是否渲染超出画布的文字
  drawOutOfBound: false,
  // 文字显示时动画
  layoutAnimation: true,
  // 文字颜色
  textStyle: {
    color() {
      return `rgb(${[Math.round(getRandom * 256), Math.round(getRandom * 256), Math.round(getRandom * 256)].join(',')})`
    }
  },
  // hover时样式
  emphasis: {
    textStyle: {
      textShadowBlur: 20,
      textShadowOffsetY: 2,
      textShadowOffsetX: 2,
      textShadowColor: '#191919'
    }
  },
  data: []
}

/**
 * 组装echarts所需要的series
 * @param {主题} theme
 * @param {数据} data
 * @returns
 */
function handleSeries(params) {
  const {
    theme,
    data,
    width,
    height,
    gridSize,
    sizeRange,
    rotationRange,
    rotationStep,
    shape,
    maskImage,
    textColor,
    colors
  } = params
  seriesInit.emphasis.textStyle.textShadowColor = Theme.color.base.subg
  // 组装数据
  const series = []
  const seriesUnit = cloneDeep(seriesInit)
  // 自定义图形
  if (maskImage) {
    seriesUnit.maskImage = maskImage
  }
  seriesUnit.width = width || '75%'
  seriesUnit.height = height || '80%'
  // 网格大小，各项之间间距
  seriesUnit.gridSize = gridSize || 16
  // 字体大小范围
  seriesUnit.sizeRange = sizeRange || [16, 64]
  // 文字旋转角度范围
  seriesUnit.rotationRange = rotationRange || [0, 0]
  // 文字旋转步值
  seriesUnit.rotationStep = rotationStep || 0
  // 词云形状
  seriesUnit.shape = shape || 'circle'
  // 自定义文本颜色
  if (textColor) {
    seriesUnit.textStyle.color = textColor
  } else {
    seriesUnit.textStyle.color = (data) => {
      const index = data.dataIndex
      return getColor(colors, index)
    }
  }
  seriesUnit.data = data
  series.push(seriesUnit)
  return series
}

export default handleSeries
