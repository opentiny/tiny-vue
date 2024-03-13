export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'funnel-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['funnelChart.jsx']
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
