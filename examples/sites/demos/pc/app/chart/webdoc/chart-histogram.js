export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'histogram-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['histogram/base.vue']
    },
    {
      'demoId': 'histogram-demo2',
      'name': { 'zh-CN': '设置显示的指标维度', 'en-US': 'Set the KQI/KPI dimension to be displayed.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo2.vue']
    },
    {
      'demoId': 'histogram-demo3',
      'name': { 'zh-CN': '设置双 y 轴', 'en-US': 'Set the two y axes' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo3.vue']
    },
    {
      'demoId': 'histogram-demo4',
      'name': { 'zh-CN': '柱状图+折线图', 'en-US': 'Bar chart + Line chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo4.vue']
    },
    {
      'demoId': 'histogram-demo5',
      'name': { 'zh-CN': '堆叠柱状图', 'en-US': 'Stacked Bar Chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo5.vue']
    },
    {
      'demoId': 'histogram-demo6',
      'name': { 'zh-CN': '默认显示柱状图数据', 'en-US': 'By default, bar chart data is displayed.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo6.vue']
    },
    {
      'demoId': 'histogram-demo7',
      'name': { 'zh-CN': '修改别名', 'en-US': 'Modify Alias' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo7.vue']
    },
    {
      'demoId': 'histogram-demo8',
      'name': { 'zh-CN': '设置横轴为连续的数值轴', 'en-US': 'Set the horizontal axis to a continuous value axis' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo8.vue']
    }
  ],
  apis: [{ 'name': 'chart-histogram', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  axisSite: object // 指标所在的轴，默认不在 right 轴的指标都在 left 轴
  dataOrder: boolean | object // 设置数据排序方式，默认为 false 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: array // 维度，默认 columns 第一项为维度
  itemStyle: object // 图形样式，
  label: object // 设置图形上的文本标签，
  labelMap: object // 设置指标的别名，同时作用于提示框和图例
  legendName: object // 设置图表上方图例的别名
  max: array // 左右坐标轴最大值
  metrics: array // 指标，默认 columns 第二项起为指标
  min: array // 左右坐标轴最小值
  opacity: number // 透明度
  scale: array // 是否是脱离0值比例，默认为[ false , false ]，表示左右两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
  showLine: array // 展示为折线图的指标
  stack: object // 堆叠选项
  xAxisType: string // 横轴的类型，可选值' category '，' value '，默认为' category '
  yAxisName: array // 左右坐标轴标题
  yAxisType: array // 左右坐标轴数据类型，可选值: KMB , normal , percent 
}

> 备注 1. axisSite 可以设置 left 和 right，例如示例所示 axisSite: { right: ['占比'] } 即将占比的数据置于右轴上。

> 备注 2. stack 用于将两数据堆叠起来，例如实例中所示stack: { '销售额': ['销售额-1季度', '销售额-2季度'] } 即将'销售额-1 季度', '销售额-2 季度'相应的数据堆叠在一起。

> 备注 3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： { label: '余额', order: 'asc } 表示数据按照余额指标升序展示，降序为desc。

> 备注 4. min 和 max 的值可以直接设置为数字，例如：[100, 300]；也可以设置为['dataMin', 'dataMin'], ['dataMax', 'dataMax']，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注 5. 有时我们需要将折线图与柱状图展示在同一个图上，利用 showLine 属性可以设置需要展示为折线图的指标，其他的指标则使用柱状图展示。

> 备注 6. 为了优化连续的数值型横轴显示多指标的时候样式，在此情况下默认设置 opacity 为 0.5。
`
    }
  ]
}
