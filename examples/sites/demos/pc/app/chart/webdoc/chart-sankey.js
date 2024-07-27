export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'sankey-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['sankey/base.vue']
    },
    {
      'demoId': 'sankey-demo2',
      'name': { 'zh-CN': '自定义鼠标悬浮提示框', 'en-US': 'Customizing the Mouseover Prompt Box' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['sankey/demo2.vue']
    }
  ],
  apis: [{ 'name': 'chart-sankey', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: array // 数据类型，数组的第一项为 item 的数据类型，第二项为 line 的数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为percent时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  itemStyle: object // 节点矩形的样式，
  label: object // 每个矩形节点中文本标签的样式，
  lineStyle: object // 桑基图边的样式，
  links: array // 节点间的关系数据，
  metrics: string // 指标，默认 columns 第二项为指标
}
`
    }
  ]
}
