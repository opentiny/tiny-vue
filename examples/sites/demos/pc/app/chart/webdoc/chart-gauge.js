export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'gauge-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/base.vue']
    },
    {
      'demoId': 'gauge-demo2',
      'name': { 'zh-CN': '指针', 'en-US': 'Pointer' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo2.vue']
    },
    {
      'demoId': 'gauge-demo3',
      'name': { 'zh-CN': '多色盘', 'en-US': 'Multi-Color Palette' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo3.vue']
    },
    {
      'demoId': 'gauge-demo4',
      'name': { 'zh-CN': '自定义中心文本', 'en-US': 'Custom center text' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo4.vue']
    },
    {
      'demoId': 'gauge-demo5',
      'name': { 'zh-CN': '阈值线', 'en-US': ' Threshold Line' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo5.vue']
    },
    {
      'demoId': 'gauge-demo6',
      'name': { 'zh-CN': '渐变环色', 'en-US': 'Gridient Ring Color' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo6.vue']
    }
  ],
  apis: [{ 'name': 'chart-gauge', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataName: object // 表盘上显示的单位
  dataType: object // 数据类型
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns[0]
  labelMap: object // 设置指标的别名
  metrics: string // 指标，默认 columns[1]
  seriesMap: object // 附加到 series 中的设置
}
`
    }
  ]
}
