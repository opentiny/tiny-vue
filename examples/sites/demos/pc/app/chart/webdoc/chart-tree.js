export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'tree-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/base.vue']
    },
    {
      'demoId': 'tree-demo2',
      'name': { 'zh-CN': '环状树图', 'en-US': 'Circular tree diagram' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo2.vue']
    },
    {
      'demoId': 'tree-demo3',
      'name': { 'zh-CN': '自定义图元大小', 'en-US': 'Customizing the Size of a Diagram Element' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo3.vue']
    },
    {
      'demoId': 'tree-demo4',
      'name': { 'zh-CN': '自定义方向', 'en-US': 'Custom orientation' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo4.vue']
    },
    {
      'demoId': 'tree-demo5',
      'name': { 'zh-CN': '自定义连线形状', 'en-US': 'Customized connection line shape' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-tree', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dimension: string // 维度，默认 columns 第一项为维度
  metrics: string // 指标，默认 columns 第二项为指标
  seriesMap: object // 附加到 series 中的设置
}
`
    }
  ]
}
