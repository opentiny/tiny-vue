export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'sankey-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['sankeyChart.jsx']
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
