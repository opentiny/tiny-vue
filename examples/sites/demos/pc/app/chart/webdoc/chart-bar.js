export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'bar-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['bar/base.vue']
    },
    {
      'demoId': 'bar-demo2',
      'name': { 'zh-CN': '指定指标维度', 'en-US': 'Specify Indicator Dimension' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo2.vue']
    },
    {
      'demoId': 'bar-demo3',
      'name': { 'zh-CN': '排序条形图', 'en-US': 'Sort Bar' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo3.vue']
    },
    {
      'demoId': 'bar-demo4',
      'name': { 'zh-CN': '条形轴配置双 y 轴', 'en-US': 'The bar axis is configured with two y-axises.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo4.vue']
    },
    {
      'demoId': 'bar-demo5',
      'name': { 'zh-CN': '设置 legend 别名', 'en-US': 'Set legend alias' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo5.vue']
    },
    {
      'demoId': 'bar-demo6',
      'name': { 'zh-CN': '堆叠条形图', 'en-US': 'Stack Bar' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo6.vue']
    },
    {
      'demoId': 'bar-demo7',
      'name': { 'zh-CN': '设置纵轴为连续的数值轴', 'en-US': 'Set the vertical axis to a continuous value axis.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-bar', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  axisSite: object // 指标所在的轴，默认不在 top 轴的指标都在 bottom 轴
  dataOrder: boolean | object // 设置数据排序方式，默认为 false 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: array // 维度，默认 columns 第一项为维度
  itemStyle: object // 图形样式，
  label: object // 设置图形上的文本标签，
  labelMap: object // 设置指标的别名，同时作用于提示框和图例
  legendName: object // 设置图表上方图例的别名
  max: array // 上下坐标轴最大值
  metrics: array // 指标，默认 columns 第二项起为指标
  min: array // 上下坐标轴最小值
  opacity: number // 透明度
  scale: array // 是否是脱离0值比例，默认为[ false , false ]，表示上下两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
  stack: object // 堆叠选项
  xAxisName: array // 上下坐标轴标题
  xAxisType: array // 上下坐标轴数据类型，可选值: KMB , normal , percent 
  yAxisType: string // 纵轴的类型，可选值' category '，' value '，默认为' category '
}

> 备注 1. axisSite 可以设置 top 和 bottom，例如示例所示 axisSite: { top: ['占比'] } 即将占比的数据置于上轴上。

> 备注 2. stack 用于将两数据堆叠起来，例如实例中所示stack: { '销售额': ['销售额-1季度', '销售额-2季度'] } 即将'销售额-1 季度', '销售额-2 季度'相应的数据堆叠在一起。

> 备注 3. dataOrder 用于设置数据的排序方式，用于更加清晰的展示数据的升降。例如： { label: '成本', order: 'asc } 表示数据按照成本指标升序展示，降序为desc。

> 备注 4. min 和 max 的值可以直接设置为数字，例如：[100, 300]；也可以设置为['dataMin', 'dataMin'], ['dataMax', 'dataMax']，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注 5. 为了优化连续的数值型横轴显示多指标的时候样式，在此情况下默认设置 opacity 为 0.5。
`
    }
  ]
}
