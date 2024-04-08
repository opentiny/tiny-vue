export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'tag',
      type: 'component',
      props: [
        {
          name: 'before-delete',
          type: '(close: () => void) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '删除前回调函数',
            'en-US': 'Delete callback function before deletion'
          },
          mode: ['pc'],
          pcDemo: 'delete'
        },
        {
          name: 'closable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可关闭',
            'en-US': 'Can be disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'delete',
          mfDemo: ''
        },
        {
          name: 'color',
          type: 'IColor | string[]',
          typeAnchorName: 'IColor',
          defaultValue: '',
          desc: {
            'zh-CN':
              '控制标签文本色和背景色，可使用 IColor 类型中的预设值，也可自定义值，若自定义值为字符串则只能设置标签的背景色；若为数组则第一个值设置背景色，第二个设置文本色；【注：3.15.0新增支持数组类型】',
            'en-US':
              'Control the text color and background color of the label. You can use the preset value in the IColor type or customize the value. If the customized value is a character string, you can only set the background color of the label. If it is an array, the first value sets the background color and the second sets the text color. [Note: The array type is supported in 3.15.0]'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'color3',
          mobileDemo: 'different-color',
          mfDemo: 'color3'
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '标签class',
            'en-US': 'Tag class'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Whether to disable'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'effect',
          typeAnchorName: 'IEffect',
          type: 'IEffect',
          defaultValue: "'light'",
          desc: {
            'zh-CN': '主题',
            'en-US': 'Subject'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'effect',
          mfDemo: ''
        },
        {
          name: 'hit',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否有边框',
            'en-US': 'Whether there is a border stroke'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'color3',
          mfDemo: ''
        },
        {
          name: 'max-width',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '最大宽度',
            'en-US': 'max width'
          },
          mode: ['mobile'],
          mobileDemo: 'max-width'
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '小尺寸',
            'en-US': 'mini'
          },
          mode: ['mobile'],
          mobileDemo: 'mini'
        },
        {
          name: 'operable',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否可操作',
            'en-US': 'Operable or Not'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'selectable',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否可选择',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'size',
          typeAnchorName: 'ISize',
          type: 'ISize',
          defaultValue: '',
          desc: {
            'zh-CN': '尺寸',
            'en-US': 'Size'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '文字',
            'en-US': 'Text'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'theme',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '彩色标签，该属性的可选值为 pink、purple、cyan',
            'en-US': 'Color label. The value can be pink, purple, or cyan.'
          },
          mode: ['mobile'],
          mfDemo: 'different-color'
        },
        {
          name: 'type',
          typeAnchorName: 'IType',
          type: 'IType',
          defaultValue: '',
          desc: {
            'zh-CN': '显示类型',
            'en-US': 'Display type'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'effect',
          mfDemo: 'effect'
        },
        {
          name: 'value',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置式标签，自定义标签内容【3.9.1新增】',
            'en-US': 'Configurable labels, custom label content [Added in 3.9.1]'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'content',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '(event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击标签时触发的事件',
            'en-US': 'Event triggered when clicking on Tag'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-event-click',
          mfDemo: ''
        },
        {
          name: 'close',
          type: '(event: Event)) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击关闭按钮时触发的事件',
            'en-US': 'Event triggered when the close button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'delete',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标签内容',
            'en-US': 'Label Content'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slot-default',
          mobileDemo: 'slot-default',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IColor',
      type: 'type',
      code: `
type IColor = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'brown' | 'grey' | string // 除了预设值，也可以是其他任意自定义颜色值
`
    },
    {
      name: 'IEffect',
      type: 'type',
      code: `
type IEffect = 'dark' | 'light' | 'plain'
`
    },
    {
      name: 'ISize',
      type: 'type',
      code: `
type ISize = 'medium' | 'small' | 'mini' | ''
`
    },
    {
      name: 'IType',
      type: 'type',
      code: `
type IType = 'success' | 'info' | 'warning' | 'danger'
`
    }
  ]
}
