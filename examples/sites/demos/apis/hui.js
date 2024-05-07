export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart',
      type: 'component',
      props: [
        {
          name: 'options',
          type: 'object',
          defaultValue: '--',
          desc: {
            'zh-CN': '图表参数',
            'en-US': 'Whether to disable container detection during resize'
          },
          mode: ['pc'],
          pcDemo: 'chart/question#question-base'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'options',
      type: 'interface',
      code: `
interface options {
  theme: string // 主题
  color: array | string // 颜色
  padding: array // 图表内边距值
  tipHtml: function // 悬浮提示框内容配置
  event: object // 图表事件
  data: array // 图表数据
  name: string // 图表名称(必填)
  unit: string // 进度图右侧文本单位
  barWidth: number // 进度图柱形宽度
  minWidth: string // 进度图单项数据的最小宽度
  calibrationValue: number // 进度图标定值
  label: object // 堆叠进度图图表图元文本样式
  state: object // 根据状态设置颜色
  title: object // 进度图图表标题样式
  text: object // 进度图图表右侧文本样式
}`
    }
  ]
}
