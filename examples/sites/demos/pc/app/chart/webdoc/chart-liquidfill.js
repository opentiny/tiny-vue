export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'liquidfill-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['liquidfill/base.vue']
    },
    {
      'demoId': 'liquidfill-demo2',
      'name': { 'zh-CN': '水球图分层', 'en-US': 'Layered water balloon chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo2.vue']
    },
    {
      'demoId': 'liquidfill-demo3',
      'name': { 'zh-CN': '设置多个水球图', 'en-US': 'Set multiple water balloons' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo3.vue']
    },
    {
      'demoId': 'liquidfill-demo4',
      'name': { 'zh-CN': '设置水球图的形状', 'en-US': 'Set the shape of the water balloon chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo4.vue']
    },
    {
      'demoId': 'liquidfill-demo5',
      'name': {
        'zh-CN': '水球图文字标签及样式设置',
        'en-US': 'Set the text label and style of the water balloon diagram'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-liquidfill', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: string // 数据类型，默认为 percent ,也可设置为 normal 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns[0]
  metrics: string // 指标，默认 columns[1]
  seriesMap: ISeriesMap | array[ISeriesMap] // 附加到 series 中的设置，默认为{}，可以设置单个水球图，也可以一次设置多个。数组形式配置见“多个水球图”示例，对象形式配置见其他示例。
  wave: array[number] | array[array[number]] // 设置水球图分层，默认为[],数组中的值不大于 row 中对应的维度值，且需要由大到小排列。可设置为[0.3,0.2,0.1]的形式，表示每个水球图都显示4层，且最下面三层的值分别为0.1，0.2，0.3；也可设置为[[0.2,0.1],[0.1],[]]的形式，当有多个水球图时， wave 中的每一项对应一个水球图的分层设置，如果 wave.length < rows.length ,则剩余的水球图的分层设置以 wave 数组中最后一项为准。比如 rows =[{ val:0.1},{ val:0.2},{ val:0.3},{ val:0.4}],而 wave =[[0.2,0.1],[0.2]]，此时 rows 中后三项的分层设置均为[0.2]
}
`
    },
    {
      name: 'ISeriesMap',
      type: 'interface',
      code: `
interface ISeriesMap {
  amplitude: string // 水波的起伏程度，用百分数表示。数值越大，起伏程度越大，如’10%’
  animationDuration: number // 水波初始动画所需要的时间，水波初始动画所需要的时间
  animationDurationUpdate: number // 数据变动时水波动画变化所需要的时间，数据变动时水波动画变化所需要的时间
  animationEasing: string // 水波初始的动画的速度曲线，水波初始的动画的速度曲线
  animationEasingUpdate: string // 数据变动时水波动画的速度曲线，数据变动时水波动画的速度曲线
  backgroundStyle: IBackgroundStyle // 水球图的背景颜色，水球图的背景颜色
  center: array[string] // 水球图的位置，设置时以百分数表示，数组中第一项代表横坐标，相对于容器的 width 的百分比，第二项代表纵坐标，相对于容器 heigght 的百分比。如[’50%’,’50%’]表示居中
  color: array[string] // 颜色， data 中第一个数据对应 color 中第一个颜色，以此类推。如果 color.length 小于 data.length , data 中数据项的颜色会循环展示。在这里， color 设置的是 row 中 metrics 和 wave 的值对应数据波浪的颜色。
  direction: string // 水波的滚动方向，整体设置水波的滚动方向，可选’ left ’或’ right ’
  emphasis: IEmphasis // 鼠标悬浮时波浪的样式，鼠标悬浮时波浪的样式
  itemStyle: IItemStyle // 水球图波浪的样式，水球图波浪的样式
  label: ILabel // 图形上的文本标签，图形上的文本标签
  outline: IOutline // 水球图的外边框设置，水球图的外边框设置
  period: number | function // 水波滚动的速度，表示滚动一个水波需要花费的时间，以毫秒为单位。可以直接设置数字，也可以设置为 function (value, index)的形式
  radius: string // 水球图的半径，单个水球图的半径，相对于容器元素中较短边( width 和 height )的长度，以百分数表示,如’50%’
  shape: string // 水球图的形状，水球图的形状，可选值有’ circle ’,‘ rect ’,‘ roundRect ’,‘ triangle ’,‘ diamond ’,‘ pin ’,‘ arrow ’，也可以通过 svg 自定义’ path ://\\*'
  waveAnimation: boolean // 水波是否滚动，为 true 时水波滚动，反之不滚动。默认为 true 
  waveLength: string // 水波的长度，相对于水球的直径。当为’50%’时，水球图中一条数据上会出现两个水波；为33%时，会出现三个水波。以此类推。
}
`
    },
    {
      name: 'IOutline',
      type: 'interface',
      code: `
interface IOutline {
  borderDistance: number // ，水球图外边框和水球图核心内容的距离，类似于元素的内边距
  itemStyle: object // 水球图外边框的样式，主要配置项有 color : string (边框和核心内容之间的背景颜色，也就是 borderDistance 那部分的背景颜色), borderColor : string (外边框的颜色)， borderWidth : number (外边框的宽度)， shadowBlur : number (外边阴影的模糊距离)， shadowColor: string (边框阴影的颜色)
  show: boolean // 是否显示
}
`
    },
    {
      name: 'IBackgroundStyle',
      type: 'interface',
      code: `
interface IBackgroundStyle {
  borderColor: string // 背景边框的颜色
  borderWidth: number // 背景的边框
  color: string // 水球图的背景颜色
}
`
    },
    {
      name: 'IItemStyle',
      type: 'interface',
      code: `
interface IItemStyle {
  opacity: number // 波浪的透明度
  shadowBlur: number // 波浪阴影的模糊距离
  shadowColor: string // 波浪阴影的颜色
}
`
    },
    {
      name: 'IEmphasis',
      type: 'interface',
      code: `
interface IEmphasis {
  itemStyle: object // 鼠标悬浮时波浪的样式， opacity: number (鼠标悬浮时波浪的透明度)
}
`
    },
    {
      name: 'ILabel',
      type: 'interface',
      code: `
interface ILabel {
  align: string // 文本的位置，可选值有' left ',' center ',' right '
  baseline: string // 文本垂直方向上对齐方向，可选值有' top ',' middle ',' bottom '
  color: string // 文本的颜色
  fontSize: number // 字号
  fontWeight: string // 文本的字重
  formatter: () => void // 自定义文字标签内容
  insideColor: string // 被波浪覆盖部分的文本的颜色
  show: boolean // 是否显示，默认显示
  position: string | array[string] // 文本的位置，有 inside , left , right , top , bottom 可选，也可设置为[’10%’,’20%’]形式表示水平和垂直方向的位置
}
`
    }
  ]
}
