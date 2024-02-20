export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'progress',
      type: 'component',
      props: [
        {
          name: 'color',
          typeAnchorName: 'IColorItem',
          type: 'string | IColorItem[] | (percentage: string) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '进度条背景色（会覆盖 status 状态颜色）',
            'en-US': 'Background color of the progress bar (overwrites the status color)'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-color',
          mobileDemo: 'custom-color',
          mfDemo: ''
        },
        {
          name: 'format',
          type: '() => string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义进度条的文字',
            'en-US': 'Customize the text of the progress bar'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'format-text',
          mfDemo: ''
        },
        {
          name: 'info',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '环形进度条底部描述文字',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'percentage',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '百分比（必填）；该属性的可选值为 0-100',
            'en-US': 'Percentage (mandatory) The optional values for this property are 0 - 100'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'dynamic-progress',
          mfDemo: ''
        },
        {
          name: 'show-text',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示进度条文字内容',
            'en-US': 'Display progress bar text'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'format-text',
          mobileDemo: 'text-inside-or-no-text',
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '进度条尺寸',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'status',
          type: "'success' | 'exception' | 'warning'",
          defaultValue: '',
          desc: {
            'zh-CN': '进度条当前状态',
            'en-US': 'Current status of the progress bar'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'progress-status',
          mobileDemo: 'progress-status',
          mfDemo: ''
        },
        {
          name: 'stroke-width',
          type: 'number',
          defaultValue: '6',
          desc: {
            'zh-CN': 'line 类型进度条的宽度，单位 px',
            'en-US': 'The width of the progress bar of type line, in px'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'progress-width',
          mfDemo: ''
        },
        {
          name: 'text-inside',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '进度条显示文字内置在进度条内（只在 type=line 时可用）',
            'en-US':
              'The text displayed on the progress bar is embedded in the progress bar. This parameter is available only when type is set to line'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'format-text',
          mobileDemo: 'format-text',
          mfDemo: ''
        },
        {
          name: 'type',
          type: "'line' | 'circle' | 'dashboard'",
          defaultValue: "'line'",
          desc: {
            'zh-CN': '进度条类型',
            'en-US': 'Progress bar type'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'progress-type-circle',
          mobileDemo: 'progress-type',
          mfDemo: ''
        },
        {
          name: 'width',
          type: 'number',
          defaultValue: '126',
          desc: {
            'zh-CN': '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
            'en-US': 'Circular progress bar canvas width (available only when type is circle or dashboard)'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'progress-type-circle',
          mobileDemo: 'width',
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IColorItem',
      type: 'type',
      code: `
interface IColorItem {
  color: string
  percentage: number
}
`
    }
  ]
}
