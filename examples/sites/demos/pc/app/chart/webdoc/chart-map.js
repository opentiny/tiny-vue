export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'map-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['map/base.vue']
    }
  ],
  apis: [{ 'name': 'chart-map', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  aspectScale: number // 用于scale地图的长宽比，默认为0.75
  beforeRegisterMap: () => void // 地图数据注册前执行的函数，参数为地图数据，需返回地图数据
  beforeRegisterMapOnce: () => void // 地图数据注册前执行的函数(仅执行一次)，参数为地图数据，需返回地图数据
  boundingCoords: array // 左上角以及右下角分别所对应的经纬度，默认为 null 
  center: array // 当前视角的中心点
  dataType: object // 指标数据类型，内容为指标-指标数据类型的键值对，支持' normal ',' KMB ',' percent '
  digit: number // 设置数据类型为percent时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  itemStyle: boolean | object // 地图区域的多边形图形样式，默认为 true 
  label: boolean | object // 文本标签，默认为 true 
  mapGrid: object // 地图距离容器的边距，默认值为{ left : auto , right : auto , top : auto , bottom : auto }
  mapOrigin: object // 地图geojson
  mapURLProfix: string // 位置请求的URL前缀，默认为 https://unpkg.com/echarts@3.6.2/map/json/
  metrics: array // 指标，默认 columns 第二项为指标
  position: string // 位置，默认为' china '
  positionJsonLink: string // 地图数据源
  roam: boolean | string // 是否开启鼠标缩放和平移漫游，默认为 false ,可选值有 false , true ,' scale ',' move '
  scaleLimit: object // 滚轮缩放的极限控制，默认{ min :1, max :1}
  selectData: boolean // 是否高亮显示数据对应位置，默认为 false 
  selectedMode: boolean | string // 地图选中模式，默认为 false ,可选值有' single ',' multiple '
  specialAreas: object // 地图中的位置配置，将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看
  zoom: number // 视角的缩放比例，默认为1
}

> 备注: 属性中的 position 默认为'china',可设置的类型有'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai'等，省份的 position 如例子中所示需要在前面加'province/'
`
    }
  ]
}
