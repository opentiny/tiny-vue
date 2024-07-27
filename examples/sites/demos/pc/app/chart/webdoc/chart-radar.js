export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'radar-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radar/base.vue']
    },
    {
      'demoId': 'radar-demo2',
      'name': { 'zh-CN': '多组数据', 'en-US': 'Multiple groups of data' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radar/demo2.vue']
    },
    {
      'demoId': 'radar-demo3',
      'name': { 'zh-CN': '自定义配色', 'en-US': 'Custom Coloring' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radar/demo3.vue']
    }
  ],
  apis: [{ 'name': 'chart-radar', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  areaStyle: object // 区域填充样式，
  dataType: object // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  itemStyle: object // 折线拐点标志的样式，
  label: object // 图形上的文本标签，
  lineStyle: object // 线条样式，
  metrics: array // 指标，默认 columns 第二项起为指标
}

> 备注：dataType 中直接设置对应维度的数据类型，例如示例的{ '占比': 'percent' }，即将占比数据设置为百分比类型
`
    }
  ]
}
