export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'line-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/base.vue']
    },
    {
      'demoId': 'line-demo2',
      'name': { 'zh-CN': '曲线图', 'en-US': 'Curve graph' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo2.vue']
    },
    {
      'demoId': 'line-demo3',
      'name': { 'zh-CN': '阶梯线图', 'en-US': 'ladder diagram' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo3.vue']
    },
    {
      'demoId': 'line-demo4',
      'name': { 'zh-CN': '数据不连续', 'en-US': 'The data is not continuous.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo4.vue']
    },
    {
      'demoId': 'line-demo5',
      'name': { 'zh-CN': 'x轴文本旋转', 'en-US': 'X-axis text rotation' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo5.vue']
    },
    {
      'demoId': 'line-demo6',
      'name': { 'zh-CN': 'y轴最大最小值和数值间距', 'en-US': 'Maximum, minumum, and interval of values on the y axis' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo6.vue']
    },
    {
      'demoId': 'line-demo7',
      'name': { 'zh-CN': '阈值线', 'en-US': 'Threshold Line' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo7.vue']
    },
    {
      'demoId': 'line-demo8',
      'name': { 'zh-CN': '区域缩放轴', 'en-US': 'Region Zoom Axis' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo8.vue']
    },
    {
      'demoId': 'line-demo9',
      'name': { 'zh-CN': '折线面积图', 'en-US': 'Line area chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['line/demo9.vue']
    }
  ],
  apis: [{ 'name': 'chart-line', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  area: boolean // 是否展示为面积图，默认为 false 
  axisSite: object // 指标所在的轴，默认不在 right 轴的指标都在 left 轴
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: array // 维度，默认 columns 第一项为维度
  labelMap: object // 设置指标的别名，同时作用于提示框和图例
  legendName: object // 设置图表上方图例的别名
  max: array // 左右坐标轴最大值
  metrics: array // 指标，默认 columns 第二项起为指标
  min: array // 左右坐标轴最小值
  scale: array // 是否是脱离0值比例，默认为[ false , false ]，表示左右两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
  stack: object // 堆叠选项
  xAxisType: string // 横轴的数据类型，可选值: category , value , time , log 
  yAxisName: array // 左右坐标轴标题
  yAxisType: array // 左右坐标轴数据类型，可选值: KMB , normal , percent
}

> 备注 1. axisSite 可以设置 left 和 right，例如示例所示 axisSite: { right: ['占比'] } 即将占比的数据置于右轴上。

> 备注 2. stack 用于将两数据堆叠起来，例如实例中所示stack: { '销售额': ['成本', '利润'] } 即将'成本', '利润'相应的数据堆叠在一起。

> 备注 3. min 和 max 的值可以直接设置为数字，例如：[100, 300]；也可以设置为['dataMin', 'dataMin'], ['dataMax', 'dataMax']，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。
`
    }
  ]
}
