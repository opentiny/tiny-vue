export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'waterfall-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['waterfall/base.vue']
    },
    {
      'demoId': 'waterfall-demo2',
      'name': { 'zh-CN': '横向形态', 'en-US': 'transverse form' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['waterfall/demo2.vue']
    },
    {
      'demoId': 'waterfall-demo3',
      'name': { 'zh-CN': '多组数据', 'en-US': 'Multiple groups of data' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['waterfall/demo3.vue']
    },
    {
      'demoId': 'waterfall-demo4',
      'name': { 'zh-CN': '显示数值', 'en-US': 'Displaying Values' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['waterfall/demo4.vue']
    }
  ],
  apis: [{ 'name': 'chart-waterfall', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: string // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  metrics: string // 指标，默认 columns 第二项为指标
  remainName: string // 剩余的显示文案，默认显示其他
  totalName: string // 总量的显示文案，默认显示总计
  totalNum: number // 总量，默认瀑布图总量为所有数据的和
}
`
    }
  ]
}
