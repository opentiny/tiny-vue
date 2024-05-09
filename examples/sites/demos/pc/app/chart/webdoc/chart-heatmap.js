export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'heatmap-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/base.vue']
    },
    {
      'demoId': 'heatmap-demo2',
      'name': { 'zh-CN': '日历热力图', 'en-US': 'Calendar Heat Map' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/demo2.vue']
    },
    {
      'demoId': 'heatmap-demo3',
      'name': { 'zh-CN': '日历热力图自定义配色', 'en-US': 'Calendar Heat Map Custom Color' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/demo3.vue']
    }
  ],
  apis: [{ 'name': 'chart-heatmap', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  beforeRegisterMap: () => void // 地图数据注册前执行的函数，参数为地图数据，需返回地图数据
  beforeRegisterMapOnce: () => void // 地图数据注册前执行的函数(仅执行一次)，参数为地图数据，需返回地图数据
  blurSize: number // 模糊大小，默认为5
  bmap: object // 百度地图配置项，
  dataType: string // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: array // 维度，默认为 [columns[0], columns[1]]
  geo: object // 地图配置项，
  heatColor: array //  visualMap 中的最大值颜色区间
  key: string // 百度地图 access _ key ，
  mapURLProfix: string // 位置请求的 URL 前缀，默认为 https://unpkg.com/echarts@3.6.2/map/json/
  max: number //  visualMap 中的最大值，默认取指标中最大的数据
  metrics: string // 指标，默认为 columns[2]
  min: number //  visualMap 中的最小值，默认取指标中最小的数据
  pointSize: number // 点大小，默认为10
  position: string // 地图类型，默认为' china '
  positionJsonLink: string // 地图数据源
  specialAreas: object // 地图中的位置配置，将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看,
  type: string // 热力图的类型，可选值： cartesian (默认值，直角坐标系), map (地图)， bmap (百度地图)
  xAxisList: array //  x 轴数据，默认取数据中的数据中的第一维度的数据
  xAxisName: string //  x 轴名称
  yAxisList: array //  y 轴数据，默认取数据中的数据中的第二维度的数据
  yAxisName: string //  y 轴名称
}
`
    }
  ]
}
