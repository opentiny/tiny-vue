export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'wordcloud-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['wordcloud.jsx']
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
