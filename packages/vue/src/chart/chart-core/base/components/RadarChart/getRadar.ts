import Theme from '../../feature/token'

export default function getRadar() {
  return {
    // 雷达坐标系位置
    center: ['50%', '50%'],
    // 雷达坐标系半径
    radius: '50%',
    // 指示器名称与轴的距离
    axisNameGap: 15,
    // 指示器轴的分割段数
    splitNumber: 4,
    shape: 'circle',
    // 坐标轴的标签是否响应和触发鼠标事件
    triggerEvent: false,
    // 坐标轴射线
    axisLine: {
      lineStyle: {
        color: Theme.config.radiusAxisLineColor,
        width: Theme.config.radarAxisLineWidth,
        type: Theme.config.radarAxisLineType
      }
    },
    // 坐标轴射线的刻度,只显示一条射线的刻度,其他射线的刻度需要在指示器数据indicator中每项单独配置axisLabel: { show: false }
    axisLabel: {
      show: false,
      margin: -20
    },
    // 坐标轴圆环分隔区域填充
    splitArea: { show: false },
    // 坐标轴圆环分隔线
    splitLine: {
      lineStyle: {
        color: Theme.config.radarSplitLineColor,
        width: Theme.config.radarSplitLineWidth,
        type: Theme.config.radarSplitLineType
      }
    },
    // 坐标轴数据
    indicator: undefined,
    // 指示器名称样式设置
    axisName: {
      show: true,
      rich: {
        a: {
          // 指示器name的样式
          color: Theme.config.radarAxisLabelColor,
          align: 'center',
          fontSize: Theme.config.radarAxisNameFontSize
        },
        b: {
          // 数据value样式
          color: Theme.config.radarAxisLabelColor,
          fontSize: Theme.config.radarAxisNameFontSize,
          align: 'center',
          padding: [0, 0, 4, 0]
        }
      },
      formatter: undefined
    }
  }
}
