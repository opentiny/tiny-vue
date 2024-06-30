export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'funnel-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/base.vue']
    },
    {
      'demoId': 'funnel-demo2',
      'name': { 'zh-CN': '金字塔漏斗图', 'en-US': 'Pyramid Funnel Chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo2.vue']
    },
    {
      'demoId': 'funnel-demo3',
      'name': {
        'zh-CN': '自定义映射宽度',
        'en-US': 'Custom Map Width'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo3.vue']
    },
    {
      'demoId': 'funnel-demo4',
      'name': { 'zh-CN': '自定义大小和位置', 'en-US': 'Custom size and position' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo4.vue']
    },
    {
      'demoId': 'funnel-demo5',
      'name': { 'zh-CN': '自定义颜色', 'en-US': 'Custom Colors' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo5.vue']
    },
    {
      'demoId': 'funnel-demo6',
      'name': { 'zh-CN': '自定义legend', 'en-US': 'Customized Legend' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo6.vue']
    },
    {
      'demoId': 'funnel-demo7',
      'name': { 'zh-CN': '自定义tooltip', 'en-US': 'Customized tooltip' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo7.vue']
    },
    {
      'demoId': 'funnel-demo7',
      'name': { 'zh-CN': '自定义tooltip', 'en-US': 'Customized tooltip' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo7.vue']
    },
    {
      'demoId': 'funnel-demo7',
      'name': { 'zh-CN': '自定义tooltip', 'en-US': 'Customized tooltip' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-funnel', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  ascending: boolean // 是否显示为金字塔，默认为 false 
  dataType: string // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  filterZero: boolean // 是否过滤指标为0的数据，默认为 false 
  itemStyle: object // 设置图形样式
  label: object // 设置文本标签样式
  labelLine: object // 设置标签的视觉引导线样式
  metrics: string // 指标，默认 columns 第二项为指标
  sequence: array // 数据显示顺序，默认按照数据大小顺序
  useDefaultOrder: boolean // 是否自动按照数值大小排序，默认为 false
}
`
    }
  ]
}
