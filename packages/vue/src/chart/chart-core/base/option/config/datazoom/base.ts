import cloneDeep from '../../../util/cloneDeep'
import Theme from '../../../feature/token'

const baseOption = [
  {
    end: 100,
    start: 0,
    height: 24,
    bottom: 18,
    show: false,
    type: 'slider',
    left: 'center',
    xAxisIndex: [0],
    zoomLock: false,
    borderColor: 'none', // 边框
    backgroundColor: undefined, // 背景颜色
    fillerColor: undefined, // 选中范围填充颜色
    handleSize: '85%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0.2 Q 0 0 0.2 0 L0.8 0 Q1 0 1 0.2 L1 2.8 Q1 3 0.8 3L0.2 3 Q0 3 0 2.8 Z', // 手柄形状
    handleStyle: {
      color: undefined, // 手柄颜色
      shadowBlur: 5, // 阴影模糊大小
      shadowColor: undefined,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: 0, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: undefined, // 手柄边框颜色
      borderWidth: 5, // 手柄边框宽度
      borderJoin: 'round' // 手柄边框圆角
    },
    dataBackground: {
      lineStyle: {
        color: undefined, // 线条颜色
        join: 'round',
        cap: 'round'
      },
      areaStyle: {
        opacity: 1, // 阴影的透明度
        color: undefined // 填充的颜色
      }
    },
    selectedDataBackground: {
      // 选中部分样式
      lineStyle: {
        color: undefined // 线条颜色
      },
      areaStyle: {
        opacity: 0.9, // 阴影的透明度
        color: undefined // 填充的颜色
      }
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: undefined,
        borderColor: undefined
      }
    }
  }
]

function base(theme) {
  const option = cloneDeep(baseOption)
  if (theme.includes('dark')) {
    // 手柄中心填充色
    option[0].handleStyle.color = Theme.config.dataZoomHandleColor
    // 手柄外框色
    option[0].handleStyle.borderColor = Theme.config.dataZoomHandleBorderColor
    // 手柄阴影色
    option[0].handleStyle.shadowColor = Theme.config.dataZoomHandleShadowColor
    // 手柄hover时中心填充色
    option[0].emphasis.handleStyle.color = Theme.config.dataZoomEmphasisHandleColor
    // 手柄hover时外框色
    option[0].emphasis.handleStyle.borderColor = Theme.config.dataZoomEmphasisHandleBorderColor

    // 空白部分底色
    option[0].backgroundColor = '#090909'
    // 空白遮罩颜色
    option[0].fillerColor = 'rgba(255,255,255,0)'
    // 选中区域外的线条颜色和面积颜色
    option[0].dataBackground.lineStyle.color = '#282828'
    option[0].dataBackground.areaStyle.color = '#282828'
    // 选中区域内的线条颜色和面积颜色
    option[0].selectedDataBackground.lineStyle.color = '#555555'
    option[0].selectedDataBackground.areaStyle.color = '#555555'
  } else {
    // 手柄中心填充色
    option[0].handleStyle.color = '#ffffff'
    // 手柄外框色
    option[0].handleStyle.borderColor = '#1476ff'
    // 手柄阴影色
    option[0].handleStyle.shadowColor = 'transparent'
    // 手柄hover时中心填充色
    option[0].emphasis.handleStyle.color = '#ffffff'
    // 手柄hover时外框色
    option[0].emphasis.handleStyle.borderColor = '#1476ff'

    // 空白部分底色
    option[0].backgroundColor = '#f3f3f3'
    // 空白遮罩颜色
    option[0].fillerColor = 'rgba(175,218,245,.5)'
    // 选中区域外的线条颜色和面积颜色
    option[0].dataBackground.lineStyle.color = '#c2c2c2'
    option[0].dataBackground.areaStyle.color = '#e8e8e8'
    // 选中区域内的线条颜色和面积颜色
    option[0].selectedDataBackground.lineStyle.color = '#9fb3ce'
    option[0].selectedDataBackground.areaStyle.color = '#bcd0eb'
  }
  return option
}

export default base
