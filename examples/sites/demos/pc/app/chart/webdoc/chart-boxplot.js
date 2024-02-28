export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'boxplot-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>Boxplot 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。</p>\n',
        'en-US':
          '<p>Boxplot Chinese can be called box diagram, box diagram. A statistical chart used to show a set of data dispersion. It displays the maximum, minimum, median, lower quartile, and upper quartile of a set of data. </p>\n'
      },
      'codeFiles': ['boxplot/base.vue']
    },
    {
      'demoId': 'boxplot-multiple',
      'name': { 'zh-CN': '多数据显示', 'en-US': 'Multi-data display' },
      'desc': {
        'zh-CN':
          '<p><code>boxplot</code> 提供数据转化方法 <code>prepareBoxplotData</code> 将源数据转化为 <code>{ axisData: [...], boxData: [...], outliers: [...] }</code> 的格式化数据。</p>\n',
        'en-US':
          '<p><code>boxplot</code> provides the data conversion method <code>prepareBoxplotData</code> to convert source data into <code>{axisData: [...], boxData: [...], outliers: [...]}</code> formatted data. </p>\n'
      },
      'codeFiles': ['boxplot/multiple.vue']
    },
    {
      'demoId': 'boxplot-vertical',
      'name': { 'zh-CN': '垂直显示', 'en-US': 'vertical display' },
      'desc': {
        'zh-CN': '<p>通过 <code>extend</code> 属性实现 <code>echarts</code> 方式的配置。</p>\n',
        'en-US': '<p>The <code>extend</code> attribute is used to configure the <code>echarts</code> mode. </p>\n'
      },
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
