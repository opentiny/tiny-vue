export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'scatter-base',
      'name': { 'zh-CN': '数值轴', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/base.vue']
    },
    {
      'demoId': 'scatter-demo2',
      'name': {
        'zh-CN': '类目轴',
        'en-US': 'Category Axis'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo2.vue']
    },
    {
      'demoId': 'scatter-demo3',
      'name': { 'zh-CN': '自定义配色', 'en-US': 'Custom Coloring' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo3.vue']
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
