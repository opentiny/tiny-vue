export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'candle-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['candle/base.vue']
    },
    {
      'demoId': 'candle-demo2',
      'name': { 'zh-CN': '使用简化的数据格式', 'en-US': 'Use simplified data format' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo2.vue']
    },
    {
      'demoId': 'candle-demo3',
      'name': { 'zh-CN': '设置数据格式', 'en-US': 'Set the data format' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo3.vue']
    },
    {
      'demoId': 'candle-demo4',
      'name': { 'zh-CN': '显示 MA, VOL', 'en-US': 'Display MA, VOL' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo4.vue']
    },
    {
      'demoId': 'candle-demo5',
      'name': { 'zh-CN': '修改指标名和图例文字', 'en-US': 'Modify the KQI/KPI Name and Legend Text' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo5.vue']
    },
    {
      'demoId': 'candle-demo6',
      'name': { 'zh-CN': '修改 MA 显示周期', 'en-US': 'Modify the MA display period' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo6.vue']
    },
    {
      'demoId': 'candle-demo7',
      'name': { 'zh-CN': '设置 dataRoom 控件', 'en-US': 'Set the dataRoom control' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-candle', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  MA: array // 移动平均线指标周期，默认[5,10,20,30]
  dataType: string // 数据展示格式，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认为 columns[0]
  downColor: string // 下降颜色，默认为#ec0000
  end: number //  dataZoom 控件的结束位置，默认为100，即末尾位置
  itemStyle: object // 图形样式
  labelMap: object // 设置指标的别名
  legendName: object // 设置图表上方图例的别名
  metrics: array // 指标，默认为[columns[1] ~ columns[5]]
  showDataZoom: boolean // 是否展示 dataZoom 控件，默认为 false 
  showMA: boolean // 是否展示移动平均线指标，默认为 false 
  showVol: boolean // 是否展示成交量，默认为 false 
  start: number //  dataZoom 控件的起始位置，默认为50，即中间位置
  upColor: string // 上升颜色，默认为 #00da3c
}
`
    }
  ]
}
