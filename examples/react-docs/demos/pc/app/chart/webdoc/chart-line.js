export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'line-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['lineChart.jsx']
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
