export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'ring-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/base.vue']
    },
    {
      'demoId': 'ring-demo2',
      'name': { 'zh-CN': '双重圆环图', 'en-US': 'double donut chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/demo2.vue']
    },
    {
      'demoId': 'ring-demo3',
      'name': { 'zh-CN': '多重圆环图', 'en-US': 'multiple donut chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/demo3.vue']
    },
    {
      'demoId': 'ring-demo4',
      'name': { 'zh-CN': '数据和为0时不显示扇区', 'en-US': 'Not show sectors when data sum is 0' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/demo4.vue']
    },
    {
      'demoId': 'ring-demo5',
      'name': { 'zh-CN': '小容器圆环图', 'en-US': 'Small container donut chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/demo5.vue']
    },
    {
      'demoId': 'ring-demo6',
      'name': { 'zh-CN': '鼠标悬浮提示框', 'en-US': 'Mouse hovering prompt box' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/demo6.vue']
    },
    {
      'demoId': 'ring-ring-title',
      'name': { 'zh-CN': '中心文本配置', 'en-US': 'Central Text Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['ring/ring-title.vue']
    }
  ],
  apis: [{ 'name': 'chart-ring', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: string // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  hoverAnimation: boolean // 是否开启 hover 在扇区上的放大动画效果，默认值为 true 
  itemStyle: object // 图形样式，
  label: object // 环图图形上的文本标签，
  labelLine: object // 标签的视觉引导线样式，
  legendLimit: number //  legend 显示数量限制， legend 数量过多会导致环图样式错误，限制 legend 最大值并且当超过此值时，隐藏 legend 可以解决这个问题
  limitShowNum: number // 设置超过此数字时使用‘其他’代替，此时数据会按照由大到小顺序显示
  metrics: string // 指标，默认 columns 第二项为指标
  offsetY: number/string // 纵向偏移量，支持数值和百分比
  radius: array // 环图外半径与内半径，数组元素支持数值和百分比，如：[50,70]或['50%','70%']
  roseType: string // 显示为南丁格尔玫瑰图，默认不展示为南丁格尔玫瑰图，可设置为' radius ',' area '
  selectedMode: string // 选中模式，可选值： single , multiple ，默认为 false 
}
`
    }
  ]
}
