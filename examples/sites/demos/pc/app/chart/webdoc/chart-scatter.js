export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'scatter-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['scatter/base.vue']
    },
    {
      'demoId': 'scatter-demo2',
      'name': {
        'zh-CN': '双维度多指标散点图示例',
        'en-US': 'Example of a two-dimensional multi-indicator scatter chart'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo2.vue']
    },
    {
      'demoId': 'scatter-demo3',
      'name': { 'zh-CN': '指标维度配置', 'en-US': 'KQI/KPI Dimension Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo3.vue']
    },
    {
      'demoId': 'scatter-demo4',
      'name': { 'zh-CN': '数据类型配置', 'en-US': 'Data Type Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo4.vue']
    },
    {
      'demoId': 'scatter-demo5',
      'name': { 'zh-CN': '属性名配置', 'en-US': 'Attribute Name Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo5.vue']
    },
    {
      'demoId': 'scatter-demo6',
      'name': { 'zh-CN': '缩放配置', 'en-US': 'Zooming Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo6.vue']
    },
    {
      'demoId': 'scatter-demo7',
      'name': { 'zh-CN': '散点样式配置', 'en-US': 'Scatter Style Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo7.vue']
    },
    {
      'demoId': 'scatter-demo8',
      'name': {
        'zh-CN': '散点出现覆盖时, 提示框可以改成通过坐标轴触发',
        'en-US': 'When the scatter is overwritten, the dialog box can be triggered by the coordinate axis.'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo8.vue']
    }
  ],
  apis: [{ 'name': 'chart-scatter', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  axisVisible: boolean // 是否显示坐标轴
  cursor: string // 鼠标悬浮时在图形元素上时鼠标的样式
  dataType: object // 数据类型
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns[0]
  labelMap: object // 设置指标的别名
  legendName: object // 设置图表上方图例的别名
  max: number //  y 轴最大值
  metrics: array // 指标，默认[columns[0], columns[1]]
  min: number //  y 轴最小值
  scale: boolean // 是否是脱离0值比例
  symbol: string // 标记的图形
  symbolOffset: array // 标记相对于原本位置的偏移
  symbolRotate: number // 标记的旋转角度
  symbolSize: number | array | () => void // 标记的大小
  symbolSizeMax: number // 气泡最大值，默认为50
  tooltipTrigger: string // 提示框的触发方式，可选值: item , axis 
  xAxisName: string //  x 轴标题
  xAxisType: string //  x 轴类型，可选值: category , value , time , log 
  yAxisName: string //  y 轴标题
}
`
    }
  ]
}
