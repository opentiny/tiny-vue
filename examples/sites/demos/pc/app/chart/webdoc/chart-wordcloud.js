export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'wordcloud-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['wordcloud/base.vue']
    },
    {
      'demoId': 'wordcloud-demo2',
      'name': { 'zh-CN': '配置文字大小和倾斜度', 'en-US': 'Configure Text Size and Tilt' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['wordcloud/demo2.vue']
    },
    {
      'demoId': 'wordcloud-demo3',
      'name': { 'zh-CN': '配置词云形状', 'en-US': 'Configure word cloud shapes' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['wordcloud/demo3.vue']
    },
    {
      'demoId': 'wordcloud-demo4',
      'name': { 'zh-CN': '自定义文字颜色', 'en-US': 'Custom Text Color' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['wordcloud/demo4.vue']
    }
  ],
  apis: [{ 'name': 'chart-wordcloud', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  color: array[string] | string | () => void // 词云图字体颜色，默认为 "rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"
  dimension: string // 维度，默认 columns[0]
  metrics: string // 指标，默认 columns[1]
  sizeMax: number // 最大字体大小，默认为60
  sizeMin: number // 最小字体大小，默认为12
}
`
    }
  ]
}
