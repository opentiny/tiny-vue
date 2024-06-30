export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'boxplot-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['boxplot/base.vue']
    },
    {
      'demoId': 'boxplot-multiple',
      'name': { 'zh-CN': '横向箱型图', 'en-US': 'horizontal box plot' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['boxplot/multiple.vue']
    },
    {
      'demoId': 'boxplot-vertical',
      'name': { 'zh-CN': '多系列箱型图', 'en-US': 'multi-series box plot' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['boxplot/vertical.vue']
    }
  ],
  apis: [{ 'name': 'chart-boxplot', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  axisSite: object // 指标所在的轴，默认不在 top 轴的指标都在 bottom 轴
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  itemStyle: object // 图形样式
  label: object // 设置图形上的文本标签
  labelMap: object // 设置指标的别名，同时作用于提示框和图例
  legendName: object // 设置图表上方图例的别名
  max: array // 上下坐标轴最大值
  metrics: array // 指标，默认 columns 为指标
  min: array // 上下坐标轴最小值
  scale: array // 是否是脱离0值比例，默认为[ false , false ]，表示上下两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
  xAxisName: array // 上下坐标轴标题
  xAxisType: array // 上下坐标轴数据类型，可选值: category , value 
  yAxisType: string // 纵轴的类型，可选值' category '，' value '，默认为' category '
}
`
    }
  ]
}
