// 进度图的图表类型名称
const CHARTTYPENAME = {
  ProcessBarChart: 'ProcessBarChart',
  StackProcessBarChart: 'StackProcessBarChart'
}
// 标识是否为双向进度图
const PROCESSBARTYPE = 'double-sides'
// 基础进度图的默认单位
const BASICUNIT = '%'

const BASICBARWIDTH = {
  ProcessBarChart: 8,
  StackProcessBarChart: 20
}
// 进度图用来做标题和背景的基础series
const BASICSERIES = [
  {
    // 用来做前面的文本显示
    name: 'seriesName',
    type: 'bar',
    barWidth: 8,
    barGap: '-100%',
    // 这条series不响应鼠标事件
    silent: true,
    label: {
      show: true,
      color: undefined,
      position: [0, -20],
      fontSize: 14,
      formatter: undefined
    },
    data: undefined
  },
  {
    // 底色 +右侧label文本显示
    name: 'background',
    type: 'bar',
    barWidth: 8,
    barGap: '-100%',
    itemStyle: {
      color: undefined,
      borderRadius: 4
    },
    emphasis: {
      disabled: true
    },
    label: {
      show: true,
      color: undefined,
      offset: [0, -24],
      position: 'insideTopRight',
      fontSize: 14,
      formatter: undefined
    },
    data: undefined
  }
]
// 用于显示基础进度图的实际数据的series
const BASICDATASERIES = {
  name: undefined,
  type: 'bar',
  zlevel: 2,
  barWidth: 8,
  cursor: 'pointer',
  itemStyle: {
    borderRadius: 4,
    color: undefined
  },
  data: undefined,
  label: {
    show: false,
    color: undefined,
    formatter: undefined
  }
}
// 双向进度图的基础series
const DOUBLEBASICOPTION = {
  grid: [
    // 左边的坐标系
    {
      left: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false
    },
    // 右边的坐标系
    {
      right: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false
    }
  ],
  xAxis: [
    // 左侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 0,
      inverse: true,
      axisLabel: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: [8, 4]
        }
      },
      max: 'dataMax'
    },
    // 右侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 1,
      splitLine: {
        lineStyle: {
          type: [8, 4]
        }
      },
      axisLabel: {
        show: false
      },
      max: 'dataMax'
    }
  ],
  yAxis: [
    {
      // 左侧的y轴
      type: 'category',
      gridIndex: 0,
      show: true,
      inverse: true,
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: undefined
        }
      },
      position: 'right',
      data: undefined
    },
    {
      // 右侧的y轴
      type: 'category',
      gridIndex: 1,
      inverse: true,
      show: false,
      data: undefined
    }
  ],
  series: [
    {
      // 实际数据 + 左侧数值
      name: '',
      xAxisIndex: 0,
      yAxisIndex: 0,
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      itemStyle: {
        borderRadius: [4, 0, 0, 4],
        color: undefined
      },
      data: undefined,
      emphasis: {
        disabled: true
      },
      label: {
        show: false
      }
    },
    {
      // 左侧底色
      name: 'backgroundLeft',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      barWidth: 8,
      barGap: '-100%',
      itemStyle: {
        color: undefined,
        borderRadius: [4, 0, 0, 4]
      },
      emphasis: {
        disabled: true
      },
      label: {
        show: true,
        offset: [0, 0],
        position: 'insideBottomLeft',
        formatter: undefined,
        rich: {
          nameLeft: {
            fontSize: 14,
            color: undefined,
            lineHeight: 14,
            padding: [0, 0, 20, 0]
          },
          valueLeft: {
            fontSize: 14,
            color: undefined,
            lineHeight: 14,
            fontWeight: 'bold'
          }
        }
      },
      data: undefined
    },
    {
      // 实际数据 + 右侧数值
      name: '',
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      itemStyle: {
        borderRadius: [0, 4, 4, 0],
        color: undefined
      },
      emphasis: {
        disabled: true
      },
      label: {
        show: false
      },
      data: undefined
    },
    {
      // 右侧底色
      name: 'backgroundRight',
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      barWidth: 8,
      barGap: '-100%',
      itemStyle: {
        color: undefined,
        borderRadius: [0, 4, 4, 0]
      },
      emphasis: {
        disabled: true
      },
      label: {
        show: true,
        offset: [0, 0],
        position: 'insideBottomRight',
        formatter: undefined,
        rich: {
          nameRight: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            padding: [0, 0, 20, 0],
            align: 'right'
          },
          valueRight: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            align: 'right',
            fontWeight: 'bold'
          }
        }
      },
      data: undefined
    }
  ]
}

export { PROCESSBARTYPE, CHARTTYPENAME, BASICUNIT, BASICSERIES, DOUBLEBASICOPTION, BASICDATASERIES, BASICBARWIDTH }
